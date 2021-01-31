import React from 'react';

//Animation
import { motion } from 'framer-motion';
import { pageAnimation,titleAnim } from '../animation';
//style component
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                            <h3>Send us a message</h3>
                    </Social>
                <Hide>
                </Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                            <h3>Send an email</h3>
                    </Social>
                <Hide>
                </Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                            <h3>Social Media</h3>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px){
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h3{
        margin: 2rem;
        color: #353535;
    }
`;
export default ContactUs;