import React from 'react'
import AboutBanner from '../../components/about-components/about-banner/AboutBanner'
import AboutFooter from '../../components/about-components/about-footer/AboutFooter'
import AboutInvolvement from '../../components/about-components/about-involvement/AboutInvolvement'
import AboutTeam from '../../components/about-components/about-team/AboutTeam'
import './About.css'

function About() {
  document.title = "Enheritage | About";
    return (
        <div className="about">
            <div className="container">
            <AboutBanner/>

            <AboutTeam/>
            <AboutInvolvement/>

            </div>
            <AboutFooter/>
            
        </div>
    )
}

export default About
