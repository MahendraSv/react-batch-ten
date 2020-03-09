import React, { Component } from 'react';

class Todo extends Component {

  state = {
    newTodoText: '',
    todos: [
      {
        text: 'Learning React',
        completed: true
      },
      {
        text: 'Practicing React',
        completed: false
      },
      {
        text: 'Project in React',
        completed: false
      }
    ]
  };

  addTodo = () => {
    let localTodos = this.state.todos;
    localTodos.push({
      text: this.state.newTodoText,
      completed: false
    });

    this.setState({
      todos: localTodos,
      newTodoText: ''
    });
  };

  changeText = (event) => {
    this.setState({
      newTodoText: event.target.value
    });
  };

  changeCompleted = (index) => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos: todos
    });
  };

  getCompletedTodoCount = () => {
    return this.state.todos.filter(todo => todo.completed === true).length;
  };

  deleteTodo = (index) => {
    let todos = this.state.todos;
    todos = todos.filter((todo, i) => i !== index );
    this.setState({
      todos: todos
    });
  };

  render() {

    let todoLi;

    todoLi = this.state.todos.map((todo, index) => {
      let checked = todo.completed ? {'checked': 'true'} : {};
      let completedStyle = todo.completed ? {color: 'lightgray', backgroundColor: 'yellow'} : {};
      return (
        <li>
          <input type="checkbox" {...checked} onClick={() => this.changeCompleted(index)} />
          <span style={completedStyle}>{todo.text}</span>
          <button className="btn btn-danger" onClick={() => this.deleteTodo(index)}>x</button>
        </li>
      )
    });

    return (
      <div>
        <h2>Todo Application</h2>
        <div>
          Total: <b>{this.state.todos.length}</b>
        </div>
        <div>
          Completed: <b>{this.getCompletedTodoCount()}</b>
        </div>
        New Todo text: <input type="text" value={this.state.newTodoText} onChange={this.changeText} />
        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
        <br />
        <br />
        <ul>
          {todoLi}
        </ul>
      </div>
    );
  }
}

export default Todo;