import React from 'react';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stateTasks: tasks,
      taskName: "",
      id: "",
      completed:""
    }
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.taskName]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      taskName: this.state.taskName,
      id: this.state.Date.now,
      completed: false
    };
    this.setState(prevState => {
      return {
        stateStudents: [...prevState.stateTasks, newTask],
        taskName: "",
        id: "",
        completed: ""
      };
    });
    
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
