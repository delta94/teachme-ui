import React from "react";

export default function useViewManager() {
  const animateCoreElements = ({
    elements,
    animateClassName,
    timeout,
  }: {
    elements: Element[];
    animateClassName: string;
    timeout: number;
  }) => {
    setTimeout(() => {
      elements.map((el) => {
        el.classList.add(animateClassName);
      });
    }, timeout);
  };

  return {
    animateCoreElements,
  };
}
