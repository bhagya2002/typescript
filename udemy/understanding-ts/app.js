var userInput;
var userName;
userInput = 5;
userInput = "Max";
// check if the types are the same userInput is of type unknown
if (typeof userInput === "string") {
    // userInput is a string
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
