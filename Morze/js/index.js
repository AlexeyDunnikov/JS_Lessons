const message = "**** * *-** *-** ---  -- -*--  **-* *-* ** * -* -**";
const ALPHABET_MORZE = {
  "-----": "0",
  "*----": "1",
  "**---": "2",
  "***--": "3",
  "****-": "4",
  "*****": "5",
  "-****": "6",
  "--***": "7",
  "---**": "8",
  "----*": "9",
  "*-": "a",
  "-***": "b",
  "-*-*": "c",
  "-**": "d",
  "*": "e",
  "**-*": "f",
  "--*": "g",
  "****": "h",
  "**": "i",
  "*---": "j",
  "-*-": "k",
  "*-**": "l",
  "--": "m",
  "-*": "n",
  "---": "o",
  "*--*": "p",
  "--*-": "q",
  "*-*": "r",
  "***": "s",
  "-": "t",
  "**-": "u",
  "***-": "v",
  "*--": "w",
  "-**-": "x",
  "-*--": "y",
  "--**": "z",
  "/": " ",
  "-*-*--": "!",
  "*-*-*-": "*",
  "--**--": ",",
};

function decode(str){
    return str.split(" ").map(letter => {
        return letter === "" ? " " : ALPHABET_MORZE[letter];
    }).join('');
}

console.log(decode(message));
