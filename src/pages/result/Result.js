import React, { useState } from "react";
import { useTrail, animated, useSpring } from 'react-spring'
import { Line } from 'rc-progress';
import { Redirect } from "react-router-dom";
import "./Result.css"

export default function Result(props) {
    const [redirect, changeRedirect] = useState(false);
    const quizData = props.location.state.quizData
    console.log(quizData)
    const thankSentenceArray = ["Onneksi olkoon", "teit tehtävän", quizData.taskName]
    const config = { mass: 20, tension: 500, friction: 150 }
    const numberProps = useSpring({ number: quizData.reward, from: { number: 0 }, delay: 500})

    const trail = useTrail(thankSentenceArray.length, {
        config,
        opacity: 1,
        x: 0,
        height: 80,
        from: { opacity: 0, x: -60, height: 0 },
      })

    function redirectBack(){
        changeRedirect(true)
    }

    if(redirect){
        return <Redirect push to="/feed" />;
    }

    return (
        <div>
            <div className="result_thankText_container">
                <div className="result_thankText">
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={thankSentenceArray[index]}
                            className="result_thankTextParts"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{thankSentenceArray[index]}</animated.div>
                    </animated.div>
                ))}
                </div>
                </div>
            <h1 className="result_quizReward">Palkinto: &nbsp;
            <animated.span delay={1000}>{numberProps.number.interpolate(value => Math.floor(value))}</animated.span>
            GP
            </h1>
            
            <div className="LifeMeterCell">
                <p className="result_lines">Mittari 1</p>
                <Line className="LifeMeterLine1" percent="60" strokeWidth="2" strokeColor="#228B22" />
                <div>+10</div>
            </div>
            <div className="LifeMeterCell">
                <p className="result_lines">Mittari 2</p>
                <Line className="LifeMeterLine1" percent="50" strokeWidth="2" strokeColor="#228B22" />
            </div>
            <div className="LifeMeterCell">
                <p className="result_lines">Mittari 3</p>
                <Line className="LifeMeterLine1" percent="50" strokeWidth="2" strokeColor="#228B22" />
            </div>
            <div className="LifeMeterCell">
                <p className="result_lines">Mittari 4</p>
                <Line className="LifeMeterLine1" percent="50" strokeWidth="2" strokeColor="#228B22" />
            </div>

            <div className="result_goBackBtnContainer">
                    <button
                        type="button"
                        className="result_goBacktBtn"
                        onClick={() => redirectBack()}
                    >
                        Takaisin etusivulle
                </button>
                </div>
            
        </div>
    );
}
