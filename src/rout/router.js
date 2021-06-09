import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import PaginaInscricaoViagem from '../pages/PaginaInscricaoViagem/PaginaInscricaoViagem';
import ListaDeViagens from '../pages/ListaDeViagens/ListaDeViagens';
import CriarViagem from '../pages/CriarViagem/CriarViagem';
import DetalhesViagem from '../pages/DetalhesViagem/DetalhesViagem';
import Header from '../components/Header/Header';
import AreaAdm from '../pages/AreaAdm/AreaAdm'

  
    const Router = () => {

        return (

        <BrowserRouter>
                <Header/>            
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/application-form">
                    <PaginaInscricaoViagem />
                </Route>

                <Route exact path="/trips/list">
                    <ListaDeViagens />
                </Route>

                <Route exact path="/trips/create">
                    <CriarViagem />
                </Route>

                <Route exact path="/trips/details/:tripId">
                    <DetalhesViagem />
                </Route>

                <Route exact path="/adm">
                    <AreaAdm />
                </Route>


            </Switch>
        </BrowserRouter>

    );
};

    export default Router;