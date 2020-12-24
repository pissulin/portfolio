import Link from 'next/link';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-radius: 15px;
    background: rgba( 255, 255, 255, 0.01 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.28 );
    a{
        margin: 0 10px;
        padding: 20px;
    }
    a:hover{
        background-color: rgba(255, 255, 255, 0.252);
        border-radius: 50%;
       
    }
`;


export default ()=> {
    return (

        <ContainerSocial>
            <Link className="hove" href= "https://github.com/pissulin">
                <a target='_blank' rel="noopener noreferrer"> <FaGithub size={30}/></a>
            </Link>
            <Link href= "https://www.linkedin.com/in/pissulin/">
                <a target='_blank' rel="noopener noreferrer"> <FaLinkedinIn size={30}/></a>
            </Link>
            <Link href= "https://www.instagram.com/a.pissulin">
                <a target='_blank' rel="noopener noreferrer"> <FaInstagram size={30}/></a>
            </Link>
            <Link href= "https://encurtador.com.br/xBCMS">
                <a target='_blank' rel="noopener noreferrer"> <FaWhatsapp size={30}/></a>
            </Link>
        
        </ContainerSocial>
        )
}