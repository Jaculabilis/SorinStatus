(function() {
  // Get the article div
  var article = document.getElementById("content-detail-page-of-an-article");
  // Rule off the link section that always comes at the end
  article.appendChild(document.createElement("hr"));
  // Add Sorin's current status as a <p>
  var status = document.createElement("p");
  status.innerText =  "Meanwhile on Innistrad, Sorin Markov is still stuck in a rock.";
  article.appendChild(status);
  // Pick a catchy one-liner
  var slogans = [
    "I can see your house from here.",
	"Guess you shouldn't have taken your victory for granite.",
	"Looks like you're stuck between a rock and a hard place.",
	"Innistrad? More like in-a-strata. Heyoooo!"
  ];
  var slogan = slogans[Math.floor(Math.random() * slogans.length)];
  // Add a div for the picture
  var figureDiv = document.createElement("div");
  figureDiv.className = "figure-wrapper rtecenter";
  figureDiv.innerHTML = "<figure><img title=\"&quot;" + slogan + "&quot;\" src=\"http://media.wizards.com/2016/images/daily/s7ory4r7_gewRglYA4D.jpg\" class=\"full-page\"><figcaption>Art by <a href=\"http://gatherer.wizards.com/Pages/Search/Default.aspx?output=spoiler&amp;method=visual&amp;action=advanced&amp;artist=+%5b%22Cynthia+Sheppard%22%5d\" target=\"_blank\">Cynthia Sheppard</a></figcaption></figure>";
  article.appendChild(figureDiv);
})();