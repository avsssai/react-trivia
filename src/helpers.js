// let shuffleAnswers = (data) => {
//     const shuffledAnswers = data.map(questionSet => {
//         return shuffle([questionSet.correct_answer, ...questionSet.incorrect_answers])
//     });

//     return shuffledAnswers;

// }

function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function makeQuestionSets (data) {
    let questionSets = data.slice();
    for (let i = 0; i < questionSets.length; i++) {
        let shuffledAnswers = shuffle([questionSets[i].correct_answer, ...questionSets[i].incorrect_answers]);
        questionSets[i].shuffledAnswers = shuffledAnswers;
    }
    return questionSets
}

function categoryMapper () {

    const categories = [
        { name: "generaKnowledge", number: "9" },
        { name: "books", number: "10" },
        { name: "film", number: "11" },
        { name: "music", number: "12" },
        { name: "science", number: "17" },
        { name: "sports", number: "21" },
        { name: "history", number: "23" },
        { name: "politics", number: "24" },

    ]
    return categories;
}

export { makeQuestionSets, categoryMapper };