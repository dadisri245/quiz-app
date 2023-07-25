const questions=[
    {
        "question":'which of the following is a markup language?',
        "a":'HTML',
        "b":'CSS',
        "c":'Javascript',
        "d":'PHP',
        "correct":'a'
    },
    {
        "question":'which year was javascript launched?',
        "a":"1996",
        "b":"1995",
        "c":"1994",
        "d":"none of the above",
        "correct":"b",
    },
    {
        "question":"what does css stands for?",
        "a":"Context standard style",
        "b":"Cascading Style Sheet",
        "c": "cascading stylish sheet",
        "d":"confirm style show",
        "correct":"b"
    }
]
let index=0;
let right=0,
    wrong=0;
let total=questions.length;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        endQuiz();
        return;
    }
    reset()
    const data= questions[index]
    quesBox.innerText=`${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        })
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
        <div style="text-align:center">
            <h3>Thank you for playing the quiz</h3>
            <h2>${right}/${total} are correct </h2>
        </div>
    `
}
loadQuestion();