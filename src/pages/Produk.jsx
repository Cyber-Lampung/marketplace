import Header from "../components/Header";
import CardProduk from "../components/CardProduk";

const Produk = () => {
  document.title = "Home MarketPlace";

  return (
    <>
      <Header />
      <section className="mt-10 ml-10 flex gap-5">
        <CardProduk />
      </section>
    </>
  );
};

export default Produk;
