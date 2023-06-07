// initialization of variables
const introPhrase = document.getElementById('intro');
const random = Math.random()


// array of load texts, function to render the text upon loading
const loadingPhrases = [
    "Loading the thrills and spills from big screens...",
    "Grabbing, from Hollywood, the finest gems for you...",
    "Fetching your blockbuster entertainment...",
    "Hang tight. We're about to bless your sight...",
    "Hoisting up your curtains. Stay tuned...",
    "Unlocking your cinema's best experience..."
];


const getRandomIntro = () => {
    const phrases = loadingPhrases.length
    let randomIndex = Math.floor(random * phrases);
    return loadingPhrases[randomIndex];
}


const anyPhrase = getRandomIntro()
introPhrase.innerText = `${anyPhrase}`