async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=01465e91-dd2c-4fd2-94fa-add0dc0b645d&offset=0");
        const data = await response.json();

        const matchesList = data.data;

        if (!matchesList) return [];

        const relevantData = matchesList.map(match => `${match.name} , ${match.status}`);

        console.log({ relevantData });

        const matchesElement = document.getElementById("matches");
        if (matchesElement) {
            matchesElement.innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
        } else {
            console.error("Element with ID 'matches' not found in the DOM.");
        }

        return relevantData;
    } catch (e) {
        console.error(e);
    }
}

getMatchData();
