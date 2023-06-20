const findOdnolybInGraph = (graph) => {
  const queue = [...graph.you];

  for (let i = 0; i <= queue.length; i++) {
    const friendName = queue[i];

    if (graph[friendName] && graph[friendName].length === 1) {
      return friendName;
    }

    if (graph[friendName]) {
      const friends = graph[friendName]
        .filter((friend) => !queue.includes(friend));

      queue.push(...friends);
    }
  }
}

const obj = {
  you: ['vasuy', 'sasha', 'vova'],
  vasuy: ['alina', 'katya', 'natasha'],
  sasha: ['kirill', 'anna', 'liza', 'kolya'],
  kolya: ['kirill', 'anna', 'liza'],
  vova: ['irina', "vika", "lera"],
  irina: [ 'andrey', 'alena'],
  vika: ['dima', 'victor', 'anar'],
  anar: ['olya'],
}

console.log(findOdnolybInGraph(obj))

