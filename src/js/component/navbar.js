import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
					Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
				</button>

				<div className={isOpen ? "d-block" : "d-none"}>
					{store.favorites.map((item, index) => {
						return (
							<li key={index}>
								{item}{" "}
								<button onClick={() => actions.deleteFavorite(index)}>
									{" "}
									<i className="fas fa-times" />{" "}
								</button>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
