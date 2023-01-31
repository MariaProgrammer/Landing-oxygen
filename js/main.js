console.log('done');
// Динамический Бегугок-полоска с процентами 

function frame(){

	const myProgress = document.querySelector('.expertise__myprogress');
	const myBar = document.querySelectorAll('.expertise__mybar');
	
	let width = 1;

	const id1 = setInterval(move1, 10);
	const id2 = setInterval(move2, 10);
	const id3 = setInterval(move3, 10);
	
	const arr = [90, 80, 50];

	function move1(){
		
		if(width >= arr[0]) {				
					clearInterval(id1);
					
				} else {
					
				width++;
				
				myBar[0].style.width = width + '%';				
			}
			
		}

		function move2(){
		
			if(width >= arr[1]) {				
						clearInterval(id2);
						
					} else {
						
					width++;
					
					myBar[1].style.width = width + '%';				
				}
				
			}
		
			function move3(){
		
				if(width >= arr[2]) {				
							clearInterval(id3);
							
						} else {
							
						width++;
						
						myBar[2].style.width = width + '%';				
					}
					
				}
			
		}	

document.addEventListener('DOMContentLoaded', frame);


