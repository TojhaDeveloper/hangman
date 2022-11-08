type UserInputProps = {
  guessedLetter: string[];
  wordToGuess: string;
  reveal: boolean;
};

export const UserInput = ({
  guessedLetter,
  wordToGuess,
  reveal = false,
}: UserInputProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, idx) => {
        return (
          <span
            key={idx}
            style={{
              borderBottom: ".1em solid black",
            }}
          >
            <span
              style={{
                visibility:
                  guessedLetter.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetter.includes(letter) && reveal ? "red" : "green",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};
