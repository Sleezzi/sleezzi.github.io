// import React from "react";
import Prism from "prismjs";

import { createRef, DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

import styles from "../cdn/css/prism.module.css";
import "prismjs/themes/prism-okaidia.css";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-tsx";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";

import "prismjs/plugins/line-numbers/prism-line-numbers";
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import "prismjs/plugins/show-language/prism-show-language";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	language: string,
	children: string,
	showLanguage?: boolean,
	lineNumbers?: boolean,
	copy?: boolean
}

function PrismCode(props: Props) {
	const ref = createRef<HTMLElement>();
	const [copyContent, setCopyContent] = useState<"Copy" | "Copied!">("Copy");
	const copy = () => {
		navigator.clipboard.writeText(props.children);
		setCopyContent("Copied!");
		setTimeout(() => {
			setCopyContent("Copy");
		}, 5_000);
	}
	useEffect(() => {
		if (ref && ref.current) Prism.highlightElement(ref.current as Element);
	}, [props.children, props.language, ref]);
	return (
		<>
			<div className={styles.container}>
				<div className={styles.toolbar}>
					<button type="button" className={styles.copy} onClick={copy}>
						{copyContent}
					</button>
				</div>
				<pre>
					<code
						ref={ref}
						className={`language-${props.language} ${props.showLanguage === false ? "" : "show-language"} ${props.lineNumbers === false ? "" : "line-numbers"} ${props.copy === false ? "" : "copy-to-clipboard"}`}
						
					>
						{props.children.replaceAll("	", "").trim()}
					</code>
				</pre>
			</div>
		</>
	);
}

export default PrismCode;