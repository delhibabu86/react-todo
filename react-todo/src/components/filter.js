/**
 * Created by DVengamBhanumoorthy on 2/18/2018.
 */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Filter = ({ filterCompletedTodos, filterAllTodos,filterActiveTodos}) => {
  return (
      <div style={{display : 'inline'}}>
        <FlatButton label="All" className = "all" onClick = {() => { filterAllTodos() }}/>
        <FlatButton label="Completed" onClick = {() => filterCompletedTodos() }/>
        <FlatButton label="Active" onClick = {() => filterActiveTodos() } />
      </div>
  )};

export default Filter;