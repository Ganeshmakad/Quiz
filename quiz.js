let namebox = document.getElementById("playerbox");
let name1 = localStorage.getItem("naam");

let showName= () =>{
   namebox.textContent = "player :"+name1;
}
showName();

let index = 0 ;
let score = 0;
let a1=[];

let questionBox = document.getElementById("question")
let optionBox = document.getElementById("options")
let nextbtn = document.getElementById("next-btn")
let current;

let loadQuestion= async() =>{ 

    a1 = await fetch("./quiz.json") 
    a1 = await a1.json(); 
    showQuestion();
}


let showQuestion= () =>{
    current = a1[index]
    questionBox.textContent = current.question;
    current.options.forEach(
        (str,i)=>{
            let b1  = document.createElement("button");
            b1.textContent = str;
            b1.classList.add("option-btn");
            b1.addEventListener("click",
                ()=>{
                    checkAnswer(i);
                }
            );
            optionBox.appendChild(b1);
        }
    );

}


let nextQuestion= ()=>{
    index++;
    optionBox.innerHTML ="";

    if(index>=a1.length){

        questionBox.textContent = "Quiz completed"
        nextbtn.style.display = "None";
        return;
    }

    showQuestion();
   
}
 let scoreTag = document.getElementById("score")
    
    let checkAnswer = (click_index)=>
    {
        if (current.correct === click_index){
            score++;
            scoreTag.textContent = "score : "+score;
        }
        let buttonArray=document.querySelectorAll(".option-btn");
    buttonArray.forEach(
        (btn,i)=>
        {
            btn.disabled=true;
            if(i===current.correct)
            {
                btn.style.backgroundColor="green";
                return;
            }
            btn.style.backgroundColor="red";
        }
    );
}
    
loadQuestion();