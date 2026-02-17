const Paragraph = ({ content, imgSlug }) => {
  // La logique ici
  // L'UI ici !
  return (
    <p>
      {content}
      <div style={{ "--backgroundImg": imgSlug }} />
    </p>
  );
};

export default Paragraph;
