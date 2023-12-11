import React, { useState } from 'react';
import './popup.css';
import back from '../../assets/back.png';
import { FaCheckCircle } from "react-icons/fa";
function App() {
  const [openPopUp1, setOpenPopUp1] = useState(true);
  const [openPopUp2, setOpenPopUp2] = useState(false);
  const [openPopUp3, setOpenPopUp3] = useState(false);

  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);

  const handleNext = () => {
    setOpenPopUp1(false);
    setOpenPopUp2(true);
  };

  const resetPopups = () => {
    setOpenPopUp1(true);
    setOpenPopUp2(false);
    setOpenPopUp3(false);
  };

  const goTo = () => {
    setOpenPopUp3(true);
    setOpenPopUp2(false);
  };

  const goTo2 = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(true);
  };

  const toggleItemSelection1 = (label) => {
    const isSelected = selectedItems1.includes(label);
    setSelectedItems1((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const toggleItemSelection2 = (label) => {
    const isSelected = selectedItems2.includes(label);
    setSelectedItems2((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const toggleItemSelection3 = (label) => {
    const isSelected = selectedItems3.includes(label);
    setSelectedItems3((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const done = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(false);
    setOpenPopUp1(false);
    localStorage.setItem('popUp', 'true');
    // You can now use the selectedItems1, selectedItems2, selectedItems3 arrays as needed
    console.log('Selected Items PopUp1:', selectedItems1);
    console.log('Selected Items PopUp2:', selectedItems2);
    console.log('Selected Items PopUp3:', selectedItems3);
  };

  const data1 = [
    { text: 'What are you interested in?' },
    { text: 'Step 1', boxes: [{ id: 'box1_1', label: 'Label 1' }, { id: 'box1_2', label: 'Label 2' }, { id: 'box1_3', label: 'Label 3' }, { id: 'box1_4', label: 'Label 4' }] },
    { text: 'Step 2', boxes: [{ id: 'box2_1', label: 'Label A' }, { id: 'box2_2', label: 'Label B' }, { id: 'box2_3', label: 'Label C' }, { id: 'box2_4', label: 'Label D' }] },
    { text: 'Step 3', boxes: [{ id: 'box3_1', label: 'Choice X' }, { id: 'box3_2', label: 'Choice Y' }, { id: 'box3_3', label: 'Choice Z' }, { id: 'box3_4', label: 'Choice W' }] },
  ];

  const data2 = [
    { text: 'Next step! Choose your favorite city.' },
    { text: 'City', labels: ['New York', 'London', 'Tokyo'] },
    { text: 'City', labels: ['Paris', 'Sydney', 'Berlin'] },
  ];

  const data3 = [
    { text: 'Last step! Tell us your hobbies.' },
    { text: 'Hobbies', labels: ['Reading', 'Gaming', 'Traveling'] },
    { text: 'Hobbies', labels: ['Cooking', 'Photography', 'Sports'] },
  ];

  return (
    <div className="App">
     {openPopUp1 && (
  <div className='popup1'>
    <div className='cont1'>
      {data1.map((item, index) => (
        <React.Fragment key={index}>
          <p className='text'>{item.text}</p>
          {item.boxes && (
            <div className='row'>
              {item.boxes.map((box, boxIndex) => (
                <div
                  className={`box firstbox ${selectedItems1.includes(box.id) ? 'selected' : ''}`}
                  key={box.id}
                  onClick={() => toggleItemSelection1(box.id)}
                >
                  {/* <img src="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full' alt="" /> */}
                  {/* <b className='bel'>{label}</b> */}
                  <FaCheckCircle className={`absolute tickicon ${selectedItems1.includes(box.id)?"block":"hidden"}`}/>
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <button className='next' onClick={handleNext}>
        Next
      </button>
    </div>
  </div>
)}
      {openPopUp2 && (
        <div className='popup1'>
          <div className='cont1'>
            {data2.map((item, index) => (
              <React.Fragment key={index}>
                <p className='text'>{item.text}</p>
                {item.labels && (
                  <div className='row'>
                    {item.labels.map((label, labelIndex) => (
                      <div
                        className={`below ${selectedItems2.includes(label) ? 'selected' : ''}`}
                        key={labelIndex}
                        onClick={() => toggleItemSelection2(label)}
                      >
                        <div className='box secondbox' >
                          {/* <img src="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                  <FaCheckCircle className={`absolute tickicon ${selectedItems2.includes(label)?"block":"hidden"}`}/>
                        
                        <b className='bel'>{label}</b>

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <button className='next' onClick={goTo}>
              Next
            </button>
          </div>
        </div>
      )}
      {openPopUp3 && (
        <div className='popup1'>
          <div className='cont1'>
            <div className='head'>
              <img src={back} className='back' onClick={goTo2} alt='Back' />
              <p className='text'>{data3[0].text}</p>
            </div>
            {data3.slice(1).map((item, index) => (
              <React.Fragment key={index}>
                <p className='text'>{item.text}</p>
                {item.labels && (
                  <div className='row'>
                    {item.labels.map((label, labelIndex) => (
                      <div
                        className={`below ${selectedItems3.includes(label) ? 'selected' : ''}`}
                        key={labelIndex}
                        onClick={() => toggleItemSelection3(label)}
                      >
                        <div className='box thirdbox'>
                  <FaCheckCircle className={`absolute tickicon ${selectedItems3.includes(label)?"block":"hidden"}`}/>

                        <b className='bel'>{label}</b>
                        </div>
                     
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <button className='next' onClick={done}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
