obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003',
	}
};


function showObject () {

   let key;
   let keyT;
    for (key in obj1 ){
        console.log(obj1[key])
    }

    for (keyT in obj1.dates) {
      console.log(obj1.dates[keyT])
    }

    console.log(key + keyT);

}

showObject ()