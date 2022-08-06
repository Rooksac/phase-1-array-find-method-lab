const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
let winningObject;
function superbowlWin(array) {
    winningObject = array.find(function (record) {
        return record.result === 'W'
    })
    if(winningObject.year){
        return winningObject.year
    }
    else {return undefined}
}

superbowlWin(record);

   