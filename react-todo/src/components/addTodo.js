/**
 * Created by DVengamBhanumoorthy on 2/14/2018.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const AddTodo = ({onChange, addTodo, text }) => {
    return (
      <div>
        <TextField
          id="addTodo"
          type="text"
          className="addToDo"
          name="enterTodo"
          value = { text }
          onKeyUp = { event => event.keyCode === 13 && addTodo(text)}
          onChange={ event => onChange(event.target.value)}
          hintText="Enter your Todo"
        />
        <RaisedButton label="Add" primary={true} style={style}  onClick={() => { addTodo(text) }}/>
      </div>
    )};

export default AddTodo;