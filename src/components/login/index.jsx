import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';


const Login = ()=>{

    const [allValues,setValues] = useState({
        username : "",
        password : "",
        errorMsg : ""
    });

    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    const onSubmitUserDetails = async (e)=>{
        e.preventDefault();

        console.log(allValues.username);

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: allValues.username,
            password: allValues.password 
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

          try {
            const response = await fetch(api,options);
            const data = await response.json(); 

            if(response.ok === true){
                setValues({...allValues, errorMsg : ""});
                navigate("/");
                Cookies.set("jwtToken", data.jwt_token);
                
            }
            else{
                setValues({...allValues, errorMsg : data.error_msg});
            }
            
          } catch (error) {
            console.log(error);
          }


    }

    useEffect(()=>{

        if(token !== undefined){
            navigate("/");

        }


    },[])


    return(

        <div className='main-cont'>

<form className='login-cont' onSubmit={onSubmitUserDetails} >

    <div className="login-icon">
        <img className='login-img' src="../src/assets/login-img.png" alt="Login Icon" width={"80px"}/>
   </div>

   <div className="form-group">
        <label htmlFor="exampleInputWebsite">Website Name</label>
        <input type="text"className="form-control" id="exampleInputWebsite"/>
  </div>

   
   <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input onChange={(e)=>{setValues({...allValues, username : e.target.value})}} type="text"className="form-control" id="exampleInputEmail1" />
  </div>

  <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onChange={(e)=>{setValues({...allValues, password : e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className='btn-cont'>
        <button type="submit" className ="btn ">Add</button>
        <p className='text-danger mt-1'>{allValues.errorMsg}</p>
  </div>
</form>


        </div>
    )
}

export default Login;