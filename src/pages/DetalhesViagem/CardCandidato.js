import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  color: white;
  border-radius: 10px;
  background-color: rgb(239, 45, 86, 1);
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px 20px 20px 20px;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const CardCandidato = (props) => {
  const aprovarCandidato = () => {
    props.decidecandidate(true, props.candidates.id)
  };

  const rejeitarCandidato = () => {
    props.decidecandidate(false, props.candidates.id)
  };

    return (        
        <div>
            <CardDiv>
              <div></div>
              <div><h3><strong>{props.candidates.name}</strong></h3></div>
              <div><em><strong>Idade: </strong>{props.candidates.age}</em></div>
              <div><em><strong>País: </strong>{props.candidates.country}</em></div>
              <div><strong>Profissão: </strong>{props.candidates.profession}</div>
              <div>{props.candidates.applicationText}</div>
              <Botoes>
                <IconButton aria-label="aprovar" color="primary" onClick={aprovarCandidato}><CheckCircleOutlineIcon/></IconButton>
                <IconButton aria-label="rejeitar" color="primary" onClick={rejeitarCandidato}><ClearIcon/></IconButton>
              </Botoes>
            </CardDiv>
        </div>
)}

export default CardCandidato