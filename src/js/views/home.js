import React, { useState, useEffect } from "react";

import "../../styles/home.scss";
import { planetCard } from "../component/planetCard";
import { charactersCard } from "../component/charactersCard";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON

				setPlanets(responseAsJson.result);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON

				setCharacters(responseAsJson.result);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div>
			{characters.map((iten, index) => {
				return <charactersCard key={index} character={item} index={index} />;
			})}
			{planets.map((iten, index) => {
				return <planetsCard key={index} planet={item} index={index} />;
			})}
		</div>
	);
};
//  in the map component we need to pass
