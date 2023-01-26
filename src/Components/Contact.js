import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
	render() {
		if (!this.props.data) return null;

		const name = this.props.data.name;
		const street = this.props.data.address.street;
		const city = this.props.data.address.city;
		const state = this.props.data.address.state;
		const zip = this.props.data.address.zip;
		const phone = this.props.data.phone;
		const message = this.props.data.contactmessage;

		return (
			<section id="contact">
				<Fade bottom duration={1000}>
					<div className="row section-head">
						<div className="two columns header-col">
							<h1>
								<span>Get In Touch.</span>
							</h1>
						</div>

						<div className="ten columns">
							<p className="lead">{message}</p>
						</div>
					</div>
				</Fade>

				<div className="row">
					<Slide left duration={1000}>
						<div className="eight columns">
							<form action="" method="post" id="contactForm" name="contactForm">
								<fieldset>
									<div>
										<label htmlFor="contactName">
											Имя <span className="required">*</span>
										</label>
										<input
											type="text"
											defaultValue=""
											size="35"
											id="contactName"
											name="contactName"
											onChange={this.handleChange}
										/>
									</div>

									<div>
										<label htmlFor="contactEmail">
											Email <span className="required">*</span>
										</label>
										<input
											type="text"
											defaultValue=""
											size="35"
											id="contactEmail"
											name="contactEmail"
											onChange={this.handleChange}
										/>
									</div>



									<div>
										<label htmlFor="contactMessage">
											Сообщение <span className="required">*</span>
										</label>
										<textarea
											cols="50"
											rows="15"
											id="contactMessage"
											name="contactMessage"
										></textarea>
									</div>

									<div>
										<button className="submit">Отправить заявку</button>
										<span id="image-loader">
											<img alt="" src="images/loader.gif" />
										</span>
									</div>
								</fieldset>
							</form>

							<div id="message-warning"> Error boy</div>
							<div id="message-success">
								<i className="fa fa-check"></i>Your message was sent, thank you!
								<br />
							</div>
						</div>
					</Slide>

					<Slide right duration={1000}>
						<aside className="four columns footer-widgets">
							<div className="widget widget_contact">
								<h4>Контакты приемной комиссии</h4>
								<p className="address">
									{name}
									<br />
									{street} <br />
									{city}, {state} {zip}
									<br />
									<span>{phone}</span>
								</p>
							</div>

							<div className="widget widget_tweets">
								<h4 className="widget-title">Контакты колледжа</h4>
								<ul id="twitter">
									<li>
										<span>
											© 2022 Мағжан Жұмабаев атындағы жоғары колледж <br />
											Пошталық мекен-жайы:
											<br /> 150000, г. Петропавловск, ул. Абая, 28 <br />
											Телефон: +7 (7152) 36-91-36 <br /> Факс: +7 (7152) 36-91-36
											E-mail: colmagzhan@mail.ru
											<br />
											<a href="https://colmagzhan.kz/">https://colmagzhan.kz/</a>
										</span>
									</li>

								</ul>
							</div>
						</aside>
					</Slide>
				</div>
			</section>
		);
	}
}

export default Contact;
