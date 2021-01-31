import React from 'react';

//Icon import
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styled component
import { Container, Description, Image } from '../styles';
import styled from 'styled-components';
import {fade} from '../animation';
import {useScroll} from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return(
        <Services variants={fade} animate={controls} intial="hidden" ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="Efficient"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="Team Work"/>
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="Affordable"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Services>
    );
};

const Services = styled(Container)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 80%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;

    @media (max-width: 1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 16rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;