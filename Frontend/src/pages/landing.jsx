import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import bgImg from '../assets/videocall.png';
import '../styles/button.css';
import '../styles/landing.css';

function Landing() {
    const [isExiting, setIsExiting] = useState(false);

    const handleNavigation = (to) => {
        setIsExiting(true); // Start the exit animation
        setTimeout(() => {
            window.location.href = to; // Navigate to the new route after animation
        }, 500); // Match the duration of the animation (0.5s)
    };

    return (
        <div className={`landingPageContainer ${isExiting ? 'page-transition-out' : ''}`}>
            <nav>
                <div className="navHeader">
                    <h2>Mingle</h2>
                </div>
                <div className="navList">
                    <a href="/join-guest">Join as Guest</a>
                    <a href="/register">Register</a>
                    <li>
                        <button className="button button--bestia">
                            <div className="button__bg"></div><span>Login</span>
                        </button>
                    </li>
                </div>
            </nav>
            <div className="page hero">
                <div className="left">
                    <h2>
                        <span style={{ color: '#ff9839' }}>Connect</span> with your Loved Ones
                    </h2>
                    <p>Cover a distance by Mingle</p>
                    <li className="big-scr">
                        <button
                            className="button button--calypso"
                            onClick={() => handleNavigation('/auth')}
                        >
                            <span>Get Started</span>
                        </button>
                        {/* <Link to={"/home"}>
                            <button className="button button--calypso"><span>Get Started</span></button>

                        </Link> */}
                    </li>
                </div>
                <div className="right">
                    <img src={bgImg} alt="" />
                </div>
                <a className="sm-scr" href="#" onClick={() => handleNavigation('/home')}>
                    Get Started
                </a>
            </div>
        </div>
    );
}

export default Landing;
