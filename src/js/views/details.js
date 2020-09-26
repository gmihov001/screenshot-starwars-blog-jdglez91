import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { ProgressPlugin } from "webpack";

export const Details = () => {

    const [character , setCharacter] = useState ([]); 
    
    useEffect (()=>{
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

				setCharacter(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});


    },[])
    
    return (
        <>
        <div className = "topContainer" >
            <p> {character.name} </p>
        </div>

        </>
    ),
    };
