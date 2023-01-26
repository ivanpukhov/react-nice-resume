
import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Fade from "react-reveal";


let id = 0;
class Portfolio extends Component {
	render() {
		if (!this.props.data) return null;

		const projects = this.props.data.projects.map(function (projects) {
			let projectDesc = projects.category1.cvalifikation;
			let projectDes = projects.category1.lang;
			let projectDe = projects.category1.base;
			let projectD = projects.category1.srok;

			let projectDesc1 = projects.category2.cvalifikation;
			let projectDes1 = projects.category2.lang;
			let projectDe1 = projects.category2.base;
			let projectD1 = projects.category2.srok;

			return (
				<div key={id++} className="columns portfolio-item">
					<div className="item-wrap"
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
						}}>

						<Popup trigger={
							<button style={{
								textAlign: "center",
								background: 'white',
								color: 'black',
								height: '160px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								{projects.title}
							</button>}
							position="right center">
							<div style={{
								height: 'fit-content',
							}}>
								<div className="kval">
									<div className="kval__title">
										{projectDesc}
									</div>
									<div className="kval__lang">
										{projectDes}
									</div>
									<div className="kval__base">
										{projectDe}
									</div>
									<div className="kval__srok">
										{projectD}
									</div>
								</div>
								<div className="kval">
									<div className="kval__title">
										{projectDesc1}
									</div>
									<div className="kval__lang">
										{projectDes1}
									</div>
									<div className="kval__base">
										{projectDe1}
									</div>
									<div className="kval__srok">
										{projectD1}
									</div>
								</div>
							</div>
						</Popup>
					</div>


				</div>
			);
		});

		return (
			<section id="portfolio">
				<Fade left duration={1000} distance="40px">
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Наши специальности.</h1>

							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>

								{projects}
							</div>

						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

export default Portfolio;
