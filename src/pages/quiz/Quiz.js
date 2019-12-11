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

    // Checks this.props.questionStatus to see if quiz has been started and then if clicked setting the right question
    continueQuiz = () => {
        let value = this.props.questionStatus
        if (value === 0) {
            this.setState({warning: "Sinulla ei ole aloitettua tehtävää"})
        } else if (value === 6) {
            this.setState({warning: "Olet tehnyt tehtävän loppuun. Aloita tehtävä alusta tai tarkastele tulosta historia sivulla."})
        } else {
            this.setState({questionCount: value}, () => {
                console.log("Prop: "+ value, "Count: "+ this.state.questionCount)
            })
        }
    }

    // Handles forward click by setting state.questionCount up by one
    handleClick = () => {
        if (this.state.questionCount < 6) {
            this.questionStatus(this.state.questionCount +1 )
            this.setState({questionCount: this.state.questionCount + 1}, () => {
                console.log(this.state.questionCount)
                this.setState({warning: ""});
            });
        }
    }

    // Handles backward click by setting state.questionCount down by one
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

    
    // Potential way to handle quiz data coming from database
    // cant use since having problems with: Objects are not valid as a React child
    /*
    handleQuizData() {
        console.log(taskData.questions.length)
        
        var questions = [];
        for (var i = 0; i < taskData.questions.length; i++) {

            if(taskData.questions[i].type = "radio") {
                console.log(taskData.questions[i])
                questions.push(
                <div className="questionCard">
                    <div className="progressDiv">
                        <h3 className="progress">Kysymys {taskData.questions[i]}/{taskData.questions.length}</h3>
                        <h4 className="progress">{taskData.introText}...</h4>
                    </div>
                    <RadioGroup qTitle={taskData.questions[i].prompt} value1={taskData.questions[i].ansType[0]} value2={taskData.questions[i].ansType[1]} />
                    <h3 className="warning">{this.state.warning}</h3>
                    <div className="quizButtons">
                        <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                        <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                    </div>
                </div>
                )
                console.log(questions)
            } else if (taskData.questions[i].type = "opentext") {
                questions.push(
                    <div className="questionCard">
                    <div className="progressDiv">
                        <h3 className="progress">Kysymys {taskData.questions[i]}/{taskData.questions.length}</h3>
                        <h4 className="progress">{taskData.introText}...</h4>
                    </div>
                    <Opentext qTitle={taskData.questions[i].prompt} maxLength={taskData.questions[i].maxLen} />
                    <h3 className="warning">{this.state.warning}</h3>
                    <div className="quizButtons">
                        <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                        <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                    </div>
                </div>
                )
            } else if (taskData.questions[i].type = "multichoice") {
                questions.push(
                    <div className="questionCard">
                    <div className="progressDiv">
                        <h3 className="progress">Kysymys {taskData.questions[i]}/{taskData.questions.length}</h3>
                        <h4 className="progress">{taskData.introText}...</h4>
                    </div>
                    <MultiChoice qTitle={taskData.questions[i].prompt} options={taskData.questions[i].choices}  />
                    <h3 className="warning">{this.state.warning}</h3>
                    <div className="quizButtons">
                        <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                        <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                    </div>
                </div>
                )
            } else if (taskData.questions[i].type = "rangeslider") {
                questions.push(
                    <div className="questionCard">
                    <div className="progressDiv">
                        <h3 className="progress">Kysymys {taskData.questions[i]}/{taskData.questions.length}</h3>
                        <h4 className="progress">{taskData.introText}...</h4>
                    </div>
                    <RangeSlider qTitle={taskData.questions[i].prompt}min={taskData.questions[i].minValue} max={taskData.questions[i].maxValue} minLabel={taskData.questions[i].minLabel} maxLabel={taskData.questions[i].maxLabel} />
                    <h3 className="warning">{this.state.warning}</h3>
                    <div className="quizButtons">
                        <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                        <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                    </div>
                </div>
                )
            }
        }
        return questions;
    }
    */


    render() {
        let questionCount = this.state.questionCount;
        //let questionArray = this.handleQuizData();
        let index = questionCount - 1;
        let questionLayout;

        if (questionCount === 0) {
            questionLayout =
            <div className="questionCard">
                <QuizInfo taskName={taskData.taskName} desc={taskData.description} reward={taskData.reward} />
                <h3 className="warning">{this.state.warning}</h3>
                <button onClick={this.handleClick} className="info start_btn">Aloita alusta</button>
                <button onClick={this.continueQuiz} id="continue_btn" className="info continue_btn">Jatka kyselyä</button>
            </div>

        } else if (questionCount === 1) {
            questionLayout = 
            <div className="questionCard">
            <div className="progressDiv">
                <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
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

        } else if (questionCount === 2) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
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

        } else if (questionCount === 3) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <Opentext qTitle={taskData.questions[index].prompt} maxLength={taskData.questions[index].maxLen} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount === 4) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
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

        } else if (questionCount === 5) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
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

        } else if (questionCount === 6) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/{taskData.questions.length}</h3>
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
        }

        return(
        <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 2000 }}>        
            {props => <div style={props}>{questionLayout}</div>}
        </Spring>
        )
    }
}