// TEST push
const NyoboltStats = {
    OpTemp: 300,
    downTime: 0.02, // Assume 6 min charge, 300 min use
    costToReplace: 500, // Assume £500 per battery
}

// User inputs
let userTimeInOperation = 0; // Time in operation (minutes)
let userTimeInRecharge = 0; // Time in recharge (minutes)
let userTotalNumberOfRechargeCycles = 0; // Number of recharge cycles until viable
let userCostToReplace = 0; // Cost to replace a battery (£)
let userValueInOperation = 0; // Value in operation (£ / minute)
let userTotalBatteries = 0; // Total number of batteries in use
let userHoursOperation = 0; // Hours of operation in an operating day


// User variables
let opTempUser = 0; // Operating temperatures
let downTimeUser = 0;   // Downtime of machines due to battery inefficiency
let ttcVsTioUser = 0; // Time to charge vs. Time in operation
// TODO: Do we allow users to input both separately and calculate for them?
let costToReplaceUser = 0; // Cost to replace
let degradationViabilityUser = 0; // % at which battery degradation makes its use unviable

// Nyobolt variables
let opTempNyo = NyoboltStats['OpTemp'];
let costToReplaceNyo = NyoboltStats['costToReplace']; // Cost to replace
let degradationViabilityNyo = 0; // % at which battery degradation makes its use unviable


// How many minutes of use can a battery be used for in total duration
// How often can it be used for vs needing to be recharged
