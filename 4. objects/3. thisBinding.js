// No call with new so no this binding
function Test() {
    return {
        "name": "sanket",
        "ref": this
    }
}
console.log(Test().ref.name)


// literal way so this points to object it belongs
const object = {
    name: "sanket",
    value: function() {
        return
    }
}

console.log(object.value().name)