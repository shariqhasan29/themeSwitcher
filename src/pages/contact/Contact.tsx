import { useTheme } from "../../context";
import { useScreenSize } from "../../hooks/useScreenSize";

export const Contact = () => {
  const { theme } = useTheme();
  const screenSize = useScreenSize();

  const isDark = theme === "theme2";
  const isColorful = theme === "theme3";
  const isDesktop = screenSize === "desktop";

  const getLayoutClasses = () => {
    if (!isDesktop) {
      return "flex flex-col gap-4";
    }

    if (isDark) return "grid grid-cols-3 gap-4";
    if (isColorful) return "flex flex-wrap justify-between gap-4";
    return "flex flex-col gap-4";
  };

  return (
    <main className="main-container bg-primary">
      <div className="container content-wrapper text-primary">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <div className={getLayoutClasses()}>
          {[
            {
              title: "Email",
              desc: "suuport@example.com",
            },
            {
              title: "Phone",
              desc: "+91 98765 43210",
            },
            {
              title: "Address",
              desc: "123 React Lane,\nJS City,\nIndia",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-secondary p-4 rounded-md shadow-md theme-transition w-full min-w-[240px]"
            >
              <h3 className="text-md font-semibold mb-2">{item.title}</h3>
              <p className="text-secondary whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
