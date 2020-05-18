function log(msg) {
    // Logs a message to the console with a timestamp
    console.log(`${(new Date()).toISOString()}: ${msg}`);
}

module.exports = { log };
