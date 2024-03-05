import { useDispatch, useSelector } from "react-redux";
import { addNum, confirm, removeNum } from "../store/pin.reducer";
import { PinStore } from "../store";

const Numpad = () => {
  const isAllow = useSelector((store: PinStore) => store.isAllow);
  const dispatch = useDispatch();

  const onNumAdd = (num: number) => {
    dispatch(addNum(num));
  };

  const onConfirm = () => {
    dispatch(confirm());
  };

  const onReset = () => {
    dispatch(removeNum());
  };

  return (
    <div className="numpad">
      {Array.from(Array(10), (_, index) => {
        return (
          <button onClick={() => onNumAdd(index)} key={index}>
            {index}
          </button>
        );
      })}
      <button onClick={onReset}>&lt;</button>
      <button onClick={onConfirm} disabled={!isAllow}>
        E
      </button>
    </div>
  );
};

export default Numpad;
