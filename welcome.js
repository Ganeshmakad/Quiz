let checkName =(event) =>{
    event.preventDefault(); //this compulsory when using form in html 
    let namebox = document.getElementById("name") //its just like saving addresses(reference)
    let name = namebox.value; //now we access the add and go to the value 
    if(name ===""){
        alert("Name can't be empty")
        return;
    } 
    localStorage.setItem("naam",name);
    setTimeout(
        ()=>{
            window.location.href = "./quiz.html"
        },2000
    );
}