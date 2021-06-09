import React from 'react';
import styled from 'styled-components';
import '../../pages/AreaAdm/style.css'
import useback from '../../util/useback';
import Button from '@material-ui/core/Button';
import useProtectedPage from '../../util/useProtectedPage';


const BackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`

const AreaAdm = () => {
    useProtectedPage()


    return (      

        <div class='primeiradiv'>
            <h2>Painel Administrativo</h2>
            <BackgroundDiv>        
                    <div class="container">
                        <img src='https://i.pinimg.com/originals/21/08/6d/21086dbd5783d15f4b4d255ae5bba4b7.jpg'/>
                        <button class="btn" variant="contained" color="secondary" onClick={useback('/trips/list')}>Viagens</button>
                    </div>
                    <div class="container">
                        <img src='https://artfiles.alphacoders.com/526/52646.jpg'/>
                        <button class="btn" variant="contained" color="secondary" onClick={useback('/trips/create')}>Criar Viagem</button>
                    </div>
            </BackgroundDiv>
            <Button variant="contained" color="secondary" onClick={useback('/')}>Voltar para Home</Button>

        </div>
)}

export default AreaAdm