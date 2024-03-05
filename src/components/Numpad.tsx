import { useDispatch, useSelector } from "react-redux";
import { addNum, confirm, next, removeNum } from "../store/pin.reducer";
import { PinStore } from "../store";

const Numpad = () => {
  const { isAllow, isEnd } = useSelector((store: PinStore) => store);
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

  const onNext = () => dispatch(next());

  return (
    <>
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
      <button className="next" onClick={onNext} disabled={isEnd}>
        {isEnd ? "Больше нет" : "Следующий"}
      </button>
    </>
  );
};

export default Numpad;
