 import style from "./info.module.css";

const Info = ({src, title, desc}) => {
    return (
        <>
        <div className="headerImage">
            <img src={src} alt="" />
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.desc}>{desc}</p>
        </>
        );
}
export default Info;