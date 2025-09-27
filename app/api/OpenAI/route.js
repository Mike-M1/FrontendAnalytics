// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(request) {
//     const { Answer_1 } = await request.json();


    // const questions = [
    //     {Question_1: "Tell me a little bit about what you are hoping to achieve through this project. We want to identify a rough scope of work, type of space, level of finish, etc.",
    //         Answer_1: Answer_1
    //     },
    //     {Question_2: "What is causing you to decide to explore this project now? We want to identify the pain point, the driving force"},
    //     {Question_3: "Tell me a little bit more about the finished space or project, and what could you tell me about the existing home and conditions (age, existing finishes / components, site conditions, unique characteristics)? Get to second level of detail and development of project vision, refine and affirm the pain point and solution"},
    //     {Question_4: "What kind of timeline are you considering for this project? Identify any deadlines or completion dates – can be used to work backward and create urgency"},
    //     {Question_5: "Do you have an ideal budget that you are looking to invest in this project (tie to pain point, if possible)? Most will not fully share budgets and that is fine – the intention is to introduce budget conversations, and to potentially begin to set budget expectations"}
    //   ]
    
//     const client = new OpenAI({
//         apiKey: process.env.OPENAI_API_KEY,
//     });

//     const response = await client.responses.create({
//         model: "gpt-5",
//         input: `How to Think: You receive a question and an answer from the user. I need you to think about the question and really thing about the answer and I want you to answer the question: If this is true then is this true? And based on what you deduce to be true ask another question where what you deduced to be true is implied as true in the question. Also send back what you deduced to be true and why you put the question the way you did. Question 1: ${questions[0].Question_1} Answer:${questions[0].Answer_1} `,

//     });
//     return NextResponse.json({response: response.output_text});
// }