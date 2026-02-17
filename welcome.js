let nameBox = document.getElementById("name");

let checkName = (event)=>
    {
        let s1 = nameBox.value;
        event.preventDefault();
        setTimeout(
            ()=>
        {
            localStorage.setItem("name1",s1)
            window.location.href="./quiz.html";
        }
        ,2000);
}