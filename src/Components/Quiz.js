import {useState} from "react";
import FinishedQuiz from "./FinishedQuiz";
import AnswersList from "./AnswersList";

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [result, setResult] = useState({});
    const [answerState, setAnswerState] = useState(null);
    const [Finished, setFinished] = useState(false);
    const [quiz, setQuiz] = useState([
        {
            id: 1,
            question: "in which tag we must type the text ?",
            rightAnswerId: 1,
            answers: [
                {text: "p", id: 1},
                {text: "h", id: 2},
                {text: "a", id: 3},
                {text: "li", id: 4},
            ]
        },
        {
            id: 2,
            question: "in which tag we must type the header ?",
            rightAnswerId: 2,
            answers: [
                {text: "ul", id: 1},
                {text: "h", id: 2},
                {text: "p", id: 3},
                {text: "li", id: 4},
            ]
        },
        {
            id: 3,
            question: "how to create object ?",
            rightAnswerId: 4,
            answers: [
                {text: "constructor", id: 1},
                {text: "componentWillMount", id: 2},
                {text: "componentWillUnmount", id: 3},
                {text: "new", id: 4},
            ]
        }
    ]);

    const onAnswerClick = (answerId) => {
        const question = quiz[activeQuestion];

        if (!result[question.id]) {
            if (answerId === question.rightAnswerId) {
                result[question.id] = "success";
                setAnswerState({[answerId]: "success"});
            } else {
                result[question.id] = "error";
                setAnswerState({[answerId]: "error"});
            }
        }
        const timeout = window.setTimeout(() => {
            if (isFinishedQuiz()) {
                setFinished(true);
            } else {
                setActiveQuestion(activeQuestion + 1);
                setAnswerState(null);
            }
            window.clearTimeout(timeout);
        }, 1000)
    }

    const isFinishedQuiz = () => {
        return activeQuestion + 1 === quiz.length;
    }

    const restartQuiz = () => {
        setAnswerState(null);
        setFinished(false);
        setActiveQuestion(0);
        setResult({});
    }

    return (
        <>
            {
                Finished ? <FinishedQuiz restartQuiz={restartQuiz} results={result} quiz={quiz}/> :
                    <AnswersList
                        quiz={quiz}
                        activeQuestion={activeQuestion}
                        answers={quiz[activeQuestion].answers}
                        onAnswerClick={onAnswerClick}
                        answerState={answerState}
                    />
            }
        </>
    );

}


export default Quiz;