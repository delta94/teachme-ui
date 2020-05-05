import React from "react";
import { useHistory } from "react-router-dom";

export default function useLink() {
  const routeHistory = useHistory();

  const handleLinkClick = (link: string) => {
    const isExternalLink =
      link.includes("http://") || link.includes("https://");

    if (isExternalLink) {
      window.open(link, "_blank");
    } else {
      routeHistory.push(link);
    }
  };

  return { handleLinkClick };
}
