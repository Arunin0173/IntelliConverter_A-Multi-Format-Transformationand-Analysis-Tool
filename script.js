
document.getElementById("generateButton").addEventListener("click", function() {
    const text=document.getElementById("textinput").value;

    if (!text.trim()) {
        alert("Please enter some text for the PDF.");
        return;
      }

      // Send POST request to the backend
      fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Set the content type to plain text
        },
        body: text, // Send the input text
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to generate PDF.");
        }
        return response.blob(); // Get the PDF as a Blob
      })
      .then((blob) => {
        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an <a> element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated.pdf"; // Set the file name for the download
        document.body.appendChild(a);
        a.click(); // Programmatically click the link to download
        a.remove(); // Remove the <a> element after triggering the download

        // Optionally, you can display a success message    or perform other actions    

}) 

});