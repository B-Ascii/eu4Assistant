document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('ideas.json')
      .then(response => response.json())
      .then(data => {
        console.log('JSON data:', data);

        const ideas = data.map(entry => entry.IDEA).join('\n');
        // Display the ideas in the textarea
        const jsonTextArea = document.getElementById('ideaList');
        jsonTextArea.value = ideas;
        // const jsonTextArea = document.getElementById('ideaList');
        // jsonTextArea.value = JSON.stringify(data.name, null, 2);
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
