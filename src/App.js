import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  // タスクを保存する用の配列tasks[]
  // 新しいタスクを取り出すための変数

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('タスクを入力してください！')
    }
    else{
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  // newTaskが空ならアラート、文字が入力されていればtasksの配列に
  // newTaskを追加しnewTaskを空にする

  const deleteTask = (index) => {
    const updateTask = [...tasks];
    updateTask.splice(index, 1);
    setTasks(updateTask);
  }

  const taskList = tasks.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => deleteTask(index)}>削除</button>
    </li>
  ));
  // map関数で配列内の各要素に対して指定した関数を適用し、新しい配列を生成する

  return (
    <div>
      <h1>ToDo-List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        // inputタグに入力される毎に中の値をnewTaskに更新
        placeholder='新しいタスクを入力'
      />
      <button onClick={addTask}>追加</button>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

export default TodoList;