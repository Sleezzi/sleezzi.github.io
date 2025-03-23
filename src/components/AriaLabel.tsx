import { DetailedHTMLProps, JSX } from "react";
import styles from "../cdn/css/components/aria-label.module.css";

type ExtendedAttributes = {
	children?: never,
	parent: string | JSX.Element
	value: string | JSX.Element,
	center?: boolean
} | {
	children: string | JSX.Element,
	parent?: never,
	value: string | JSX.Element,
	center?: boolean
}

type Attributes = ExtendedAttributes & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function AriaLabel({children, parent, center, value, ...attributes}: Attributes) {
	return (
		<div {...attributes} className={attributes.className ? `${attributes.className} ${styles.container}` : styles.container}>
			<div id={styles.parent}>{children || parent}</div>
			<div style={center ? {textAlign: "center", justifyContent: "center"} : {}} id={styles.text}>{value}</div>
		</div>
	);
}

export default AriaLabel;