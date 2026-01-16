import { useState, useEffect } from "react";
import axios from "axios";

const produk = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    async function getDataProduk() {
      console.log("test");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const dataProduk = await response.json();
        setProduk(dataProduk);
      } catch {
        console.log("error");
      }
    }

    getDataProduk();
  }, []);

  return produk;
};

export default produk;
