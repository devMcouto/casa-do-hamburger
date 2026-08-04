import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const [isCheking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = document.cookie;
    if (cookie) {
      const cookies = cookie.split("; ");
      const userCookie = cookies.find((c) => c.startsWith("user="));
      if (userCookie) {
        navigate("/", { replace: true });
        return;
      }
    }
    setIsChecking(false);
  }, [navigate]);
  if (isCheking) {
    return <div>Loading...</div>;
  }
  return <div>{children}</div>;
};

export default PublicRoute;
