import {useEffect} from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const ProtectedRout = (props)=>{

    const {Component} = props;

    let navigate = useNavigate();
    let token  = Cookies.get("jwtToken")

    useEffect(()=>{

        if(token === undefined){
            navigate("/login");
        }


    },[])

    return <Component/>

}

    export default ProtectedRout ;
