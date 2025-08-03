import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { useTheme } from "../../../context";
import { ThemeSwitcher } from "../themeSwitcher";
import { useScreenSize } from "../../../hooks";

export const AppLayout = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const screenSize = useScreenSize();

  const isDesktop = screenSize === "desktop";

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [pathname, navigate]);

  const isDark = theme === "theme2";

  return (
    <div className="bg-primary text-primary">
      {isDark && isDesktop ? (
        <div className="flex">
          <Sidebar />
          <main className="pl-[var(--sidebar-width)] w-full h-full">
            {isDark && (
              <div className="w-full flex justify-end p-6">
                <div className="w-1/4">
                  <ThemeSwitcher />
                </div>
              </div>
            )}
            <Outlet />
          </main>
        </div>
      ) : (
        <>
          <Header />
          <main className="pt-[var(--header-height)] px-4 py-6 h-full">
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};
