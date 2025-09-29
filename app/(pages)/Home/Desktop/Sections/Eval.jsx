'use client';
import { useState } from 'react';

export default function DesktopEval({ isOpen, onClose }) {
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {Question_1: "Tell me a little bit about what you are hoping to achieve through this project. We want to identify a rough scope of work, type of space, level of finish, etc."
    },
    {Question_2: "What is causing you to decide to explore this project now? We want to identify the pain point, the driving force"},
    {Question_3: "Tell me a little bit more about the finished space or project, and what could you tell me about the existing home and conditions (age, existing finishes / components, site conditions, unique characteristics)? Get to second level of detail and development of project vision, refine and affirm the pain point and solution"},
    {Question_4: "What kind of timeline are you considering for this project? Identify any deadlines or completion dates – can be used to work backward and create urgency"},
    {Question_5: "Do you have an ideal budget that you are looking to invest in this project (tie to pain point, if possible)? Most will not fully share budgets and that is fine – the intention is to introduce budget conversations, and to potentially begin to set budget expectations"}
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send answer to backend for testing
      const response = await fetch('/api/OpenAI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Answer_1: answer }),
      });
      
      const data = await response.json();
      console.log('Backend response:', data);
      
      // Move to next question or close if last question
      if (currentQuestionIndex < questions.length - 1) {
        handleNextQuestion();
      } else {
        // Reset form and close on last question
        setAnswer('');
        setCurrentQuestionIndex(0);
        onClose();
      }
    } catch (error) {
      console.error('Error sending to backend:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setAnswer('');
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-fit h-fit relative overflow-hidden border border-gray-200 p-5 m-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl z-10"
        >
          ✕
        </button>
        
        {/* Form content */}
        <div className="p-5 flex flex-col">
          <div className="mb-6 text-center flex-shrink-0">
            <div className="text-xs text-gray-400 mb-3 tracking-wide uppercase font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <h1 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                {questions[currentQuestionIndex][`Question_${currentQuestionIndex + 1}`]}
              </h1>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <div className="relative">
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-6 text-base border-0 bg-gray-50 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all duration-300 placeholder-gray-400 font-light"
                placeholder="Share your thoughts..."
                rows={6}
                required
                style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'}}
              />
            </div>
            
            <div className="flex justify-between items-center flex-shrink-0 mt-6">
              {/* Left Arrow */}
              <button
                type="button"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0 || isTransitioning}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting || !answer.trim() || isTransitioning}
                className="bg-gray-900 text-white py-3 px-8 rounded-xl text-base font-light hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 tracking-wide"
                style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'}}
              >
                {isSubmitting ? 'Sending...' : currentQuestionIndex < questions.length - 1 ? 'Continue' : 'Complete'}
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1 || isTransitioning}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
