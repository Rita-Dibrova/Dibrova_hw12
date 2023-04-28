import React from 'react';
import { v4 } from "uuid";
import ToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css';

const ToDoList = (props) => {
  
  const { toDos } = props;
  console.log('render ToDo List')

  return (
    <ol className='list'>
      {toDos.map((toDo) => (
        <ToDoItem key={v4()} toDo={toDo} />
      ))}
    </ol>
  );   
}

export default ToDoList;