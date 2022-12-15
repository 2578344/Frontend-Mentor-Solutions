
function change() {
    document.getElementById("sub-btn").onclick = function () {
        alert("Hello world");
    }
    const parent = document.getElementById("main-container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    const divIcon = document.createElement('div');
    divIcon.innerHTML = `<img src = "images/illustration-thank-you.svg" alt="Icon star"/>`;
    divIcon.classList.add("divIcon");
    parent.appendChild(divIcon);

    const divSelected = document.createElement('div');
    divSelected.innerHTML = '<p>You selected  out of 5</p>';
    divSelected.classList.add("divSelected");
    parent.appendChild(divSelected);
    

    const divThanks = document.createElement('div');
    divThanks.innerHTML = '<h2 style="margin-left: 30%">Thank you!</h2>';
    divThanks.classList.add("text-container");
    parent.appendChild(divThanks);

    const divStayInTouchText = document.createElement('div');
    divStayInTouchText.innerHTML = "<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hasitate to get in touch!</p>";
    divStayInTouchText.classList.add("stay-in-touch");
    divThanks.appendChild(divStayInTouchText);

}