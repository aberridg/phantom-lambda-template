var page = require('webpage').create();
page.open('https://andrewspc.co.uk:444/spotfire/wp/OpenAnalysis?file=de2c4800-5553-4062-8353-6047dd1d6eeb', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
  	console.log("success");
  	//page.render("test212.png");
  }
  //phantom.exit();
});

page.onLoadFinished = function(status) {
  console.log('Status: ' + status);

setTimeout(function () {
			//console.log(document.getElementById('GenerateNarrativeButton').innerHtml);//.firstChild.click();	
  			//$("TriggerNarrative input")[0].value = "";// Math.floor(Math.random() * 1000)).toString();
  			if(document.getElementById('Narrative') == null) {
  				console.log("it's null");
  			} else { 
  				console.log("not null");
  			}
  			
  			var generateNarrative = page.evaluate(function() {
				document.getElementById('GenerateNarrativeButton').firstChild.click();
				
  			});
  			
  			
  			console.log(generateNarrative);
  			
  			setTimeout(function () {
  			
  				var ua = page.evaluate(function() {
      				return document.getElementById('Narrative').textContent;
      			});
      			console.log(ua);
      			//page.render("sf.png");
                phantom.exit();
  			
  			
   			}, 6000);
   			

        }, 1000);


};
