import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="bg-primary text-primary w-[var(--sidebar-width)] min-h-screen px-4 py-6 border-r border-secondary flex flex-col justify-start fixed left-0 top-0">
      <h2 className="text-xl font-bold text-accent pb-20 text-center">
        Dark Menu
      </h2>
      <div className="flex flex-col gap-4 justify-center">
        <NavLink to="/home" className="text-center">
          Home
        </NavLink>
        <NavLink to="/about" className="text-center">
          About
        </NavLink>
        <NavLink to="/contact" className="text-center">
          Contact
        </NavLink>
      </div>
    </aside>
  );
};
