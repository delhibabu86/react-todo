/**
 * Created by DVengamBhanumoorthy on 2/15/2018.
 */

import React from 'react';
import Todo from './todo';
import List from 'material-ui/List';
import uuid from 'uuid';

const TodoList = ({ todos, removeTodo, todoCompleted }) => {
  if(todos.length > 0) {
    let todoList = todos.map((todo) => {
      return (
        <Todo key={ uuid() }
              todoName={ todo.text }
              id={ todo.id }
              removeTodo={ removeTodo }
              todoCompleted={ todoCompleted }
              checked={ todo.checked }/>
      );
    });
    return (
      <List>
        <ul>{ todoList }</ul>
      </List>
    );
  }
  return null;
}

export default TodoList;