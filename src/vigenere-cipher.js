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
  constructor(flag = true) {
    this.directMachine = flag;
    this.isDecrypt = false;
  }
  crypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');
    const trimMessage = message.replace(/[^a-z]/gi, '');
    const trimMessageArray = [...trimMessage.toUpperCase()];
    const keyArray = [...key.toUpperCase()];
    if (key.length < trimMessage.length) {
      trimMessageArray.forEach((_item, i) => {
        if (!keyArray[i]) keyArray.push(keyArray[i - key.length]);
      });
    }
    const result = [];
    trimMessageArray.forEach((item, idx) => {
      let shift = this.isDecrypt
        ? (item.charCodeAt(0) - keyArray[idx].charCodeAt(0)) % 26
        : (item.charCodeAt(0) + keyArray[idx].charCodeAt(0)) % 26;
      let code = shift >= 0 ? 65 + shift : 91 + shift;
      result.push(String.fromCharCode(code));
    });
    let messageArray = [...message];
    messageArray.forEach((item, idx) => {
      if (!/[a-z]/i.test(item)) result.splice(idx, 0, item);
    });
    return this.directMachine ? result.join('') : result.reverse().join('');
  }
  encrypt(message, key) {
    this.isDecrypt = false;
    return this.crypt(message, key);
  }
  decrypt(encryptedMessage, key) {
    this.isDecrypt = true;
    return this.crypt(encryptedMessage, key);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
