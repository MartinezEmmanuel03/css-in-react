import React from 'react';
import styled from 'styled-components';

import img from "./holydiver.jpg"
import './App.css';

const Div1 = styled.div`
display: flex;
border: 2px solid grey;
border-radius: 5px;
`;

const Holypic = styled.img`
width: 30%;
border-right: 1px solid grey;
`;

const Div2 = styled.div`
width: 70%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-left: 1px solid grey;
background-color: #aeb1bd;
`;

const Title = styled.h1`
font-size: 3.5rem;
margin: 0;
color: #4a4645;
font-family: Georgia;
`;

const Text = styled.p`
font-size: 1rem;
color: #4a4645
font-family: verdana, sans-serif;
`

const Div3 = styled.div`
display: flex;
justify-content: space-around;
border: 2px solid grey;
border-top: 0px;
border-radius: 5px;
background-color: #aeb1bd;
`;

const Div4 = styled.div`
width: 50%`;

function App() {
  return (
    <Div4 className="App">
      <Div1>
        <Holypic alt="holy diver album cover" src={img} />
        <Div2>
          <Title>Holy Diver</Title>
          <Title>Dio</Title>
          <Text>(1983)</Text>
        </Div2>
      </Div1>
      <Div3>
        <Text>Critic Score</Text>
        <Text>5/5</Text>
      </Div3>
    </Div4>
  );
}

export default App;
