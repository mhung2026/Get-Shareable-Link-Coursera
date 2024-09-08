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

    // Mảng chứa các từ hoặc cụm từ cơ bản
    const words = [
        "Success",
        "failure",
        "courage",
        "determination",
        "tomorrow",
        "realization",
        "opportunities",
        "dream",
        "goal",
        "perseverance",
        "hard work",
        "luck",
        "imagination",
        "creativity",
        "challenges",
        "strength",
        "weakness",
        "overcome",
        "achieve",
        "efforts",
        "growth",
        "mindset",
        "focus",
        "vision",
        "persistence",
        "drive",
        "passion",
        "success",
        "pursue",
        "innovation",
        "dedication",
        "ambition",
        "motivation",
        "leadership",
        "discipline",
        "strategy",
        "teamwork",
        "visionary",
        "adaptability",
        "commitment",
        "excellence",
        "confidence",
        "integrity",
        "resourcefulness",
        "initiative",
        "inspiration",
        "planning",
        "resilience",
        "skills",
        "experience",
        "goals",
        "positivity",
        "hardship",
        "progress",
        "values",
        "mindfulness",
        "self-discipline",
        "problem-solving",
        "decision-making",
        "communication",
        "achievement",
        "consistency",
        "patience",
        "flexibility",
        "productivity",
        "responsibility",
        "accountability",
        "trust",
        "efficiency",
        "innovation",
        "empowerment",
        "support",
        "collaboration",
        "creativity",
        "curiosity",
        "focus",
        "motivation",
        "improvement",
        "reflection",
        "direction",
        "potential",
        "perspective",
        "solutions",
        "guidance",
        "results",
        "impact",
        "outcomes",
        "challenge",
        "process",
        "evaluation",
        "clarity",
        "ambition",
        "fulfillment",
        "transformation",
        "contribution",
        "stamina",
        "encouragement",
        "compassion",
        "tolerance",
        "humility",
        "understanding",
        "knowledge",
        "wisdom",
        "sustainability",
        "victory",
        "conquest",
        "accomplishment",
        "resolve",
        "decision",
        "legacy",
        "milestone",
        "triumph",
        "breakthrough",
        "self-awareness",
        "self-confidence",
        "tenacity",
        "resolve",
        "breakthrough",
        "self-reliance",
        "independence",
        "reliability",
        "fortitude",
        "strategy",
        "insight",
        "strategic thinking",
        "goal-setting",
        "planning",
        "initiative",
        "visionary",
        "empowerment",
        "motivation",
        "dedication",
        "resourcefulness",
        "skills",
        "effort",
        "trustworthiness",
        "wisdom",
        "understanding",
        "leadership",
        "growth",
        "learning",
        "development",
        "resilience",
        "communication",
        "motivation",
        "persistence",
        "endurance",
        "resolve",
        "commitment",
        "dedication",
        "courage",
        "perseverance",
        "bravery",
        "strength",
        "confidence",
        "clarity",
        "purpose",
        "vision",
        "direction",
        "focus",
        "awareness",
        "strategy",
        "planning",
        "progress",
        "achievement",
        "success",
        "goal",
        "effort",
        "impact",
        "productivity",
        "result",
        "insight",
        "clarity",
        "progress",
        "transformation",
        "growth",
        "learning",
        "adaptation",
        "success",
        "goal-setting",
        "innovation",
        "creativity",
        "strategy",
        "motivation",
        "dedication",
        "persistence",
        "progress",
        "achievement",
        "resilience",
        "flexibility",
        "adaptability",
        "reflection",
        "realization",
        "awareness",
        "focus",
        "commitment",
        "leadership",
        "dedication",
        "contribution",
        "achievement",
        "goal-setting",
        "process",
        "productivity",
        "impact",
        "support",
        "collaboration",
        "creativity",
        "resourcefulness",
        "efficiency",
        "clarity",
        "communication",
        "teamwork",
        "reflection",
        "transformation",
        "focus",
        "growth",
        "strategy",
        "development",
        "accountability",
        "trust",
        "values",
        "guidance",
        "perception",
        "inspiration",
        "motivation",
        "improvement",
        "realization",
        "persistence",
        "clarity",
        "goal-setting",
        "planning",
        "direction",
        "process",
        "development",
        "growth",
        "learning",
        "creativity",
        "initiative",
        "reflection",
        "clarity",
        "commitment",
        "leadership",
        "influence",
        "transformation",
        "progress",
        "strength",
        "resilience",
        "teamwork",
        "collaboration",
        "dedication",
        "focus",
        "persistence",
        "courage",
        "bravery",
        "integrity",
        "honesty",
        "transparency",
        "values",
        "morals",
        "ethics",
        "trustworthiness",
        "loyalty",
        "reliability",
        "consistency",
        "accountability",
        "responsibility",
        "commitment",
        "dedication",
        "focus",
        "drive",
        "determination",
        "perseverance",
        "tenacity",
        "endurance",
        "resilience",
        "fortitude",
        "grit",
        "courage",
        "bravery",
        "strength",
        "confidence",
        "self-esteem",
        "self-worth",
        "self-awareness",
        "mindfulness",
        "awareness",
        "clarity",
        "focus",
        "vision",
        "purpose",
        "mission",
        "goals",
        "direction",
        "strategy",
        "planning",
        "process",
        "progress",
        "achievement",
        "success",
        "goal",
        "impact",
        "outcomes",
        "results",
        "productivity",
        "performance",
        "efficiency",
        "effectiveness",
        "innovation",
        "creativity",
        "resourcefulness",
        "problem-solving",
        "decision-making",
        "critical thinking",
        "strategic thinking",
        "reflective thinking",
        "analytical thinking",
        "innovative thinking",
        "creative thinking",
        "curiosity",
        "exploration",
        "discovery",
        "learning",
        "growth",
        "development",
        "adaptation",
        "change",
        "transformation",
        "breakthrough",
        "progress",
        "advancement",
        "success",
        "achievement",
        "fulfillment",
        "satisfaction",
        "purpose",
        "mission",
        "vision",
        "direction",
        "focus",
        "values",
        "beliefs",
        "attitude",
        "mindset",
        "perspective",
        "approach",
        "strategy",
        "planning",
        "execution",
        "implementation",
        "action",
        "initiative",
        "drive",
        "determination",
        "perseverance",
        "resilience",
        "fortitude",
        "grit",
        "strength",
        "endurance",
        "stamina",
        "energy",
        "vitality",
        "enthusiasm",
        "passion",
        "zeal",
        "vigor",
        "dynamism",
        "creativity",
        "innovation",
        "imagination",
        "vision",
        "strategy",
        "goal-setting",
        "planning",
        "process",
        "execution",
        "implementation",
        "action",
        "focus",
        "direction",
        "clarity",
        "purpose",
        "mission",
        "values",
        "beliefs",
        "attitude",
        "mindset",
        "perspective",
        "approach",
        "strategy",
        "execution",
        "implementation",
        "action",
        "initiative",
        "drive",
        "passion",
        "determination",
        "perseverance",
        "resilience",
        "strength",
        "confidence",
        "courage",
        "bravery",
        "fortitude",
        "grit",
        "determination",
        "focus",
        "clarity",
        "vision",
        "purpose",
        "mission",
        "values",
        "beliefs",
        "attitude",
        "mindset",
        "perspective",
        "approach",
        "strategy",
        "planning",
        "execution",
        "implementation",
        "action",
        "initiative",
        "drive",
        "determination",
        "perseverance",
        "resilience",
        "strength",
        "confidence",
        "self-esteem",
        "self-worth",
        "self-awareness",
        "mindfulness",
        "awareness",
        "clarity",
        "focus",
        "vision",
        "purpose",
        "mission",
        "goals",
        "direction",
        "planning",
        "execution",
        "implementation",
        "action",
        "process",
        "progress",
        "achievement",
        "success",
        "goal",
        "impact",
        "outcomes",
        "results",
        "performance",
        "efficiency",
        "effectiveness",
        "innovation",
        "creativity",
        "resourcefulness",
        "problem-solving",
        "decision-making",
        "critical thinking",
        "strategic thinking",
        "reflective thinking",
        "analytical thinking",
        "innovative thinking",
        "creative thinking",
        "curiosity",
        "exploration",
        "discovery",
        "learning",
        "growth",
        "development",
        "adaptation",
        "change",
        "transformation",
        "breakthrough",
        "progress",
        "advancement",
        "success",
        "achievement",
        "fulfillment",
        "satisfaction",
        "purpose",
        "mission",
        "vision",
        "direction",
        "focus",
        "values",
        "beliefs",
        "attitude",
        "mindset",
        "perspective",
        "approach",
        "strategy",
        "planning",
        "execution",
        "implementation",
        "action",
        "initiative",
        "drive",
        "determination",
        "per",
    ];

    const verbs = [
        "believe",
        "create",
        "achieve",
        "overcome",
        "push",
        "work",
        "continue",
        "reach",
        "strive",
        "dream",
        "build",
        "pursue",
        "visualize",
        "focus on",
        "explore",
        "develop",
        "embrace",
        "seek",
        "challenge",
        "realize",
        "keep going",
        "persevere",
        "transform",
        "imagine",
        "ask",
        "begin",
        "call",
        "come",
        "do",
        "find",
        "get",
        "give",
        "go",
        "hear",
        "help",
        "keep",
        "know",
        "leave",
        "let",
        "like",
        "live",
        "look",
        "make",
        "move",
        "need",
        "play",
        "put",
        "run",
        "say",
        "see",
        "show",
        "start",
        "take",
        "talk",
        "tell",
        "think",
        "try",
        "turn",
        "use",
        "want",
        "work",
    ];

    const connectors = [
        "and",
        "or",
        "but",
        "because",
        "while",
        "although",
        "even though",
        "despite",
        "instead of",
        "so that",
        "as",
        "so",
        "THEREFORE",
    ];

    // Hàm tạo câu ngẫu nhiên
    function createRandomSentence() {
        const word1 = words[Math.floor(Math.random() * words.length)];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const word2 = words[Math.floor(Math.random() * words.length)];
        const connector =
            connectors[Math.floor(Math.random() * connectors.length)];
        const word3 = words[Math.floor(Math.random() * words.length)];

        return `${word1} ${verb} ${word2} ${connector} ${word3}.`;
    }

    // Hàm tạo đoạn văn bằng cách kết hợp nhiều câu ngẫu nhiên
    document
        .getElementById("randomButton")
        .addEventListener("click", function () {
            let combinedText = "";
            const numberOfSentences = 5; // Số lượng câu muốn tạo

            for (let i = 0; i < numberOfSentences; i++) {
                combinedText += createRandomSentence() + " ";
            }

            // Hiển thị đoạn văn kết hợp
            document.getElementById("randomText").innerText =
                combinedText.trim();

            // Hiển thị nút copy sau khi đoạn văn đã được sinh ra
            document.getElementById("copyTextButton").style.display = "inline";
        });

    // Sao chép văn bản từ thẻ p#randomText
    function copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        // Hiển thị thông báo đã sao chép
        document.querySelector(".copied").style.display = "inline";
        setTimeout(() => {
            document.querySelector(".copied").style.display = "none";
        }, 1000);
    }

    // Gán sự kiện cho nút copy
    document
        .getElementById("copyTextButton")
        .addEventListener("click", function () {
            const textToCopy = document.getElementById("randomText").innerText;
            copyToClipboard(textToCopy);
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
