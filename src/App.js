import React, { Component } from 'react';
import Navigation from './components/navigation';
import './App.css';
import { Task } from './task.json';
import TaksForm from './components/TaksForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      Task
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(task) {
    this.setState({
      Task: [...this.state.Task, task]
    })
  }

  removeTodo(index) {
    this.setState({
      Task: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {
    const tasks = this.state.Task.map((task, i) => {
      return (
       <div className="col-md-4">
           <div className= "card mt-4">  
          <div className="card-header">
            <h3>{task.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {task.priority}
            </span>
          </div>
          <div class className="card-body">
            <p>{task.description}</p>
            <p><mark>{task.responsible}</mark></p>
          </div>
          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
        </div>
       </div>
      )
    })

    return (
      <div className="App">
      <Navigation counter={this.state.Task.length}/>
      <div className="container"> 
        <di className="row mt-4">
        <div className="col-md-4 text-center">
              <TaksForm onAddTodo={this.handleAddTodo}></TaksForm>
            </div>
            <div className="col-md-8">
              <div className="row">
              {tasks}
              </div>
            </div>

        </di>
      </div>
      </div>
    );
  }
}

export default App;
