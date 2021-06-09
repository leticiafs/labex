import React from 'react';
import styled from 'styled-components';

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

const CardDetalhesViagem = (props) => {

    return (        
        <div>
            <CardDiv>
              <div></div>
              <div><h3><strong>{props.trip.name}</strong></h3></div>
              <div><em><strong>Onde: </strong>{props.trip.planet}</em></div>
              <div><em><strong>Data: </strong>{props.trip.date}</em></div>
              <div><strong>Duração: </strong>{props.trip.durationInDays} dias</div>
              <br/>
              <div>{props.trip.description}</div>
              <br/>
            </CardDiv>
        </div>
)}

export default CardDetalhesViagem