const btns = document.querySelectorAll("button");
const screen = document.querySelector("input");

btns.forEach(btn => {
				btn.addEventListener("click", (e) => {
				e.preventDefault();
				var x = e.target.value;
				if(x == "ac") {
								screen.value = "";
				}else if(x == "c") {
								screen.value = screen.value.slice(0, screen.value.length - 1);
				}else if(x == "percent") {
									 	b = screen.value/100;
									return 	screen.value = b;
								} else if(x == "equal") {
								screen.value = eval(screen.value)
				}
				else {
								screen.value += x;
				}
				
})
})
