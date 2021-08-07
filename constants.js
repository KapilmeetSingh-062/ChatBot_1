// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "hlo", "hi there", ],
    ["good morning"],
    ["good afternoon"],
    ["good night", "gn"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what you call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "funny", "joke"],
    ["google"],
    //1
    ["how can you help me"],
    //2
    ["can you tell some affordable accomodations near me", "cheap accomodations near me", "rental appartments near me"],
    //3
    ["i am a computer science student at utoronto", "i study at utoronto"],
    //4
    ["any appartment near the market"],
    //5
    ["thank you for your help"],
    //6
    ["can you suggest me some indian restaurants in the downtown", "indian restaurents near me", "indian restaurants near downtown"],
    //7
    ["but i need an accomodation near my campus"],
    //8
    ["thats what i was searching for"],
    //9
    ["do i have any pending assignments"],
    //10
    ["suggest me some places to visit near toronto"],
    //11
    ["what is fastest way to go to ontario museum"]
]

// Possible responses, in corresponding order

const replies = [
    ["Hello! How can I help you?", "Hi! How can I help you?", "Hey! How can I help you?", "Hi there! How can I help you?", ],
    ["Good Morning"],
    ["Good Evening"],
    ["Sweet dreams", "Good Night"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am a 2 day old"],
    ["I am Jarvis, here to help with your queries "],
    ["The one true God, JavaScript"],
    ["I am Jarvis, here to help with your queries "],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["hamburger", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Good one!"],
    ["Go to www.google.com"],
    //1
    ["I can help you with various number of things like affordable accomodations, Great locations to visit in the city, Restaurants and grocery around the city"],
    //2
    ["There are 5-6 appartments :- 2BHK Appartments ($400) | 3BHK Appartments ($750) "],
    //3
    ["Glad to know that you study at university of Toronto. How can I help you?"],
    //4
    ["The Appartments near the markets are :- 1. 2BHK ($550) but it will be far away from utoronto."],
    //5
    ["You're welcome"],
    //6
    ["Don't worry pal! There are various good Indian restaurants here in Toronto :- Aanch restaurent  | Leela Indian Food Bar - Dundas  |  Little Indian restaurent Queen street  |  The Host Fine Indian Cuisine 87 Elm street "],
    //7
    ["There are some affordable appartments near the campus but they are Shared Appartments starting at $250 "],
    //8
    ["Great to hear!! Go on.."],
    //9
    ["No pending assignments buddy! You're good to go."],
    //10
    ["Yes why not! You can visit CN Tower , Royal Ontario Museum , Art gallery of Ontario"],
    //11
    ["Taking the subway would be the fastest way to The Royal Ontario Museum"]
]

// Random for any other user input

const alternative = [
    "I don't understand ",
    "Pardon",
    "I didn't get it. Come Again."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]