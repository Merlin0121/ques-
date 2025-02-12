//Merlin's magic 
let userName = "";
let partnerName = "";
let loveScore = 0;
let currentQuestionIndex = 0;

const questions = [
    { question: "1️⃣ What's the best Valentine's gift?", options: ["💖 Love", "🍫 Chocolates", "🌹 Roses", "🎁 Surprise"] },
    { question: "2️⃣ Ideal romantic date?", options: ["🌅 Sunset Walk", "🎬 Movie Night", "🍝 Dinner Date", "🏖️ Beach Picnic"] },
    { question: "3️⃣ How do you express love?", options: ["💌 Writing a letter", "💬 Texting", "💖 Hugs", "🎁 Gifting"] },
    { question: "4️⃣ Favorite love song?", options: ["🎶 Pop", "🎻 Classical", "🎸 Rock", "🎤 Love Ballad"] },
    { question: "5️⃣ Best Valentine’s color?", options: ["❤️ Red", "💗 Pink", "💜 Purple", "💛 Gold"] },
    { question: "6️⃣ What makes love last?", options: ["❤️ Trust", "😊 Understanding", "💬 Communication", "🎭 Fun"] },
    { question: "7️⃣ What would you do for love?", options: ["🌎 Travel", "🎶 Write a song", "🎭 Plan a surprise", "💌 Letters"] },
    { question: "8️⃣ Dream Valentine's gift?", options: ["💎 Jewelry", "📖 Love Letter", "🎟️ A Trip", "💐 Flowers"] },
    { question: "9️⃣ Love means?", options: ["💕 Friendship", "💖 Passion", "💍 Commitment", "😊 Happiness"] },
    { question: "🔟 Ideal Valentine's Day?", options: ["🍕 Pizza & Netflix", "🌆 Fancy Dinner", "🎡 Carnival Date", "🏡 Cozy at Home"] }
];

function startQuiz() {
    userName = document.getElementById("yourName").value;
    partnerName = document.getElementById("partnerName").value;

    if (!userName || !partnerName) {
        alert("Please enter both names!");
        return;
    }

    document.getElementById("name-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = question.question;
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("option");
            button.onclick = () => nextQuestion(index);
            optionsContainer.appendChild(button);
        });
    } else {
        showResult();
    }
}

function nextQuestion(optionIndex) {
    loveScore += (optionIndex + 1) * 100; // point can change from * 100 to *10 to fit with your purpose 
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    let finalScore = Math.min(loveScore / questions.length, 100); // Limit to 100%
    document.getElementById("love-percent").innerText = `❤️ ${userName} & ${partnerName}: ${finalScore.toFixed(0)}% Love ❤️`;

    let message = finalScore = 100 ? 
        "All wishes or plans for each other are worthy of respect. You two are a perfect match! 💑 Happy Valentine's Day! 💘" :
        finalScore > 50 ? 
        "Your love is strong! Keep cherishing each other! 💕" :
        "Love takes time, but it's always worth it! 💖WISHING YOU A VERY HAPPY VELENTINEIS DAY..♡♡♡"

    document.getElementById("message").innerText = message;
}

function restartQuiz() {
    loveScore = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("name-screen").classList.remove("hidden");
}
