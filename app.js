
const API__KEY = "";  //you have to insert API__key you created from openAI
const submitButton= document.querySelector('.submit')
const outputElement = document.querySelector(".outPut");
const inputElement= document.querySelector('input')
const historyElement = document.querySelector(".history");
const buttonElement=document.querySelector('button')

function changeInput(value){
  const inputElement= document.querySelector('input')
  inputElement.value=value

}

async function getMessage(){
   console.log('cliked');

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API__KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: inputElement.value}],
    max_tokens: 100
    })   
  };

  try {
    const response = await fetch("", options)   //here you have to copy link that we found on openiAI.com the you go in Chat , create chat comple... the copy post link
    const data= await response.json();
    console.log(data);
    outputElement.textContent = data.choices[0].message.content;

    if(data.choices[0].message.content){
      const pElement = document.createElement('p');
      pElement.textContent= inputElement.value;

      pElement.addEventListener("click", () =>
        changeInput(pElement.textContent)
      );
      historyElement.append(pElement)

    }
  } catch (error) {
    console.error(error);
  }
}

submitButton.addEventListener('click', getMessage)
function clearInput(){
  inputElement.value=''
}
buttonElement.addEventListener('click', clearInput)
