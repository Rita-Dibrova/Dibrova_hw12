import React, { useState } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import AdditionalComponent from '../AdditionalComponent/AdditionalComponent';

function App() {
  
  const [toDos, setToDos] = useState([]);
  const [value, setValue] = useState('');

  function addToDo() {
    setToDos([...toDos, value]);
    setValue('');
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return (
    <div style={{textAlign: "center"}}>
      <h2> My Todo List </h2>
      <div>
        <input type="text" placeholder="Create a new ToDo" onChange={handleChange} value={value}/>
        <button style={{marginLeft: "10px"}} onClick={addToDo} disabled={!value}> Add ToDo </button>
      </div>
      <ToDoList toDos={toDos}/>
      <AdditionalComponent/>
  </div>
  );
}

export default App;