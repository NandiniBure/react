import './App.css';
import {Navbar}  from './Components/Navbar/navbar';
import { Main } from './Components/Main/main';
import { Maintwo } from './Components/Maintwo/maintwo';
import {Mainthree} from './Components/Mainthree/mainthree';
import { Mainfour } from './Components/Mainfour/mainfour';
import { Mainfive } from './Components/Mainfive/mainfive';
import { Footer } from './Components/Footer/footer';
import { Finalfooter } from './Components/Finalfooter/finalfooter';


function App() {
  return (
    <div className="App">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
       <Navbar/>
       <Main/>
       <Maintwo/>
       <Mainthree/>
       <Mainfour/>
       <Mainfive/>
       <Footer/>
       <Finalfooter/>
    </div>
  );
}

export default App;
