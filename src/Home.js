import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const [auth ,setauth]=useState(false);
  const [message,setMessage]=useState('');
  const [email,setemail]=useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8000/home')
      .then(res => {
        if (res.data.Status === "Success") {
          setauth(true);
          setemail(res.data.Email); // Change this line to use res.data.Email
        } else {
          setauth(false);
          setMessage(res.data.Error);
        }
      });
  }, []);
  const handelDelete = () => {
    axios.get('http://localhost:8000/logout')
      .then(res => {
        window.location.reload(true);
        // Change this line to use res.data.Email
      })
      .catch(err => console.log(err));
  };
  
  
  return (
    <div>
      { 
      auth ?
      <div>
        <h3> you are authorized {email}</h3>
        <button onClick={handelDelete}>logout</button>
      </div>
      : 
      <div>
        <h3> you are NOT  authorized </h3>
      <Link to ="login"> <h3>login now</h3></Link> 
      <h3>{message}</h3>
        
      </div>
      
    }
     
    </div>
  )
}

export default Home
