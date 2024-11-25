import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

export const Home = () => {
    const navigate = useNavigate();
    const [passwordList, setPasswordList] = useState([]);
    const [site, setSite] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [query, setQuery] = useState('');

    const handleSignOut = () => {
        Cookies.remove('jwtToken');
        navigate('/Login');
    };

    const handleSavePassword = () => {
        if (!site || !user || !pass) {
            alert('Please fill in all fields');
            return;
        }
        setPasswordList([...passwordList, { site, user, pass }]);
        setSite('');
        setUser('');
        setPass('');
    };

    return (
        <div className='container'>
            <h2>Password Manager</h2>
            <div className='passwordForm'>
                <div className='form'>
                    <h3>Add New Password</h3>
                    <input 
                        type='text' 
                        placeholder='Enter Your Website' 
                        value={site} 
                        onChange={(e) => setSite(e.target.value)} 
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Your Username' 
                        value={user} 
                        onChange={(e) => setUser(e.target.value)} 
                    />
                    <input 
                        type='password' 
                        placeholder='Enter Your Password' 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} 
                    />
                    <button className='btn btn-success' onClick={handleSavePassword}>
                        Save
                    </button>
                </div>
            </div>

            <div className='userDetails'>
                <h2>Your Passwords</h2>
                <input 
                    type='search' 
                    placeholder='Search' 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <hr />
                <div id='passwordList'>
                    {passwordList
                        .filter((item) => item.site.includes(query) || item.user.includes(query))
                        .map((item, index) => (
                            <div key={index}>
                                <p>Website: {item.site}</p>
                                <p>Username: {item.user}</p>
                                <p>Password: {item.pass}</p>
                            </div>
                        ))}
                </div>
            </div>
            <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button>
        </div>
    );
};

export default Home;
