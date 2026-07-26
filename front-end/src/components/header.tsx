import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="logo" />
        <Link to="/login">
          <button className="h-[35px] w-[130px] cursor-pointer rounded-sm bg-[#F2DAAC]">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
