

window.onload = function () 
{
	
	btn = document.getElementById("start");
	btn.onclick = function()
	{
		var form = document.getElementById("form");
		var hour = form.hor.value == ""? 0: form.hor.value; //if value is empty, var recibe 0
		var minute = form.min.value == ""? 0: form.min.value; 
		var seconds = form.sec.value == ""? 0: form.sec.value;

		var local = document.getElementsByClassName("center")[0];			
		btn.className = 'hidden';
		var inter = setInterval(function()
		{
			local.innerHTML = hour + ":" + minute + ":" + seconds;
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


	}		
}