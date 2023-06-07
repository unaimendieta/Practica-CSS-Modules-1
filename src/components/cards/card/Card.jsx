import Button from "./button/Button";
import Info from "./info/Info";
 import style from "./card.module.css";

const Card = ({src, title, desc,color}) => {
    return (
        <>
        <div className={`${style.card} ${style[color]}`}>
            <div className={style.information}>
                <Info src={src} title={title} desc={desc}/>
            </div>
            <Button color={color}/>
        </div>
        </>
        );
}
export default Card;