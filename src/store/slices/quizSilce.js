import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            "id": 1,
            "question": "Which team won the UEFA European Championship in 2016?",
            "options": ["Germany", "France", "Portugal", "Italy"],
            "correctAnswer": "Portugal"
        },
        {
            "id": 2,
            "question": "In which year did the first UEFA European Championship take place?",
            "options": ["1958", "1960", "1964", "1972"],
            "correctAnswer": "1960"
        },
        {
            "id": 3,
            "question": "Which country hosted Euro 2004?",
            "options": ["Portugal", "Spain", "Greece", "Italy"],
            "correctAnswer": "Portugal"
        },
        {
            "id": 4,
            "question": "Which player scored the most goals in the history of the UEFA European Championship?",
            "options": ["Cristiano Ronaldo", "Michel Platini", "Alan Shearer", "Thierry Henry"],
            "correctAnswer": "Cristiano Ronaldo"
        },
        {
            "id": 5,
            "question": "Which country won the most UEFA European Championship titles by 2020?",
            "options": ["Spain", "Germany", "France", "Italy"],
            "correctAnswer": "Germany"
        },
        {
            "id": 6,
            "question": "Which team won the UEFA European Championship in 1992 despite not qualifying for the tournament in the usual way?",
            "options": ["Netherlands", "Sweden", "Denmark", "England"],
            "correctAnswer": "Denmark"
        },
        {
            "id": 7,
            "question": "In which city was the final of Euro 2012 held?",
            "options": ["Kyiv", "Warsaw", "Berlin", "Madrid"],
            "correctAnswer": "Kyiv"
        },
        {
            "id": 8,
            "question": "Which country co-hosted Euro 2008 with Switzerland?",
            "options": ["Germany", "Austria", "Italy", "France"],
            "correctAnswer": "Austria"
        },
        {
            "id": 9,
            "question": "Who won the Golden Boot (most goals) at Euro 2016?",
            "options": ["Cristiano Ronaldo", "Antoine Griezmann", "Álvaro Morata", "Gareth Bale"],
            "correctAnswer": "Antoine Griezmann"
        },
        {
            "id": 10,
            "question": "Which country hosted the first UEFA European Championship in 1960?",
            "options": ["France", "Spain", "Belgium", "Italy"],
            "correctAnswer": "France"
        }
    ],
    currentQuestionIndex: 0,
    score: 0,
    answers: {},  
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            const question = state.questions.find(q => q.id === questionId);
            
            if (question) {
                const prevAnswer = state.answers[questionId];
                state.answers[questionId] = answer;
                
               
                if (prevAnswer === question.correctAnswer) {
                    state.score -= 1;
                }
                if (answer === question.correctAnswer) {
                    state.score += 1;
                }
            }
        },
        nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex += 1;
            }
        },
        prevQuestion: (state) => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex -= 1;
            }
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.answers = {};
        },
    }
});

export const { answerQuestion, nextQuestion, prevQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;