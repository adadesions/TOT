import React from 'react'
import '../assets/css/Welcome.css'

export default function Welcome() {
    return (
        <div className='welcome-component container-fluid'>
            <div className="gradient">
                <div className="row">
                    <HeaderText text="Welcome to TOT.js" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <MyButton text="About me" link="/aboutme" />
                        <MyButton text="Tour" link="/tour" />
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderText({ text }) {
    return (
        <div className="header-text">
            <h1>Ada said: {text}</h1>
        </div>
    )
}

function MyButton({ text, link }) {
    return (
        <button className="my-btn btn btn-success">
            {text}
        </button>
    )
}