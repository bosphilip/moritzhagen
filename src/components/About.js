import "../App.css";
import Moritzhagen19 from "../assets/Moritzhagen19.jpeg";
export default function About() {
	return (
		<div className="About regularMargins">
			<div className="aboutContainer">
				<div className="aboutCard aboutText">
					<div className="aboutText_">
						<h3 className="aboutHeading">Über uns</h3>
						<p>
							Das Neuenkirchen Moritzhagen in Neuenkirchen liegt 43 km von
							Zingst entfernt und bietet einen Garten und kostenfreies WLAN.
							<br></br>
							<br></br>
							Das Apartment mit Gartenblick verfügt über eine Terrasse, einen
							Sitzbereich, einen Flachbild-Sat-TV, eine voll ausgestattete
							Küchenzeile mit einem Geschirrspüler und einer Mikrowelle sowie
							ein eigenes Bad mit einer Dusche und einem Haartrockner. <br></br>
							<br></br>Ein Kühlschrank, ein Backofen, ein Kochfeld, ein
							Wasserkocher und eine Kaffeemaschine sind ebenfalls vorhanden.
							<br></br>
							<br></br>Eine Terrasse ist an der Unterkunft vorhanden und in
							unmittelbarer Nähe des Neuenkirchen Moritzhagen können Sie
							wandern. Binz liegt 25 km von der Unterkunft entfernt und
							Stralsund erreichen Sie nach 29 km.
						</p>
					</div>
				</div>
				<div className="aboutCard aboutImage">
					<img
						alt="Bild der Gastgebern"
						className="aboutImage_"
						src={Moritzhagen19}
					></img>
				</div>
			</div>
		</div>
	);
}
