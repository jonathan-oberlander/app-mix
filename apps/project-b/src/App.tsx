import { useMangas } from "../../host/src/store";

function App() {
  const [all, getYear] = useMangas();

  return (
    <div>
      <h3>APP B</h3>
      <p>
        State is stored in Host: Managa Naruto started in: {getYear("Naruto")}
        <br />
        App B can only comsume Host State
      </p>
      <pre>{JSON.stringify(all, null, 2)}</pre>
    </div>
  );
}

export default App;
