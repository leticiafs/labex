import React, { useEffect, useState } from 'react';
import useBack from '../../util/useback';
import useProtectedPage from '../../util/useProtectedPage';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardDetalhesViagem from './CardDetalhesViagem';
import Candidatos from './Candidatos';

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 100%;
    color: white;
    z-index: 2;
    background-color: #000000;
`
const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`

const DetalhesViagem = () => {
    const [trip, setTrip] = useState()
    const params = useParams()

    useProtectedPage()

    const getTripDetails = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-felix-tang/trip/${params.tripId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            setTrip(response.data.trip)
        })
    }

    useEffect(() =>{
        getTripDetails()
    }, [])

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-felix-tang/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then(() => {
            getTripDetails()
        })
    }

    return (        
        <PrincipalDiv>
            <h2>Detalhes da Viagem</h2>
            {trip ? <div><CardDetalhesViagem trip={trip}/> <h3>Candidatos para análise:</h3> <Candidatos candidates={trip.candidates} decidecandidate={decideCandidate}/></div> : <div>Carregando...</div>}
            <br/>
            <Botoes>            
                <Button variant="contained" color="secondary" onClick={useBack('/trips/list')}> Voltar para viagens </Button>
                <Button variant="contained" color="secondary" onClick={useBack('/adm')}> Voltar para Painel Administrativo </Button>
            </Botoes>
            <br/>
        </PrincipalDiv>       
)}

export default DetalhesViagem;