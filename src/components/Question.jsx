import PropTypes from "prop-types";

export default function Question({ question, onAnswer, selectedAnswer }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-2xl text-center mb-10">
        {question.question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={`${
              selectedAnswer === option ? "bg-orange-400" : "bg-blue-400"
            } py-3 rounded-2xl hover:bg-blue-950`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.any,
};
