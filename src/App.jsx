import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks))
    }
  }, [])
  function addTask() {
    if (taskName.trim() === '') {
      alert('Blank note is not allowed');
      return;
    }
    const updatedTaskList = [...taskList, taskName]
    setTaskList(updatedTaskList);
    setTaskName(''); // Clear the input field after adding a task
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  }

  function deleteTask(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  }

  const taskListContent = taskList.map((task, index) => (
    <div key={ index }>
      <p style={ { display: "inline-block", marginTop: '15px' } }>{ task }</p>
      <button
        onClick={ () => deleteTask(index) }
        style={ { color: 'red', marginLeft: '5px' } }
      >
        <i className="fas fa-trash-alt"></i>
      </button>
      <hr />
    </div>
  ));


  return (
    <>

      <h1>React To-Do</h1>
      <div className='container'>
        <input
          autoFocus
          autoComplete='off'

          type="text"
          value={ taskName }

          onChange={ (e) => setTaskName(e.target.value) }
          placeholder='Enter Task'
        />
        <button onClick={ addTask }>Add</button>
        <br />
      </div>
      { taskListContent }
      <br /><br /><br /><br /><br /><br /><br />
      <small style={{color:'black', fontFamily:'monospace' , fontSize:'1rem', fontWeight:'bold '  }}>
        ©️ shrey |{'       '}
        <a href="https://twitter.com/shrey4875" target='_blank'>
          <i className="fab fa-twitter" ></i>
        </a> |{'       '}
        <a href="https://github.com/shrey890" target='_blank'>
          <i className="fab fa-github"></i>
        </a>
      </small>

    </>
  );
}

export default App;
