import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class CharacterCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card">
				<img className="card-img-top" src="#" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{this.props.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<Link to={`/details/${this.props.index + 1}`}>
						<a href="#" className="btn btn-primary">
							Details
						</a>
					</Link>
					<button onClick={() => actions.addFavorite(this.props.name)}>
						{" "}
						<i className="far fa-heart" />{" "}
					</button>
				</div>
			</div>
		);
	}
}
CharacterCard.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};
