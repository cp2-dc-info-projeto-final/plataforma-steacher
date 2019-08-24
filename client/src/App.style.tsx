import styled from 'styled-components';

export const Background = styled.div`
    background-image: url( ${process.env.PUBLIC_URL + '/assets/background.jpg'} );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0; 
    min-width: 100%;
    min-height: 100%;
`;

export const Texto = styled.h1`
    color: red
`;