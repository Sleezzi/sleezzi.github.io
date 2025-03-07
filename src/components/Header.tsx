import { Link, useLocation } from "react-router-dom";

import styles from "../cdn/css/header.module.css";
import { useEffect, useState } from "react";
import Icon, { IconList } from "./Icon";

function Header() {
	const location = useLocation();
	useEffect(() => {
		(document.querySelectorAll(`header.${styles.header} a:not([href="#/"])`) as any).forEach((element: HTMLAnchorElement) => {
			if (element.href === window.location.href) {
				element.className = styles.active;
			} else {
				element.className = "";
			}
		});
	}, [location.pathname]);
	const iconsList: (typeof IconList[number])[] = [
		"sports_esports",
		"code",
		"html",
		"css",
		"javascript",
		"api",
	]
	const [visible, setVisible] = useState(false);
	const [iconIndex, setIconIndex] = useState(0);
	
	return (<>
		<header className={styles.header}>
			<Link to="/" id={styles.icon} className="animate-the-background" onMouseEnter={() => {
					setIconIndex((iconIndex + 1) % iconsList.length);
					setVisible(true);
				}} onMouseLeave={() => {
					setVisible(false);
				}}>
				<h1 className={visible ? styles.active : styles.hidden}>
					<Icon icon={iconsList[iconIndex]}/>
				</h1>
				<h1 className="kanit">Sleezzi</h1>
			</Link>
		</header>
		<div className={styles.margin}></div>
	</>);
}
export default Header;
