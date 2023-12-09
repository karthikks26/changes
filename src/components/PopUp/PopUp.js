import { useState } from 'react';
import './popup.css';
import back from '../../assets/back.png'
function App() {
  const [openPopUp1, setOpenPopUp1]=useState(true)
  const [openPopUp2, setOpenPopUp2]=useState(false)
  const [openPopUp3, setOpenPopUp3]=useState(false)

  const handleNext = () => {
    setOpenPopUp1(false);
    setOpenPopUp2(true);
  };

  const resetPopups = () => {
    setOpenPopUp1(true);
    setOpenPopUp2(false);
  };
  const goTo = () => {
    setOpenPopUp3(true);
    setOpenPopUp2(false);
  };
  const goTo2 = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(true);
  };
  const done = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(false);
    setOpenPopUp1(false);
  };
  return (
    <div className="App">
     {openPopUp1 && (<div className='popup1'>
        <div className='cont1'>
            <p className='text'>What are you interested in?</p>
            <p className='text'>Home land</p>
            <div className='row'>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
            </div>
        <button className='next' onClick={handleNext}>Next</button>
        </div>
    </div>)}
     {openPopUp2 && (<div className='popup1'>
        <div className='cont1'>
          <div className='head'>
            <img src={back} className='back' onClick={resetPopups}></img>
            <p className='text'>Last step! Tell us what you're interested in.</p>
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Home</b>
              </div>  
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Kitchen</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Garden</b>
              </div> 
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
            <div className='below'>
                <div className='box'></div>
                <b className='bel'>Office</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Events</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Mole</b>
              </div> 
            </div>
        <button className='next' onClick={goTo}>Next</button>
        </div>
    </div>)}
     {openPopUp3 && (<div className='popup1'>
        <div className='cont1'>
          <div className='head'>
            <img src={back} className='back' onClick={goTo2}></img>
            <p className='text'>Last step! Tell us what you're interested in.</p>
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Bangalore</b>
              </div>  
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Kolkata</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Hyderabad</b>
              </div> 
            </div>
            <p className='text'>Home land</p>
            <div className='row'>
            <div className='below'>
                <div className='box'></div>
                <b className='bel'>Bangalore</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Hyderabad</b>
              </div> 
              <div className='below'>
                <div className='box'></div>
                <b className='bel'>Kolkata</b>
              </div> 
            </div>
        <button className='next' onClick={done}>Done</button>
        </div>
    </div>)}
    </div>
  );
}

export default App;
