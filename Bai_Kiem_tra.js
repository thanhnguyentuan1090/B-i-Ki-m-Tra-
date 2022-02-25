function findOppositeNumber(n, inputNumber)
{
    if(inputNumber < n && n % 2==0 && n<=20 && n >= 4 && inputNumber >= 0){
    if (inputNumber > (n / 2))
        return (inputNumber - parseInt(n / 2));
        return (inputNumber + parseInt(n / 2));}   
}
console.log(findOppositeNumber(18,2))


function merge2String(s1,s2){ 
    let n = s1.length;
    if(s1.length < s2.length){
      n = s2.length;
    } 
    let string = '';
    for(var a = 0; a < n; a++){
      if(s1[a]){
        string += s1[a];
      }
      if(s2[a]){
        string += s2[a];
      }
    }
    return string;
  }
  console.log(merge2String('abc','123'));
  console.log(merge2String('abc','0123'));
  console.log(merge2String('abcd','123'));

 
const LuckyNumber = Math.floor((Math.random() * 10));
let a = 0 
function FindLuckyNumber (){
  a = a+1
  let number = document.getElementById("nhapso").value
  if (number == LuckyNumber && a<=3)
   {alert("Bạn đã đoán đúng")}
   else if (number != LuckyNumber && a<=3)
   {alert("Bạn đã đoán sai")}
   else {alert("hết lượt chơi ")}
}


document.getElementById("kiemtra").addEventListener("click",FindLuckyNumber)
