import React from 'react';
import './Greet.css';
function Hello(){
    return(
        <div>
            <h1>Assessments.</h1>
            <hr/>
            <div className="content">
            <div className="content-first">
                <h2 className="content-title">How it works</h2>
                <p>Take a multiple -choice quiz</p>
                <p>Get a badge for your skill</p>
            </div>
            <div className="content-link">
                <a href="!#">Learn More</a>             
            </div>
            </div>
            <div className="title-second">
                <p>Recommended quizzes based on your skills</p>
            </div>
            <div className="title-third">
                <ul className="title-third__list">
                    <li>.NET framework</li>
                    <hr/>
                    <li>C#</li>
                    <hr/>
                    <li>Git</li>
                    <hr/>
                    <li>HTML</li>
                    <hr/>
                    <li>CSS</li><hr/>
                    <li>ReactJS</li><hr/>
                    <li>Java</li><hr/>
                    <li>Java</li><hr/>
                    <li>Java</li><hr/>
                    <li>Java</li><hr/>
                    <li>Java</li><hr/>
                    <li>Java</li><hr/>
                </ul>
            </div>
        </div>
    );
}
// export const Hello= () => <h1>Hello dude.</h1> Arrow function
export default Hello;