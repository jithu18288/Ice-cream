import React from "react";

import './comstyl.css';

const Display = ({days,hours,minutes,seconds})=>{
    return(
        <div>
            <h2 id="id1">SALES COUNTDOWN TIMER</h2>
            <h2 id="id1">OFFER ENDS</h2>
                <table className="menu" border={2}>
                    <tbody>
                        <tr>
                            <th>{days}</th>&nbsp;&nbsp;
                            <th>{hours}</th>&nbsp;&nbsp;
                            <th>{minutes}</th>&nbsp;&nbsp;
                            <th>{seconds}</th>&nbsp;&nbsp;

                        </tr>
                        <tr>
                        <th>DAYS</th>&nbsp;&nbsp;
                        <th>HOURS</th>&nbsp;&nbsp;
                        <th>MINUTES</th>&nbsp;&nbsp;
                        <th>SECONDS</th>&nbsp;&nbsp;
                        </tr>
                    </tbody>
                </table>
        </div>
    )


}

export default Display;