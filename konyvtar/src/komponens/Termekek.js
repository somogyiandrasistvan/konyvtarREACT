import Termek from "./Termek";
import "./Termekek.css";
function Termekek(props) {
  function katt(szoveg) {
    props.katt(szoveg);
  }

  return (
    <div className="termekek">
      {props.lista.map((elem, index) => {
        return <Termek ertek={elem} katt={katt} key={index} index={index} />;
      })}
    </div>
  );
}
export default Termekek;
