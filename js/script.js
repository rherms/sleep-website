document.addEventListener('DOMContentLoaded', function() {

	var sleepData = {};
	sleepData["13under"] = 10;
	sleepData["14to17"] = 9;
	sleepData["18to25"] = 8;
	sleepData["26up"] = 8;

	$("#calculate").click(function() {
		var sleepNeeded = sleepData[$("#age-range").val()];
		var sleepGot = parseFloat($("#sleep-hours").val());
		if(sleepGot === NaN) return;

		data = {};
		options = {};

		$("#main-content").append("<canvas style=\"display:block\" id=\"chart1\" width=\"300\" height=\"300\"></canvas>");
		var ctx = $("#chart1");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		        datasets: [{
		            label: 'Sleep Needed',
		            data: [sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded, sleepNeeded],
		            backgroundColor: #ff0000
		        }, {
		        	label: 'Sleep Gotten',
		        	data: [sleepGot, sleepGot, sleepGot, sleepGot, sleepGot, sleepGot, sleepGot],
		        	backgroundColor: #00ff00
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
	});

});