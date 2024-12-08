
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
        })
        .catch(error => {
            alert(error.message);
        });
}


