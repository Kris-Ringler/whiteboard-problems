/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    //loop through string
    //switch statement on each string
    //if letter is ()
    //check if i+1 is a, if it is, push al to the string and add 3 to i
    //if i+1 is ), push o to the new string and add 1 to i;
    //if its G, push a G to the string and do nothing to i
    let output = "";

    for(let i = 0; i < command.length; i++){
        switch(command[i]){
            case "G":
                output += "G"
                break;
            case "(":
                if(command[i + 1] === ")"){
                    output += "o"
                    i++
                    break;
                } else {
                    output += "al"
                    i += 3
                    break;
                }

        }
    }
    return output

};