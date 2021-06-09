import { useHistory } from "react-router-dom";



function useBack(page) {

    const history = useHistory()

    const goTo = () => {
        history.push(page)
    }


    return goTo

    
}

export default useBack;