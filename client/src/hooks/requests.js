const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/launches`);
  // Load launches, sort by flight number, and return as JSON.
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b) => {
    //our front end makes the right request in a decending order for the flight numbers
    return a.flightNumber - b.aflightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // Making the POST into the SUBMIT function to GET or POST we need await function
  try {
   return await fetch(`${API_URL}/launches`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    //the body should an object but a body needs a string to work so we use JSON.stringify
    body: JSON.stringify(launch),
   });
  } catch (err) {
    return {
      ok: false,
    };
  }




  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};