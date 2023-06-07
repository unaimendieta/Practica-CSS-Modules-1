import style from "./button.module.css";

const Button = ({color}) => {
    return <button className={`${style.learnMore} ${style[color]}`} >Learn More</button>
}
export default Button;