import myImage from "../assets/images/desktop/image-gallery-cone.jpg";
import Container from "./Container";
import Paragraph from "./Paragraph";

const Test = () => {
  const mesPhrases = [
    "Salut je suis une phrase",
    "Moi aussi !",
    "Je suis contre Discord, ces s***** !",
  ];
  return (
    <>
      <p>Hello world</p>
      <p>Goodbye World</p>
      <Container style={{ "--margin": "30px" }}>
        <Paragraph content="Coucou" bonus="toi" />
        <Paragraph content="Salut" />
      </Container>
      {mesPhrases.map((element) => (
        <Container key={element}>
          <Paragraph content={element} />
        </Container>
      ))}
      2{2}2 + 2{2 + 2}
      <img src={myImage} alt="Text" />
      <img src="/image-gallery-milkbottles.jpg" alt="Text" />
    </>
  );
};

export default Test;
