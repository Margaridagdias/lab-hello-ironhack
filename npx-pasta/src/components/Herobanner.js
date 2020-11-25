import React from 'react';

function HeroBanner() {
    return(
        <div className="HeroBanner-div">
            <img className="ironhack-logo" src="/images/ironhack-log.svg"/>
            <img className="menu" src="/images/menu-top.svg"/ alt="menu-top" />
            <img className="react-logo" src="/images/react-logo.svg" alt="logo"/>

        <h1>Say hello to ReactJS</h1>
        <p className="heather-p">You will learn how to use 
        the most popular frontend library,
        and become a super Ninja developer.</p>
        <button type="button" className="btn btn-secondary btn-lg">Awesome!</button>
        </div>
    )
}
export default HeroBanner