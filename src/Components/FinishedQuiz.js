import "../App.css";

const FinishedQuiz = ({restartQuiz, quiz, results}) => {

        const elements = quiz.map((el,index)=> {
            return(
                <li key={index} className="list-group-item">
                    {el.question}
                    <i className={results[el.id] === "success" ? "fa fa-check float-end" : "fa fa-times float-end"}/>
                </li>
            );
        });

        return(
            <div>
                <ul className="list-group">
                    {elements}
                </ul>
                <button className="btn btn-primary" onClick={ restartQuiz }>Restart Quiz</button>
            </div>
        );
}

export default FinishedQuiz;