
// cotton song
const cotton = document.createElement("audio");
cotton.src = "images/Cotton Cloud.mp3";
cotton.volume = .1

// cotton song
const expresso = document.createElement("audio");
expresso.src = "images/Espresso.mp3";
expresso.volume = .1

// third song
const third = document.createElement("audio");
third.src = "images/3rdsong.mp3";
third.volume = .1

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      
    if (request.greeting == "play cotton"){ 
        expresso.pause()
        third.pause()
        cotton.play()
       
        sendResponse({farewell: "cotton is playing"});
     ;}

    else if (request.greeting == "play expresso")
      {cotton.pause()
        third.pause()
        expresso.play()
        
          sendResponse({farewell: "expresso is playing"});
      ;
    }

    else if (request.greeting == "play 3rd")
      {expresso.pause()
        cotton.pause()
          third.play()
        
          
        sendResponse({farewell: "third is playing"});
      ;
    }
    else if (request.greeting == "stop")
      {expresso.pause()
        cotton.pause()
          third.pause()
        sendResponse({farewell: "music stopped"});
      ;
    }
  }
);

// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://leetcode.com'}]});