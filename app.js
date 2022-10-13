const button = document.querySelector('button');

button.onclick = () => {
    console.log('click');
    loadNewQuote();
}

const loadNewQuote = async () =>{

    let res = await fetch('https://api.adviceslip.com/advice');
    let { slip } = await res.json();
    console.log('req', slip);

    let quote = document.getElementById('advice-quote');
    quote.innerText = slip.advice;

    let quoteId = document.getElementById('advice-id');
    quoteId.innerText =`ADVICE #${slip.id}`;


}