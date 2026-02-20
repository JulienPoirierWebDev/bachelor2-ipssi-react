import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/panierSlice/panierSlice";

const PageProducts = () => {
  const [albums, setAlbums] = useState([]);
  const panier = useSelector((store) => store.panier);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (id, title) => {
    console.log("j'ai acheté l'album avec l'id " + id);
    dispatch(addItem({ productId: id, title: title }));
  };

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums",
        );

        if (!response.ok) {
          throw new Error("Oh non");
        }

        const data = await response.json();

        setAlbums(data);
      } catch (error) {
        setError("Notre serveur va mal :(" + error);
      }
    };

    getAlbums();
  }, []);

  return (
    <>
      <p>Hello</p>
      {error && <p>{error}</p>}
      {panier.panier.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          {panier.panier.map((item) => {
            return (
              <div>
                <p>{item.title}</p>
                <p>Quantité : {item.quantity}</p>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {albums.length > 0 &&
          albums.map((album) => {
            return (
              <div key={album.id} style={{ width: "300px", margin: "20px" }}>
                <p>{album.id}</p>
                <p>{album.title}</p>
                <button
                  onClick={() => {
                    handleAddToCart(album.id, album.title);
                  }}
                >
                  Acheter
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PageProducts;
