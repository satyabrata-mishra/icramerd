import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImportantDate from '../Components/ImportantDatesHome';
import Footer from '../Components/Footer';

export default function ImportantDates({handleScroll}) {

  useEffect(() => {
    document.title="ICRAMERD 2023 | IMPORTANT DATES";
    handleScroll();
  }, []);

  return (
    <Container>
        <ImportantDate/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
padding-top:6rem;  
`;