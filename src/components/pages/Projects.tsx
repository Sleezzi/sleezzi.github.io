import styles from "../../cdn/css/projects.module.css";
import Icon from "../Icon";
import projects from "../projects";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Projects() {
	const { project: projectName } = useParams();
	if (!projectName) return (<>:/</>);
	const project = projects.find((pro) => pro.name.toLowerCase().replace(/ /g, "-") === projectName);
	return (
		<main className={styles.content}>
			<div
				style={
					project?.thumbnail.startsWith("color:") ?
					{background: project.thumbnail.replace("color:", "")} :
					{backgroundImage: `url(${project?.thumbnail})`}
				}
				className={styles.thumbnail}
			>
				<div className={styles.stats}>
					{
						project?.reviews ?
						<span className={styles.reviews}>
							<svg className={styles.svg}>
								<clipPath id={styles.stars}>
									<text x="50%" y="calc(1.5rem / 2)" fill="white" textAnchor="middle" className="material-symbols-outlined" >
										★★★★★
									</text>
								</clipPath>
							</svg>
							<div className={styles.white} style={{clipPath: `url(#${styles.stars})`}} />
							<div className={styles.gold} style={{clipPath: `url(#${styles.stars})`, width: `calc(${project.reviews.note / project.reviews.on * 100}% - 3rem)`}} />
							<span className={styles.rate}>{project.reviews.note}/{project.reviews.on}</span>
						</span>
						:
						<></>
					}
					{
						project?.download ?
						<span className={styles.download} style={project.reviews ? {left: "calc(10rem + 1rem + 1rem)"} : {}}>
							<span>{project.download}</span>
							<Icon icon="download"/>
						</span>
						:
						<></>
					}
					{
						project?.language ?
						<span className={styles.language}>
							<span>{
								typeof project.language === "string" ?
								project.language :
								<>{
									project.language.slice(0, project.language.length - 1).join(", ")
								} & {project.language[project.language.length - 1]}</>
							}</span>
						</span>
						:
						<></>
					}
				</div>
			</div>
			<div style={{backgroundImage: `url(${project?.icon || "/cdn/img/image_not_found.png"})`}} className={styles.icon} />
			<h1 className={styles.title}>{project?.name}</h1>
			<div className={styles.margin} />
			{
				project?.description.replace(/	/g, "").split("\n").map((text, index) => (
					<ReactMarkdown skipHtml={true} key={index}>{text}</ReactMarkdown>
				))
			}
			<div className={styles.links}>
				{
					project?.homepage ?
					(
						typeof project.homepage === "string" ?
						<Link to={project.homepage}>
							<Icon icon="language"/>
							<h4>Homepage</h4>
						</Link>
						:
						Object.entries(project.homepage).map(([name, url], index) => (
							<Link to={url} key={index}>
								<Icon icon="language"/>
								<h4>{name}</h4>
							</Link>
						))
					) :
					<></>
				}
				{
					project?.github ?
					<Link to={project.github} target="_blank">
						<img src="/cdn/img/Logo/github.png" alt="" />
						<h4>Github</h4>
					</Link> :
					<></>
				}
			</div>
		</main>
	);
}

export default Projects;