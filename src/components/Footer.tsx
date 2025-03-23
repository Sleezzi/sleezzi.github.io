import { useLocation } from "react-router-dom";

import styles from "../cdn/css/footer.module.css";
import { useEffect, useState } from "react";

function Footer() {
	const [hidden, setHidden] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const params = new URLSearchParams(`?${window.location.href.split("?")[1]}`);
		if (params.get("footer") === "hidden") {
			setHidden(true);
		} else {
			setHidden(false);
		}
	}, [location.pathname]);
	return (
		hidden ? 
		<></>
		:
		<footer className={styles.footer}>
			<div className={styles.right}>
				<h5 style={{margin: 0, padding: 0}}>
					© 2024 Sleezzi Inc. Tous droits réservés
				</h5>
			</div>
			<div className={styles.link}>
				<a href="https://github.com/Sleezzi" target="_blank" rel="noopener noreferrer">
					<img src="/cdn/img/Logo/github.png" alt="" />
				</a>
			</div>
		</footer>
	);
}
export default Footer;