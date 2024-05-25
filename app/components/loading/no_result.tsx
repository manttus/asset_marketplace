import Lottie from "lottie-react";
import loader from "../../../public/lotte/no_result.json";

export default function NoResult() {
  return (
    <div className="flex h-full flex-grow justify-center items-center">
      <Lottie className="h-96 w-96" animationData={loader} />
    </div>
  );
}
