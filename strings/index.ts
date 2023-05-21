import { getCountMap, reduceDuplicates, swapCharacters } from './helpers'

const VOWELS = ['a', 'e', 'i', 'o', 'u']

// 1. Print duplicate characters from String?

const showDuplicateCharacters = (str: string) => {
  const { dups } = str.split('').reduce(reduceDuplicates, { isTraversed: {}, dups: '' })
  console.log(dups)
}

// 2. Check if two Strings are anagrams of each other

const checkAnagrams = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false

  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')

  return sortedStr1 === sortedStr2
}

// 3. Print the first non-repeated character from String?

const printFirstUniqueIn = (str: string) => {
  const countMap = getCountMap(str)
  const firstUnique = Object.keys(countMap).find((key) => countMap[key] === 1)
  console.log(firstUnique)
}

// 4. Reverse a given String using recursion?

const reverseRecursive = (str: string): string => {
  if (str.length === 0) return ''
  return str[str.length - 1] + reverseRecursive(str.substring(0, str.length - 1))
}

// 5. Check if a String contains only digits?

const hasOnlyDigits = (str: string) => !/.*[^0-9].*/.test(str)

// 6. Find duplicate characters in a String?

const findDuplicates = (str: string) => {
  const countMap = getCountMap(str)
  const dupsStr = Object.entries(countMap).reduce(
    (acc, [character, count]) => (count > 1 ? (acc += character) : acc),
    ''
  )
  return dupsStr
}

//  7. Count many vowels and consonants in a given String?

const countVowelsAndConsonants = (str: string) => {
  const numOfVowels = str.split('').reduce((acc, curr) => (VOWELS.includes(curr) ? acc++ : acc), 0)
  const numOfConsonants = str.length - numOfVowels
  return {
    numOfConsonants,
    numOfVowels,
  }
}

// 8. Count the occurrence of a given character in String

const countOccurencesOf = (character: string, str: string) =>
  str.split('').reduce((acc, curr) => (curr === character ? acc++ : acc), 0)

// 9. Find all permutations of String

const findPermutations = (str: string, startIndex = 0) => {
  if (startIndex === str.length) {
    console.log(str)
    return
  }
  for (let i = startIndex; i < str.length; i++) {
    const permutation = swapCharacters(str, startIndex, i)
    findPermutations(permutation, startIndex + 1)
  }
}

// 10. Reverse words in a sentence/string

const reverseWords = (sentence: string) => sentence.split(/\\s/).reverse().join(' ')

// 11. Check if two String is a rotation of each other?

const checkRotation = (str1: string, str2: string) =>
  str1.split('').sort().join('') === str2.split('').sort().join('')

// 12. Check if the given String is Palindrome?
const checkPalindrome = (str: string) => {
  if (str.length === 0) return false

  const checkPalindromeRecursive = (startIndex: number, endIndex: number): boolean => {
    if (startIndex > endIndex) return true
    if (str[startIndex] !== str[endIndex]) return false
    return checkPalindromeRecursive(startIndex + 1, endIndex - 1)
  }

  return checkPalindromeRecursive(0, str.length - 1)
}

export default {
  checkAnagrams,
  printFirstUniqueIn,
  reverseRecursive,
  showDuplicateCharacters,
  hasOnlyDigits,
  findDuplicates,
  countVowelsAndConsonants,
  countOccurencesOf,
  findPermutations,
  reverseWords,
  checkRotation,
  checkPalindrome,
}
