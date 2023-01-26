import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
	getRandomColor() {
		let letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		if (!this.props.data) return null;

		const skillmessage = this.props.data.skillmessage;
		const education = this.props.data.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>

					<p>{education.description}</p>
				</div>
			);
		});

		const work = this.props.data.work.map(function (work) {
			return (
				<div key={work.company}>
					<h3>{work.company}</h3>
					<p className="info">
						{work.title}
					</p>
					<p>{work.description}</p>
				</div>
			);
		});

		const skills = this.props.data.skills.map((skills) => {
			const backgroundColor = this.getRandomColor();
			const className = "bar-expand " + skills.name.toLowerCase();
			const width = skills.level;

			return (
				<li key={skills.name}>
					<span style={{ width, backgroundColor }} className={className}></span>
					<em>{skills.name}</em>
				</li>
			);
		});

		return (
			<section id="resume">
				<Slide left duration={1300}>
					<div className="row ">
						<div className="three columns header-col">
							<h1>
								Документы для поступления:
							</h1>
						</div>

						<div className="nine columns main-col">
							<div className="row item">
								<div className="twelve columns">
									-Документ об образовании (подлинник) <br />
									-Медицинская справка (075У) <br />
									-4 фотографии (3х4)</div>
							</div>
						</div>
					</div>
				</Slide>


			</section>
		);
	}
}

export default Resume;
