const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 2;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

    speak("Activating jarvis");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('who is your creator')) {
        const finalText = "i AM CREATED BY AMAL JOSEPH  and yadhu KRISHNA ";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://www.google.com/", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
     else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
     else if(message.includes('open artist')) {
        window.open("https://youtube.com/@ARTIST.Y", "_blank");
        const finalText = "Opening artist y";
        speech.text = finalText;
    }
  else if(message.includes('open rubix')) {
        window.open("https://youtube.com/@RUBIX18", "_blank");
        const finalText = "Opening rubix 18";
        speech.text = finalText;
    }
 else if(message.includes('open a y t')) {
        window.open("https://youtube.com/@ayt2802", "_blank");
        const finalText = "Opening ayt";
        speech.text = finalText;
    }
else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatspp";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 3;
    speech.pitch = 2;
    speech.rate = 2;

    window.speechSynthesis.speak(speech);
}
