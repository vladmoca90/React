import flights from './data';

//Calculates the total number of destinations
export const totalNumberOfDestinations = () => {
  if (flights.length == 0) {
    throw new Error('The list of flights must be provided!');
  }

  let counter = 0;

  for (let i in flights) {
    if (typeof flights[i].destinations === 'string') {
      counter += 1;
    }
    if (typeof flights[i].destinations === 'object') {
      counter += flights[i].destinations.length;
    }
  }

  return counter;
};
