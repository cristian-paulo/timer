

window.onload = function () 
{
	

	var hour = 1, minute = 60, seconds = 9;
	document.getElementById("start").onclick = function()
	{
		var local = document.getElementsByClassName("center")[0];			
		
		var inter = setInterval(function()
		{
			local.innerHTML = hour + ":" + minute + ":" + seconds;
			seconds--;

			if (seconds < 0)
			{
				clearInterval(inter);
		alert(seconds);
			}
		}, 1000);


	}		
}