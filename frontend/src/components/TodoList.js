import React, { Component } from 'react';

class Todolist extends Component {
 constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
    };
 }

 toggleCompleted = (index) => {
    let updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
 }

 render() {
    return (
      <ul>
        {this.state.todos.map((todo, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => this.toggleCompleted(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    );
 }
}

export default Todolist;