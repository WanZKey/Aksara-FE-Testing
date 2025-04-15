import React from 'react';
import QuizGame from '../components/QuizGame';

const QuizPage = () => {
    return (
        <div className="container">
            <h1 className="mt-5">Fun Quiz for Kids</h1>
            <p>Test your knowledge about Indonesia's provinces with this fun quiz game!</p>
            <QuizGame />
        </div>
    );
};

export default QuizPage;