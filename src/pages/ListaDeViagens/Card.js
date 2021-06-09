import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import useBack from '../../util/useback';


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
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Card = (props) => {

    return (        
        <div>
            <CardDiv>
              <div></div>
              <div><h3><strong>{props.trips.name}</strong></h3></div>
              <div><em>{props.trips.planet}</em></div>
              <div><em>{props.trips.date}</em></div>
              <br/>
              <div>{props.trips.description}</div>
              <br/>
              <ButtonDiv>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={useBack('/application-form')}>Inscrever</Button>              
                <Button 
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={useBack(`/trips/details/${props.trips.id}`)}>Detalhes</Button>
              </ButtonDiv>
            </CardDiv>
        </div>
)}

export default Card