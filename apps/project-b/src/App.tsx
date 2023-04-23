import { useCount, useMangas } from "atom-store";
import { useHostContextValue } from "../../host/src/App";
import "./styles.css";

function App() {
  const [all, getYear] = useMangas();
  const [count, setCount] = useCount();
  const { state, setState } = useHostContextValue();

  return (
    <div>
      <h2>APP B</h2>
      <p className="styled">
        State sharing beween apps and host with outlet <b>Context</b> and{" "}
        <b>Jotai</b>
      </p>
      <section className="app_b">
        <div>
          <h4>OUTLET Context</h4>
          You can update the host via outlet context - Less performant than
          Atomic state: (it will re-render the Host) but good for values that
          don't change often.
          <br />
          <input
            type="text"
            placeholder="Update host context"
            onChange={(e) =>
              setState?.((s) => ({ ...s, message: e.target.value }))
            }
          />
          <pre>{JSON.stringify(state)}</pre>
        </div>

        <div>
          <h4>JOTAI Atomic state</h4>
          <p>
            Atom stored in Host, this is just a read but can be updated too:{" "}
            {getYear("Naruto")}
          </p>
          <pre>{JSON.stringify(all, null, 2)}</pre>
          <button onClick={() => setCount(count + 1)}>
            Increase Count in Store (Host)
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
