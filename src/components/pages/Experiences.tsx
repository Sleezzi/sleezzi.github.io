import styles from "../../cdn/css/experiences.module.css";
import ReactMarkdown  from "react-markdown";
import experiences from "../experiences";
import { duration as Duration } from "../convertDate";
import { Link, useParams } from "react-router-dom";
import Icon from "../Icon";

function Experiences() {
	const { experience: expName } = useParams();
	if (!expName) return (<>:/</>);
	const experience = experiences.find((exp) => exp.name.toLowerCase().replace(/ /g, "-") === expName);
	let duration = 0;
	experience?.date.map(date => duration += date.to - date.from);
	return (
		<main className={styles.content}>
			<div style={{backgroundImage: `url(${experience?.thumbnail})`}} className={styles.thumbnail} />
			<span className={styles.date}>{Duration(duration / 1000)}</span>
			<div style={{backgroundImage: `url(${experience?.icon})`}} className={styles.icon} />
			<div className={styles.title}>
				<h1>{experience?.name}</h1>
				<div className={styles.links}>
					{
						experience?.phone ?
						<Link target="_blank" to={`tel:${experience.phone}`} className={styles.minimal}>
							<Icon icon="call" />
						</Link>
						: <></>
					}
					{
						experience?.mail ?
						<Link target="_blank" to={`mailto:${experience.mail}`} className={styles.minimal}>
							<Icon icon="mail" />
						</Link>
						: <></>
					}
					{
						experience?.url ?
						(
							typeof experience.url === "string" ?
							<Link target="_blank" to={experience.url} className={styles.minimal}>
								<Icon icon="language"/>
							</Link>
							:
							experience.url.map(({name, url}, index) => (
								<Link target="_blank" to={url} key={index}>
									<Icon icon="language"/>
									<h4>{name}</h4>
								</Link>
							))
						) : <></>
					}
				</div>
			</div>
			<div className={styles.margin} />
			{
				typeof experience?.description === "string" ?
				<ReactMarkdown skipHtml={true}>{experience?.description}</ReactMarkdown>
				:
				experience?.description
			}
			{
				experience?.partners
				?
				<div className={styles.partnersContainer}>
					<div className={styles.partners}>
							{
								experience?.partners.map(({url, name, icon}, index) => (
									url ?
									<a className={styles.partner} href={url} target="_blank" rel="noreferrer noopener" key={index}>
										<img src={icon} alt={`${name} logo`} />
										<h4>{name}</h4>
									</a>
									:
									<div className={styles.partner} key={index}>
										<img src={icon} alt={`${name} logo`}/>
										<h4>{name}</h4>
									</div>
								))
							}
					</div>
					<div className={styles.partners} aria-hidden="true">
							{
								experience?.partners.map(({url, name, icon}, index) => (
									url ?
									<a className={styles.partner} href={url} target="_blank" rel="noreferrer noopener" key={index}>
										<img src={icon} alt={`${name} logo`} />
										<h4>{name}</h4>
									</a>
									:
									<div className={styles.partner} key={index}>
										<img src={icon} alt={`${name} logo`}/>
										<h4>{name}</h4>
									</div>
								))
							}
					</div>
				</div>
				:
				<></>
			}
		</main>
	);
}

export default Experiences;