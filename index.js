let CryptoJS = require("crypto-js");
let Xmorse = require("xmorse");
const Cipher = require('cipher-factory');

const hex = (msg) => {
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(msg));
}

const morse = {
    en : (msg) => {
        return Xmorse.encode(msg);
    },
    de : (msg) => {
        return Xmorse.decode(msg);
    },
}

const base64 = {
    en : (msg) => {
        msg = CryptoJS.enc.Utf8.parse(msg);
        return CryptoJS.enc.Base64.stringify(msg);
    },
    de : (msg) => {
        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(msg));
    },
}

const caesar = {
    en : function (msg, key) {
        return Cipher.caesar.encode(msg, key);
    },
    de : function (msg, key) {
        return Cipher.caesar.decode(msg, key);
    }
}

const railfence = {
    en : function (msg, key) {
        return Cipher.railFence.encode(msg, key);
    },
    de : function (msg, key) {
        return Cipher.railFence.decode(msg, key);
    }
}

const vigenere = {
    en : function (msg, key) {
        return Cipher.vigenere.encode(msg, key);
    },
    de : function (msg, key) {
        return Cipher.vigenere.decode(msg, key);
    }
}

const md5 = (msg) => {
    return CryptoJS.MD5(msg).toString();
}

const sha1 = (msg) => {
    return CryptoJS.SHA1(msg).toString();
}

const sha256 = (msg) => {
    return CryptoJS.SHA256(msg).toString();
}

const sha512 = (msg) => {
    return CryptoJS.SHA512(msg).toString();
}

const rc4 = {
    en : function (msg, key) {
        return CryptoJS.RC4.encrypt(msg, key).toString();
    },
    de : function (msg, key) {
        let bytes  = CryptoJS.RC4.decrypt(msg, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

const aes = {
    en : function (msg, key) {
        return CryptoJS.AES.encrypt(msg, key).toString();
    },
    de : function (msg, key) {
        let bytes  = CryptoJS.AES.decrypt(msg, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

const des = {
    en : function (msg, key) {
        return CryptoJS.DES.encrypt(msg, key).toString();
    },
    de : function (msg, key) {
        let bytes  = CryptoJS.DES.decrypt(msg, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}


module.exports = {
    hex,
    morse,
    base64,
    caesar,
    railfence,
    vigenere,
    md5,
    sha1,
    sha256,
    sha512,
    rc4,
    aes,
    des
};