import { useContext, useEffect } from 'react'
import {IsLoggedContext} from 'src/helpers/isLoggedContext'
interface Props {
  children: React.ReactNode;
}
const WithAxios :React.FC<Props> = (Props:Props) => {
    const logged = useContext(IsLoggedContext);

    useEffect(() => {
      
    }, [logged?.setIsLogged])

    // return Props.children
    return (<></>)
}

export default WithAxios

// https://stackoverflow.com/questions/64296505/usecontext-inside-axios-interceptor