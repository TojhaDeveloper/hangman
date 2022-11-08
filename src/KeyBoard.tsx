import "./KeyBoard.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  inactiveLetters: string[];
  activeLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled:boolean;
};

export const KeyBoard = ({
  inactiveLetters,
  activeLetters,
  addGuessedLetter,
  disabled = false
}: KeyBoardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActiveKey = activeLetters.includes(key);
        const isInActiveKey = inactiveLetters.includes(key);
        return (
          <button
            className={`button ${isActiveKey ? "active" : ""}${
              isInActiveKey ? "inactive" : ""
            }`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isInActiveKey || isActiveKey || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
