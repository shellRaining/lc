function maxArea(height: number[]): number {
  const len = height.length;
  let i = 0;
  let j = len - 1;
  let cur_max = 0;

  function getArea(l: number, r: number) {
    return (r - l) * Math.min(height[l], height[r]);
  }

  while (i < j) {
    const area = getArea(i, j);
    if (area > cur_max) {
      cur_max = area;
    }

    height[i] < height[j] ? i++ : j--;
  }

  return cur_max;
}

const height = [1, 1];
console.log(maxArea(height));

export { maxArea };
