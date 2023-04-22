import { Link, Outlet } from "react-router-dom";
import "./App.css";

const ctx = { value: "I am declared in the Host app" };

function App() {
  return (
    <>
      <div>
        <h1>Host Application</h1>
        <p>Lazy loads + provides state & styles to Apps A and B</p>
        <nav>
          <Link to="a">APP_A</Link> <Link to="b">APP_B</Link>
        </nav>
        <hr />
      </div>
      <div>
        <Outlet context={ctx} />
      </div>
    </>
  );
}

export default App;
