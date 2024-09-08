var submissionID = "";

function displayLink(id) {
    if (id == null || id[0] == null) {
        document.querySelector(".input-group").style.display = "none";
        document.querySelector(".container").innerHTML += `
    <div class="alert alert-warning" role="alert" style="background-color: #e6f7ff;">
  Sorry, There is no link available current browser tab.
  Please make sure you are in the <strong>"My submission"</strong> tab  
</div>
    `;
    } else {
        submissionID = id[0].substring(0, id[0].indexOf("~"));
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tab) {
                let fromIndex = 0;
                let countSlash = 0;
                while (tab[0].url.indexOf("/", fromIndex) != -1) {
                    fromIndex = tab[0].url.indexOf("/", fromIndex + 1);
                    countSlash++;
                    if (countSlash >= 8) break;
                }
                document.querySelector("#shareLink").value =
                    tab[0].url.substring(0, fromIndex) +
                    "/review/" +
                    submissionID;
            }
        );
    }
}

chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(
        tab.id,
        {
            code: 'document.getElementsByClassName("cds-input-input")[0].id',
        },
        displayLink
    );
});

window.onload = function () {
    "use strict";

    function copyToClipboard(elem) {
        var target = elem;

        var currentFocus = document.activeElement;

        target.focus();
        target.setSelectionRange(0, target.value.length);

        var succeed;

        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            console.warn(e);

            succeed = false;
        }

        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (succeed) {
            document.getElementsByClassName("copied")[0].style.display =
                "inline";
        }

        return succeed;
    }
    document
        .getElementById("copyButton")
        .addEventListener("click", function () {
            copyToClipboard(document.getElementById("shareLink"));
        });
    document.getElementById("shareLink").addEventListener("click", function () {
        copyToClipboard(document.getElementById("shareLink"));
    });
};

window.onload = function () {
    "use strict";

    // Mảng chứa các đoạn văn ngẫu nhiên

    const randomTexts = [
        "Success is not final, failure is not fatal",
        " It is the courage to continue that counts.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do not watch the clock;",
        " do what it does.",
        " Keep going.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Don’t be afraid to give up the good to go for the great.",
        "I find that the harder I work, the more luck I seem to have.",
        "Opportunities don't happen. You create them.",
        "Don’t be pushed around by the fears in your mind.",
        " Be led by the dreams in your heart.",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it.",
        " Do it.",
        " Wish it.",
        "Success doesn’t just find you.",
        " You have to go out and get it.",
        "The harder you work for something,",
        " the greater you’ll feel when you achieve it.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "Little things make big days.",
        "It’s going to be hard, but hard does not mean impossible.",
        "Don’t wait for opportunity. Create it.",
        "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
        "The key to success is to focus on goals, not obstacles.",
        "Dream bigger. Do bigger.",
        "Start where you are. Use what you have. Do what you can.",
        "Hard work beats talent when talent doesn’t work hard.",
        "Believe in yourself and all that you are.",
        " Know that there is something inside you that is greater than any obstacle.",
        "The only way to achieve the impossible is to believe it is possible.",
        "The more you sweat in training, the less you bleed in battle.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "With the new day comes new strength and new thoughts.",
        "Your big opportunity may be right where you are now.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "You learn more from failure than from success. Don’t let it stop you.",
        "The road to success and the road to failure are almost exactly the same.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Opportunities don’t happen. You create them.",
        "Don’t be afraid to give up the good to go for the great.",
        "I find that the harder I work, the more luck I seem to have.",
        "Success is not how high you have climbed,",
        " but how you make a positive difference to the world.",
        "Success is not in what you have, but who you are.",
        "Fall seven times and stand up eight.",
        "The only place where success comes before work is in the dictionary.",
        "If you really look closely, most overnight successes took a long time.",
        "Success does not consist in never making mistakes but in never making the same one a second time.",
        "Don’t let yesterday take up too much of today.",
        "You can’t let your failures define you.",
        " You have to let your failures teach you.",
        "Act as if what you do makes a difference. It does.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Success is liking yourself, liking what you do, and liking how you do it.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Believe you can and you’re halfway there.",
        "You miss 100% of the shots you don’t take.",
        "I attribute my success to this: I never gave or took any excuse.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "A person who never made a mistake never tried anything new.",
        "It is never too late to be what you might have been.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "To succeed in life, you need two things: ignorance and confidence.",
        "If you're going through hell, keep going.",
        "Don't be discouraged.",
        " It’s often the last key in the bunch that opens the lock.",
        "Doubt kills more dreams than failure ever will.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "It always seems impossible until it's done.",
        "Our greatest glory is not in never falling, but in rising every time we fall.",
        "You don't have to be great to start, but you have to start to be great.",
        "If opportunity doesn’t knock, build a door.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, don't waste it living someone else's life.",
        "The best way to predict the future is to create it.",
        "Don’t count the days; make the days count.",
        "The best revenge is massive success.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "We become what we think about.",
        "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        "Success usually comes to those who are too busy to be looking for it.",
        "I find that the harder I work, the more luck I seem to have.",
        "The successful warrior is the average man, with laser-like focus.",
        "Try not to become a person of success, but rather try to become a person of value.",
        "Success is not the absence of failure; it’s the persistence through failure.",
        "Don’t let what you cannot do interfere with what you can do.",
        "Life isn’t about finding yourself. Life is about creating yourself.",
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "If you want to achieve greatness stop asking for permission.",
        "Success is achieved by developing our strengths, not by eliminating our weaknesses.",
        "The real test is not whether you avoid failure, but whether you let it harden or shame you into inaction.",
        "Success is about creating value for others, not just achieving personal gain.",
        "Dream big. Start small. Act now.",
        "Success is not measured by what you accomplish,",
        " but by the opposition you have encountered and the courage with which you have maintained the struggle.",
        "Keep going. Everything you need will come to you at the perfect time.",
        "Success is not about being better than someone else, it’s about being better than you used to be.",
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        "Success is liking yourself, liking what you do, and liking how you do it.",
        "The greatest pleasure in life is doing what people say you cannot do.",
        "Success isn’t just about what you accomplish in your life, it’s about what you inspire others to do.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Success means doing the best we can with what we have.",
        "Success is getting what you want, happiness is wanting what you get.",
        "Don’t wish it were easier. Wish you were better.",
        "The harder I work, the luckier I get.",
        "Success is not about being lucky, it’s about being ready.",
        "Don’t count the days, make the days count.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Success comes when you do what you love to do.",
        "Success is falling nine times and getting up ten.",
        "Success means having the courage, the determination,",
        " and the will to become the person you believe you were meant to be.",
    ];

    // Hiển thị đoạn văn ngẫu nhiên khi bấm nút
    document
        .getElementById("randomButton")
        .addEventListener("click", function () {
            let combinedText = "";
            const numberOfSentences = 5;

            for (let i = 0; i < numberOfSentences; i++) {
                const randomIndex = Math.floor(
                    Math.random() * randomTexts.length
                );
                combinedText += randomTexts[randomIndex] + " ";
            }

            // Hiển thị đoạn văn kết hợp
            document.getElementById("randomText").innerText =
                combinedText.trim();
        });

    // Sao chép link
    function copyToClipboard(elem) {
        var target = elem;
        target.select();
        document.execCommand("copy");

        // Hiển thị thông báo đã sao chép
        document.querySelector(".copied").style.display = "inline";
        setTimeout(() => {
            document.querySelector(".copied").style.display = "none";
        }, 1000);
    }

    document
        .getElementById("copyButton")
        .addEventListener("click", function () {
            const shareLink = document.getElementById("shareLink");
            copyToClipboard(shareLink);
        });
};

document.getElementById("copyButton").addEventListener("click", function () {
    const shareLink = document.getElementById("shareLink");
    shareLink.select();
    document.execCommand("copy");
    document.querySelector(".copied").style.display = "inline";
    setTimeout(() => {
        document.querySelector(".copied").style.display = "none";
    }, 1000);
});
