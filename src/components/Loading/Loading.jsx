import Lottie from "react-lottie-player";
import loaderJson from "../../assets/loader.json";

const lottieStyles = {
  width: 150,
  height: 150,
};

const Loading = () => {
  return (
    <div className="flex items-center justify-center  md:justify-items-start md:w-52 mx-auto ">
      <Lottie
        loop
        animationData={loaderJson}
        play
        style={lottieStyles}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
    </div>
  );
};

export default Loading;
