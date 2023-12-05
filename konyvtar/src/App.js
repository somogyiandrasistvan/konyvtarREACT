import KonyvtarModel from "./model/KonytarModel";
import Termekek from "./komponens/Termekek";
import "./App.css";

const kmodel = new KonyvtarModel();

function App() {

  function katt(szoveg) {
    console.log(szoveg);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>KONYVTAR</h1>
      </header>
      <article>
        <Termekek  katt={katt} lista={kmodel.getLista()} />
      </article>
    </div>
  );
}

export default App;
