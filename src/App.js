import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';


export default function App() {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <Main />
    </div>
  );
}
