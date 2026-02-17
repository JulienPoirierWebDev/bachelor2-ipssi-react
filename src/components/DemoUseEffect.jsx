import { useEffect } from "react";

const DemoUseEffect = () => {
  useEffect(() => {
    console.log("Je me lance au montage du composant.");

    return () => {
      console.log("Je me lance au démontage du composant");
    };
  }, []);
  return (
    <>
      <p>Quelque chose</p>
    </>
  );
};

export default DemoUseEffect;
