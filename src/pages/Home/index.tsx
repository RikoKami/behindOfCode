import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Estudos com React</h1>

        <Link to="/useEffect">useEffect</Link>
      </header>
    </main>
  );
};
