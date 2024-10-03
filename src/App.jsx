import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const api = 'https://gorest.co.in/public/v2/users';
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data);
    };

    fetchApi();
  }, []);

  return (
    <div>
  
      <div className="cards-cont">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <br />
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Status: {user.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
