import { Routes, Route } from "react-router-dom";

import Produk from "./pages/Produk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Produk />}></Route>
    </Routes>
  );
}

export default App;
