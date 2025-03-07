import React from "react";
import styles from "../../cdn/css/experiences.module.css";
import ReactMarkdown  from "react-markdown";
import experiences from "../experiences";
import { duration as Duration } from "../convertDate";
import { useParams } from "react-router-dom";

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
			<h1 className={styles.title}>{experience?.name}</h1>
			<div className={styles.margin} />
			{
				<ReactMarkdown>{experience?.description}</ReactMarkdown>
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