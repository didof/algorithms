export default class Sort {
  static selection = (array: Array<number>) => {
    const { length } = array

    for (let i = 0; i < length; i++) {
      let minIndex = i

      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) minIndex = j
      }

      const tmp = array[minIndex]
      array[minIndex] = array[i]
      array[i] = tmp
    }
  }
}
