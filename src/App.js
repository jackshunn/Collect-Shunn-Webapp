import Navbar from './components/Navbar';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';



export default function App() {
  const [loggedOn, setLoggedOn] = useState(false);
  const [userObject, setUserObject] =useState({});

  function handleCallbackResponse(response){
    const userObject = jwt_decode(response.credential)
    setLoggedOn(true);
    setUserObject(userObject);
  }

  useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
      client_id: "292443313342-jjv1fmgud5ulphs92afacoul5mko5pis.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, [])

  return (
  <>
  {
    loggedOn ?
    <div className='h-screen flex flex-col'>
      <Navbar username={userObject.name} />
      <Main userID={userObject.sub} />
    </div>
    :
    <div className='flex items-center h-screen'>
      <div className='bg-customColor-darkBlue p-12 mx-auto flex flex-col items-center w-1/3 rounded-xl'>
        <span className='text-white text-xl mb-3'>Sign in:</span>
        <div id="signInDiv"></div>
      </div>
    </div>
  }
  </>
    
  );
}
