import { Link, Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useCount } from "atom-store";
import "./App.css";

export type ContextType = {
  state: string;
  setState?: React.Dispatch<React.SetStateAction<{ user: string }>>;
};

export const useHostContextValue = () => useOutletContext<ContextType>();

function App() {
  const [state, setState] = useState<ContextType>();
  const [count] = useCount();

  return (
    <>
      <div>
        <h1>Host Application</h1>
        <p>
          Owns the main routing tree and lazy loads the apps A and B (code
          splitting)
          <br />
          It also provides state & common styles
        </p>
        <nav>
          <Link to="a">Application A</Link> <Link to="b">Application B</Link>
        </nav>
        {count}
        <hr />
      </div>
      <div>
        <Outlet context={{ state, setState }} />
      </div>
    </>
  );
}

export default App;
