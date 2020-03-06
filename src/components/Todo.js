import React, { Component } from 'react';

class Todo extends Component {

  state = {
    newTodoText: '',
    todos: [
      {
        text: 'Learning React',
        completed: false
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

  render() {
    return (
      <div>
        <h2>Todo Application</h2>
        New Todo text: <input type="text" value={this.state.newTodoText} onChange={this.changeText} />
        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
        <br />
        <br />
        <ul>
          {
            this.state.todos.map(todo => <li>{todo.text}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Todo;