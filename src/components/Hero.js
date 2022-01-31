import "../App.css";
import Moritzhagen8 from "../assets/Moritzhagen8.jpeg";

import { KeyboardArrowDown } from "@mui/icons-material";

export default function Hero() {
	return (
		<div className="heroSection regularMargins">
			<img
				className="heroImage"
				alt="Foto vom Gelände"
				src={Moritzhagen8}
			></img>

			<div className="middle">
				<h2 className="heroHeading">
					Willkommen in <span className="heroHeadingAccent">Moritzhagen</span>
				</h2>
			</div>
			<div className="centerBottom">
				<KeyboardArrowDown sx={{ fontSize: 40 }}></KeyboardArrowDown>
			</div>
		</div>
	);
}
