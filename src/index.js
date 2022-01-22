module.exports = function toReadable(number) {
  let firstNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenTo19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let secondNumbers = [0, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
  let res
  let str = number.toString();
  if (number < 10) res = firstNumbers[number];
  if (str.length == 2) {
    if (number < 20) res = tenTo19[str[1]];
    if (number > 19 && +str[1] == 0) {
      res = secondNumbers[str[0]];
    }
    if (number > 19 && +str[1]) {
      res = secondNumbers[str[0]] + ' ' + firstNumbers[str[1]];
    }
  }
  if (str.length == 3) {
    if (+str[1] == 0 && +str[2] == 0) {
      res = firstNumbers[str[0]] + ' ' + secondNumbers[10];
    }
    if (+str[1] == 1 && +str[2] !== 0) {
      res = firstNumbers[str[0]] + ' ' + secondNumbers[10] + ' ' + tenTo19[str[2]];
    }
    if (+str[1] && +str[2] == 0) {
      res = firstNumbers[str[0]] + ' ' + secondNumbers[10] + ' ' + secondNumbers[str[1]];
    }
    if (+str[1] == 0 && +str[2] !== 0) {
      res = firstNumbers[str[0]] + ' ' + secondNumbers[10] + ' ' + firstNumbers[str[2]];
    }
    if (+str[1] > 1 && +str[2] !== 0) {
      res = firstNumbers[str[0]] + ' ' + secondNumbers[10] + ' ' + secondNumbers[str[1]] + ' ' + firstNumbers[str[2]];
    }
  }
  return res
}


