// Updated Speed.js

// Addressed variable declarations, error handling, and parameter passing issues

function calculateSpeed(distance, time) {
    // Error handling for invalid inputs
    if (time <= 0) {
        throw new Error('Time must be a positive number.');
    }
    if (distance < 0) {
        throw new Error('Distance cannot be negative.');
    }

    // Variable declaration
    const speed = distance / time;

    return speed;
}

// Example usage:
try {
    const speed = calculateSpeed(100, 10);
    console.log(`The speed is ${speed} m/s`);
} catch (error) {
    console.error(error.message);
}