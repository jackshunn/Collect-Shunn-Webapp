import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {useState, useEffect} from 'react'


export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/data`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
  // return (
  //   <div className='h-screen flex flex-col'>
  //     <Navbar/>
  //     <Main />
  //   </div>
  // );
}
