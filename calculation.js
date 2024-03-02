// NyoboltStats - held constant in the code
const NyoboltStats = {
    TimeInOperation: 500,
    TimeInRecharge: 30,
    TotalNumberOfRechargeCycles: 3000,
    CostToReplace: 4000
}

// User inputs
let userTimeInOperation = 300; // Time in operation (minutes)
let userTimeInRecharge = 30; // Time in recharge (minutes)
let userTotalNumberOfRechargeCycles = 3000; // Number of recharge cycles until viable
let userCostToReplace = 4000; // Cost to replace a battery (£)
let userValueInOperation = 1; // Value in operation (£ / minute)
let userTotalBatteries = 300; // Total number of batteries in use
let userHoursOperation = 24; // Hours of operation in an operating day

let cycleLength = userTimeInOperation / userTimeInRecharge;
let life = userTimeInRecharge * cycleLength;

let valuePerCycle = userTimeInOperation * userValueInOperation;
let valuePerMin = valuePerCycle / cycleLength;
let costPerMin = userCostToReplace / life;

let totalValueLifetime = life * valuePerMin;
let totalCostLifetime = life * costPerMin;

let valueMinLife = life / totalValueLifetime;
let costMinLife = life / totalCostLifetime;

let benefitMinLife = round(valueMinLife - costMinLife, 2);
let totalBenefitMin = benefitMinLife * userTotalBatteries;
let minsOperatingDay = userHoursOperation * 60;
let totalBenefitDay = totalBenefitMin * minsOperatingDay;
