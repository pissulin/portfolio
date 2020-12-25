import React, {useState} from 'react'
import styled,{ createGlobalStyle, ThemeProvider } from 'styled-components'
import { FaMoon, FaSun } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
html,
body {
  
  body { 
    padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-image:url(${props => props.theme.mode === 'dark' ? 'https://images.unsplash.com/photo-1504941214544-9c1c44559ab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' : 'https://images.unsplash.com/photo-1570864977367-42d70041a3c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
  }
`

const Div = styled.div`

  position: absolute;
  top: 55px;
  right: 40px;
  padding: 10px 12px;
  border-radius: 5px;
  background: rgba( 255, 255, 255, 0.01 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`;


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
      <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
        <Component {...pageProps} />
        <Div  onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}>{theme.mode === 'dark' ? <FaMoon size={32} color={'white'}/> : <FaSun size={32} color={'yellow'}/>}</Div>
    
    
    </>
      </ThemeProvider>
  )
}
