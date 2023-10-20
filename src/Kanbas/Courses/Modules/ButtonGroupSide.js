import React from "react";
import db from "../../Database";

function ButtonGroupSide(){
    const buttons = db.statusButtons;
        return (

            <div className="">
                {buttons.map((b, i) => (

                    <button className={b.color}  style={{ width: '250px' }} key={i} name={b.name}>
                        <i className={b.icon}></i>
                        {b.name}
                    </button>
                ))}
            </div>
        );
}

export default ButtonGroupSide;


