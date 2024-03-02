// NyoboltStats - held constant in the code
const NyoboltStats = {
    TimeInOperation: 500,
    TimeInRecharge: 30,
    TotalNumberOfRechargeCycles: 3000,
    CostToReplace: 4000
}

// User inputs
let userTimeInRecharge = 30; // Time in recharge (minutes)
let userCostToReplace = 4000; // Cost to replace a battery (£)
let userTotalBatteries = 300; // Total number of batteries in use

// HARDCODED AS DUMMY DATA FOR NOW
let userTimeInOperation = 300; // Time in operation (minutes) - HARDCODED FOR NOW AS DUMMY DATA
let userTotalNumberOfRechargeCycles = 3000; // Number of recharge cycles until viable - HARDCODED FOR NOW AS DUMMY DATA
let userValueInOperation = 1; // Value in operation (£ / minute) - HARDCODED FOR NOW AS DUMMY DATA
let userHoursOperation = 24; // Hours of operation in an operating day - HARDCODED FOR NOW AS DUMMY DATA


// Calculate cycle length for user vs Nyobolt
let userCycleLength = cyclelength(userTimeInOperation, userTimeInRecharge);
let nyoCycleLength = cyclelength(NyoboltStats['TimeInOperation'], NyoboltStats['TimeInRecharge']);

// Calculate lifetime
let userLife = life(userTimeInRecharge, userCycleLength);
let nyoLife = life(userTimeInRecharge, nyoCycleLength);

// Calculate details
let userValuePerMin = value(userTimeInOperation, userValueInOperation, userCycleLength)
let nyoValuePerMIn = value(NyoboltStats['TimeInOperation'], userValueInOperation, nyoCycleLength)

let userValueLifetime = valueLife(userLife, userValuePerMin);
let nyoValueLiftime = valueLife(nyoLife, nyoValuePerMin);

let userBenefitMinLife = benefitMinLife(userlife, userValueLifetime, userCostToReplace)
let nyoBenefitMinLife = benefitMinLife(nyolife, nyoValueLifetime, userCostToReplace)

let minsOperatingDay = userHoursOperation * 60;

let userBenefitDay = totalBenefitDay(userBenefitMin, minsOperatingDay);
let nyoBenefitDay = totalBenefitDay(nyoBenefitMin, minsOperatingDay);

let finalResult = returnSum(userBenefitDay, nyoboltBenefitDay);

function returnSum(a, b) {
    return b - a;
}

function totalBenefitDay(totalBenefitMin, minsOperatingDay) {
    return totalBenefitMin * minsOperatingDay;
}

function benefitMinLife(life, totalValueLifetime, userCostToReplace) {
    return round((life / totalValueLifetime) - (life / userCostToReplace), 2);
}

function valueLife(life, valuePerMin) {
    return (life * valuePerMin);
}

function value(userTimeInOperation, userValueInOperation, cycleLength) {
    return ((userTimeInOperation * userValueInOperation) / cycleLength);
}

function life(recharge, cyclelength) {
    let life = recharge * cyclelength;
    return life;
}

function cyclelength(op, recharge) {
    let cycleLength = (op / recharge);
    return cycleLength;
}