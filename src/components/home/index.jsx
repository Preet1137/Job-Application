import  './index.css';
import useEffect from  'react';

const Home= (props)=> {
    const {myColor} = props;

// useEffect(()=>{
//     const fetchApi = async()=>{

//         const api = 'https://apis.ccbp.in/jokes/random';
//         const response = await fetch(api);
//         const data  = await response.json();
//         console.log(data);
//     }

//     fetchApi();
// },[]);


    return(
        <>
        
           <h1>Home Componet : {myColor}</h1>
        </>
    )

}

export default Home;
