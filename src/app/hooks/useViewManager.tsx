import React from "react";

export default function useViewManager() {
  const animateCoreElements = ({
    elements,
    animateClassName,
    timeout,
    remove,
  }: {
    elements: Element[];
    animateClassName: string;
    timeout: number;
    remove?: boolean;
  }) => {
    const currentElements = [...elements].filter((el) => Boolean(el));
    setTimeout(() => {
      currentElements.map((el) => {
        el.classList.add(animateClassName);
      });
    }, timeout);

    if (remove) {
      setTimeout(() => {
        currentElements.map((el) => {
          el.classList.remove(animateClassName);
        });
      }, 2000);
    }
  };

  return {
    animateCoreElements,
  };
}
