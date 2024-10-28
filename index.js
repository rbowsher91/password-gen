function generateRandomStrings() {
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];

    // Helper function to generate a random string of specified length
    function getRandomString(length) {
        let randomString = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        return randomString;
    }

    // Generate two random strings of 15 characters each
    const randomString1 = getRandomString(15);
    const randomString2 = getRandomString(15);

    // Display the random strings in the specified fields
    document.getElementById("genned-pass-el-1").textContent = randomString1;
    document.getElementById("genned-pass-el-2").textContent = randomString2;
}