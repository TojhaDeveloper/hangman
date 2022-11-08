import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { KeyBoard } from "./KeyBoard";
import { UserInput } from "./UserInput";
import words from "./wordList.json";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedWord, setGuessedWord] = useState<string[]>([]);

  const incorrectGuesses = guessedWord.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedWord.includes(letter));
  const isLoser = incorrectGuesses.length >= 6;
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedWord.includes(letter) || isLoser || isWinner) return;
      setGuessedWord((currentLetter) => [...currentLetter, letter]);
    },
    [guessedWord, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedWord]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedWord([])
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedWord]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isLoser && "Nice Try..Refresh to Try Again"}
        {isWinner && "Winner!..Refresh to Try Again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <UserInput
        guessedLetter={guessedWord}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <KeyBoard
          inactiveLetters={incorrectGuesses}
          disabled={isLoser || isWinner}
          addGuessedLetter={addGuessedLetter}
          activeLetters={guessedWord.filter((l) => wordToGuess.includes(l))}
        />
      </div>
    </div>
  );
}

export default App;
