import React from "react";

interface HeroSectionProps {
  themeName: string;
  themeDescription: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  themeName,
  themeDescription,
}) => (
  <section className="min-h-[75vh] flex items-center justify-center text-center">
    <div className="max-w-5xl w-full mx-auto px-4 flex flex-col gap-4">
      <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
        This is <span className="text-accent">{themeName}</span>{" "}
        {themeDescription}
      </h1>
      <p className="text-lg md:text-xl text-secondary leading-relaxed pt-6 mx-auto text-center">
        change the theme to experience new layouts.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">
            1000+
          </div>
          <div className="text-sm text-secondary uppercase tracking-wider font-medium pt-2">
            Products
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">50k+</div>
          <div className="text-sm text-secondary uppercase tracking-wider font-medium pt-2">
            Happy Customers
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">24/7</div>
          <div className="text-sm text-secondary uppercase tracking-wider font-medium pt-2">
            Support
          </div>
        </div>
      </div>
    </div>
  </section>
);
