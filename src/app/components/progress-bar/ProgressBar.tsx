import React from "react";

export function ProgressBar({
  percentCompletion,
  showTitle = false,
  customTitle,
}: {
  percentCompletion: number;
  showTitle?: boolean;
  customTitle?: string;
}) {
  return (
    <div className="progress-bar-wrapper">
      {showTitle && (
        <div className="title">
          <span>{customTitle || "OVERALL PROGRESS"}</span>
        </div>
      )}
      <div className="progress-bar">
        <div className="value" style={{ width: `${percentCompletion}%` }}></div>
      </div>
    </div>
  );
}
