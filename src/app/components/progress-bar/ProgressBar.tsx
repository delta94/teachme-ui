import React, { useState, useEffect } from "react";

export function ProgressBar({
  percentCompletion = 0,
  showTitle = false,
  customTitle,
}: {
  percentCompletion: number;
  showTitle?: boolean;
  customTitle?: string;
}) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(percentCompletion);
    }, 300);
  }, []);

  return (
    <div className="progress-bar-wrapper">
      {showTitle && (
        <div className="title">
          <span>{customTitle || "OVERALL PROGRESS"}</span>
        </div>
      )}
      <div className="progress-bar">
        <div className="value" style={{ width: `${progressValue}%` }}></div>
      </div>
    </div>
  );
}
