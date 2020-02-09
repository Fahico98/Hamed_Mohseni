

class HashTable {

   constructor(tableSize){
      this.table = new Array(tableSize);
      this.values = [];
   }
   
   // Defining the hashing function which allows a sting to be used as a key
   hash(string){

      const H = 37;
      let total = 0;
   
      for (var i = 0; i < string.length; i++) {
         total += H * total + string.charCodeAt(i);
      }

      total %= this.table.length;

      if(total < 1){
         this.table.length -1;
      }

      return parseInt(total);
   }
 
   showDistro(){
      for (const key in this.table) {
         if(this.table[key] !== undefined) {
            console.log(key, ' : ', this.table[key]);
         }
      }
   }
 
   put(data){
      const pos = this.hash(data);
      this.table[pos] = data;
   }
 
   get(key){
      return this.table[this.hash(key)];
   }
}
 
// HashTable with Build Chains technique of collision-resolution.
class HashTableChains extends HashTable{

   constructor(tableSize){
      super(tableSize);
      this.buildChains();
   }

   buildChains(){
      for(var i = 0; i < this.table.length; i++){
         this.table[i] = new Array();
      }
   }
 
   showDistro(){
      for(const key in this.table){
         if(this.table[key][0] !== undefined){
            console.log(key, ' : ', this.table[key]);
         }
      }
   }
 
   put(key, data){
      const pos = this.hash(key);
      let index = 0;
      if(this.table[pos][index] === undefined){
         this.table[pos][index] = data;
      }else{
         ++index;
         while(this.table[pos][index] !== undefined){
            index++;
         }
         this.table[pos][index] = data;
      }
   }
 
   get(key){
      const pos = this.hash(key);
      let index = 0;
      var l = this.table[pos].length;
      console.log("l: " + l);
      while(true){
         console.log("index: " + index + ", pos: " + pos + ".");
         if(this.table[pos][index] !== undefined){
            if(this.table[pos][index] != key){
               if(index + 1 == l){
                  break;
               }else{
                  index++;
               }
            }else{
               return this.table[pos][index];
            }
         }else{
            break;
         }
      }
      return undefined;
   }
}
 
// HashTable with Linear Probing technique of collision-resolution.
class HashTableLinear extends HashTable{

   constructor(tableSize){
      super(tableSize);
      this.values = new Array();
   }

   put(key, data){
      var pos = this.hash(key);
      var l = this.table.length;
      var hash = pos;
      if(this.table[pos] === undefined){
         this.table[pos] = key;
         this.values[pos] = data;
      }else{
         while(this.table[pos] !== undefined){
            pos = (pos + 1 == l) ? 0 : pos + 1;
            if(pos == hash){
               return 0;
            }
         }
         this.table[pos] = key;
         this.values[pos] = data;
      }
   }

   get(key){
      const hash = this.hash(key);
      var l = this.table.length;
      var i = hash;
      if(hash > -1){
         while(true){
            if(this.table[i] !== undefined){
               if(this.table[i] === key){
                  return this.values[i];
               }else{
                  i = (i + 1 == l) ? 0 : i + 1;
                  if(i == hash){
                     break;
                  }
               }
            }else{
               break;
            }
         }
      }
      return undefined;
   }

   showDistro(){
      for(const key in this.table){
         if(this.table[key] !== undefined){
            console.log(key, ' : ', this.values[key]);
         }
      }
   }
}