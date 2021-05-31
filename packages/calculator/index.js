const { hoursToMinutes } = require('@expo-monorepo-demo/utils')

const amountOfHours = 2
const amountOfMinutes = hoursToMinutes(amountOfHours)

console.log('The amount of minutes is of', amountOfMinutes)
