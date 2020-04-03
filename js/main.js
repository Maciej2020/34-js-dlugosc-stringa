let var1 = "Uwielbiam JavaScript";
let var2 = "Jestem świetnym programistą";

function longerString(a,b){
   if(a.length > b.length) return a;
   if(a.length < b.length) return b;
}

console.log(longerString(var1,var2))