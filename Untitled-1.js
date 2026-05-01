function Test() {
    return {
        "name": "sanket",
        "ref": this
    }
}

console.log(Test().ref.name)

const object = {
    name: "sanket",
    value: function() {
        return
    }
}

console.log(object.value().name)