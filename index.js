function takeANumber(line,name){
  line.push(name)
  let lineNum= line.length
  var message = (`Welcome, ${name}. You are number ${lineNum} in line.`)
  return message
}

function nowServing(line){
  var next =  line.shift
  if (next === 'string'){
    return `Currently serving ${next}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
