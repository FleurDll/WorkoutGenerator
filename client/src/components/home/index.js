import React from 'react';
import { HomeContainer, HomeHeader, FooterMsg, BodyMsgSpan, FooterMsgWrapper, FooterSvgWrapper, ArrowIcon, HeaderSvgWrapper, HeaderMsg, BodyMsg, HomeBody, HomeFooter } from "./HomeElements";

const Home = () => {
    const getDate = () => {
        const today = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const localeDate = today.toLocaleDateString("en-EN", options);
        return localeDate;
    };

    return (
        <HomeContainer>
            <HomeHeader>
                <HeaderMsg>
                    {getDate()}
                </HeaderMsg>
                <HeaderSvgWrapper>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FA4D56" d="M36.8,-31C53.2,-20.4,75.8,-10.2,74.8,-1.1C73.7,8.1,49,16.1,32.5,22.4C16.1,28.6,8.1,33.1,-3.1,36.1C-14.2,39.2,-28.4,40.9,-34.9,34.7C-41.3,28.4,-40.1,14.2,-43.2,-3.2C-46.4,-20.5,-54,-41.1,-47.5,-51.6C-41.1,-62.1,-20.5,-62.7,-5.2,-57.5C10.2,-52.4,20.4,-41.5,36.8,-31Z" transform="translate(100 100)" />
                    </svg>
                </HeaderSvgWrapper>
            </HomeHeader>
            <HomeBody>
                <BodyMsg>
                    Well,
                </BodyMsg>
                <BodyMsg>
                    Hello there.
                </BodyMsg>
                <BodyMsg>
                    Ready for a <BodyMsgSpan>good</BodyMsgSpan> workout?
                </BodyMsg>
            </HomeBody>
            <HomeFooter>
                <FooterMsgWrapper>
                    <ArrowIcon />
                    <FooterMsg>
                        It's this way
                    </FooterMsg>
                </FooterMsgWrapper>
                <FooterSvgWrapper>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFAD0A" d="M54.5,-58.8C64.9,-44,63.8,-22,60.7,-3.2C57.5,15.7,52.3,31.4,41.9,45.1C31.4,58.7,15.7,70.3,0.7,69.6C-14.3,68.9,-28.6,55.9,-45.1,42.2C-61.6,28.6,-80.3,14.3,-77.7,2.6C-75.2,-9.1,-51.3,-18.3,-34.8,-33C-18.3,-47.8,-9.1,-68.2,6.4,-74.6C22,-81.1,44,-73.6,54.5,-58.8Z" transform="translate(100 100)" />
                    </svg>
                </FooterSvgWrapper>
            </HomeFooter>
        </HomeContainer>
    );
};

export default Home;