import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import BookingPanel from "./components/Booking";
import MasonryImageList from "./components/Gallery";
import MobileNav from "./components/MobileNav";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Nav />
					<MobileNav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallerie" element={<MasonryImageList />} />
						<Route path="/chart" element={""} />
					</Routes>
					<BookingPanel></BookingPanel>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
