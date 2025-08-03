import React from "react";

export const ProductSkeleton: React.FC = () => (
  <div className="bg-secondary border border-primary rounded-lg overflow-hidden animate-pulse">
    <div className="h-56 bg-primary"></div>
    <div className="p-6 space-y-4">
      <div className="h-4 bg-primary rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-primary rounded"></div>
        <div className="h-3 bg-primary rounded w-5/6"></div>
        <div className="h-3 bg-primary rounded w-2/3"></div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="h-6 bg-primary rounded w-20"></div>
        <div className="h-10 bg-primary rounded w-24"></div>
      </div>
    </div>
  </div>
);
