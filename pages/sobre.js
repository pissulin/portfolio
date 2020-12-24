import React from 'react';
import Menu from '../components/Menu'
import styled from 'styled-components';

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
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.28 );
`;

const Content = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 30px 0 20px;
  border-radius: 15px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 7px;
  border: 1px solid rgba( 255, 255, 255, 0.28 );
`;

export default function Home() {
  return (
    <Container>
      <NavBar>
      <Menu />
      </NavBar>
      <Content>

      </Content>
    </Container>
  )
}