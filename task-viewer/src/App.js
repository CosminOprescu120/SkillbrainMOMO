import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
// import MyFirstComponent from "./components/MyFirstComponent";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "12 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "12 Create a Design System for Enum Workspace.",
      status: "Done",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2021, 1, 24),
    },
    {
      id: "T-1",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2021, 1, 24),
    },
  ];

  return (
    <div>
      <header className="App-header">Task Manager</header>
      <div className="app-container">
        <div className="App"></div>
        <TaskCard
          id={data[0].id}
          status={data[0].status}
          name={data[0].name}
          dueDate={data[0].dueDate}
        />
        <TaskCard
          id={data[1].id}
          status={data[1].status}
          name={data[1].name}
          dueDate={data[1].dueDate}
        />
        <TaskCard
          id={data[2].id}
          status={data[2].status}
          name={data[2].name}
          dueDate={data[2].dueDate}
        />
        <TaskCard
          id={data[3].id}
          status={data[3].status}
          name={data[3].name}
          dueDate={data[3].dueDate}
        />
        <TaskCard
          id={data[4].id}
          status={data[4].status}
          name={data[4].name}
          dueDate={data[4].dueDate}
        />
        <TaskCard
          id={data[5].id}
          status={data[5].status}
          name={data[5].name}
          dueDate={data[5].dueDate}
        />
        <TaskCard
          id={data[6].id}
          status={data[6].status}
          name={data[6].name}
          dueDate={data[6].dueDate}
        />
      </div>
    </div>
  );
}

export default App;
