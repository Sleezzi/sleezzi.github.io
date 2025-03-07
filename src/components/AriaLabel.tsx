import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Markdown from "react-markdown";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & { text: string }

function AriaLabel(props: Props) {
	const [overflowing, setOverflowing] = useState(false);
	const element = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (element.current) {
			const rect = element.current.getBoundingClientRect();
			setOverflowing(rect.top < 0);
		}
	}, []);

	return (
		<div className="arialabel" ref={element}>
			<Markdown {...props} skipHtml={true} className={`${props.className ? `${props.className} ` : ""}text${overflowing ? " revert" : ""}`}>
				{
					props.text
				}
			</Markdown>
		</div>
	)
}

export default AriaLabel;