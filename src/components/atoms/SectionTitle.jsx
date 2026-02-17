const SectionTitle = ({ text }) => {
  console.log("RENDER SECTION TITLE");
  return (
    <h2
      style={{
        fontFamily: "FrauncesBlack",
        fontSize: " var(--font-size-title)",
      }}
    >
      {text}{" "}
    </h2>
  );
};

export default SectionTitle;
