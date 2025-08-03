import React from "react";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
  <div className="min-h-96 flex items-center justify-center">
    <div className="text-center py-16 px-8 bg-secondary border border-primary rounded-lg max-w-md w-full">
      <div className="text-5xl">⚠️</div>
      <h3 className="text-2xl font-semibold text-primary pt-6">
        Oops! Something went wrong
      </h3>
      <p className="text-secondary pt-4 text-lg">{error}</p>
      <button
        onClick={onRetry}
        className="bg-accent hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-opacity duration-200 text-lg inline-block"
        style={{ marginTop: "2rem" }}
      >
        Try Again
      </button>
    </div>
  </div>
);
