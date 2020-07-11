/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (array) {
  //create a counter variable thats starts at 0
  //let mostRecent = most recent number added
  //let secondRecent = 2nd most recent number
  //loop through array
  //switch statement
  //case parseInt(element)
  //add to counter
  //case C, remove [i-1] from counter
  //case D, double Numbers

  let score = 0
  let mostRecent = null
  let secondMostRecent = null
  let thirdMostRecent = null

  for (let i = 0; i < array.length; i++) {

    if (parseInt(array[i])) {
      score += parseInt(array[i])
      secondMostRecent = mostRecent
      thirdMostRecent = secondMostRecent
      mostRecent = array[i]


    } else {
      switch (array[i]) {


        case "D":

          secondMostRecent = mostRecent
          mostRecent = score * 2
          score = score + (score * 2)

          break;
        case "C":
          score = score - parseInt(mostRecent)
          mostRecent = secondMostRecent;
          secondMostRecent = thirdMostRecent
          break;
        case "+":
          score = score + parseInt(secondMostRecent) + parseInt(mostRecent)
          break;

      }
    }
  }

  return score
};
