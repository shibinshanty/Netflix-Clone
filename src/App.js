import React from 'react'
import './App.css';
import{Originals,Actions,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from'./url'
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/Rowpost/Rowpost';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div >
    <Navbar/>
    <Banner/>
    <Rowpost url={Originals} title='Netflix Originals'/>
    <Rowpost url={Actions} title='Action' isSmall />
    <Rowpost url={ComedyMovies}  title='ComedyMovies'   isSmall/>
    <Rowpost url={HorrorMovies} title='HorrorMovies'    isSmall/>
    <Rowpost url={RomanceMovies}  title='RomanceMovies'   isSmall/>
    <Rowpost  url={Documentaries}  title='Documentaries'  isSmall/>
    <Footer/>
    </div>
  );
}

export default App;
