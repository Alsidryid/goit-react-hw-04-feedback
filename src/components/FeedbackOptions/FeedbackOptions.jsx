import style from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map(name => {
                return (  <button onClick={(() => onLeaveFeedback(name))} key={name} className={style.btn}>{name}</button>)})}
        </>
    )}