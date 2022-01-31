import "../App.css";
import airbnb from "../assets/airbnb-1.svg";
import bookingcom from "../assets/bookingcom-1.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import Modal from "@mui/material/Modal";
import { Menu, Close } from "@mui/icons-material";

export default function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const Styles = {
		fontSize: "40px",
		display: "flex",
	};

	return (
		<div>
			{open === false ? (
				<div className="openButtonContainer" onClick={handleOpen}>
					<span className="openButton" onClick={handleOpen}>
						<Menu sx={Styles} className="menuIcon"></Menu>
					</span>
				</div>
			) : (
				<div className="openButtonContainer" onClick={handleClose}>
					<span className="openButton" onClick={handleClose}>
						<Close sx={Styles}></Close>
					</span>
				</div>
			)}

			<Modal className="mobileModal" open={open}>
				<div className="modalBox">
					<div className="modalComp">
						<ul className="MobileNavList">
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/"
									onClick={handleClose}
								>
									Home
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/gallerie"
									onClick={handleClose}
								>
									Gallerie
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/"
									onClick={handleClose}
								>
									Über uns
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/"
									onClick={handleClose}
								>
									Kontakt
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<a
									href="http://www.booking.com/Share-BY2Hne"
									onClick={handleClose}
								>
									<img
										alt="booking.com"
										className="navIcon navIcons"
										src={airbnb}
									></img>
								</a>
								<a href="http://www.airbnb.com/" onClick={handleClose}>
									<img
										alt="airbnb.com"
										className="navIcon navIcons"
										src={bookingcom}
									></img>
								</a>
							</li>
							<li className="closeButtonContainer"></li>
						</ul>
					</div>
				</div>
			</Modal>
		</div>
	);
}
