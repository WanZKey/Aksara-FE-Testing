import React, { useState } from 'react';

const QuizGame = () => {
    const [questions] = useState([
        {
            question: "What is the capital of Indonesia?",
            options: ["Jakarta", "Bali", "Bandung", "Surabaya"],
            answer: "Jakarta"
        },
        {
            question: "Which island is known as the 'Island of the Gods'?",
            options: ["Java", "Bali", "Sumatra", "Kalimantan"],
            answer: "Bali"
        },
        {
            question: "What is the official language of Indonesia?",
            options: ["English", "Indonesian", "Malay", "Javanese"],
            answer: "Indonesian"
        },
        {
            question: "Which province is famous for its orangutans?",
            options: ["West Java", "Central Kalimantan", "Bali", "East Nusa Tenggara"],
            answer: "Central Kalimantan"
        }
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <div className="quiz-game">
            {quizCompleted ? (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizGame;