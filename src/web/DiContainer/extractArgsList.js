export function extractArgsList (classObj) {
  const classConstructorElts = extractConstructorElt(classObj)
  const constructorArgs = classConstructorElts.filter((arg) => {
    return arg !== 'constructor' ? arg : null
  })
  return constructorArgs
}

function extractConstructorElt (classObj) {
  const classEltsString = classObj.toString().split('\n').filter((classElements) => {
    return classElements.match(/([()])/g)
  })

  return classEltsString[0].replace(/[^\w]/g, ' ').split(' ')
}
