import React, { useEffect } from 'react'
import styled from 'styled-components';
import CaraouselDes from '../Components/CaraouselDes';
import EventDescription from '../Components/EventDescription';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

export default function Icramerd2020({handleScroll}) {
    useEffect(() => {
        document.title="ICRAMERD 2023 | 2020";
        handleScroll();
      }, []);
    return (
        <Container>
            <EventDescription yr={20} />
            <CaraouselDes yr={20} />
            <AboutHome yr={20}/>
            <Footer yr={20}/>
        </Container>
    )
}
const Container = styled.div`
    
`;