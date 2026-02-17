import { useEffect, useState } from "react";

const DemoUseEffect = () => {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Coucou ! " + Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Je me lance au démontage du composant");
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=boolean",
      );
      const data = await response.json();

      setQuestions(data.results);
      return data;
    };

    getData;
  }, []);

  useEffect(() => {
    console.log(
      "Je suis du code qui s'exécute quand questions change de valeur",
    );
  }, [questions]);
  return (
    <>
      <p>Quelque chose</p>

      {questions
        ? questions.map((question) => {
            return <p>{question.question}</p>;
          })
        : null}
    </>
  );
};

export default DemoUseEffect;
