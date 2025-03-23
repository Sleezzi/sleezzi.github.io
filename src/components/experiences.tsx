import { JSX } from "react";

import Vigidev from "./experiences/Vigidev";

export interface Experience {
	icon: string,
	thumbnail: string,
	name: string,
	description: string | JSX.Element,
	url?: string | { name: string, url: string }[],
	mail?: string,
	phone?: string | number,
	date: {
		from: number,
		to: number
	}[],
	partners?: {
		name: string,
		icon: string,
		url?: string
	}[]
}

const experiences: Experience[] = [
	{
		icon: "/cdn/img/experiencies/smi/icon.png",
		thumbnail: "/cdn/img/experiencies/smi/thumbnail.png",
		name: "Mutuelle SMI",
		description: `
Description de l'entreprise :
Créée en 1926, SMI est spécialiste des contrats collectifs en santé et en prévoyance.
Organisme à but non lucratif, ce qui la distingue des sociétés commerciales d'assurance, SMI est adhérente à la Fédération nationale de la mutualité française, acteur incontournable du système de santé et de la protection sociale qui gère 2 400 services de soins et d'accompagnement pour les adhérents.

Tâches éffectuées :
- Masterisation de PC Dell 5440
- Installation d'ordinateur
- Helpdesk des utilisateurs de l'entreprise (exprication du fonctionnement de l'ordinateur, du casque, du clavier et de la souris)
`,
		url: "https://www.mutuelle-smi.com",
		phone: "09 69 36 11 37",
		date: [
			{
				from: 1762819200000,
				to: 1766275200000
			}
		]
	},
	{
		icon: "/cdn/img/experiencies/aios/icon.png",
		thumbnail: "/cdn/img/experiencies/aios/thumbnail.png",
		name: "AIOS SH",
		description: "AIOS SH est un spécialiste de développement de logiciel en environement complexe. Il utilise le Kotlin pour la partie back et le TypeScript pour le front avec le framework React.",
		url: "https://www.aios.sh",
		mail: "contact@aios.sh",
		date: [
			{
				from: 1701043200000,
				to: 1703289600000
			},
			{
				from: 1710115200000,
				to: 1712275200000
			}
		],
		partners: [
			{
				name: "SG",
				icon: "https://particuliers.sg.fr/static/Resources/img/favicon.ico",
				url: "https://sg.fr"
			},
			{
				name: "ADP",
				icon: "https://www.adp.com/-/media/adp2018/ui/favicon.ico",
				url: "https://www.adp.com"
			},
			{
				name: "France Active",
				icon: "https://www.franceactive.org/wp-content/uploads/2017/10/favicone.jpg",
				url: "https://www.franceactive.org"
			},
			{
				name: "Accor",
				icon: "https://static-p46175-e229011.adobeaemcloud.com/f3da6af1f8f79230b1966e88c734be474ac724d85a3b8dc7cc68bcd74fab539d/resources/images/android-chrome-192x192.png",
				url: "https://www.accor.com"
			},
			{
				name: "Engie",
				icon: "https://www.engie.fr/assets/favicon/favicon-32x32.png",
				url: "https://www.engie.fr"
			},
			{
				name: "Santander",
				icon: "https://www.santanderconsumer.fr/image/favicon-32x32.png",
				url: "https://www.santanderconsumer.fr"
			},
			{
				name: "E-Fluid",
				icon: "https://www.efluid.com/wp-content/uploads/2018/06/favicon.png",
				url: "https://www.efluid.com"
			},
			{
				name: "OUI SNCF",
				icon: "/cdn/img/Logo/OuiSNCF.png",
				url: "https://www.sncf-connect.com"
			},
			{
				name: "Natixis",
				icon: "https://www.interepargne.natixis.com/wp-content/uploads/sites/11/2022/11/favicon.png",
				url: "https://www.interepargne.natixis.com"
			},
			{
				name: "Prisma Media",
				icon: "https://www.prismamedia.com/app/uploads/2022/04/favicon.png",
				url: "https://www.prismamedia.com"
			}
		]
	},
	{
		icon: "/cdn/img/experiencies/vigidev/icon.png",
		thumbnail: "/cdn/img/experiencies/vigidev/thumbnail.png",
		name: "Vigidev",
		description: (<Vigidev />),
		url: [
			{
				name: "Nouveau site",
				url: "https://www.vigidev-france.com"
			},
			{
				name: "Ancien site",
				url: "https://www.vigidev.fr"
			}
		],
		mail: "administration@vigidev.fr",
		phone: "+33 1 39 47 22 81",
		date: [
			{
				from: 0,
				to: 0
			},
			{
				from: 0,
				to: 0
			},
			{
				from: 0,
				to: 0
			}
		],
		partners: [
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a62247537_hid-logo-108x40.png",
				name: "HID",
				url: "https://www.hidglobal.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224753c_uz-logo-108x40.png",
				name: "UunZ",
				url: "https://www.uundz.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a62247538_panasonic-logo-108x40.png",
				name: "Panasonic",
				url: "https://www.panasonic.com/"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224753b_stid-logo-108x40.png",
				name: "STID",
				url: "https://stid.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224753a_praster-logo-108x40.png",
				name: "Prastel",
				url: "https://www.prastel.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224753d_survision-logo-108x40.png",
				name: "Survision",
				url: "https://fr.survisiongroup.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224758a_logo-hanwha.jpg",
				name: "Hanwha",
				url: "https://hanwhavision.eu"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a62247519_axis_logo-108x40.png",
				name: "Axis",
				url: "https://www.axis.com/global"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a62247540_bosch-logo-108x40.png",
				name: "Bosch",
				url: "https://www.bosch.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224758b_Suprema-logo.jpg",
				name: "Suprema",
				url: "https://www.supremainc.com"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a62247539_hikvision-logo-108x40.png",
				name: "HikVision",
				url: "https://www.hikvision.com/"
			},
			{
				icon: "https://cdn.prod.website-files.com/6482fffc0249a93a6224747c/6482fffc0249a93a6224758c_Infor-logo.png",
				name: "infor",
				url: "https://www.infor.com"
			}
		]
	}
]

export default experiences;