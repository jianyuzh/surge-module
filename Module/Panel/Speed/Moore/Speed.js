// Speed.js

// Speed Panel

function startQuery() {
    console.log('Querying...');
}

function onQueryComplete() {
    console.log('Done');
}

function displayResults(downRate, ping, time) {
    console.log(`Down: ${downRate}`);
    console.log(`Ping: ${ping}`);
    console.log(`Time: ${time}`);
}

// Example usage
startQuery();
onQueryComplete();
displayResults('100Mbps', '20ms', '2s');
