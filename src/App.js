import React, { Component } from 'react';
import Footer from './components/Todos/Footer'
import AddTodo from './containers/Todos/AddTodo'
import VisibleTodoList from './containers/Todos/VisibleTodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
    <VisibleTodoList />
    <Footer />
      </div>
    );
  }
}

export default App;
