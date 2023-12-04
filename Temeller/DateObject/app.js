let value;
const now=new Date(); //şu anki zamanı almamızı sağlar
const date1=new Date("07-15-2001 06:34:34");
const date2=new Date("July-15-2001 ");
const date3=new Date("12/23/2001");

value=date1;
date1.getMonth();
date1.getDate();
date1.getDay();
date1.getHours();
date1.getMinutes();
date1.getSeconds();
date1.getMilliseconds();

date1.setMonth(6);
date1.setFullYear(2001);
date1.setHours(3);
date1.setMinutes(24);
date1.setSeconds(23);
console.log(value);