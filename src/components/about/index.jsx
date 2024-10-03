import Home  from '../home';
import  './index.css';

const About= (props)=> {
    
    const {details} = props

    return(
        <>
        <h1>Home Component </h1>

        <Home personDetails = {details} />
        
        
        </>
    )
}

export default About;
