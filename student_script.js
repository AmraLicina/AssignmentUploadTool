document.addEventListener("DOMContentLoaded", function () {
    const courseLinks = document.querySelectorAll("#sidebar a");
    const mainContent = document.getElementById("main-content");

    // Event-Listener für Sidebar-Links
    courseLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const courseName = this.getAttribute("data-course");    // Kursname aus dem `data-course`-Attribut auslesen

            mainContent.innerHTML = generateCourseContent(courseName);  // Kursinhalt generieren und anzeigen 
            // Event-Listener für Datei-Upload hinzufügen
            const uploadForm = document.querySelector(".upload-form");
            if (uploadForm) {
                uploadForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                    const fileInput = this.querySelector("input[type='file']");
                    const file = fileInput.files[0];
                    const maxFileSize = 500 * 1024 * 1024;

                    if (file) {
                        if (file.size > maxFileSize) {
                            alert("ausgewählte Datei ist zu groß. Bitte Wählen sie eine Datei, die die maximale Größe von 500MB nicht überschreitet.");
                            fileInput.value = "";
                        } else {    
                            alert(`Datei "${file.name}" für den Kurs "${courseName}" erfolgreich hochgeladen!`);
                            fileInput.value = ""; // Leert das Eingabefeld
                        }
                    } else {
                        alert("Bitte wählen Sie eine Datei aus.");
                    }
                });
                const cancelButton = uploadForm.querySelector("button[type='button']")
                if (cancelButton) {
                    cancelButton.addEventListener("click", function(){
                        const fileInput = uploadForm.querySelector("input[type='file']");
                        fileInput.value = "";
                        alert("Datei gelöscht.");
                    });
                }
            }
        });
    });

    function generateCourseContent(courseName) {
        return `
            <h2>${courseName}</h2>
            <p>Hier können Sie Hausaufgaben für den Kurs <strong>${courseName}</strong> hochladen.</p>
            <form class="upload-form">
                <label for="file-upload">Hausaufgabe hochladen:</label>
                <input type="file" id="file-upload" name="file" accept=".pdf, .doc, .docx, .jpeg, .jpg, .png" required>
                <button type="submit">Hochladen</button>
                <button type="button">delete</button>
            </form>
            <div id="BtnContainer">
                <button id="paBtn" onclick="saveCourseAndNavigate('${courseName}')">Previous Assignments</button>
            </div>
        `;
    }
});

function saveCourseAndNavigate(courseName) {
    localStorage.setItem("selectedCourse", courseName);
    window.location.href = 'previous_assignments.html';
}

