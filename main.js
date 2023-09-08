//select form

const form = document.querySelector("form");
const resultDive = document.querySelector(".result")



//event form

form.addEventListener("submit", (e) => {
    //control the event
    e.preventDefault()
        // console.log("hi bbby")
        //call function
    getWordinfo(form.elements[0].value);

})


//creating  getWordinfo function

const getWordinfo = async(word) => {

    //wax khaladaa yuusan soobixin
    try {

        //intaan erayga lasooturjumin  qoraalkaan soomiiji

        resultDive.innerHTML = "Fetching Data..."



        //codeka dectionary server
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log(data)

        //OPJECTS
        //abuur variable aad kufududeeysaneeyso divifintons ka
        const definitions = data[0].meanings[0].definitions[0]
        console.log(definitions)
            //kusoobandhig div page
        resultDive.innerHTML = `
    <h2><strong>word: </strong> ${data[0].word}</h2>
    <p class="partOfSpeech"> ${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning: </strong> ${definitions.definition===undefined ? "Not Found":definitions.definition}</p>
    <p><strong>Example: </strong> ${definitions.example===undefined?"Not Found":definitions.example}</p>
    
    <p><strong>Antonyms:</strong></p> 
    `;



        //eraygaan ogoow inuu eray lid ku,ah leeyhay iyo inkala
        if (definitions.antonyms.length === 0) {
            resultDive.innerHTML += `<span>Not Found</span>`;
        } else {
            for (let i = 0; i < definitions.antonyms.length; i++) {
                resultDive.innerHTML += `<li>${definitions.antonyms[i]}</li>`
            }
        }



        //READ MORE BUTTON
        resultDive.innerHTML += `<div><a href="${data[0].sourceUrls}" target="-blank">Read More</a></div>`;
    } catch (error) {
        resultDive.innerHTML = `<p> Sorry  that word could not be found </p>`;

    }





    // alert("word  " + word)

}






//my first  api 

{
    /* <p><strong>Meaning: </strong> ${data[0].meanings[0].definitions[0].definition}</p>
    <p><strong>Example: </strong> ${data[0].meanings[0].definitions[0].example}</p> */
}