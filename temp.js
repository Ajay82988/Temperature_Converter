onChange('from');
			onChange('to');
			function onChange(fromOrTo) {
				if(fromOrTo === 'from') {
					document.getElementById("from").placeholder = document.getElementById("selectFrom").value;
				} else if(fromOrTo === 'to') {
					document.getElementById("to").placeholder = document.getElementById("selectTo").value;
				} 
			}
			function calculate() {
				var from = document.getElementById("selectFrom");
				var to = document.getElementById("selectTo");
				var fromValue = parseInt(document.getElementById("from").value);
				var toValue = parseInt(document.getElementById("to").value);
				if(from.value == "Celcius") {
					if(to.value == "Farenheit") {
						result = ((fromValue * 9)/5) + 32;
					}
					else if(to.value == "Kelvin") {
						result = fromValue + 273;
					} else {
						result = "Cannot calculate!";
					}
					document.getElementById("to").value = result.toFixed(2);
				}
				else if(from.value == "Farenheit") {
					if(to.value == "Celcius") {
						result = ((fromValue - 32) * 5)/9
					}
					else if(to.value == "Kelvin") {
						result = ((fromValue + 459.67) * 5)/9;
					} else {
						result = "Cannot calculate!";
					}
					document.getElementById("to").value = result.toFixed(2);
				}
				else if(from.value == "Kelvin") {
					if(to.value == "Celcius") {
						result = fromValue - 273;
					}
					else if(to.value == "Farenheit") {
						result = 1.8 * (fromValue-273) + 32;
					} else {
						result = "Cannot calculate!";
					}
					document.getElementById("convert-button").value = result.toFixed(2);
				}
				document.getElementById("clear").addEventListener("click",() =>{
				  document.getElementById("from").value=""; document.getElementById("to").value="";
             document.getElementById("results").value="";
				});
			}
