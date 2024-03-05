import { useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Numpad from "./components/Numpad";
import { useDispatch } from "react-redux";
import { init } from "./store/pin.reducer";
import Image from "./components/Image";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);
  return (
    <div className="game">
      <Image />
      <div className="wrap">
        <Display />
        <Numpad />
      </div>
    </div>
  );
}

export default App;
