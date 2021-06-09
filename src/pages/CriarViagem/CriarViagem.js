import React, { useState } from 'react';
import useBack from '../../util/useback';
import useProtectedPage from '../../util/useProtectedPage'
import styled from 'styled-components';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const CriarViagemDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`
const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    gap: 10px;
    
`
const urlCreateTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-felix-tang/trips"

const CriarViagem = () => {
    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [durationInDays, setDurationInDays] = useState('');

    useProtectedPage()

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value);
    }

    const onChangeDate = (event) => {
        setDate(event.target.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onChangeDurationInDays = (event) => {
        setDurationInDays(event.target.value);
    }

    const createTrip = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        };
         axios
         .post(urlCreateTrip, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })   
         .then((response) => {
                setName(response.data.name);
                setPlanet(response.data.planet);
                setDate(response.data.date);
                setDescription(response.data.description);
                setDurationInDays(response.data.durationInDays);
                alert('Viagem criada com sucesso!')
         })
         .catch((err) => {
                console.log(err.message);
            })
    }
    return (
        
        <CriarViagemDiv>
            <h2>Criar viagem</h2>
            <FormDiv>
                <input placeholder='Nome' name='' size="50" value={name} onChange={onChangeName} required ></input>
                <input placeholder='Planeta' size="50" value={planet} onChange={onChangePlanet} required ></input>
                <input placeholder='Data' size="50" value={date} onChange={onChangeDate} required ></input>
                <input placeholder='Descrição' size="50" value={description} onChange={onChangeDescription} required ></input>
                <input placeholder='Duração em dias' size="50" value={durationInDays} onChange={onChangeDurationInDays} required ></input>
                <Button variant="contained" color="secondary" onClick={createTrip}>Criar viagem</Button>          
            </FormDiv> 
            <Button variant="contained" color="secondary" onClick={useBack('/adm')}> Voltar para painel administrativo </Button>
            <br/>
        </CriarViagemDiv>
)}

export default CriarViagem;