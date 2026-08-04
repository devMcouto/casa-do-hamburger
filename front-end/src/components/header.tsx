import { Link, useLocation } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext.tsx";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });
      if (response.status !== 200) {
        console.error("Failed to fetch user data");
        return;
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        console.error("Failed to logout");
        return;
      }
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    handleAuthUser();
  }, [location.pathname]);

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1";
    if (location.pathname === path) {
      return `${baseClass} bg-[#F2DAAC] text-[#161410]`;
    } else {
      return baseClass;
    }
  };
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="hidden items-center gap-2 text-[#F2DAAC] md:flex">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={20} />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={20} />
                  </div>
                </Link>
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1">
                  <Plus size={20} />
                </div>
              </div>
            )}
            <div className="relative cursor-pointer">
              <ShoppingCart size={20} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>{user.name}</p>{" "}
              <LogOut
                onClick={handleLogout}
                size={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="h-[35px] w-[130px] cursor-pointer rounded-sm bg-[#F2DAAC]">
              Entrar
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
