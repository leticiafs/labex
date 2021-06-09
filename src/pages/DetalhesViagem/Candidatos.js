import React from 'react';
import styled from 'styled-components';
import CardCandidato from './CardCandidato';

const CatalogoDiv = styled.div`
    display: grid;
    grid-template: 1fr 1fr / repeat(4, 1fr);
    gap: 1em;
    width: 75vmax;
    color: white;
    z-index: 2;
    margin-top: 30px; 
`

const Candidatos = (props) => {

    return (        
        <CatalogoDiv>
          {props.candidates.map(candidates => {
          return <CardCandidato candidates={candidates} decidecandidate={props.decidecandidate}/>
        })}
        </CatalogoDiv>
)}

export default Candidatos;