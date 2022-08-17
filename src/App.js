import Navbar from './components/Navbar';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import collectShunnLogo from './images/collect-shunn-logo.png';

export default function App() {
  const [loggedOn, setLoggedOn] = useState(false);
  const [userObject, setUserObject] = useState({});
  const [focusedListIndex, setFocusedListIndex] = useState(-1);
  const [usernameInput, setUsernameInput] = useState("");

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
  }, [loggedOn])

  function signOutCallback() {
    setLoggedOn(false);
    setUserObject({});
  }

  function handleNavigate(){
    setFocusedListIndex(-1);
  }

  function handleLoginEnterPress(event){
    if (event.key === "Enter" && event.target.value){
      setLoggedOn(true);
      setUserObject({
        name: event.target.value,
        sub: event.target.value});
    }
  }

  return (
  <>
  {
    loggedOn ?
    <div className='h-screen flex flex-col'>
      <Navbar username={userObject.name} handleSignOut={signOutCallback} handleNavigate={handleNavigate} />
      <Main userID={userObject.sub} focusedListIndex={focusedListIndex} setFocusedListIndex={setFocusedListIndex} />
    </div>
    :
    <div className='flex items-center h-screen'>
      <div className='flex flex-col mx-auto'>
        <img src={collectShunnLogo} alt="Collect Shunn" className='bg-customColor-darkBlue p-8 mb-16 rounded-2xl'></img>
        <div className='text-white bg-customColor-darkBlue p-12 w-fit mx-auto flex flex-col gap-3 items-center rounded-xl'>
          <span className='text-xl mb-3'>Sign in:</span>
          <div id="signInDiv"></div>
          <span className='text-md'>Or</span>
          <input type='text' placeholder='Sign in with username' className='text-black p-1 rounded-sm text-center' value={usernameInput} onChange={event => setUsernameInput(event.target.value)} onKeyDown={handleLoginEnterPress}></input>
        </div>
      </div>
    </div>
  }
  </>
  );
}
