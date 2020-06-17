import React from "react";

export default function TMListItemHeader({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle?: string;
  description?: string;
}) {
  return (
    <header>
      <h3 className="title" title={title}>
        <span className="text">{title}</span>
      </h3>
      {subTitle && <span className="sub-title">{subTitle}</span>}
      {description && <p className="description">{description}</p>}
    </header>
  );
}
