import React from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import DeleteOutlineSharpIcon from "@mui/icons-material/Delete";

import useTodoLogic from "./Functions";

const TodoApp = () => {
  const {
    // tasks,
    activeTab,
    newTaskName,
    setNewTaskName,
    handleAddTask,
    handleTabChange,
    toggleTaskCompletion,
    handleDeleteTask,
    handleDeleteAll,
    filteredTasks,
  } = useTodoLogic();

  return (
    <Container className="container" maxWidth="sm">
      <h1 className="h1">#todo</h1>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={9}>
          <TextField
            size="medium"
            variant="outlined"
            fullWidth
            label="Add details"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            size="large"
            id="addButton"
            variant="contained"
            color="primary"
            onClick={handleAddTask}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "10px" }}>
        <Tabs
          variant="fullWidth"
          className="tabButton"
          value={activeTab}
          onChange={handleTabChange}
        >
          <Tab id="tab" label="All" value="all" />
          <Tab id="tab" label="Active" value="active" />
          <Tab id="tab" label="Completed" value="completed" />
        </Tabs>
      </Box>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredTasks().map((task) => (
            <ListItem key={task.id} className="task-row">
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "grey" : "black",
                  }}
                >
                  {task.name}
                </span>
              </div>
              {activeTab === "completed" && (
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <DeleteOutlineSharpIcon fontSize="large" />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
        </ul>
        {activeTab === "completed" && (
          <div id="delete-button">
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteOutlineSharpIcon />}
              onClick={handleDeleteAll}
            >
              Delete All
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TodoApp;
