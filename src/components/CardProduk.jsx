// import { Star, StarFill } from "react-bootstrap-icons";
// // import produk from "../Hooks/useProduk";
// import { mockDataProduk } from "../services/mockAPI.data";
// import { useEffect, useState } from "react";

// const CardProduk = () => {
//   const [produk, setProduk] = useState([]);

//   useEffect(() => {
//     setProduk(mockDataProduk);
//   }, []);

//   return (
//     // <div className="hover-3d">
//     //   <div className="card w-40 h-60 p-2 border-2 border-stone-300 shadow-xl rounded-xl ">
//     //     <figure>
//     //       <img
//     //         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//     //         className="rounded-xl w-auto"
//     //       />
//     //     </figure>

//     //     <div className=" mt-6 ">
//     //       <h2 className="text-xs font-bold ... truncate">
//     //         Sepatu Adidas New bagus untuk segala medan
//     //       </h2>
//     //       <div className="star flex text-xs gap-1 mt-10">
//     //         <StarFill className="text-yellow-400" />
//     //         <StarFill className="text-yellow-400" />
//     //         <StarFill className="text-yellow-400" />
//     //         <StarFill className="text-yellow-400" />
//     //       </div>

//     //       <div className="harga mt-2">
//     //         <p className="text-xs font-bold">Rp. 100.000</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="hover-3d">
//       {produk.map((produk) => (
//         <div className="card w-40 h-60 p-2 border-2 border-stone-300 shadow-xl rounded-xl ">
//           <div key={produk.id}>
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 className="rounded-xl w-auto"
//               />
//             </figure>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardProduk;

import { StarFill } from "react-bootstrap-icons";
import produk from "../Hooks/useProduk";
import { useEffect, useState } from "react";

const CardProduk = () => {
  const produkList = produk();

  return (
    // Perbaikan 3: Tambahkan grid agar kartu tersusun rapi
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
      {produkList.map((item) => (
        // Perbaikan 2: Key dipindah ke elemen terluar loop
        <div key={item.id} className="hover-3d">
          <div className="card w-40 h-60 p-2 border-2 border-stone-300 shadow-xl rounded-xl bg-white cursor-pointer">
            <figure>
              <img
                src={item.image}
                className="rounded-xl w-full h-24 object-cover"
                alt={item.category}
              />
            </figure>

            <div className="mt-4">
              {/* Menampilkan Nama Produk */}
              <h2 className="text-xs font-bold truncate">{item.title}</h2>

              {/* Menampilkan Rating berdasarkan data */}
              <div className="star flex text-xs gap-1 mt-2">
                <StarFill className="text-yellow-400" />
                <span className="text-[10px] text-gray-500">
                  {item.rating.rate}
                </span>
              </div>

              {/* Menampilkan Harga dengan format Rupiah */}
              <div className="harga mt-4">
                <p className="text-xs font-bold">
                  $ {item.price.toLocaleString("id-ID")}
                </p>
                <p className="text-[10px] text-gray-400">
                  Stok: {item.rating.count}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduk;
