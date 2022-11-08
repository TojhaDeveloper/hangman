const HEAD = (
  <div
    style={{
      position: "absolute",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      top: "50px",
      right: "-30px",
      border: "10px solid black",
    }}
  />
);
const BODY = (
  <div
    style={{
      position: "absolute",
      width: "10px",
      height: "100px",
      top: "120px",
      right: "0px",
      background: "black",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      top: "150px",
      right: "-100px",
      background: "black",
      rotate: "-30deg",
      transformOrigin: "bottom left",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      top: "150px",
      right: "10px",
      background: "black",
      rotate: "30deg",
      transformOrigin: "bottom right",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      top: "210px",
      right: "-90px",
      background: "black",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      top: "210px",
      right: "0px",
      background: "black",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div
        style={{
          height: "50px",
          background: "black",
          width: "10px",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          background: "black",
          width: "200px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          background: "black",
          width: "10px",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};
