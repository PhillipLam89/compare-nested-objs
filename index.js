const NaN_exists = (v1,v2) => String(v1) == 'NaN' || String(v2) == 'NaN'
const number_exists = (n1,n2) => typeof n1 == 'number' || typeof n2 == 'number'
let recursiveCount = 0

function compareObjs(obj1, obj2) {
  // console.log(`RECURSIVE PART ran ${recursiveCount++} times`)
  if (obj1 === obj2 && obj1 !== 0) return true
  if (obj1 == null || obj2 == null) return false


  if (NaN_exists(obj1,obj2) || (obj1 === 0))
    return obj1.toLocaleString() === obj2.toLocaleString()
  else if (number_exists(obj1,obj2))
    return obj1===obj2


  const myStr = 'string function symbol'
  if (myStr.includes(typeof obj1) || myStr.includes(typeof obj2)) {
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
