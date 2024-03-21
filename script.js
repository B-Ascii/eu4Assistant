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
            jsonTextArea.value += ideasArray[arrayCounter] +"\n";
            arrayCounter++;
          }
          arrayCounter = 0;
})