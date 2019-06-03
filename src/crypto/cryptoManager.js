const nacl = require('tweetnacl');
const nacl_util  = require('tweetnacl-util');



export default class CryptoManager {


    constructor() {

        this.serverPublicKey = nacl.randomBytes(32);

        this.crypto = crypto.subtle;
        this.clientKeyPair = nacl.box.keyPair();
        
        //console.log(this.clientKeyPair)


    }

    Uint8ArrayConvert(serverKey) {
        var result = [];
            for(var i in serverKey)
            {
                //console.log(serverKey[i])
                result.push(serverKey[i]);
            }
    
            result = new Uint8Array(result);
            return result;
    }

    setServerPublicKey(serverKey) {

        var result = [];
        for(var i in serverKey)
        {
            //console.log(serverKey[i])
            result.push(serverKey[i]);
        }

        result = new Uint8Array(result);

        //console.info( result  );
        this.serverPublicKey = result;
    }

    encrypt(message) {

        var nonce = nacl.randomBytes(24);

        const box = nacl.box(
            nacl_util.decodeUTF8(message),
            nonce,
            this.serverPublicKey,
            this.clientKeyPair.secretKey
        )

        console.log("Encrypted: " + box);
        
        const pack = {box: box,nonce: nonce};

        //this.decrypt(pack);
            
        return pack;

    }

    decrypt(encrypted) {
        const payload = nacl.box.open(this.Uint8ArrayConvert(encrypted.box), this.Uint8ArrayConvert(encrypted.nonce), this.serverPublicKey, this.clientKeyPair.secretKey)
        const decrypted =  nacl_util.encodeUTF8(payload);
        console.log(decrypted);
        return decrypted;
    }


}