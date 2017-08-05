var students = [];
var totalMoney = 0;
var averageAge = 0;
var sunhye = {
	name : 'sunhye',
	age : 15,
	className : '1'
}

var gyounghwa = {
	name : 'gyounghwa',
	age : 16,
	className : '2'
}

var sungyun = {
	name : 'sungyun',
	age : 15,
	className : '6'
}

students.push(sunhye);
students.push(gyounghwa);
students.push(sungyun);

for(var i = 0; i <students.length; i++){
    var stu = students[i];
    var money = 10000;

    if(stu.age > 15){
         money = 20000;
    }
    console.log(stu.className + '반 ' +stu.age + '살 ' + stu.name + ' '+money + '입금');
}

totalMoney =0;
for(var i = 0; i <students.length; i++){
    var stu = students[i];
    var money = 10000;

    if(stu.age > 15){
         money = 20000;
    }

	   totalMoney = totalMoney + money;

    if(i == students.length - 1){
		console.log('총합 :' +totalMoney)
    }

}

averageAge = 0;
for(var i = 0; i <students.length; i++){
	var stu = students[i];

	averageAge = averageAge + stu.age;

	if(i == students.length - 1){
		averageAge = averageAge / students.length
		console.log('우리반 학생 평균 나이 : ' + averageAge)
    }
}
