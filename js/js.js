

window.onload = function () 
{
	

	var hour = 0, minute = 59, seconds = 59;
	btn = document.getElementById("start");
	btn.onclick = function()
	{
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