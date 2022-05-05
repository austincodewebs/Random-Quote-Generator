const textQuote = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .author_name");
const soundBtn = document.querySelector(".speak");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


function quoteGenerate(){
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading...";
  //fetching data from API and parsing into Javascript
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
       console.log(result);
       textQuote.innerText = result.content;
       authorName.innerText = result.author;
       quoteBtn.innerText = "New Quote";
       quoteBtn.classList.remove("loading");
    });
    
}

//Speech synthesis onclick
soundBtn.addEventListener("click", ()=>{
  let utterance = new SpeechSynthesisUtterance(`${textQuote.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
}
  );
  
//copy text onclick
copyBtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(textQuote.innerText);
});

//tweet button onclick redirects to twitter
twitterBtn.addEventListener("click", ()=>{
  let twitterLink = `https://twitter.com/intent/tweet?url=${textQuote.innerText}`;
  // _blank will open link in new tab
  window.open(twitterLink, "_blank");
});

quoteBtn.addEventListener("click", quoteGenerate);