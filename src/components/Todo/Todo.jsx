import { useState } from "react";
import "./todo.css";
import Cross from "/images/icon-cross.svg"
import Check from "/images/icon-check.svg"

export default function Todo(){
    const [clicked,setClicked] = useState(false);

    const circleClicked = () => {
        setClicked(!clicked);
    }
    

    return <div className="todo">
        <div onClick={circleClicked} className="circle" style={clicked ? { backgroundImage: `url(${Check}), linear-gradient(135deg, #5df, #c058f3)`, backgroundRepeat: "no-repeat", backgroundPosition :"center" } : {}}></div>
        <p className="todo-text">Complete online JavaScript course</p>
        <img src={Cross} alt="icon cross" />
    </div>
}