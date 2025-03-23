export interface Project {
	icon?: string,
	thumbnail: string,
	name: string,
	description: string,
	reviews?: {
		note: number,
		on: number
	},
	download?: number | string,
	homepage?: string | {
		Homepage: string,
		[name: string]: string
	},
	github?: string,
	language: string | string[]
}

const projects: Project[] = [
	{
		icon: "/cdn/img/projects/better-roblox-badges/icon.png",
		thumbnail: "/cdn/img/projects/better-roblox-badges/thumbnail.png",
		name: "Better Roblox Badges",
		description: "Quickly view the Roblox badges you own when you've earned them right on the games page.",
		reviews: {
			note: 4.9,
			on: 5
		},
		download: "~1500",
		homepage: "https://chromewebstore.google.com/detail/better-roblox-badges/giaoglbhnfadcjompceiajfkmbghdkeg",
		language: "JavaScript"
	},
	{
		icon: "/cdn/img/projects/twitch-drop-collector/icon.png",
		thumbnail: "/cdn/img/projects/twitch-drop-collector/thumbnail.png",
		name: "Twitch Drop Collector",
		description: `
Cette extension permet de récupérer automatique les points de chaine Twitch.

Fonctionnement de l'extension :
1: Se greffe a la page Twitch
2: Observe les changements de la page
3: Quand le bouton de récupération de drop apparaît il est instantanément clické
4: Une notification est envoyé sur la page pour notifier l'utilisateur que l'extension a récuperer des points
		`,
		download: "~30",
		homepage: "https://chromewebstore.google.com/detail/twitch-drop-collector/iokdpjmjembfjllohjidneififojcdco",
		language: "JavaScript"
	},
	{
		icon: "https://redeye.sleezzi.fr/cdn/img/Logo/RedEye.png",
		thumbnail: "color:linear-gradient(red, #AF0000)",
		name: "RedEye",
		description: `RedEye is a powerful and fast Open Source Discord bot.
It works with Node.js using the Discord.js modules.
It's a bot offering several functionalities (Leveling, Moderation, Mini-Games, Log...), there are constantly new features.`,
		download: "~30",
		github: "https://github.com/Sleezzi/RedEye",
		homepage: {
			Homepage: "https://redeye.sleezzi.fr",
			Dashboard: "https://manage-redeye.sleezzi.fr"
		},
		language: ["TypeScript", "TSX"]
	},
	{
		thumbnail: "color:linear-gradient(blue, #0000AF)",
		name: "RITE",
		description: `Rite is a high school project focused on creating an RGB LED lamp in 2 years with an [Arduino](https://www.arduino.cc) board.`,
		github: "https://github.com/Sleezzi/RITE",
		homepage: "https://rite.sleezzi.fr",
		language: [ "C++", "JSX" ]
	},
	{
		thumbnail: "color:linear-gradient(blue, #0000AF)",
		name: "Password Generator",
		description: `Rite is a high school project focused on creating an RGB LED lamp in 2 years with an [Arduino](https://www.arduino.cc) board.`,
		github: "https://github.com/Sleezzi/RITE",
		homepage: "https://rite.sleezzi.fr",
		language: [ "C++", "JSX" ]
	},
]

export default projects;