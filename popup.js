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
