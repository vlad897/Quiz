import AnswerListItem from "./AnswerListItem";
import "../App.css";

const AnswersList = ({activeQuestion, quiz, answers, answerState, onAnswerClick}) => {

    const elements = answers.map((el, index) => {
        return (
            <AnswerListItem key={index}
                            activeQuestion={activeQuestion}
                            answerState={answerState && answerState[el.id]}
                            onAnswerClick={onAnswerClick}
                            id={el.id}
                            answer={el.text}
            />
        );
    });

    return (
        <div>
            <p className="span"> Question: {activeQuestion + 1} out of {quiz.length}</p>
            <p className="span">{quiz[activeQuestion].question}</p>
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    );
}

export default AnswersList;