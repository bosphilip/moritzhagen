import airbnb2 from "../assets/airbnb.svg";
import bookingcom2 from "../assets/bookingcom.svg";
import "../App.css";

export default function BookingPanel() {
	return (
		<div className="iconPanel">
			<h3 className="bookingHeading">Zur Buchung:</h3>
			<div className="icons">
				<a href="http://www.booking.com/Share-BY2Hne">
					<img alt="booking.com" className="icon" src={bookingcom2}></img>
				</a>
				<img alt="airbnb" href="#" className="icon" src={airbnb2}></img>
			</div>
		</div>
	);
}
