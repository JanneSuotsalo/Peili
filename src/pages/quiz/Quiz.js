import React from 'react';
import './Quiz.css';
import QuizInfo from '../../components/QuizComponents/QuizInfo';
import Opentext from '../../components/QuizComponents/Opentext';
import MultiChoice from '../../components/QuizComponents/MultiChoice';
import RadioGroup from '../../components/QuizComponents/RadioGroup';
import RangeSlider from '../../components/QuizComponents/RangeSlider';
import { Spring } from 'react-spring/renderprops';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

var taskData = require('../../taskListExample.json');

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {questionCount: 0, value: "", warning: "", redirectResult: false}
        this.handleClick = this.handleClick.bind(this);
    }

    questionStatus = (question) => {
        this.props.handleQuestionStatus(question)
    }

    continueQuiz = () => {
        let value = this.props.questionStatus
        if (value == 0) {
            this.setState({warning: "Sinulla ei ole aloitettua tehtävää"})
        }
        this.setState({questionCount: value}, () => {
            console.log("Prop: "+ value, "Count: "+ this.state.questionCount)
        })
    }

    handleClick = () => {
        this.questionStatus(this.state.questionCount +1 )
        this.setState({questionCount: this.state.questionCount + 1}, () => {
            console.log(this.state.questionCount)
            this.setState({warning: ""});
        });
    }

    handleBackClick = () => {
        this.questionStatus(this.state.questionCount - 1)
        this.setState({questionCount: this.state.questionCount - 1}, () => {
            console.log(this.state.questionCount)
            this.setState({warning: ""});
        });
    }

    // Handle forward click from <OpenText/> component, checks for input
    handleTextClick = () => {
        this.setState({value: document.querySelector("#textArea").value}, () => {
            console.log(this.state.value, this.state.value.length);
            if (this.state.value.length > 3 ) {
                    this.handleClick()
            } else {
                    this.setState({warning: "Vastaus tarvitaan jatkamiseen"});
            };
        });
    }

    // Handle forward click from <RadioGroup/> component, checks for input
    handleRadioClick = () => {
        var radioButtons = document.getElementsByName("radio");
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                this.handleClick()
            } else {
                this.setState({warning: "Vastaus tarvitaan jatkamiseen"});
            }
        }
    }

    // Checks if radiobutton is checked or not and if it is, handles redirection for result page. Also gives the reward money for the user.
    handleResultRedirection = () => {
        var radioButtons = document.getElementsByName("radio");
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                this.props.setMoney(taskData.reward)
                this.setState({redirectResult: true})
            } else {
                this.setState({warning: "Vastaus tarvitaan jatkamiseen"});
            }
        }
    }

    // Redirects to result page and gives it quiz data
    redict = () => {
        if(this.state.redirectResult){
            return <Redirect push to={{
                pathname:"/Result",
                state:{
                    quizData: taskData
                }}}/>
        }
    }


    render() {
        let questionCount = this.state.questionCount;
        let index = questionCount - 1;
        let questionLayout;

        if (questionCount == 0) {
            questionLayout =
            <div className="questionCard">
                <QuizInfo taskName={taskData.taskName} desc={taskData.description} reward={taskData.reward} />
                <h3 className="warning">{this.state.warning}</h3>
                <button onClick={this.handleClick} className="info start_btn">Aloita alusta</button>
                <button onClick={this.continueQuiz} id="continue_btn" className="info continue_btn">Jatka kyselyä</button>
            </div>

        } else if (questionCount == 1) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1={taskData.questions[index].ansType[0]} value2={taskData.questions[index].ansType[1]} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                </div>
            </div>

        } else if (questionCount == 2) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RangeSlider qTitle={taskData.questions[index].prompt}min={taskData.questions[index].minValue} max={taskData.questions[index].maxValue} minLabel={taskData.questions[index].minLabel} maxLabel={taskData.questions[index].maxLabel} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 3) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <Opentext qTitle={taskData.questions[index].prompt} maxLength={taskData.questions[index].maxLen} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleTextClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 4) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <MultiChoice qTitle={taskData.questions[index].prompt} options={taskData.questions[index].choices}  />
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 5) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 6) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    {this.redict()}
                    <button onClick={this.handleResultRedirection} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>
        } // Should go to completion page after

        return(
        <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 2000 }}>        
            {props => <div style={props}>{questionLayout}</div>}
        </Spring>
        )
    }
}