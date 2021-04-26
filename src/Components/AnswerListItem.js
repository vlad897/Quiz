import "../App.css";
const AnswerListItem = ({answerState, id, onAnswerClick, answer}) => {


    const classes = ["list-group-item"];
    classes.push(answerState);

    return(
        <li className={classes.join(" ")} onClick={()=> onAnswerClick(id)}>
            {answer}
        </li>
    );
}

export default AnswerListItem;