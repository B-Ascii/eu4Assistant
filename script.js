document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('ideas.json')
      .then(response => response.json())
      .then(data => {
        console.log('JSON data:', data);
        // Display the JSON data in the output div
        const items = Object.values(data[2].IDEA).join('\n');
        // Display the names in the textarea
        const jsonTextArea = document.getElementById('ideaList');
        jsonTextArea.value = items;
        // const jsonTextArea = document.getElementById('ideaList');
        // jsonTextArea.value = JSON.stringify(data.name, null, 2);
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
