import Head from 'next/head';
import React from 'react';
import Menu from '../components/Menu';
import Social from '../components/Social';
import styled from 'styled-components';
//import ReactTypingEffect from 'react-typing-effect'; 
import Typewriter from 'typewriter-effect';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1570864977367-42d70041a3c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80');

`;

const NavBar = styled.div`
  width: 20%;
  height: 90%;
  margin: 0 20px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 15px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur(4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.28 );
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 90%;
  margin: 0 30px 0 20px;
  border-radius: 15px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 7px;
  border: 1px solid rgba( 255, 255, 255, 0.28 );
  
  mark{
    color: inherit;
    padding: 0;
    background: 0 0;
    background-position-x: 0px;
    background-position-y: 0px;
    background-repeat: repeat;
    background-size: auto;
    background-image: linear-gradient(120deg,rgb(108, 122, 245) 0,rgb(108, 172, 245) 100%);
    background-repeat: no-repeat;
    background-size: 100% .27em;
    background-position: 0 70%;
    position: relative;
    
}

  h1{
    color: black;
  }
  .Typewriter{
    color: black;
    font-size: 50px;
    margin-bottom: 200px;
  }
`;

export default function Home() {
  return (
    <Container>
      <NavBar>
        <Menu />
      </NavBar>
      <Content>
        <h1>Bem vindo ao <mark>meu site</mark></h1>
        <Typewriter
        	
          options={{
            strings: ['Desenvolvo sites','Desenvolvo Aplicativos','Desenvolvo automações'],
            autoStart: true,
            loop: true,
          }}
        />
      
      <Social />
      </Content>
    </Container>
  )
}