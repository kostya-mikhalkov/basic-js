const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  // constructor(meaning = true){
  //   this.meaning = meaning;
  //   this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   this.obj ={};
  // }

  // tableVigenere(){
  //   for(let i = 0; i < this.alphabet.length; i++) {
  //     this.obj[this.alphabet[i]] = i;
  //   }
  // }
  encrypt(message, key) {
    // if(!message || !key) {
    //   throw new Error('Incorrect arguments!');
    // }

    // message = message.toUpperCase();
    // key = key.toUpperCase();

    // this.tableVigenere();
    // let res = '';
    // for(let i = 0; i < message.length; i++) {
    //   res += this.alphabet[(this.obj[message[i]] + this.obj[key[i % key.length]]) % this.alphabet.length]
    // }
    // return this.meaning ? res : res.split('').reverse().join('');
      throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    // if(!encryptedMessage || !key) {
    //   throw new Error('Incorrect arguments!');
    // }
    // encryptedMessage = encryptedMessage.toUpperCase();
    // key = key.toUpperCase();

    // this.tableVigenere();
    // let res = '';
    // for(let i = 0; i < encryptedMessage.length; i++) {
    //   res += this.alphabet[(this.obj[encryptedMessage[i]] - this.obj[key[i % key.length]] + this.alphabet.length) % this.alphabet.length]
    // }
    // return this.meaning ? res : res.split('').reverse().join('');
      throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }
}


module.exports = {
  VigenereCipheringMachine
};
