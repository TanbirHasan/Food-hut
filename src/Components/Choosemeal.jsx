import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width:100%;
  height:60vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#229954 ;
`

const Input = styled.input`
  width:50%;
  padding:15px;
  border-radius:10px;
`

const Choosemeal = () => {
    return (
        <Container>
            <Input placeholder='Serach Your Ideal Lunch'/>
            
        </Container>
    );
};

export default Choosemeal;