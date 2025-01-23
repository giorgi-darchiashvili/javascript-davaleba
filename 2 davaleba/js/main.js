let pname = prompt("სახელი");
let plastName = prompt("გვარი");
let pBirthYear = prompt("დაბადების წელი");
let pHobby = prompt("ჰობი");
let pFieldOfActivity = prompt("საქმიანობის სფერო");







let myinfo = {
    name: pname,
    lastName: plastName,
    birthYear: pBirthYear ,
    hobby: pHobby ,
    fieldOfActivity: pFieldOfActivity ,
};










let date = new Date();
let year = date.getFullYear();
let age = Number(year) - Number(myinfo.birthYear) ;
// return age ;




if ( pname == "" ) {
    myinfo.name = ("მონაცემი არაა მითითებული") ;
} else {
    myinfo.name = (pname) ;
};




if ( plastName == "") {
    myinfo.lastName = ("მონაცემი არაა მითითებული") ;
} else {
    myinfo.lastName = (plastName) ;
};



if ( pBirthYear == "") {
    age = ("მონაცემი არაა მითითებული") ;
} else {
    age = (age) ;
};



if ( pHobby == "") {
    myinfo.hobby = ("მონაცემი არაა მითითებული");
} else {
    myinfo.hobby = (pHobby);
};



if ( pFieldOfActivity == "") {
   myinfo.fieldOfActivity = ("მონაცემი არაა მითითებული");
} else { 
    myinfo.fieldOfActivity = (pFieldOfActivity) ;
}; 









console.log(myinfo.name + " " + myinfo.lastName + " არის " + age + " წლის, უყვარს " 
    + myinfo.hobby + " და მისი საქმიანობის სფეროა " + myinfo.fieldOfActivity  ) ;




