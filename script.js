//load button
var ideasArray=""
let jsonTextArea = document.getElementById('ideaList');

document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('ideas.json')
      .then(response => response.json())
      .then(data => {
        //console.log('JSON data:', data);

        var ideas = data.map(entry => entry.IDEA).join("  ");
        // Display the ideas in the textarea
        const jsonTextArea = document.getElementById('ideaList');

        //jsonTextArea.value = ideas;

        // const jsonTextArea = document.getElementById('ideaList');
        // jsonTextArea.value = JSON.stringify(data.name, null, 2);
          ideasArray= ideas.split("  ");
          var arrayCounter = 0;
          while (arrayCounter<ideasArray.length){
            jsonTextArea.value += arrayCounter +" "+ideasArray[arrayCounter] +"\n";
            arrayCounter++;
          }
          arrayCounter = 0;

      
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
 
//remove entries button
document.getElementById('deleteIdeaButton').addEventListener('click',function()
{
  const textBoxValue = document.getElementById('ideaDelete').value;
  // console.log(textBoxValue);
  const index = ideasArray.indexOf(ideasArray[parseInt(textBoxValue)]);
  if (index > -1)
  {
    ideasArray.splice(index,1)
  }
  jsonTextArea.value="";
  console.log(ideasArray)
  var arrayCounter = 0;
          while (arrayCounter<ideasArray.length){
            jsonTextArea.value += arrayCounter +" "+ideasArray[arrayCounter] +"\n";
            arrayCounter++;
          }
          arrayCounter = 0;
});

document.getElementById('generatePackButton').addEventListener('click',function()
{
  var rand1 = Math.floor(Math.random() * ideasArray.length)
  var rand2 = Math.floor(Math.random() * ideasArray.length)
  var rand3= Math.floor(Math.random() * ideasArray.length)
  var rand4 = Math.floor(Math.random() * ideasArray.length)
  var rand5 = Math.floor(Math.random() * ideasArray.length)
  console.log(ideasArray[rand1])
  var idea1Div = document.getElementById('idea1Div')
  idea1Div.innerHTML=rand1+"\n"+ideasArray[rand1]
  var idea2Div = document.getElementById('idea2Div')
  idea2Div.innerHTML=rand2+"\n"+ideasArray[rand2]
  var idea3Div = document.getElementById('idea3Div')
  idea3Div.innerHTML=rand3+"\n"+ideasArray[rand3]
  var idea4Div = document.getElementById('idea4Div')
  idea4Div.innerHTML=rand4+"\n"+ideasArray[rand4]
  var idea5Div = document.getElementById('idea5Div')
  idea5Div.innerHTML=rand5+"\n"+ideasArray[rand5]
});