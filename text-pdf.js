
document.getElementById("generateButton").addEventListener("click", function() {
    const text=document.getElementById("textinput").value;

    if (!text.trim()) {
        alert("Please enter some text for the PDF.");
        return;
      }

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

         

}) 

});