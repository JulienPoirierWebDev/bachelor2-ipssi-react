import { useState } from "react";
import Paragraph from "../components/atoms/Paragraph";
import SectionTitle from "../components/atoms/SectionTitle";

const NameFeature = ({ instance }) => {
  const [name, setName] = useState("");
  console.log("RENDER " + instance);

  return (
    <>
      <label htmlFor="name">Changer de nom</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(event) => {
          console.log(event.target.value);
          setName(event.target.value);
        }}
        value={name}
      />
      <p>{name}</p>
      <SectionTitle text="Je suis un titre" />
      <Paragraph text="Je suis un paragraphe" />
    </>
  );
};

export default NameFeature;
