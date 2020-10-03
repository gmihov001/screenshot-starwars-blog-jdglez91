import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";

//Hooks in line 10 sets characters with the values inside the useState ([""]) and useState gives us the initial value that were working with
//setCharacters updates the value

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		// fetch("https://swapi.dev/api/planets/")
		// 	.then(function(response) {
		// 		if (!response.ok) {
		// 			throw Error(response.statusText);
		// 		}
		// 		// Read the response as json.
		// 		return response.json();
		// 	})
		// 	.then(function(responseAsJson) {
		// 		// Do stuff with the JSON
		// 		console.log("responseAsJson", responseAsJson);
		// 		this.setState({ planets: responseAsJson.results });
		// 	})
		// 	.catch(function(error) {
		// 		console.log("Looks like there was a problem: \n", error);
		// 	});
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ actions, store }) => {
						return (
							<>
								{store.characters.map((item, index) => {
									return <CharacterCard key={index} character={item} index={index} />;
								})}
								{store.planets.map((item, index) => {
									return <PlanetCard key={index} planet={item} index={index} />;
								})}
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
