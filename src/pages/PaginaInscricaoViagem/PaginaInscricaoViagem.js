import useback from '../../util/useback';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import useForm from '../../util/useForm';
import axios from 'axios';
import { useState } from 'react';

const urlTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-felix-tang/trips";

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`
const OForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const PaginaInscricaoViagem = () => {
    const [form, onChange] = useForm({
        nome: "",
        idade: 0,
        motivo: "",
        profissao: "",
        pais: "",
        viagemescolhida: null
    });
    const [trips, setTrips] = useState([]);
 
    const getTrips = () => {
        axios.get(urlTrip)
        .then((response) => {
            setTrips(response.data.trips);
            console.log(response.data.trips)
        })
        .catch((erro) => {
            console.log(erro.message);
        });
    }

    const handleInput = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            name: form.nome,
            age: form.idade,
            applicationText: form.motivo,
            profession: form.profissao,
            country: form.pais
        };
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-felix-tang/trips/${form.viagemescolhida}/apply`, body)
        .then((response) => {
            alert('Sua inscrição foi realizada com sucesso!')
        })
        .catch((err) => {
            console.log(err.message)
            alert('Não foi possível fazer sua inscrição. Por favor, tente novamente')
        })   
    };

    return (
        <FormDiv>
            <OForm >
                <label>Nome</label>
                <input type={'text'} placeholder={'Nome'} name={'nome'} size='50' value={form.nome} onChange={handleInput} required ></input>
                <label>Idade</label>
                <input type={'number'} placeholder={'Idade'} name={'idade'} min='18' required value={form.idade} onChange={handleInput} ></input>
                <label>Por que você é um bom candidato?</label>
                <input type={'text'} placeholder={'Por que sou um bom candidato(a)?'} name={'motivo'} required value={form.motivo} onChange={handleInput}></input>
                <label>Profissão</label>
                <input type={'text'} placeholder={'Profissão'} name={'profissao'} required value={form.profissao} onChange={handleInput}></input>
                <label>País</label>
                <input type={'text'} placeholder={'País'} name={'pais'} required value={form.pais} onChange={handleInput}></input>
                <label>Viagem escolhida:</label>
                <select placeholder={'Viagem escolhida:'} name={'viagemescolhida'} required value={form.viagemescolhida} onClick={getTrips} onChange={handleInput}>{trips.map((trip) => {
                    return <option value={trip.id}>{trip.name}</option>
                })}</select>
                <Button variant="contained" color="secondary" onClick={onSubmitForm}>Inscrever-se</Button>
            </OForm>
            <br/>
            <Button variant="contained" color="secondary" onClick={useback('/')}> Voltar para Home </Button>
        </FormDiv>
)}

export default PaginaInscricaoViagem;