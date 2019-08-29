function solve() {
  let leftSection = document.getElementsByClassName("answer-wrap")[0]
  let rightSection = document.getElementsByClassName("answer-wrap")[1]
  let leftSection2 = document.getElementsByClassName("answer-wrap")[2]
  let rightSection2 = document.getElementsByClassName("answer-wrap")[3]
  let leftSection3 = document.getElementsByClassName("answer-wrap")[4]
  let rightSection3 = document.getElementsByClassName("answer-wrap")[5]
  let left1 = document.getElementsByClassName("answer-text")[0]
  let right1 = document.getElementsByClassName("answer-text")[1]
  let left2 = document.getElementsByClassName("answer-text")[2]
  let right2 = document.getElementsByClassName("answer-text")[3]
  let left3 = document.getElementsByClassName("answer-text")[4]
  let right3 = document.getElementsByClassName("answer-text")[5]
  let section1 = document.getElementsByTagName("section")[0]
  let section2 = document.getElementsByTagName("section")[1]
  let section3 = document.getElementsByTagName("section")[2]

  let rightAnswers = 0
  let wrongAnswers = 0
  let answers = []


  leftSection.addEventListener('click', () => {
    
    let content = left1.textContent
    answers.push(content)
    section1.style.display = 'none'
    section2.style.display = 'block'
  })
  rightSection.addEventListener('click', () => {
    
    let content = right1.textContent
    answers.push(content)
    section1.style.display = 'none'
    section2.style.display = 'block'
  })

  
  leftSection2.addEventListener('click', () => {
    
    let content = left2.textContent
    console.log(content);
    
    answers.push(content)
    section2.style.display = 'none'
    section3.style.display = 'block'
  })
  rightSection2.addEventListener('click', () => {
    
    let content = right2.textContent
    answers.push(content)
    section2.style.display = 'none'
    section3.style.display = 'block'
  })

  
  leftSection3.addEventListener('click', () => {
    
    let content = left3.textContent
    answers.push(content)
    section3.style.display = 'none'
    let h1 = document.querySelector("#results > li > h1")
    for (const answer of answers) {
      if(answer === "onclick" || answer === "JSON.stringify()" || answer === "A programming API for HTML and XML documents"){
        rightAnswers++
      }else{
        wrongAnswers++
      }
      if(wrongAnswers){
        
        h1.textContent = `You have ${rightAnswers} right answers`
      }else{
        h1.textContent = "You are recognized as top JavaScript fan!"
      }
    }
    let div = document.querySelector("#results")
    div.style.display = "block"
  })
  rightSection3.addEventListener('click', () => {
    
    let content = right3.textContent
    answers.push(content)
    section3.style.display = 'none'
    let h1 = document.querySelector("#results > li > h1")
    for (const answer of answers) {
      if(answer === "onclick" || answer === "JSON.stringify()" || answer === "A programming API for HTML and XML documents"){
        rightAnswers++
      }else{
        wrongAnswers++
      }
      if(wrongAnswers){
        
        h1.textContent = `You have ${rightAnswers} right answers`
      }else{
        h1.textContent = "You are recognized as top JavaScript fan!"
      }
    }
    let div = document.querySelector("#results")
    div.style.display = "block"
    
  })
  
}