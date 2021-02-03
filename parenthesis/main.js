/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    for(let i = 0; i < string.length; i++){
        const num = string.length - (i+1)
        debugger;
        switch(string[i]){
            case "(":

                if(string[num] !== ")" || string[i + 1] !== ")"){
                    return false;
                }

                break;
            case "{":
                if(string[num] !== "}" || string[i + 1] !== "}"){
                    return false;
                }
                break;
            case "[":
                if(string[num] !== ")" || string[i + 1] !== "]"){
                    return false;
                }
                break;
            default:
                3
        }
    }
    return true;
};