import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  answerQuestion,
  nextQuestion,
  prevQuestion,
  resetQuiz,
} from "../store/slices/quizSilce";
import Question from "./Question.jsx";
import Score from "./Score.jsx";

export default function Quiz() {
  const { questions, currentQuestionIndex, score, answers } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const currentQuestion = questions[currentQuestionIndex];
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: currentQuestion.id, answer }));
    setAnswered(true);
  };

  const handleNext = () => {
    if (answered || answers[currentQuestion.id]) {
      dispatch(nextQuestion());
      setAnswered(false);
    } else {
      alert("Please answer the question before proceeding.");
    }
  };

  const handlePrev = () => {
    dispatch(prevQuestion());
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    setAnswered(false);
  };

  return (
    <div className="w-full md:w-1/2 px-5">
      {currentQuestionIndex < questions.length - 1 ? (
        <div>
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion.id]}
          />
          <div className="flex flex-row justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className=" bg-blue-950 py-4 px-8 rounded-2xl hover:bg-blue-900"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className=" bg-blue-950 py-4 px-8 rounded-2xl hover:bg-blue-900"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Score score={score} onReset={handleReset} />
      )}
    </div>
  );
}
