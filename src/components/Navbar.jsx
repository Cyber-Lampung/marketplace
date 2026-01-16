import { checkToken } from "../services/checkToken";
import Button from "./Button";
import Input from "./Input";
import { Cart4, ChatDotsFill, Search } from "react-bootstrap-icons";
import ProfilRegister from "./ProfileRegister";
import ProfileSudahLogin from "./ProfileSudahLogin";

const HeaderRight = () => {
  const token = checkToken();

  return (
    <>
      <div className="flex items-center gap-10 ">
        <div className="InputSearch text-white font-bold bg-white flex items-center p-0.5 pl-2  gap-2 justify-between w-100 rounded-md">
          <div className="flex items-center gap-2 w-full">
            <Search className="text-black w-auto" />
            <Input
              className={
                "border-2 border-none bg-white text-xs font-semibold outline-none text-black w-full"
              }
              placeholder={"Search Produk"}
            />
          </div>
          <Button
            className={"bg-black w-15 h-7 text-xs rounded-md"}
            value={"Search"}
          />
        </div>

        <div className="flex items-center gap-3">
          <ChatDotsFill className="text-white text-2xl" />
          <Cart4 className="text-white text-2xl" />
        </div>

        <div className="profile">
          {token ? <ProfileSudahLogin /> : <ProfilRegister />}
        </div>
      </div>
    </>
  );
};

export default HeaderRight;
