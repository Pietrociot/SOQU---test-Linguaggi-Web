async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);
    let menualto = document.getElementsByClassName("item_text");
    for (let i=0; i<33; i++){
        menualto[i].textContent = json.programming_languages_popular[i];
    }
}

exampleFetch()
