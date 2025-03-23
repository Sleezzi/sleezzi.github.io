import { useState } from "react";
import styles from "../../cdn/css/experiences/vigidev.module.css";
import { Link } from "react-router-dom";
import AriaLabel from "../AriaLabel";

interface Reference {
	name: string,
	cover: string,
	type: "tertiary" | "sport" | "campus" | "commercial_center" | "datacenter" | "hospital" | "other",
	url: string,
	participation?: true
}

const convertType = (type: Reference["type"]) => {
	if (type === "tertiary") return "Tertiaire";
	if (type === "sport") return "Complexe spotif";
	if (type === "campus") return "Campus";
	if (type === "commercial_center") return "Centre commercial";
	if (type === "datacenter") return "Datacenter";
	if (type === "hospital") return "Centre hospitalier";
	return "Autre";
}

function Vigidev() {
	const [filter, setFilter] = useState<{ [key in Reference["type"] | "participation" ]: boolean }>({
		participation: true,
		tertiary: true,
		sport: true,
		campus: true,
		commercial_center: true,
		datacenter: true,
		hospital: true,
		other: true
	});

	const references: Reference[] = [
		{
			name: "Paris La Défense Arena",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475be_736x518.jpg",
			type: "sport",
			url: "https://www.vigidev-france.com/references/u-arena"
		},
		{
			name: "Accor Arena Paris",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475c0_736x518.jpg",
			type: "sport",
			url: "https://www.vigidev-france.com/references/accord-arena"
		},
		{
			name: "Site MASEN au Maroc",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475f1_736x518.jpg",
			type: "other",
			url: "https://www.vigidev-france.com/references/site-masen-au-maroc"
		},
		{
			name: "Campus Nanosciences et Nanothechologies",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475d3_736x518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/c2n-nanosciences-et-technologies"
		},
		{
			name: "Tour Alto",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a6224763a_736x518.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/tour-alto"
		},
		{
			name: "Campus DELOITTE",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a6224764e_736x518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/campus-deloitte"
		},
		{
			name: "Campus Capgemini",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475a7_736%C3%97518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/campus-capgemini"
		},
		{
			name: "Immeuble Symbiose",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a6224765a_736x518.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/hro-symbiose"
		},
		{
			name: "La Norma Sense",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475af_736x518.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/la-norma-sense"
		},
		{
			name: "Université Sorbonne Nouvelle",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475d9_736x518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/universite-sorbonne-nouvelle"
		},
		{
			name: "Prisma Media",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475e4_736x518.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/prisma-media",
			participation: true
		},
		{
			name: "Tours Landscape",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a62247668_landscape.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/landscape"
		},
		{
			name: "Université Evry-Val-d'Essone",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475d6_736x518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/universite-evry-val-dessonne"
		},
		{
			name: "Westfield Carré Sénart",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475cc_736x518.jpg",
			type: "commercial_center",
			url: "https://www.vigidev-france.com/references/westfield-carre-senart"
		},
		{
			name: "Siège Social - Société du Grand Paris",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a62247645_736x518.jpg",
			type: "tertiary",
			url: "https://www.vigidev-france.com/references/siege-social-societe-du-grand-paris",
			participation: true
		},
		{
			name: "CH de Gonesse",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a62247659_736x518.jpg",
			type: "hospital",
			url: "https://www.vigidev-france.com/references/nhg-hopital-de-gonesse"
		},
		{
			name: "Aéroville",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a622475c9_736x518.jpg",
			type: "commercial_center",
			url: "https://www.vigidev-france.com/references/aeroville"
		},
		{
			name: "Université Paris-Sud Saclay",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a62247653_736x518.jpg",
			type: "campus",
			url: "https://www.vigidev-france.com/references/universite-paris-sud-saclay"
		},
		{
			name: "Fort de Rosny Gendarmerie",
			cover: "https://cdn.prod.website-files.com/6482fffc0249a93a62247480/6482fffc0249a93a62247627_736x518.jpg",
			type: "datacenter",
			url: "https://www.vigidev-france.com/references/fort-de-rosny-gendarmerie-nationale"
		}
	];

	const supportedSystems: {
		icon: string,
		product?: string,
		name: string,
		url?: string
	}[] = [
		{
			icon: "https://www.zenitel.fr/wp-content/uploads/2023/01/logo-w175-2.png",
			product: "https://www.zenitel.com/sites/default/files/styles/medium/public/2023-10/1008111060%20TCIS-6.jpg?itok=lJcq_5yO",
			name: "Zenitel",
			url: "https://www.zenitel.fr"
		},
		{
			icon: "https://www.genetec.com/fr/binaries/content/gallery/genetecweb/logo/genetec_logo.svg",
			product: "https://www.genetec.com/binaries/content/gallery/genetecweb/graphic-assets/webgraphic_synergis-mercury.png/webgraphic_synergis-mercury.png/genetecweb%3Asmall",
			name: "Genetec",
			url: "https://www.genetec.com"
		},
		{
			icon: "https://www.honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png",
			product: "https://es-shop.sysaway.com/cdn/shop/products/C048-D-E1-KPD_ef1c91ff-cdee-4e0f-bc26-14cc5b7e037a_grande.png?v=1685964816",
			name: "Honeywell",
			url: "https://www.honeywell.com"
		}
	]
	return (<>
		<section style={{ textAlign: "justify" }}>
			<h3 style={{width: "100%", textAlign: "center"}}>
				Vigidev est un fabricant français de systèmes de sureté depuis près de 25 ans.
			</h3>
			<p>
				Fondée en 2000, trois ingénieurs passionnés par la sécurité infromatique fondent Vigidev avec une vision bien précise : <b>"Proposer le meilleur service de sureté, adapté à vos besoin."</b>
				<br />
				Vigidev a commencé dans l'ombre de ses distibuteurs puis, en 2009, l'équipe fini par développer son propre matériel pour mieux répondre au attente des clients.
				<br />
				<br />
				Sa gamme de produit robuste et son logiciel intuitif <b>Octopus</b> permettent à Vigidev d'assurer un contrôle d'accès, de vidéoprotection et d'anti-intrusion dans toute les situations, de manière fiable et efficace.
			</p>
		</section>
		<section>
			<h1>Les produits développés par Vigidev</h1>
			<div className={styles.grid}>
				<div className={styles.product}>
					<img src="https://vigidev.fr/wp-content/uploads/2015/04/cg2p.jpg" alt="CG2P" />
					<div className={styles.content}>
						<h2>CG2P</h2>
						<p>Carte de gestion 2 lecteurs, gère jusqu'à 2 environnements de portes complets.</p>
					</div>
				</div>
				<div className={styles.product}>
					<img src="https://vigidev.fr/wp-content/uploads/2015/04/cg8e1s.jpg" alt="CG8E1S" />
					<div className={styles.content}>
						<h2>CG8E1S</h2>
						<p>Cette carte peut gérer jusqu'à 8 entrées d'alarmes en mode 2 ou 4 états ainsi qu'un relais.</p>
					</div>
				</div>
				<div className={styles.product}>
					<img src="https://vigidev.fr/wp-content/uploads/2017/11/carte-3.png" alt="CG16S2L" />
					<div className={styles.content}>
						<h2>CG16S2L</h2>
						<p>Cette carte peut gérer jusqu'à 16 relais 1RT et 2 lecteurs de badges.</p>
					</div>
				</div>
				<div className={styles.product}>
					<img src="https://vigidev.fr/wp-content/uploads/2017/11/clavier.jpg" alt="Clavier OCTICA" />
					<div className={styles.content}>
						<h2>Clavier OCTICA</h2>
						<p>Il permet la mise en ou hors service intrusion, avec afficheur 4*16 caractères.</p>
					</div>
				</div>
			</div>
		</section>
		{/* <section>
			<h1>Interfacable avec le logiciel Octopus</h1>
		</section> */}
		<section id={styles.octopus}>
			<h1>Octopus</h1>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className={styles.section}>
				<div className={styles.text}>
					<p>
						Le logiciel tout en un <b>Octopus</b>, développer par l'équipe de Vigidev est un logiciel d'interface qui permet la supervision de nombreux équipements.
						<br />
						Il peut être installer dans n'importe quelle topologie de réseaux. Il a été développé pour fonctionner en client/serveur.
						<br />
						Il gère le contrôle d'accès, la détection intrusion; la vidéosurveillance, l'interphonie/vidéophonie, la gestion électronique de clés, la GTB (via serveur MODBUS), les UGCIS et de nombreux interface avec d'autre systèmes.
					</p>
				</div>
				<img src="/cdn/img/Logo/octopus.png" alt="Octopus' Logo" />
			</div>
			<div className={styles.section}>
				<h2>Les systèmes pris en charge par Octopus</h2>
				<div className={styles.supportedSystems}>
					{
						supportedSystems.map((system, index) => (
							system.url ?
							<Link className={styles.system} key={index} to={system.url} target="_blank">
								<div className={styles.images}>
									<img src={system.icon} alt={`${system.name}'s icon`} />
									{
										system.product ?
										<img className={styles.octopus_product} src={system.product} alt={`Product of ${system.name}`} />
										:
										<></>
									}
								</div>
								<h4>{system.name}</h4>
							</Link>
							:
							<div className={styles.system} key={index}>
								<div className={styles.images}>
									<img src={system.icon} alt={`${system.name}'s icon`} />
									{
										system.product ?
										<img className={styles.product} src={system.product} alt={`Product of ${system.name}`} />
										:
										<></>
									}
								</div>
								<h4>{system.name}</h4>
							</div>
						))
					}
				</div>
			</div>
		</section>
		<section>
			<h1>Références</h1>
			<div className={styles.filter}>
				<button
					onClick={
						() => setFilter(
							Object.fromEntries(
								Object.keys(filter)
								.map((key) => 
									[
										key,
										Object.values(filter)
										.find((value) => value === false) !== undefined
									]
								)
							) as any
						)
					}
				>{Object.values(filter).find((value) => value === false) === undefined ? "Aucun" : "Tout"}</button>
				<button onClick={() => setFilter((oldData) => ({...oldData, participation: !oldData.participation }))} className={filter.participation ? styles.active : ""}>Ma participation</button>
				{
					Object.entries(filter)
					.filter(([key]) => key !== "participation")
					.map(([name, value]) => <button key={name} onClick={() => setFilter((oldData) => ({...oldData, [name]: !value }))} className={value ? styles.active : ""}>{convertType(name as any)}</button>)
				}
			</div>
			<div className={styles.grid}>
				{
					references.map((reference) => {
						if (filter.participation) {
							if (reference.participation === true)  return (
								<Link to={reference.url} key={reference.name} target="_blank" className={styles.reference}>
									<img src={reference.cover} alt={`${reference.name}'s cover`} />
									<div className={styles.content}>
										<h3>{convertType(reference.type)}</h3>
										<h2>{reference.name}</h2>
									</div>
									<AriaLabel style={{position: "absolute"}} className={styles.participation} parent={<span className="material-symbols-outlined">check_circle</span>} value="Je me suis rendu sur place accompagné de mon maitre de stage." />
								</Link>
							);
						}
						if (filter[reference.type] === true) return (
							<Link to={reference.url} key={reference.name} target="_blank" className={styles.reference}>
								<img src={reference.cover} alt={`${reference.name}'s cover`} />
								<div className={styles.content}>
									<h3>{convertType(reference.type)}</h3>
									<h2>{reference.name}</h2>
								</div>
								{
									reference.participation === true ?
									<AriaLabel style={{position: "absolute"}} className={styles.participation} parent={<span className="material-symbols-outlined">check_circle</span>} value="Je me suis rendu sur place accompagné de mon maitre de stage." />
									: <></>
								}
							</Link>
						);
					})
				}
			</div>
		</section>
		<h1 style={{fontSize: "1.5rem"}}>Intégrés dans le logiciel Octopus</h1>
	</>);
}

export default Vigidev;