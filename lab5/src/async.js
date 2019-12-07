import axios from "axios";
/**
 * TODO: Finish implementing the searchCall method by using axios.get to retrieve the data and updating the HTML accordingly.
 * Once the redux store is set up, modify the searchCall function to take in a parameter (saveHistory function) and call it within the method
 * to store the values in the history state in addition to updating the HTML.
 *
 */
export function searchCall() {
  let firstResult;
  console.log("Search Call Made");
  let characterName = document.getElementById("characterName").value;
  console.log("Character Name: " + characterName);

  let requestURL = "https://swapi.co/api/people/?search=" + characterName;

  axios.get(requestURL)
    .then(function(res) {
      if (res.data.results.length == 0) {
        handleEmptyQuery();
      } else {
        handleQuery(res.data.results[0]);
      }
    })
    .catch(function(err) {
      console.log(err)
    })
}

function handleEmptyQuery() {
  document.getElementById("cardName").innerHTML = "No charcter found.";
  document.getElementById("cardText").innerHTML = `Try another search!`;
}

function handleQuery(query) {
  document.getElementById("cardName").innerHTML = query.name;
  document.getElementById("cardText").innerHTML = `
        Birth Year: ${query.birth_year} <br/>
        Gender: ${query.gender} <br/>
        Height: ${query.height} <br/>
        Weight: ${query.mass} <br/>
        Hair Color: ${query.hair_color} <br/>
        Eye Color: ${query.eye_color} <br/>
    `;
}
