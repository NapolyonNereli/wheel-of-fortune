import React, { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import WheelComponent from "react-wheel-of-prizes";

function Spin() {
// mediaquery
const [size, setSize] = useState(0);
const biggerThan315 = useMediaPredicate("(min-width: 315px)");

useEffect(() => {

    // biggerThan315 ? setSize(200) : setSize(150)
    if(biggerThan315) {
        setSize(200)
    }else {
        setSize(150)
    }
    
})

console.log(size)


  const segments = [" deneme", " deneme2", " deneme3", " deneme4"];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div className="flex justify-center ">
      <div className="m-0 p-0">
        <div className="w-3/5 m-auto">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment="won 10"
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={false}
            size={250}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
}

export default Spin;
