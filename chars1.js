	function getTarget(e) {
	
	if (!e) {
		e = window.event;
	} 
		return e.target || e.srcElement;
}

	function displayChars(e) {
		
		var el, elLength, elMsg;
		el = getTarget(e);
		elLength = el.value.length;
		elMsg = document.getElementById('showText');
		elMsg.innerHTML = el.value;
		
		countChars(e, elLength);
	}
	
	function countChars(e,elLength) {
	
		var elMsg3 = document.getElementById('counter');
		elMsg3.innerHTML = elLength;
		if	(elLength > 0)	{
			elMsg3.style.display="block";
		}	else	{
			elMsg3.style.display="none";
		}
	
	}


var field = document.getElementById('test');
field.addEventListener('keyup', function(e) {

displayChars(e);

},false);