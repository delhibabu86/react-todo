/**
 * Created by DVengamBhanumoorthy on 2/15/2018.
 */

import React from 'react';
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Checkbox from 'material-ui/Checkbox';

const strikeThrough = { textDecoration: 'line-through' };

const Todo = ({ id, todoName, removeTodo, todoCompleted, checked }) => {
  const listStyles = checked ? strikeThrough : null;
  return (
    <ListItem
      leftIcon = {
        <div style={{display : 'flex'}}>
          <Checkbox onCheck={ () => {(todoCompleted(id)) }} />
        </div>
      }
      rightIconButton ={
      <div style={{display : 'flex'}}>
        <IconButton tooltip="Remove" onClick = { (e) => (removeTodo(id))}>
          <DeleteIcon/>
        </IconButton>
      </div>
    }>
      <div style={{display: 'flex'}}>
        <li style={listStyles} >{ todoName }</li>
      </div>
      <Divider/>
    </ListItem>
  )};

export default Todo;