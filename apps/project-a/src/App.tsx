import { Outlet, Link, useRoutes, useOutletContext } from "react-router-dom";

function App() {
  const ctx = useOutletContext<{ value: string }>();

  const element = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "messages",
          element: <>MESSAGES</>,
        },
        { path: "tasks", element: <>TASKS</> },
      ],
    },
  ]);

  return (
    <div>
      <h3>APP A</h3>
      <p>Context passed from Host Outlet:</p>
      <pre>{JSON.stringify(ctx)}</pre>
      <nav>
        <h4>App A routes</h4>
        <Link to="messages">Messages</Link> <Link to="tasks">Tasks</Link>
      </nav>
      {element}
    </div>
  );
}

export default App;
