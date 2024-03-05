import { useSelector } from "react-redux";
import { PinStore } from "../store";

const Display = () => {
  const { pin, status } = useSelector((store: PinStore) => store);

  const className = ["display"];

  if (status) {
    className.push(status);
  }

  return (
    <div className={className.join(" ")}>
      {pin ? (
        pin.split("").map((pinItem, index) => {
          return <span key={index}>{pinItem}</span>;
        })
      ) : (
        <h4>enter pin</h4>
      )}
    </div>
  );
};

export default Display;
