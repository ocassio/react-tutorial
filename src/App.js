import React from 'react';
import ToDoList from './components/ToDoList';
import NewItem from './components/NewItem';

const mockTodos = [
  {
    id: 1,
    name: 'Item 1',
    done: false
  },
  {
    id: 2,
    name: 'Item 2',
    done: true
  }
];

let idCounter = 3;

class App extends React.Component {

  state = {
    items: mockTodos
  }

  render() {
    return (
      <main>
        <NewItem onAdd={this.handleAddition} />
        <ToDoList items={this.state.items} onDelete={this.handleDelete} onToggle={this.handleToggle} />
      </main>
    );
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
