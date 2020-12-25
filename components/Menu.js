import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';


const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 ;

    a{
        color: black;
        font-size: 18px;
        font-weight: bold;
        margin: 5px 0;
        width: 95%;
        padding: 10px 0 ;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
    }
    a:hover{
        background-color:  rgba(255, 255, 255, 0.252);
    }

    .imageFoto{
        border-radius: 50%;
        margin-bottom: 50px;
    }
    h1{
        margin: 20px 10px 0px 10px;
        text-align: center;
        font-size: 22px;
    }
    h2{
        font-size: 15px;
        margin: 0 0 50px 0;
        color: rgb(40, 40, 40);
    }
    .active{
        border: 1px solid red;
    }
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
`;

const Menu = (props) => {

    return (
        <ContainerMenu>
            <Image
                className='imageFoto'
                src={'/../public/profilePhoto.jpg'}
                alt="Foto do dev"
                width={150}
                height={150}
            />
             <h1>Anderson <mark>Pissulin</mark></h1>
             <h2>Full Stack Developer Jr</h2>
            
         <Link href="/" >
             <a id='inicio'>Inicio</a>
         </Link>
         <Link href='/sobre'>
             <a id="sobre">Sobre</a>
         </Link>
         <Link href='/portfolio'>
             <a id="portfolio">Portfolio</a>
         </Link>
         <Link href='/contato'>
             <a id='contato'>Contato</a>
         </Link>
        </ContainerMenu>
    )
}

export default Menu