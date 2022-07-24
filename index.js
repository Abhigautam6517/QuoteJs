
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ"); 
const tweetme = document.getElementById("tweetme"); 
let quoteData ="";
let realData =" ";


const tweetNow = ()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text} ${quoteData.author}`;
    window.open(tweetPost);


}

const getNewQuotes=()=>{
    let rnum =Math.floor(Math.random()*1200);
   quoteData = realData[rnum];
    console.log(realData[rnum].author);
    // author.innerText= `${realData[rnum].author}`;
    quotes.innerText=`${quoteData.text}`;
    quoteData.author == null ?(author.innerText= "Unknown"):  (author.innerText= `${quoteData.author}`);
}
const getQuotes = async()=>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
       
        // console.log(realData[10].text);
        // console.log(realData[10].author);
    }
    catch(error){
        console.log("Error is ",error);
    }
};
tweetme.addEventListener("click",tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();
