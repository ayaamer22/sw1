document.getElementById('fileInput').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profilePicture').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});