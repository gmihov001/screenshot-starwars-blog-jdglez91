import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class CharacterCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log("props", this.props);
		return (
			<div className="card">
				<Context.Consumer>
					{({ actions, store }) => {
						<>
							<img className="card-img-top" src="#" alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{this.props.character.name}</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<Link to={`/details/${this.props.index + 1}`}>
									<a href="#" className="btn btn-primary">
										Details
									</a>
								</Link>
								<button onClick={() => actions.addFavorite(this.props.character.name)}>
									{" "}
									<i className="far fa-heart" />{" "}
								</button>
							</div>
						</>;
					}}
				</Context.Consumer>
			</div>
		);
	}
}
CharacterCard.propTypes = {
	character: PropTypes.object,
	index: PropTypes.number
};
