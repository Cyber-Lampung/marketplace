import HeaderRight from "./Navbar";

const Header = () => {
  return (
    <header className="p-6 bg-blue-800 flex items-center justify-between sticky top-0 z-10">
      <div className="headerLeft">
        <div className="Judul  text-white">
          <p className="text-3xl font-semibold">MiniMart</p>
          <p className="text-xs text-stone-200">
            sulusi produk murah dan lengkap untuk anda
          </p>
        </div>
      </div>

      <div>
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
