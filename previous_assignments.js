document.addEventListener("DOMContentLoaded", function () {
    const courseName = localStorage.getItem("selectedCourse");
    if (courseName) {
        document.getElementById("course-name").textContent = courseName;
    } else {
        document.getElementById("course-name").textContent = "Kein Kurs ausgewählt";
    }
});

document.getElementById('avatar').addEventListener('click', function() {
    // Avatar wird verändert
    this.classList.add('clicked');
    
    // Sprechblase wird angezeigt
    var speechBubble = document.getElementById('speechBubble');
    speechBubble.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    // Sprechblase schließen
    var speechBubble = document.getElementById('speechBubble');
    speechBubble.style.display = 'none';
    
    // Avatar zurücksetzen
    document.getElementById('avatar').classList.remove('clicked');
});

//document.getElementById('backButton').addEventListener('click', function() {
  //  history.back();
//});
const backButtons = document.querySelectorAll(".back-Button");
    backButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            history.back();
        });
    });

// Elemente auswählen
const chatButtons = document.querySelectorAll(".chat-open-button");
const chatPopup = document.getElementById("chatPopup");
const closeChatButton = document.getElementById("closeChatButton");

// Chat öffnen
chatButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        chatPopup.style.display = "flex"; // Chat anzeigen
    });
});

// Chat schließen
closeChatButton.addEventListener("click", function() {
    chatPopup.style.display = "none"; // Chat ausblenden
});

document.getElementById('npointsButton').addEventListener( "click", function() {
    const pointsplaceholder = 53;
    alert(`Du hast schon ${pointsplaceholder} Punkte erreicht. Weiter so!`);
});

document.getElementById('motivationButton').addEventListener("click", function(){
    const inspirationalQuotes = [
        "'Your self-worth is determined by you. You don't have to depend on someone telling you who you are.' — Beyoncé",
        "'To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.' — Rosa Parks",
        "'A problem is a chance for you to do your best.' — Duke Ellington",
        "'I will build a great, great wall on our southern border, and I will have Mexico pay for that wall.' - Donald J. Trump",
        "'It always seems impossible until it's done.' — Nelson Mandela",
        "'If you don't like the road you're walking, start paving another one.' — Dolly Parton",
        "'It is during our darkest moments that we must focus to see the light.' — Aristotle",
        "'Nothing is impossible. The word itself says 'I'm possible!'' — Audrey Hepburn",
        "'Attitude is a little thing that makes a big difference.' — Winston Churchill",
        "'Keep your face always toward the sunshine, and shadows will fall behind you.' — Walt Whitman",
        "'All our dreams can come true, if we have the courage to pursue them.' — Walt Disney"
    ];

    const randomMessage = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
    alert(randomMessage);
});