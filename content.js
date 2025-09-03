// Create the div element
var div = document.createElement('div');
div.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';

// Create the script element
var script = document.createElement('script');
script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
script.defer = true;

// Append the script to the div
div.appendChild(script);

// Insert the div into the document body
document.body.appendChild(div);
