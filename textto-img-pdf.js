//image script -->
       function generateImage() {
const text = document.getElementById("textInput").value;

if (!text) {
    alert("Please enter some text!");
    return;
}


fetch(`http://localhost:8080/textToImage?Text=${encodeURIComponent(text)}`, {
    method: 'GET',
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to generate image.");
        }
        return response.blob(); 
    })
    .then(blob => {
       
        const url = URL.createObjectURL(blob);

       
        const a = document.createElement("a");
        a.href = url;
        a.download = "text-image.png"; 
        document.body.appendChild(a);
        a.click(); 
        document.body.removeChild(a); 

       
        URL.revokeObjectURL(url);

        alert("PDF generated successfully!");
    })
    .catch(error => {
        alert(error.message);
    });

} 


//pdf script -->

document.getElementById("generateButton").addEventListener("click", function() {
const text=document.getElementById("textinput").value;

if (!text.trim()) {
    alert("Please enter some text for the PDF.");
    return;
  }

  // Send POST request to the backend
  fetch('http://localhost:8080/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain', 
    },
    body: text,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to generate PDF.");
    }
    return response.blob(); 
  })
  .then((blob) => {
    
    const url = window.URL.createObjectURL(blob);

   
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated.pdf"; 
    document.body.appendChild(a);
    a.click(); 
    a.remove(); 

    alert("PDF generated successfully!");

}) 
});


