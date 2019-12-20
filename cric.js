// be sure to include jquery
// be sure to replace <YOUR API KEY> with your actual api key


$.get("https://cricapi.com/api/matches?apikey=x8jFRNd270WbDTV0vb7qNrvudFb2", function(matchdata) {
	console.log(matchdata);
	var i=1;
	matchdata.matches.forEach(function(md) {
		if(md.matchStarted == true){
		//$(".t1").append(  "\n " + md.team +"-----------");
		$.get("https://cricapi.com/api/cricketScore?apikey=x8jFRNd270WbDTV0vb7qNrvudFb2&unique_id=" + md.unique_id , function(md1){
			if(md1.score !=undefined){
				if(md.winner_team != undefined)
				{
					$(".t1").append( i +"  " + "SCORE=" + md1.score +  " ////// " + "Match Over" + "//////" + "winner-Team=" + md.winner_team +"<br>");
				}
				else
				{
					$(".t1").append( i +"  " + "SCORE=" + md1.score +  " ////// " + "Match is Live currently"  +"<br>");
				}
				i=i+1;
			}
		
	});
	}
	})
});