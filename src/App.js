import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      todoList: [],
    };
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onClickBtn = () => {
    const { inputValue, todoList } = this.state;

    this.setState({
      todoList: [inputValue, ...todoList],
      inputValue: '',
    });
  }

  onRemoveTodo = (todoName) => {
    const { todoList } = this.state;

    const todoIndex = todoList.findIndex((str) => str === todoName);
    const newTodoList = [...todoList.slice(0, todoIndex), ...todoList.slice(todoIndex + 1)];

    this.setState({
      todoList: newTodoList,
    });
  }

  render() {

    const {inputValue, todoList} = this.state;

    return(
      <div>

        <div className="title">
          <h1>Список дел</h1>
        </div>

        <div className="control">
          <Input
            value={inputValue}
            onChange={this.onChangeInput}
          />
          <Button
            name = "Добавить дело"
            onClick = {this.onClickBtn}
          />
        </div>

        <div className = "table">
          {todoList.map((todoStr) => {
            return (
              <ListItem
                key={todoStr}
                todoName={todoStr}
                remove={this.onRemoveTodo}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default App;
