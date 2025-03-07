import { useEffect, useState } from "react";
import AriaLabel from "../components/AriaLabel";

import styles from "../cdn/css/cv.module.css";
import Icon from "../components/Icon";

interface Info {
	firstName: string,
	surname: string,
	phone: string,
	adress: string,
	mail: string,
	class: string,
	school: string,
	birthday: string,
	birthdayPlace: string,
	title: string
}

function CV() {
	const param = new URLSearchParams(window.location.hash.slice(4));
	const [info, setInfo] = useState<Info | undefined>(localStorage.getItem("cv") ? JSON.parse(localStorage.getItem("cv") || "") : undefined);
	const [popup, setPopup] = useState(!localStorage.getItem("cv"));

	useEffect(() => {
		const savedData: Info = localStorage.getItem("cv") ? JSON.parse(localStorage.getItem("cv") || "") : {
			firstName: "John",
			surname: "Doe",
			phone: "",
			adress: "",
			mail: "",
			class: "",
			school: "",
			birthday: "",
			birthdayPlace: "",
			title: "Curriculum vitae",
		};
		setInfo({
			firstName: decodeURI(param.get("firstname") || savedData.firstName),
			surname: decodeURI(param.get("surname") || savedData.surname),
			phone: decodeURI(param.get("phone") || savedData.phone),
			adress: decodeURI(param.get("adress") || savedData.adress),
			mail: decodeURI(param.get("mail") || savedData.mail),
			class: decodeURI(param.get("class") || savedData.class),
			school: decodeURI(param.get("school") || savedData.school),
			birthday: decodeURI(param.get("birthday") || savedData.birthday),
			birthdayPlace: decodeURI(param.get("birthday_place") || savedData.birthdayPlace),
			title: decodeURI(param.get("title") || savedData.title)
		});
		(document.querySelector("title") as any).innerText = `${info?.firstName} ${info?.surname} - ${info?.title}`;
	}, [window.location.href]);
	
	const saveData = () => {
		localStorage.setItem("cv", JSON.stringify(info));
		setPopup(false);
	}
	return (
		<>
			<div className={styles.target}>
				<h1>{info?.title}</h1>
			</div>
			<main className={styles.content}>
				<section className={styles.container}>
					<AriaLabel
						text={`Je travail sur différent project de codage Open Source. Mon language de prédilection est le TypeScript, mais je maitrise d'autre language comme LUA, le Python et le C#.
							Je suis en constante recherche de nouveauté. Je suis principalement auto-didact.
							Je signe la plupart de mes projets par le pseudonyme "Sleezzi"`}
					>
						<h2 style={{display: "flex", textAlign: "center"}}>
							<Icon icon="person"/>{info?.firstName} {info?.surname}
						</h2>
					</AriaLabel>
					<h3 style={{display: "flex", textAlign: "center"}}><Icon icon="home" />24 rue {info?.adress}</h3>
					<h3 style={{display: "flex", textAlign: "center"}}>
						<Icon icon="mail"/><a href={`mailto:${info?.mail}`}>{info?.mail}</a>
					</h3>
					<h3 style={{display: "flex", textAlign: "center"}}>
						<Icon icon="cake"/>03/08/{info?.birthday} à {info?.birthdayPlace}
					</h3>
				</section>
				<section className={styles.container}>
					<h2>Mon parcours scolaire</h2>
					<h3>
						<li>2023-2025</li>
						<ul>
							<li>Bac proffessionel Systèmes numérique au lycée {info?.school}</li>
						</ul>
					</h3>
					<h3>
						<li>2022-2023</li>
						<ul>
							<li>Bac proffessionel Transition numérique et énergétique au lycée {info?.school}</li>
						</ul>
					</h3>
				</section>
				<section className={styles.container}>
						<h2>Compétences professionnelles</h2>
					<h3 style={{textAlign: "start"}}>
						<ul>
							<li>Base de language</li>
							<ul>
								<li>Lua</li>
								<li>HTML</li>
								<li>CSS</li>
								<AriaLabel text="Je développe en Type Script qui est une version modifier de JavaScript">
									<li>JavaScript</li>
								</AriaLabel>
								<li>Python</li>
							</ul>
							<li>Les bases sur les systèmes réseaux</li>
							<ul>
								<li>Windows</li>
								<li>Linux</li>
								<li>DHCP</li>
							</ul>
							<li>Logiciel</li>
							<ul>
								<li>SMTP-POP</li>
								<li>Flux RSS</li>
							</ul>
						</ul>
					</h3>
				</section>
				<section className={styles.container}>
					<AriaLabel text="Etant dans un établissement d'enseignement proffessionnel, j'ai eu l'occasion d'effectuer plusieurs stages en entreprise.">
						<h2>Expériences professionnelles</h2>
					</AriaLabel>
					<h3 style={{textAlign: "start"}}>
						<ul>
							<li>Stage d'observation dans le centre "La Passerelle" prendant 1 semaine</li>
							<li>Stage chez Vigidev</li>
							<ul>
								<li>Stage d'observation pendant 1 semaine</li>
								<li>Stage pendant 6 semaines</li>
							</ul>
							<li>Stage chez AIOS pendant 6 semaines</li>
							<li>Stage chez Mutuelle SMI pendant 6 semaines</li>
						</ul>
					</h3>
				</section>
				<section className={styles.container}>
					<h2>Mes attouts et qualités</h2>
					<h3 style={{textAlign: "start"}}>
						<ul>
							<li>Mon autonomie</li>
							<li>Ma faculté d'adaptation dans le travail</li>
							<li>Ma ponctualité, mon assiduité</li>
						</ul>
					</h3>
				</section>
				<section className={styles.container}>
					<h2>Langue étudiée</h2>
					<h3 style={{textAlign: "start"}}>
						<ul>
							<li>Anglais (B2)</li>
							<li>Espagnol</li>
						</ul>
					</h3>
				</section>
			</main>
			{popup ? <div className={styles.popup}>
				<button className={styles.close} onClick={() => setPopup(false)}>X</button>
				<div>
					<h1><Icon icon="warning"/> Attention</h1>
					<h3>Ne perdez pas le lien que l'on vous a fourni sinon vous n'aurez que des informations incomplètes.</h3>
					<p>Pour des raisons de confidentialité, certaine information de ce CV ne sont pas stocker sur le site mais dans l'url.</p>
					<button onClick={saveData}>Enregistrers les informations dans le navigateur</button>
				</div>
			</div> : <></>}
		</>
	);
}

export default CV;

function compile() {
	const infos = {
		firstName: "Ilan",
		surname: "de Foucault Poussot",
		phone: "07 82 63 34 82",
		adress: "Françoise Dolto Brie Comte Robert 77170",
		mail: "idefoucaul@lyceejacquesprevert.fr",
		class: "Terminal Systèmes Numérique",
		school: "Jacques Prévert Combs la Ville",
		birthday: "2007",
		birthday_place: "Villeneuve Saint George",
		title: "Curriculum vitae"
	}
	let text = "";
	for (const [name, value] of Object.entries(infos)) {
		if (text === "") {
			text = `?${name.toLowerCase()}=${encodeURI(value)}`;
		} else {
			text += `&${name.toLowerCase()}=${encodeURI(value)}`;
		}
	}
	console.log(text);
	return text;
}