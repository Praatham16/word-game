p1name=localStorage.getItem("player1")
p2name=localStorage.getItem("player2")
p1score=0
p2score=0
aturn="player2"
qturn="player1"
document.getElementById("p1name").innerHTML=p1name+" : "
document.getElementById("p2name").innerHTML=p2name+" : "
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("qturn").innerHTML="Question turn: "+p1name
document.getElementById("aturn").innerHTML="Answer turn:"+p2name





function send(params) {
    get_word=document.getElementById("wordinput").value
    qword=get_word.toLowerCase()

    letter1=qword.charAt(1)
    console.log(letter1)
    replace1=qword.replace(letter1,"_")
    console.log(replace1)
    
    x=qword.length-1
    letter2=qword.charAt(x)
    console.log(letter2)
    replace2=replace1.replace(letter2,"_")
    console.log(replace2)

    y=Math.floor(qword.length/2)
    letter3=qword.charAt(y)
    console.log(letter3)
    replace3=replace2.replace(letter3,"_")
    console.log(replace3)

    qtag=`<h4 id="word_display">Q. ${replace3}</h4> `
    atag=`<br> Answer: <input type="text" id="answerinput">`
    buttontag=`<br> <br> <button onclick="check()" class="btn btn-primary" > CHECK </button>`

    document.getElementById("output").innerHTML=qtag+atag+buttontag
    document.getElementById("wordinput").value=""

    

}
function check() {
    getanswer=document.getElementById("answerinput").value
    answer=getanswer.toLowerCase()
    if (answer==qword) {
      if (aturn=="player1") {
          p1score=p1score+1
          document.getElementById("p1score").innerHTML=p1score
      } else {
          p2score=p2score+1
          document.getElementById("p2score").innerHTML=p2score
      }  
    } 
    if (qturn=="player1") {
        qturn="player2"
        document.getElementById("qturn").innerHTML="Question turn: "+p2name
    } else {
        qturn= "player1"  
        document.getElementById("qturn").innerHTML="Question turn: "+p1name

    } 
    if (aturn=="player1") {
        aturn="player2"
        document.getElementById("aturn").innerHTML="Answer turn:"+p2name

    } else {
        aturn="player1"
        document.getElementById("aturn").innerHTML="Answer turn:"+p1name

    }   
}