var ul = document.getElementById("ul")
var input = document.getElementById("input");
// var database = firebase.database().ref('todos');
// var key = database.push().key;
// var todo = {
//     value = input.value,
//     key : key,
// }
// database.child(key).set(todo)
// console.log(todo)
function Send() {
    

    var div = document.createElement("div")
    div.setAttribute("class","maindiv")
    var li = document.createElement("li")

    ul.setAttribute("class", "li")
    var convert = document.createTextNode(input.value)
    div.appendChild(li)
    div.setAttribute("class", "divoflist")
    ul.appendChild(li)
    li.appendChild(convert)

    

    // create button

    var creatbtn = document.createElement("button")
    var createText = document.createTextNode("Delete")
    var creatdiv = document.createElement("div")
    creatbtn.setAttribute("onclick", "del(this)")
    creatbtn.appendChild(createText)
    li.appendChild(creatbtn)
    if (input.value === "") {
        alert("Please Enter Your Todo")
        li.style.display = "none"
    }
    var editbtn=document.createElement('button')
    var edittext=document.createTextNode("Edit")
    editbtn.setAttribute("class","one")
    editbtn.setAttribute("onclick","edit(this)")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    input.value = ""

}
function edit(e){
    var a = e.parentNode.firstChild.nodeValue
    var inp = prompt("Enter Your name ")
    e.parentNode.firstChild.nodeValue = inp
    input.value = "" 

}
function del(a) {
    a.parentNode.remove()
}
function del_all(b) {
    ul.innerHTML = ""
}
