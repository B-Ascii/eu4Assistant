document.getElementById('loadIdeasButton').addEventListener('click', function() {
    fetch('test.json')
      .then(response => response.json())
      .then(data => {
        console.log('JSON data:', data);
        // Display the JSON data in the output div
        const ideaList = document.getElementById("ideaList");
        for (let i = 0, ln = data.length; i < ln; ++i) {
          ideaList.value += JSON.stringify(data[i]) + '\n'; 
        }
      })
      .catch(error => console.error('Error reading JSON file:', error)); 
  });
