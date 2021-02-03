/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    //create empty array to store reduced values
    //reduce each array within the accounts array and save to a variable
    //push variable into reduced value account array
    //loop though reduced value array and return the greatest value
    const totalsArr = []
    accounts.forEach(account => {
        const reducer = (acc, curr) => acc + curr
        const total = account.reduce(reducer)
        totalsArr.push(total)
    })
    let highestTotal;
    totalsArr.forEach(total => {
        if(!highestTotal){
            highestTotal = total
        }

        if(total > highestTotal){
            highestTotal = total
        }
    })
    return highestTotal
};