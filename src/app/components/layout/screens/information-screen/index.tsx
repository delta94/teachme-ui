import React, { useRef, useEffect } from "react";
import cc from "classcat";

// constants
import localization from "../../../../constants/localization";

// interfaces
import { IInformationScreenData, InformationScreenType } from "./interface";

// hooks
import useViewManager from "../../../../hooks/useViewManager";

// styles
import "./index.less";
import useIconManager, { Icon } from "../../../../hooks/useIconManager";

export default function InformationScreen(props: IInformationScreenData) {
  const { getIconByType } = useIconManager();
  const { animateCoreElements } = useViewManager();

  const loading = useRef(null);
  const noResults = useRef(null);

  const { type, error, isWebApp } = props;
  const {
    informationScreen: { defaultErrorMassage, loadingMassage },
  } = localization;
  const isLoading = type === InformationScreenType.Loading;
  const isError = type === InformationScreenType.Error;

  /**
   * Using useEffect according to type
   * Animate information screen content
   */
  useEffect(() => {
    animateCoreElements({
      elements: [noResults.current, loading.current],
      animateClassName: "fadeInUp",
      timeout: 300,
    });

    if (type === InformationScreenType.Error) {
      console.error(error || defaultErrorMassage);
    }
  }, [type]);

  return (
    <div className={cc(["information-screen", { web: isWebApp }])}>
      {isLoading && (
        <div ref={loading} className="screen info loading">
          <div className="preloader"></div>
          <span>{loadingMassage}</span>
        </div>
      )}
      {isError && (
        <div ref={noResults} className="screen info no-results">
          {getIconByType(Icon.NoResults)}
          <span>{defaultErrorMassage}</span>
        </div>
      )}
    </div>
  );
}
