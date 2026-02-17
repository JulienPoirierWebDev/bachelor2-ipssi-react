import BlockWithoutImg from "./BlockWithoutImg";
import BlocWithImg from "./BlocWithImg";

const Grid = () => {
  const blocs = {
    brand: {
      img: "/desktop/image-transform.jpg",
      title: "Transform your brand",
      paragraph:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    },
    standOut: {
      img: "/desktop/image-stand-out.jpg",
      title: "Stand out to the right audience",
      paragraph:
        "Using a collaborative formula of designers, researchers,photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    },
    graphicDesign: {
      img: "/desktop/image-graphic-design.jpg",
      title: "Graphic Design",
      paragraph:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    photography: {
      img: "public/desktop/image-photography.jpg",
      title: "Photography",
      paragraph:
        " Increase your credibility by getting the most stunning,high-quality photos that improve your business image.",
    },
  };
  return (
    <>
      <div className="grid">
        <BlockWithoutImg
          title={blocs.brand.title}
          paragraph={blocs.brand.paragraph}
        />
        <BlocWithImg slug={blocs.brand.img} />
        <BlocWithImg slug={blocs.standOut.img} />

        <BlockWithoutImg
          title={blocs.standOut.title}
          paragraph={blocs.standOut.paragraph}
        />

        <BlocWithImg
          slug={blocs.graphicDesign.img}
          title={blocs.graphicDesign.title}
          paragraph={blocs.graphicDesign.paragraph}
        />

        <BlocWithImg
          slug={blocs.photography.img}
          title={blocs.photography.title}
          paragraph={blocs.photography.paragraph}
        />
      </div>
    </>
  );
};

export default Grid;
