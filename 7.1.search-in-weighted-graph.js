const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: undefined,
}

const costs = {
  a: 6,
  b: 2,
  fin: Number.MAX_VALUE,
}

const parents = {
  a: 'start',
  b: 'start',
  fin: undefined,
}
const processed = [];

const fundLowestConst = (costs) => {
  let minCost = Number.MAX_VALUE;
  let minCostKey = '';

  for (const key in costs) {
    if (costs[key] < minCost && !processed.includes(key)) {
      minCost = costs[key];
      minCostKey = key;
    }
  }
  processed.push(minCostKey);
  return minCostKey;
}

const findPath = () => {
  let node = fundLowestConst(costs);
  while(node) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (const neighbor in neighbors) {
      const newCost = cost + neighbors[neighbor];

      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    }

    node = fundLowestConst(costs);
  }
}

findPath();

console.log('costs', costs);
