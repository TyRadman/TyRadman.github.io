// fetch('JSON/WidowInfo.json')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('widowPanel');
    
//     // Create the main title and description
//     const title = document.createElement('h1');
//     title.textContent = data.title;
//     const description = document.createElement('p');
//     description.textContent = data.description;
//     container.appendChild(title);
//     container.appendChild(description);

//     // Iterate through the sections
//     data.sections.forEach(section => {
//       const heading = document.createElement('h2');
//       heading.textContent = section.heading;
//       const sectionDescription = document.createElement('p');
//       sectionDescription.textContent = section.description;
//       const image = document.createElement('img');
//       image.src = section.image;
      
//       container.appendChild(heading);
//       container.appendChild(sectionDescription);
//       container.appendChild(image);
//     });
//   })
//   .catch(error => console.error('Error loading WidowInfo:', error));