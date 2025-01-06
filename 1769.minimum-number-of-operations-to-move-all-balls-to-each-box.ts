// @leet start
function minOperations(boxes: string): number[] {

  const result: number[] = [];
  for (let i = 0; i < boxes.length; i++) {
    let total = 0;

    for (let j = 0; j < boxes.length; j++) {
      const box = boxes[j];
      if (box === '1') {
        total += Math.abs(i - j);
      }
    }

    result.push(total);
  }
  return result;
}
// @leet end
