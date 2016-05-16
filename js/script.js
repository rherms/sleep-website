document.addEventListener('DOMContentLoaded', function() {

	var sleepData = {};
	sleepData["13under"] = 10;
	sleepData["14to17"] = 9;
	sleepData["18to25"] = 8;
	sleepData["26up"] = 8;

	$("#calculate").click(function() {
		$("#added-content").empty();

		var sleepNeeded = sleepData[$("#age-range").val()];
		var sleepGot = parseFloat($("#sleep-hours").val());
		if(isNaN(sleepGot) || sleepGot < 0 || sleepGot > 24) {
			$("#added-content").append("<p>Please enter a valid, positive, and reasonable number.</p>");
			return;
		}

		var sleepDebt = sleepNeeded - sleepGot;
		sleepDebt *= 7;
		var pText1 = $("<p>Your total sleep debt is approximately: " + sleepDebt + " hours.</p>")
		$("#added-content").append(pText1);

		var canvas1 = $("<canvas style=\"display:block\" id=\"chart1\" width=\"300\" height=\"100\"></canvas>");
		$("#added-content").append(canvas1);
		var ctx = $("#chart1");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		        datasets: [{
		            label: 'Sleep Needed',
		            data: [sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded],
		            backgroundColor: "#0066ff"
		        }, {
		        	label: 'Sleep Gotten',
		        	data: [sleepGot, sleepGot, sleepGot, sleepGot, sleepGot, sleepGot, sleepGot],
		        	backgroundColor: "#b30000"
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

		if(sleepDebt <= 0) {
			var pText2 = $("<p>Wow, congratulations you have no sleep debt! Keep up the great sleeping :)</p>");
			$("#added-content").append(pText2);
			$("#added-content").append("<img src=\"img/sleepDebt1.jpg\"/>");
		}
		else {
			var pText2 = $("<p>You have some sleep debt to get rid of! Check out this graph for a suggested sleep schedule.</p>")
			$("#added-content").append(pText2);

			var canvas2 = $("<canvas style=\"display:block\" id=\"chart2\" width=\"300\" height=\"100\"></canvas>");
			$("#added-content").append(canvas2);
			var ctx = $("#chart2");

			var neededPerDay = sleepDebt / 7;
			neededPerDay += sleepNeeded;
			var frac = neededPerDay / 20;
			var weekend = neededPerDay + (2.5 * frac);
			var weekday = neededPerDay - frac;

			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			        datasets: [{
			            label: 'Sleep Needed',
			            data: [sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded],
			            backgroundColor: "#0066ff"
			        },{
			            label: 'Sleep Suggestion',
			            data: [weekend, weekday, weekday, weekday, weekday, weekday, weekend],
			            backgroundColor: "#009933"
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});

			if(sleepDebt <= 10) {
				$("#added-content").append("<img src=\"img/sleepDebt2.jpg\"/>");
			}
			else if(sleepDebt <= 20) {
				$("#added-content").append("<img src=\"img/sleepDebt3.jpg\"/>");
			}
			else {
				$("#added-content").append("<img src=\"img/sleepDebt4.jpg\"/>");
			}
		}
	});

});