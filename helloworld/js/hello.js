const i=7;

function hi()
{
	if(0 == "0" && 0 == '0' && "0" == '0')
	{
		var s = [ " hello", "world",'!', 9 ]; 
		var len = s.length;
		var j = s;
		for (let s = 0; s < len; s++)
			console.log(j[s]);
		let i=5;
		for(let i = 0; i < len; i++)
		console.log(s[i]);
		console.log(i);
	}
	
	console.log(i);
}