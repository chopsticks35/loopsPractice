//var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
//
//for(var i = 0; i < (animals.length - 1); i++) {
//	console.log(animals[i])
//}
//
//for(var i = 0; i < animals.length; i += 2) {
//	console.log(animals[i])
//}
//
//for(var i = (animals.length - 1); i >= 0; i--) {
//	console.log(animals[i])
//}
//
//for(var i = 1; i < animals.length; i++) {
//	console.log(animals[i-1])
//	console.log(animals[i])
//}

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{ 
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


for (var i=0; i<students.length; i++){
    console.log(students[i].age)
}

for (var i=0; i<students.length; i++){
    console.log(students[i].name + ", " + students[i].city)
}

for (var i=0; i<students.length; i++){
    
    if (students[i].city == 'Boulder'){
        console.log(students[i].name + " is from " + students[i].city)
    }
}

for(var i = 0; i < students.length; i++) {
	if(students[i].age > 25) {
		console.log(students[i].name + " is older than 25.")
	}
}