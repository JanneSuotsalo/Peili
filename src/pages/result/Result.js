import React, { useState } from "react";
import { useTrail, animated } from 'react-spring'
import "./Result.css"

export default function Result(props) {

    const thankSentenceArray = ["Onneksi olkoon", "teit tehtävän", "XXXXXXXX"]
    const config = { mass: 20, tension: 500, friction: 150 }

    const trail = useTrail(thankSentenceArray.length, {
        config,
        opacity: 1,
        x: 0,
        height: 80,
        from: { opacity: 0, x: -60, height: 0 },
      })

    return (
        <div className="thankText_container">
            <div className="thankText">
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={thankSentenceArray[index]}
                        className="ThankTextParts"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{thankSentenceArray[index]}</animated.div>
                </animated.div>
            ))}
            </div>
        </div>
    );
}
