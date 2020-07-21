import React from "react";

// interfaces
import { ButtonType, IButtonProps } from "./interface";

// styles
import "./styles.less";

export default function Button(props: IButtonProps) {
	const {
		id,
		tmButtonType = ButtonType.None,
		type = "button",
		children,
		className = "",
		buttonClicked,
	} = props;

	const handleClick = () => {
		if (buttonClicked) {
			buttonClicked(id);
		}
	};

	return (
		<button
			id={`button-${id}`}
			className={`btn ${className} ${tmButtonType}`}
			type={type}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}
