var Human;
(function (Human) {
    Human["name"] = "Hashir";
    Human[Human["age"] = 20] = "age";
})(Human || (Human = {}));
var myAge = Human.age;
console.log(myAge);
