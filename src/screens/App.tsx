// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Dashboard from './Inicio';
import Profile from './Profile';
import Contact from './Contact';
import Header from '../components/header';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';

function App() {
  return (
    <main className='flex flex-row-[1fr_50px] w-screen h-screen bg-app-white font-roboto'>

      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <Header />
        <section className='bg-white-300'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/habilidades' element={<Habilidades />} />
            <Route path='/miperfil' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </section>
        {/* <Footer /> */}
      </section>
      <Navbar justify-between/>
    </main>
  );
}

export default App;
