import React, { useState} from "react";
import Functional from './Component/Functional';
import Classbased from './Component/Classbased';
import './App.css';
import './Component/style.css';


function App() {

  const [show, setShow] = useState({state:false})
  const[showc, setShowc] = useState({state:false})

  const Functionalstate = () =>{
    show.state ? setShow({state:false}) : setShow({state:true})
  }
  const Classstate = () =>{
      showc.state ? setShowc({state:false}) : setShowc({state:true})
  }
  return ( 

    <div className="App"> 

    <div className="container-fluid mt-3">
    <div className="row d-flex justify-content-center">
    
    <h1 className='heading mb-4'>Styling using Functional and Class Component </h1>
   
    <div className="col-md-4 buttons mb-5 mb-md-0">
      <button onClick={ () => Functionalstate()} > Styling using Functional Component</button>
    </div>

     <div className="col-md-4 buttons mb-5 mb-md-0">
       <button  onClick={() => Classstate()} > Styling using Class Component</button>
     </div>

    </div>
    </div>

      
      <div className="container">
      <div className="row">
      
      <div className="col-md-6">
      {show.state && <Functional /> }
      </div>

      <div className="col-md-6">
      {showc.state && <Classbased />}
      </div>

    </div>
    </div>

    </div>
 
   

    

   
  );


}



export default App;
