const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["Jedi 1", "Jedi 2"],
			characters: ["Luke Skywalker", "CP3PO", "Darth Vader"],
			planets: ["Tatooine", "Planet Boom", "Another Weird Planet"]
		},
		actions: {
			// Use getActions to call a function within a fuction

			deleteFavorite: (index) => {
                const newStore = getStore();
                var newFavorites = newStore.favorites.filter((item, ind) => index !== ind);
                setStore( { ...favorites, favorites: newFavorites})
                
			addFavorite: name => {
				const newStore = getStore();
				newStore.favorites.push(name);
				setStore({ favorites: newStore.favorites });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
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
						console.log("responseAsJson", responseAsJson);
						setStore({ characters: responseAsJson.results });
						//.results specifies the location of our array inside of the fetch object in our API - same in line 30
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
