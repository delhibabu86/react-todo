import React, { Component} from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';
import Filter from '../components/filter';
import fetchAllTodos from '../common/todosApi';

const style = {
  minHeight: 100,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

const apiUrl = 'https://5a8b8dea3d92490012370c03.mockapi.io/api/v1/todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.todoCompleted = this.todoCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.filterCompletedTodos = this.filterCompletedTodos.bind(this);
    this.filterAllTodos = this.filterAllTodos.bind(this);
    this.filterActiveTodos = this.filterActiveTodos.bind(this);
    this.state = {
      todos: [],
      text: '',
    };
  }

  componentDidMount(){
     fetchAllTodos()
      .then((data) => {
      this.setState({ todos: data });
      });
   }


 addTodo(todoItem){
    if(todoItem === '') return;
    const todo = { text: todoItem, checked: false };
    fetch(apiUrl,{
      body: JSON.stringify(todo),
      cache : 'no-cache',
      credentials : 'same-origin',
      headers : {
        'Content-Type':'application/json',
        Accept: 'application/json',
      },
      method:'POST'
    })
      .then( response => response.json() )
      .then((data) => {
      this.setState({
        todos:[
          ...this.state.todos,
          data
        ]
      });
      });
   this.setState({text: '' });
 }

  todoCompleted(id) {
     const todo = { id: id, checked: true };
    fetch(apiUrl+ "/" + id,{
      body: JSON.stringify(todo),
      cache : 'no-cache',
      credentials : 'same-origin',
      headers : {
        'Content-Type':'application/json',
        Accept: 'application/json',
      },
      method:'PUT'
    })
      .then( response => response.json() )
      .then((data) => {
        this.setState({
          todos:[
            ...this.state.todos,
            data
          ]
        });
      });

 }

  removeTodo(id) {
    fetch(apiUrl + "/" + id,{
      cache : 'no-cache',
      credentials : 'same-origin',
      headers : {
        'Content-Type':'application/json',
        Accept: 'application/json',
      },
      method:'DELETE'
    })
      .then( response =>  response.status )
      .then((data) => {
      if(data === 200) {
          const finalTodos = this.state.todos.filter((todo) => {
         if(todo.id !== id) return todo;
         return null;
         });
         this.setState({todos : finalTodos});
      }
      });
 }

 onChange(task){
   this.setState({text: task});
 }

 filterCompletedTodos(){
   fetchAllTodos()
     .then((data) => {
       const filterTodos = data.filter((todo) =>  todo.checked);
       this.setState({todos : filterTodos });
     });
 }

  filterAllTodos() {
    fetchAllTodos()
      .then((data) => {
        this.setState({ todos: data });
      });
  }


  filterActiveTodos() {
      fetchAllTodos()
      .then((data) => {
        const activeTodos = data.filter((todo) => {
          return todo.checked === false;
        });
        this.setState({todos: activeTodos});
      });
  }

  render(){
    return(
      <MultiThemeProvider>
        <div>
        <AppBar title="React ToDo App" />
        <Paper style={style} zDepth={5} rounded = {false}>
          <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <AddTodo  addTodo ={ this.addTodo }  text = { this.state.text } onChange = { this.onChange }/>
          </div>
          <div>
          <TodoList todos = { this.state.todos }
                    removeTodo={ this.removeTodo }
                    todoCompleted={ this.todoCompleted }
          />
          </div>
          <div style={{display : 'inline'}}>
            <Filter
              filterCompletedTodos = { this.filterCompletedTodos }
              filterAllTodos = { this.filterAllTodos }
              filterActiveTodos = { this.filterActiveTodos }
              todos={ this.state.todos }
            />
          </div>
        </Paper>
        </div>
      </MultiThemeProvider>
    )};
}

export default App;
