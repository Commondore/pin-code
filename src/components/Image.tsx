import { useSelector } from "react-redux";
import { PinStore } from "../store";

const Image = () => {
  const imageSrc = useSelector((store: PinStore) => store.image);
  return (
    <div>
      <img src={imageSrc} alt="" />
    </div>
  );
};

export default Image;
