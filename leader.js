let leaderList = document.getElementById("leaderList");

let goBack = () =>
{
    window.location.href="./quiz.html";
}
let list = JSON.parse(localStorage.getItem("list")) || []
//sorting in descending order of the score 
list.sort((a,b)=> b.score - a.score);
//when using the sort function on string or object we need to define the sorting logic 
//sorting working is if b-a = -ve then a is before b
//if b-a = +ve then swap a,b
//if a-b = 0 no change
list.forEach(
    (player,index)=>
    {
        let li = document.createElement("li");
        li.classList.add("leader-item");
        // 🥇 Top 3 Styling
        if(index === 0){
            li.classList.add("gold");
        }
        else if(index === 1){
            li.classList.add("silver");
        }
        else if(index === 2){
            li.classList.add("bronze");
        }
        li.innerHTML = `
            <span class="rank">${index + 1}</span>
            <span class="player-name">${player.name}</span>
            <span class="player-score">${player.score}</span>
        `;

    leaderList.appendChild(li);

    }
);
