

window.onload = function () 
{
	
	var btnI = document.getElementById("start");
	var btnB = document.getElementById("back");
	var center = document.getElementById("center");
	var counter = document.getElementById("counter");

	btnI.onclick = function ()
	{
		var form = document.getElementById("form");
		var hour = form.hor.value == ""? 0: form.hor.value; //if value is empty, var recibe 0
		var minute = form.min.value == ""? 0: form.min.value; 
		var seconds = form.sec.value == ""? 0: form.sec.value;
		
		center.className = 'hidden';	
		btnI.className = 'hidden';
		counter.className = 'show';

		var inter = setInterval(function()
		{
			counter.innerHTML = hour + ":" + minute + ":" + seconds;
			seconds--;

			if (seconds < 0)
			{
				minute--;
				seconds = 59;

				if (minute < 0) 
				{
					hour--;
					minute = 59;
					if (hour < 0) 
					{
						clearInterval(inter);
					}
				}

			}

		}, 1000);

		btnB.className = 'show';
		btnB.onclick = function ()
		{
			btnB.className = 'hidden';
			center.className = 'show';
			counter.className = 'hidden';
			btnI.className = 'show';
			hour = 0; minute = 0; seconds = 0;
		}
	}


}