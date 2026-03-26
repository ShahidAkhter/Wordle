const isCorrectWord = async (word) => {
    fetchingContent = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    responseJSON = await fetchingContent.json();

    if (responseJSON.title) {
        return false;
    }
    return true;
}