const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>( 
    console.log(item.languageName)
 ) );
//***Important forEach loop does not return any value  */
//Thats why we use filter but its a kind of loop where it returns a value
