const nanSTR = (v1,v2) => String(v1) == 'NaN' || String(v2) == 'NaN'
function compareObjs(obj1, obj2) {
  if (obj1 === obj2) return true
  else if (obj1 == null || obj2 == null) return false

  if (nanSTR(obj1,obj2)) {
    return String(obj1) === String(obj2)
  }else if (obj1.toFixed || obj2.toFixed) {
    return obj1 === obj2
  }
  const specials = {function: 1,symbol:1,string:1}

  if (typeof obj1 in specials||
      typeof obj2 in specials) {
        return String(obj1) === String(obj2)
    }
  const keys1 = String(Object.keys(obj1))
  const keys2 = String(Object.keys(obj2))
  if (keys1 != keys2) return false

  for (const key of Object.keys(obj1)) {
    if (!compareObjs(obj1[key], obj2[key])) return false
  }
  return true
}





let obj1 = {
  a: {phil: {age:30, job: ['teacher','blah']}},
  b: 2,
  c: { foo: 2, bar: 2},
  d: { baz: 1, bat: 2, arr: [2,3] },
  e: [1,2,{myNumber:3}],
  f: function hi(x){},
  g: null,
  h: Symbol('his'),
  i: NaN,
  j: Infinity,
  k: 'hi!',
  l: Date.now(),
  m: [Promise, String(55)]
}

let obj2 = {
  a: {phil: {age:30, job: ['teacher','blah']}},
  b: 2,
  c: { foo: 2, bar: 2},
  d: { baz: 1, bat: 2, arr: [2,3] },
  e: [1,2,{myNumber:3}],
  f: function hi(x){},
  g: null,
  h: Symbol('his'),
  i: NaN,
  j: Infinity,
  k: 'hi!',
  l: Date.now(),
  m: [Promise, String(55)]
}



console.log(compareObjs(obj1,obj2)) //true







































































// function deepComparison (first, second) {
//   if(first === second) return true
//   if(first === null || second === null) return false
//   const specials = ['symbol', 'function']

//   if( specials.includes(typeof first)  || specials.includes(typeof first))  {
//         return String(first) === String(second)
//     }  else if (first.toFixed || second.toFixed) return first === second


//   const first_keys = String(Object.getOwnPropertyNames(first))
//   const second_keys = String(Object.getOwnPropertyNames(second))

//   if(first_keys !== second_keys) return false

//   for(const key of Object.getOwnPropertyNames(first)) {

//       if (!deepComparison(first[key], second[key])) return false
//   }
//   return true
// }
