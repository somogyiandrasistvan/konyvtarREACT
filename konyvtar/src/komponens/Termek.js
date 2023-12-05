import "./Termek.css";

function Termek(props) {
  function katt() {
    props.katt(props.ertek);
  }
  return (
    <div className="elem">
      <h2>{props.ertek.konyvcim}</h2>
      <h3>{props.ertek.szerzo}</h3>
      <h3>{props.ertek.ar}</h3>
      <button onClick={katt}>ok</button>
    </div>
  );
}

export default Termek;
