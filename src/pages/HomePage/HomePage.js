import styled from 'styled-components';
import galaxy from '../HomePage/img/galaxia.png'
import Button from '@material-ui/core/Button';
import logog from '../HomePage/img/labexg.png';
import useBack from '../../util/useback';


const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
`
const HomeImg = styled.img`
    display: flex;
    width: 100vw;
    height: auto;    
    position: absolute;
    z-index: 0;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35vw;
    z-index: 2;
`
const ImgLogo = styled.img`
    display: flex;
    z-index: 2;
    margin-bottom: 40px;
`
const HomePage = () => {

    return( 
        <HomeDiv>           
            <HomeImg src={galaxy} />
            <ImgLogo src={logog}/>
            <ButtonDiv>
                <Button onClick={useBack('/application-form')} variant="contained" color="secondary">Inscreva-se em uma viagem</Button>
                <Button onClick={useBack('/login')} variant="contained" color="secondary">Painel Administrativo</Button>
            </ButtonDiv>
        </HomeDiv>
        )
}
export default HomePage;