import { v4 } from "uuid";

export const CARDS = [
        {
            id:v4(),
            src:"./images/icon-sedans.svg",
            title:"SEDANS", 
            desc:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            color:"orange"
        },
        {
            id:v4(),
            src:"./images/icon-suvs.svg", 
            title:"SUVS", 
            desc:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            color:"blue"
        },
        {
            id:v4(),
            src:"./images/icon-luxury.svg", 
            title:"LUXURY", 
            desc:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
            color:"green"
        }
]
