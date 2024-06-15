export default function score({ score, onReset })  {
    return (
      <div className='flex flex-col gap-5 items-center'>
        <h2 className='font-bold text-center text-2xl w-96'>Your score: {score}</h2>
        <button 
            onClick={onReset}
            className=" bg-blue-950 py-4 px-8 rounded-2xl hover:bg-blue-900"
            >Reset Quiz</button>
      </div>
    );
  }
  