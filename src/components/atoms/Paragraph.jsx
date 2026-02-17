const Paragraph = ({ text }) => {
  console.log("RENDER PARAGRAPH");

  return <p style={{ lineHeight: "2" }}>{text}</p>;
};

export default Paragraph;
