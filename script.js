let words = new Map();

fetch('beale.wordlist.asc.txt')
.then(response => response.text())
.then(text => createMap(text));
/**
 * This function goes through the word list line-by-line.
 * It then splits the line on any tab characters that appear, 
 *   recording only the first two as 'key' and 'value'
 * If the key is exactly five characters long, we assume the 
 *   line we are on is a line that contains a key/value pair
 *   then we store the word in the map with the key. 
 * 
 * This allows us to use the words Map later by simply using 
 *   a call to get, like so:
 * 
 * lookupKey = 12340
 * word = words.get(lookupKey)
 */

function showPassword() {
  const password = genPassword();
  document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password")
  copyText.select();
  document.execCommand("copy")
}


function createMap(strings) {
	for( let line of strings.split('\n') ) {
		let [key, word] = line.split('\t');
		if( key.length === 5 ) {
			words.set( key, word );
		}
	}
}

  // let password = '';


  // for (let i = 0; i < 5; i++) {
  //   password += genPassword();
  // }

function getRandomWord() {
  // console.log(words)
  let a = parseInt(Math.random()*6+1);
  let c = parseInt(Math.random()*6+1);
  let b = parseInt(Math.random()*6+1);
  let d = parseInt(Math.random()*6+1);
  let e = parseInt(Math.random()*6+1);

  let lookupKey = [a, b, c, d, e].join('');
  console.log(lookupKey);
  let word = words.get(lookupKey)

  return word;  
}

function genPassword() {
  let password = "";
  for( let i = 0; i < 5; i++ ) {
    password += getRandomWord();
  }
  console.log(password)
  return password;
}

// function keyPressed() {
//   if (keyCode === RETURN) {
//     // 
//     redraw();
//   }
// }