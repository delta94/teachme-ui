import React from "react";

export default function TMListItemThumbnail({
  title,
  thumbSrcRatio_1_1,
  thumbSrcRatio_2_1,
}: {
  title: string;
  thumbSrcRatio_1_1: string;
  thumbSrcRatio_2_1: string;
}) {
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
