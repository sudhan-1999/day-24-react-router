import React from 'react'
import Fsd from './Fsd';
import Ds from './Ds';
import Cy from './Cy';
import Carrer from './Carrer';

import {Routes,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className='app'>
    <div className='list' style={{"display":"flex","justify-content": "space-around"}}>
      <ul className='nav'>
        <li><Link to='/'>All</Link></li>
        <li><Link to='/Fsd'>Full Stack Development</Link></li>
        <li><Link to='/Ds'>Data Scienece</Link></li>
        <li><Link to='/Cy'>Cyber Security</Link></li>
        <li><Link to='/Carrer'>Carrer</Link></li>
      </ul>
      </div>
    <Routes>
    <Route path="/" element={<All />} />
    <Route path="/Fsd" element={<Fsd />} />
    <Route path="/Ds" element={<Ds />} />
    <Route path="/Cy" element={<Cy />} />
    <Route path="/Carrer" element={<Carrer />} />
   
    </Routes>
    </div>
  )
}
function All(){
  return(
    <div className='all'>
    <Fsd/>
    <Ds/>
    <Cy/>
  </div>
  )
}

export default App