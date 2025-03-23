import 
{ useState } from "react";
import styles from "../../cdn/css/index.module.css";
import skills from "../skills";
import projects from "../projects";
import experiences from "../experiences";
import { Link } from "react-router-dom";

function Index() {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0
	});
	const [blurredExpIndex, setBlurred] = useState<"none" | number>("none");
	
	return (<>
			<main className={styles.content} onMouseMove={(e) => setMousePosition({
				x: e.pageX,
				y: e.pageY
			})}>
				<div id={styles.pointer} style={{
					maskImage: `radial-gradient(10rem at calc(${mousePosition.x}px - 4rem / 2) calc(${mousePosition.y}px - 4rem * 2), black 0%, transparent 100%)`
				}} />
				<section>
					<h1 style={{fontSize: "5rem"}}>Sleezzi</h1>
					<p>Sleezzi (pronounced "slezi" or "slizi") is a young French developer mainly working in Open Source. His favorite language is JavaScript but he is always tempted to start a new project no matter what language he uses.</p>
				</section>
				<section>
					<h1>Experiences</h1> 
					<div className={styles.grid}>
						{
							experiences.map(({thumbnail, name}, index) => (
								<Link
									key={index}
									to={`/experiences/${name.toLowerCase().replace(/ /g, "-")}`}
									className={`${styles.experience} ${blurredExpIndex === "none" ? "" : (blurredExpIndex === index ? styles.hovered : styles.blurred)}`}
									style={{backgroundImage: `url(${thumbnail})`}}
									onMouseMove={() => setBlurred(index)}
									onMouseLeave={() => setBlurred("none")}
								>
									<h1>{name}</h1>
								</Link>
							))
						}
					</div>
				</section>
				<section>
					<h1>Projects</h1>
					<div className={styles.grid}>
						{
							projects.map(({icon, name}, index) => (
								<Link
									key={index}
									to={`/projects/${name.toLowerCase().replace(/ /g, "-")}`}
									className={styles.project}
								>
									<img src={icon || "/cdn/img/image_not_found.png"} alt={`${name}'s logo`} />
								</Link>
							))
						}
					</div>
				</section>
				<section>
					<h1>Skills</h1>
					<div className={styles.grid}>
						{
							skills.map((skill, index) => (
								skill.url ?
								<Link to={skill.url} target="_blank" className={styles.skill} key={index}>
									<img src={skill.icon} alt={`${skill.name}'s logo`} />
								</Link>
								:
								<div className={styles.skill} key={index}>
									<img src={skill.icon} alt={`${skill.name}'s logo`} />
								</div>
							))
						}
					</div>
				</section>
			</main>
		</>
	);
}

export default Index;