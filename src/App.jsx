import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [allValues, setValues] = useState({
    userlist: [],
    showLoader: false
  });

  const fetchApi = async () => {
    setValues({ ...allValues, showLoader: true });
    const api = 'https://gorest.co.in/public/v2/users';

    try {
      const response = await fetch(api);
      const data = await response.json();
      if (response.ok === true) {
        setValues({ ...allValues, userlist: data, showLoader: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={fetchApi} className='btn btn-primary'>Fetch</button>
      <br /><br />

      {allValues.showLoader ? (
        <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      ) : (
        <div className="cards-cont">
          {allValues.userlist.map((user) => (
            <div key={user.id} className="card">
              <ul>
                <h2>{user.name}</h2>
                <br />
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>Status: {user.status}</p>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
