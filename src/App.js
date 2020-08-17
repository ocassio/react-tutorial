import React from 'react';
import ToDoList from './components/ToDoList';
import NewItem from './components/NewItem';
import MouseCoordinates from './components/MouseCoordinates';

let idCounter = 3;

class App extends React.Component {

  state = {
    items: []
  }

  render() {
    return (
      <main>
        <MouseCoordinates />
        <NewItem onAdd={this.handleAddition} />
        <ToDoList items={this.state.items} onDelete={this.handleDelete} onToggle={this.handleToggle} />
      </main>
    );
  }

  async componentDidMount() {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    this.setState({
      items: todos
    });
  }

  handleAddition = name => {
    this.setState({
      items: [
        {
          id: idCounter++,
          name,
          done: false
        },
        ...this.state.items
      ]
    })
  }

  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }

  handleToggle = id => {
    const updatedItems = this.state.items.map(item => ({
      id: item.id,
      name: item.name,
      done: item.id === id ? !item.done : item.done
    }));
    this.setState({
      items: updatedItems
    });
  }
}

export default App;
