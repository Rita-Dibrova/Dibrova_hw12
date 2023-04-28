import React from "react";
import { v4 } from "uuid";

const ToDoItem = ({ toDo }) => {
  return (
  <li key={v4()}>{toDo}</li>
  )
};

export default ToDoItem;