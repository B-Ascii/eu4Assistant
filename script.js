document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('test.json')
      .then(response => response.json())
      .then(data => {
        console.log('JSON data:', data);
        // Display the JSON data in the output div
        const names = Object.values(data.name).join('\n');
        // Display the names in the textarea
        const jsonTextArea = document.getElementById('ideaList');
        jsonTextArea.value = names;
        // const jsonTextArea = document.getElementById('ideaList');
        // jsonTextArea.value = JSON.stringify(data.name, null, 2);
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
