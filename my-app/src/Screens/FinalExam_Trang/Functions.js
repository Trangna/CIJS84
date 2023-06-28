import { useState } from "react";

const useTodoLogic = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Do Code Challenges", completed: false },
    { id: 2, name: "Do Code Challenges", completed: false },
    { id: 3, name: "Do Code Challenges", completed: true },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const [newTaskName, setNewTaskName] = useState("");

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== "") {
      addTask(newTaskName);
      setNewTaskName("");
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteAll = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = () => {
    if (activeTab === "active") {
      return tasks.filter((task) => !task.completed);
    }
    if (activeTab === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  return {
    tasks,
    activeTab,
    newTaskName,
    setNewTaskName,
    handleAddTask,
    handleTabChange,
    toggleTaskCompletion,
    handleDeleteTask,
    handleDeleteAll,
    filteredTasks,
  };
};

export default useTodoLogic;
