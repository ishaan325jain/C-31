var ob1 = "somename";
console.log(typeof ob1);
var ob2 = 2544;
console.log(typeof ob2);
var ob3 = "25";
console.log(typeof ob3);
var person = {"name":"yourname", "age" : 22 ,  "marks" : 45};
console.log(typeof person);
var ob4 ;
console.log(typeof ob4);
var a = [10,20,30,45.6,"apple"];
console.log(a);
console.log(a.length );
console.log(a[3])
for (var i = 0;i<a.length;i++ ){
console.log(a[i]);
}
var b = [[10,20],[30,40],[50,60]]
console.log(b);
console.log(b.length)
console.log(b[1][1]);

for (var i = 0;i<b.length;i++ ){
    console.log(b[i][0] + " " +b[i][1] );
    }
    
var c =  [];
c.push(11)
c.push(12)
console.log(c);
c.pop()
console.log(c);