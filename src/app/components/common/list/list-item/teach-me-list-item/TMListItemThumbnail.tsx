import React from "react";

// interfaces
import { ITMListItemThumbnailProps } from "../../list.interface";

export default function TMListItemThumbnail({
  title,
  thumbSrcRatio_1_1,
  thumbSrcRatio_2_1,
}: ITMListItemThumbnailProps) {
  return (
    <picture className="thumb">
      <img
        className="ratio_1_1"
        src={thumbSrcRatio_1_1}
        alt={title}
        title={title}
      />
      <img
        className="ratio_2_1"
        src={thumbSrcRatio_2_1}
        alt={title}
        title={title}
      />
    </picture>
  );
}
