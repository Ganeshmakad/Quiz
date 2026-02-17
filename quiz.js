let nameBox = document.getElementById("playerbox");
let name = localStorage.getItem("name1");

let showName = () =>
{
    nameBox.textContent="Player : "+name;
}
showName();

let goToLeaderboard  = ()=>
{
    window.location.href="./leader.html";
}
let index=0;
let score=0;
let a1=[];

let loadQuestion = async () =>
{
    a1 = await fetch("./quiz.json");
    a1 = await a1.json();
    showQuestion();
}

let questionBox = document.getElementById("question")
let optionBox = document.getElementById("options")
let nextbtn = document.getElementById("next-btn")
let scoreTag = document.getElementById("score")
let leaderBtn = document.getElementById("leader-btn")
let current;

let showQuestion = ()=>
{
    current = a1[index];
    questionBox.textContent = current.question;
    current.options.forEach(
        (str,i)=>
        {
            let b1 = document.createElement("button");
            b1.textContent = str;
            b1.classList="option-btn";
            b1.addEventListener("click",
                ()=>
                {
                    checkAnswer(i);
                }
            );
            optionBox.appendChild(b1);
        }
    );
}

let nextQuestion = ()=>
{
    index++;
    optionBox.innerHTML="";
    if(index===a1.length)
    {
        localStorage.setItem("quizCompleted",true)
        showCompletedScreen();
        let list = JSON.parse(localStorage.getItem("list")) || [] ;
        
        list.push(
            {
                name:name,
                score:score
        });

        localStorage.setItem("list",JSON.stringify(list));
        return;
    }
    showQuestion();
}

let checkAnswer = (click)=>
{
    let rightAns = current.correct;
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(
        (btn,i)=>
        {
            btn.disabled=true;
            if(i===rightAns)
                btn.style.backgroundColor="Green";
            else
                btn.style.backgroundColor="Red";
        }
    );
    if(click===rightAns)
    {
        score++;
        scoreTag.textContent = "Score : "+score;
    }
} 

let showCompletedScreen = ()=>
{
        questionBox.textContent="Quiz Completed";
        nextbtn.style.display = "none";
        leaderBtn.style.display = "block";
        let homebtn = document.createElement("button");
        homebtn.textContent="Home";
        homebtn.classList="option-btn"
        homebtn.addEventListener("click",
            ()=>
            {
                localStorage.removeItem("quizCompleted");
                window.location.href="./index.html";
            }
        );
        optionBox.appendChild(homebtn);
}

let completed = localStorage.getItem("quizCompleted");

if(completed== "true")
    showCompletedScreen();
else
    loadQuestion();