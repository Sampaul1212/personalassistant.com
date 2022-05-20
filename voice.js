const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You Can Speak Now|||');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'It is'+new Date().getHours + "" + new Date().getMinutes()+" right now"
    else if (text.includes('my birthday'))
    speech.text = 'Do you think your famous! How would I know your Birthday!';
    else if (text.includes('shut up and tell my birthday'))
    speech.text = 'November 24';
    else if (text.includes('my birthday'))
    speech.text = 'Do you think your famous! How would I know your Birthday!';
    else if (text.includes('what is your name'))
    speech.text = 'My name is Jarvis Your Personal Assistant';
    else if (text.includes('what is my name'))
    speech.text = 'Sampaul Earnest D';
    else if (text.includes('what is the name of my father'))
    speech.text = 'Davidson Rajasingh';
    else if (text.includes('what is the name of my mother'))
    speech.text = 'Nirmala Davidson';
    else if (text.includes('what is the name of my sister'))
    speech.text = 'Shiny';
    else if (text.includes('good morning'))
    speech.text = 'Good Morning Sir';
    else if (text.includes('good afternoon'))
    speech.text = 'Good Afternoon Sir';
    else if (text.includes('good evening'))
    speech.text = 'Good Evening Sir';
    else if (text.includes('hello'))
    speech.text = 'Hello Sir';
    else if (text.includes('whats the weather today'))
    speech.text = 'Shit you didnt connect me to GWC Maybe just look out of the window';
    window.speechSynthesis.speak(speech);
}