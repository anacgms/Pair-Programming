import styled from 'styled-components'
import Torradeira from '../imagens/Torradeira.png'

export const Container = styled.header`
    background-image: url(${Torradeira});
    height: 100vh;
    background-size: 120rem;
    background-position-y: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        font-family: 'Hurme2';
        text-transform: uppercase;
        margin-top: 12rem;
        font-size: 9em;
        color: #373737;
        letter-spacing: 15px;
    }

`
export const Contain = styled.div`
    display: flex;
    width: 100%;
    height: 7rem;
    justify-content: space-between;
    align-items: center;

    h2{
        font-family: 'Hurme2';
        font-size: 2rem;
        margin-left: 2rem;
    }

    ul{
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        padding: 1rem;
    }
    
    li{
        font-family: 'Hurme1';
        font-size: 1.2em;
        letter-spacing: 2.5px;
        color: #373737;
        list-style: none;
        text-transform: uppercase;
        padding: .8rem 1.5rem .8rem 1.5rem;
        cursor: pointer;
        transition: .8s all;

    }
    
    li:hover{
        border: 4px solid #373737;
    }

`