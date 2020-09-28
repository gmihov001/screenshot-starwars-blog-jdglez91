import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Details = props => {
	//const { store, actions } = useContext(Context);

	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch("https://swapi.dev/api/people/" + props.match.params.id + "/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				console.log("responseAsJson", responseAsJson);
				setCharacter(responseAsJson);
				//.results specifies the location of our array inside of the fetch object in our API - same in line 30
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<>
			<div className="top-container">
				<p>{character.name}</p>
				<div className="image" />
				<div className="image description" />
			</div>
			<div className="bottom-container">
				<div className="description" />
			</div>
		</>
	);
};
