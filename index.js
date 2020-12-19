/*function takeANumber(line,name){
  line.push(name)
  let lineNum= line.length
  var message = ('Welcome, ${name}. You are number ${lineNum} in line.')
  return message
}*/

function takeANumber(lineArr, name) {
  lineArr.push(name)
  let linePosition = lineArr.length
  var welcomeMessage = (`Welcome, ${name}. You are number ${linePosition} in line.`)
  return welcomeMessage
}
