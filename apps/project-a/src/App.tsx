import { Outlet, Link, useRoutes, useOutletContext } from "react-router-dom";
import { type ContextType } from "../../host/src/App";
import { v } from "some-lib";

function App() {
  const ctx = useOutletContext<ContextType>();

  const element = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "messages",
          element: (
            <>
              <p>Message passed from Host Context</p>
              <pre>{JSON.stringify(ctx.state)}</pre>
            </>
          ),
        },
        {
          path: "tasks",
          element: <p>display the task route</p>,
        },
      ],
    },
  ]);

  return (
    <div>
      <h2>APP A {v()}</h2>
      <p>
        The application renders its own route and receives context from Host
      </p>
      <nav>
        <Link to="messages">Messages from App B</Link> <br />
        <Link to="tasks">Tasks</Link>
      </nav>
      {element}
    </div>
  );
}

export default App;
