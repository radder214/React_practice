import PropTypes from "prop-types";
// create-react-app은 CSS 코드를 javascript object로 변환시킨다.
import styles from "./Button.module.css";

function Button({text}) { // destructuring
    return (
        <button className={styles.title}>{text}</button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button;