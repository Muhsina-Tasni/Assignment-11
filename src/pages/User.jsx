
import { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);


  //for fetchind data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <>
      <p>User Page</p>
      <ul>
        {/* mapping the datas  and displays*/}
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Phone:</strong> {user.phone}
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
