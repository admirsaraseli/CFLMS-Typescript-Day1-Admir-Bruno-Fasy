function printName(name) {
    if (name) {
        return "Hi " + name;
    }
    else {
        return "Hi  User";
    }
}
var result = printName("Admir Saraseli");
document.getElementById('result').innerHTML = result;
var namedata = ['Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir'];
namedata.forEach(function (value) {
    document.getElementById('name').innerHTML += value + '  ';
});
setTimeout(function () {
    for (var i = 1; i <= 10; i++) {
        console.log('Saraseli' + i);
    }
}, 5000);
