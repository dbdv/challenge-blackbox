import { Link } from "wouter";

import '../main.css';

import React from "react";

function Homepage(){
    return(
        <div className="centeredDiv">
            <h1>Welcome</h1>
            <Link className="startBtn" href='/questions'>Start</Link>
        </div>
    )
}

export default Homepage;