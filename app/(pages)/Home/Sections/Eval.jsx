'use client';
import { useState } from 'react';

export default function Eval({ isOpen, onClose }) {
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl z-10"
        >
          ✕
        </button>
        
        {/* Form content */}
        <div className="p-12">
          <div className="mb-6 text-center">
            <div className="text-sm text-gray-500 mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <h2 className="text-3xl font-light text-gray-800">
              {questions[currentQuestionIndex][`Question_${currentQuestionIndex + 1}`]}
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-6 text-lg border-0 bg-gray-50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-400"
                placeholder="Your answer..."
                rows={6}
                required
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting || !answer.trim()}
              className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? 'Sending...' : currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
