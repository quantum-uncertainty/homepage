(function setupCollapsibleTimelines() {
  let collapseButtons = document.getElementsByClassName('collapse-button');
  for (let button of collapseButtons) {
    button.addEventListener("click", function onClick() {
      let icon = this.children[1];
      icon.classList.toggle("fa-angle-right");
      icon.classList.toggle("fa-angle-down");
      let timeline = this.nextElementSibling;
      timeline.classList.toggle("collapsed");
      timeline.classList.toggle("expanded");
    });
  }
})();

(function setUpScrollToTop() {
  let button = document.getElementById("scroll-to-top");
  button.onclick = function scrollToTop() {
    let article = document.getElementsByTagName("article")[0];
    article.scrollIntoView({ behavior: "smooth" });
  }
  window.onscroll = function toggleScrollButton() {
    if (window.pageYOffset >= 250) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
})();

(function addQuotes() {
  let quotes = [
    "And when you're talking about an atmosphere, oceans are very small. And it blows over and it sails over.",
    "I own buildings. I'm a builder; I know how to build. Nobody can build like I can build. Nobody. And the builders in New York will tell you that. I build the best product. And my name helps a lot.",
    "Years ago the Democrats had the money to build the Wall, but they didn't have any idea how to get it done. I am building it bigger and better than ever thought possible!",
    "We're going to win at space!",
    "The media is so after me on women!  Wow, this is a tough business. Nobody has more respect for women than Donald Trump!",
    "As everybody knows, but the haters & losers refuse to acknowledge, I do not wear a \"wig.\" My hair may not be perfect but it's mine.",
    "The people that know me and know the history of our Country say that I am  the hardest working President in history. I don't know about that, but I am a hard worker and have probably gotten more done in the first 3 1/2 years than any President in history. The Fake News hates it!",
    "The Media(Fake News) is pushing Sleepy Joe hard.Funny, I'm only here because of Biden & Obama. They didn't do the job and now you have Trump, who is getting it done - big time!",
    "It's freezing and snowing in New York--we need global warming!",
    "Crazy Nancy Pelosi deleted this from her Twitter account. She wanted everyone to pack into Chinatown long after I closed the BORDER TO CHINA. Based on her statement, she is responsible for many deaths. She’s an incompetent, third-rate politician!",
    "Remember, new \"environment friendly\"  lightbulbs can cause cancer. Be careful-- the idiots who came up with this stuff don't care.",
    "I think I am actually humble. I think I'm much more humble than you would understand.",
    "Actually, throughout my life, my two greatest assets have been mental stability and being, like, really smart.",
    "I love Canada, but they’ve taken advantage of our Country for many years!",
    "At a recent round table meeting of business executives, & long after formally introducing Tim Cook of Apple, I quickly referred to Tim + Apple as Tim/Apple as an easy way to save time & words. The Fake News was disparagingly all over this, & it became yet another bad Trump story!",
    "I love the Mexican people, but Mexico is not our friend. They're killing us at the border and they're killing us on jobs and trade. FIGHT!",
    "I always treated the Chinese Virus very seriously, and have done a very good job from the beginning, including my very early decision to close the “borders” from China - against the wishes of almost all. Many lives were saved. The Fake News new narrative is disgraceful & false!",
    "The media is so dishonest. If I make a statement, they twist it and turn it to make it sound bad or foolish.They think the public is stupid!",
    "I would give myself an A+.",
    "Mexico is killing the United States economically because their leaders and negotiators are FAR smarter than ours. But nobody beats Trump!",
    "The concept of global warming was created by and for the Chinese in order to make US manufacturing non-competitive.",
    "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters, OK? It's, like, incredible.",
    "Wow—Family Feud said I am the third most envied man in America. I respectfully disagree—I am very modest.",
    "I am the BEST builder, just look at what I've built. Hillary can't build. Republican candidates can't build. They don't have a clue!",
    "By the way, I have great respect for China. I have many Chinese friends. They live in my buildings all over the place.",
    "Despite the constant negative press covfefe",
    "I had a meeting at the Pentagon with lots of generals -- they were like from a movie, better looking than Tom Cruise and stronger -- and I had more generals than I've ever seen.",
    "I said, this is the greatest room I've ever seen. I -- I saw more computer boards than, I think, that they make today.",
    "...to President of the United States (on my first try). I think that would qualify as not smart, but genius....and a very stable genius at that!",
    "Well, it happened again. Amy Klobuchar announced that she is running for President, talking proudly of fighting global warming while standing in a virtual blizzard of snow, ice and freezing temperatures. Bad timing. By the end of her speech she looked like a Snowman(woman)!",
    "Nobody can build a wall like me.",
    "The beauty of me is that I'm very rich.",
    "So ridiculous. Greta must work on her Anger Management problem, then go to a good old fashioned movie with a friend! Chill Greta, Chill!",
    "Mexico will pay for the wall!",
  ];
  let el = document.getElementById("quote");
  el.innerText = quotes[0];
  let index = 0;
  let len = quotes.length;
  let nextButton = document.getElementById("nextButton");
  nextButton.onclick = function nextSlide() {
    index = (index + 1) % len;
    el.innerText = quotes[index];
  };
  let prevButton = document.getElementById("prevButton");
  prevButton.onclick = function prevSlide() {
    if (index == 0) {
      index = len;
    }
    index = index - 1;
    el.innerText = quotes[index];
  };
})();