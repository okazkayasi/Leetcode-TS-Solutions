// @leet start

function minOpsPrefixSum(boxes: string): number[] {
  const result: number[] = [];
  let totalLeft = 0;
  let totalRight = 0;
  let countRight = 0;
  let countLeft = 0;

  // calculate totalRight for 0th index
  for (let i = 1; i < boxes.length; i++) {
    const boxIsFull = boxes[i] === "1";
    countRight += boxIsFull ? 1 : 0;
    totalRight += boxIsFull ? i : 0;
    countLeft = boxes[0] === "1" ? 1 : 0;
  }
  result.push(totalRight);

  for (let i = 1; i < boxes.length; i++) {
    const boxIsFull = boxes[i] === "1";
    totalRight = totalRight - countRight - (boxIsFull ? 1 : 0);
    countRight = boxIsFull ? countRight - 1 : countRight;
    totalLeft = totalLeft + countLeft + (boxIsFull ? 1 : 0);
    countLeft = boxIsFull ? countLeft + 1 : countLeft;
    result.push(totalRight + totalLeft);
  }

  return result;
}

function minOperationsBruteForce(boxes: string): number[] {
  const result: number[] = [];
  for (let i = 0; i < boxes.length; i++) {
    let total = 0;

    for (let j = 0; j < boxes.length; j++) {
      const box = boxes[j];
      if (box === "1") {
        total += Math.abs(i - j);
      }
    }

    result.push(total);
  }
  return result;
}

function minOperations(boxes: string): number[] {
  return minOpsPrefixSum(boxes);
}
// @leet end
