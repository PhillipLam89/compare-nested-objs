//Will do deep comparison any 2 values,
// nested objs as well, ALL types

let recursiveCount = 0

function compare2Values(value1, value2) {
  // console.log(`RECURSIVE PART ran ${recursiveCount++} times`)

  if (value1 === value2 && value1 !== 0)
      return true

  if (value1 == undefined || value2 == undefined) return false
          //handle #s NaN and neg/pos zeroes

  const myStr = 'number string'
  if (myStr.includes(typeof value1) || myStr.includes(typeof value2)) {
         return Object.is(value1,value2)
  }

        //handles func,symbol & string comparison
  const myStr2 = 'function symbol'
  if (myStr2.includes(typeof value1) || myStr2.includes(typeof value2)) {
        return String(value1)===String(value2)
    }

  // Lines below ONLY run if the values are arrays or objs
  const keys1 = String(Object.keys(value1))
  const keys2 = String(Object.keys(value2))

  // checks for key property names
  if (keys1 != keys2) return false

  for (const key of Object.keys(value1)) {
    if (!compare2Values(value1[key], value2[key])) return false
  }
  return true
}



const obj1 = {
  a: {phil: {age:30, job: ['teacher', class PHIL{}] }},
  b: 2,
  c: { foo: new String('Acc'), x: {bar: 2,NaN:null} },
  d: Array({undefined},1,2,[5]),
  e: [1,2,{myNumber: Number(null)}],
  f: function hi(xs){return -0},
  g: null,
  h: Symbol(Object.prototype),
  i: NaN,
  j: Infinity,
  k: 'his!',
  l: Date.now(),
  m: [Promise, String(Math.PI)]
}

const obj2 = {
  a: {phil: {age:30, job: ['teacher', class PHIL{}] }},
  b: 2,
  c: { foo: new String('Acc'), x: {bar: 2,NaN:null} },
  d: Array({undefined},1,2,[5]),
  e: [1,2,{myNumber: Number(null)}],
  f: function hi(xs){return -0},
  g: null,
  h: Symbol(Object.prototype),
  i: NaN,
  j: Infinity,
  k: 'his!',
  l: Date.now(),
  m: [Promise, String(Math.PI)]
}



console.log('2 same-value nested arrays/objs =>',compare2Values(obj1,obj2)) //true
// console.log('array of same values =>',compare2Values( [1,2,3], [1,2,3] )) //true
// console.log('array w/ DIFF values =>',compare2Values( [1,2,3], [999,2,3] )) //true
// console.log('NaN === NaN =>',compare2Values(NaN, NaN)) //true
// console.log('negative zero & zero =>',compare2Values(-0, +0)) //false
// console.log('Symbols with same labels =>',compare2Values(Symbol('1'), Symbol('1'))) //true
// console.log('Symbols with DIFF labels =>',compare2Values(Symbol('500'), Symbol('1'))) //false
