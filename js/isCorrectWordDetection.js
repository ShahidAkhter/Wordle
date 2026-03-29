const isCorrectWord = async (word) => {
    try {
        fetchingContent = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        responseJSON = await fetchingContent.json();
        
        if (responseJSON.title) {
            return false;
        }
        return true;
    } catch (error) {
        // console.log(error);
        return true;
    }
}