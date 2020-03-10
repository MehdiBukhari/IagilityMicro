import bcrypt from "bcrypt";
export class Encrpation{
    Salt_factor:number
    constructor(){
        this.Salt_factor=10
    }
    genrateEncrpation(value:string){
        let encString:string='helo';
        bcrypt.genSalt(this.Salt_factor, function(err, salt) {
            if (err) return (err);
        
            // hash the password using our new salt
            bcrypt.hash(value, salt,function(err, hash) {
              if (err) return (err);
        
              // set the hashed password back on our user document
              return hash;
            
            });
          });
        
    }
}