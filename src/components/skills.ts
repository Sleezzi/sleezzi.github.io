export interface skill {
	icon: string,
	name: string,
	url?: string
}

const Skills: skill[] = [
	{
		icon: "/cdn/img/Logo/react.png",
		name: "React",
		url: "https://react.dev"
	},
	{
		icon: "/cdn/img/Logo/react.png",
		name: "ReactNative",
		url: "https://reactnative.dev"
	},
	{
		icon: "/cdn/img/Logo/electron.png",
		name: "EletronJS",
		url: "https://www.electronjs.org"
	},
	{
		icon: "/cdn/img/Logo/node.js.png",
		name: "Node.js",
		url: "https://nodejs.org"
	},
	{
		icon: "/cdn/img/Logo/express.js.png",
		name: "Express.js",
		url: "https://expressjs.com"
	},
	{
		icon: "/cdn/img/Logo/discord.js.png",
		name: "Discord.js",
		url: "https://discord.js.org"
	},
	{
		icon: "/cdn/img/Logo/git.png",
		name: "GIT",
		url: "https://git-scm.com"
	},
	{
		icon: "/cdn/img/Logo/typescript.png",
		name: "TypeScript"
	},
	{
		icon: "/cdn/img/Logo/lua.png",
		name: "Lua"
	},
	{
		icon: "/cdn/img/Logo/blender.png",
		name: "Blender",
		url: "https://www.blender.org"
	}
]
export default Skills;