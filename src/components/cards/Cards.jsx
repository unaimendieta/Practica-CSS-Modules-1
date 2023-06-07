import style from "./cards.module.css";

import Card from "./card/Card";

const Cards = () => {
    return (
        <>
        <div className={style.cards}> 
            <Card 
            src={"./images/icon-sedans.svg"} 
            title="SEDANS" 
            desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            color="orange"/>
            <Card 
            src={"./images/icon-suvs.svg"} 
            title="SUVS" 
            desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            color="blue"/>
            <Card 
            src={"./images/icon-luxury.svg"} 
            title="LUXURY" 
            desc="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
            color="green"/>
        </div>
        </>
        );
}
export default Cards;