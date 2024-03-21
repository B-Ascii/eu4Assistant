document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('ideas.json')
      .then(response => response.json())
      .then(data => {
        //console.log('JSON data:', data);

        var ideas = data.map(entry => entry.IDEA).join(" ");
        // Display the ideas in the textarea
        const jsonTextArea = document.getElementById('ideaList');

        //jsonTextArea.value = ideas;

        // const jsonTextArea = document.getElementById('ideaList');
        // jsonTextArea.value = JSON.stringify(data.name, null, 2);
          const ideasArray= ideas.split(" ");
          var arrayCounter = 0;
          while (arrayCounter<ideasArray.length){
            jsonTextArea.value += ideasArray[arrayCounter] +"\n";
            console.log(ideasArray[arrayCounter] +"\n")
            arrayCounter++;
          }
          arrayCounter = 0;

      
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
 