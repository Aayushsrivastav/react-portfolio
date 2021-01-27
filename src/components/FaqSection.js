import React from 'react';
import AboutSection from "../components/AboutSection";

import ServicesSection from "../components/ServicesSection";

const FaqSection = () => {
    return(
        <div className="faq">
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis.</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis.</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis.</p>
                </div>
            </div>
            <div className="question">
                <h4>What Product Do You Offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis.</p>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;