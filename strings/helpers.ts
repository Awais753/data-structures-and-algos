type Accumulator = { isTraversed: Record<string, boolean>; dups: string }

export const reduceDuplicates = (acc: Accumulator, curr: string) => {
  if (!acc.isTraversed[curr]) {
    acc.isTraversed[curr] = true
  } else {
    acc.dups += curr
  }
  return acc
}

export const getCountMap = (str: string) =>
  str.split('').reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 1
    else acc[curr]++
    return acc
  }, {} as Record<string, number>)

export const swapCharacters = (str: string, index1: number, index2: number) => {
  const charArray = str.split('')
  const temp = charArray[index1]
  charArray[index1] = charArray[index2]
  charArray[index2] = temp
  return charArray.join('')
}
