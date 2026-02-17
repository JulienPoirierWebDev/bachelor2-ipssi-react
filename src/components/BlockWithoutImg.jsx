import Button from "./atoms/Button";
import Paragraph from "./atoms/Paragraph";
import SectionTitle from "./atoms/SectionTitle";

const BlockWithoutImg = ({ title, paragraph }) => {
  return (
    <div className="bloc-no-img">
      <SectionTitle text={title} />
      <Paragraph text={paragraph} />
      <Button text={"Learn more"} onClick={() => console.log("click button")} />
    </div>
  );
};

export default BlockWithoutImg;
