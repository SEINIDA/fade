$(function(){



  
	const $slides = document.querySelectorAll('.slides > .slides-container > p');
	const $indicators = document.querySelectorAll('.slides > .slides-pagination > li > a');
	
	const $btnPrev = document.querySelector('.slides > a.prev');
	const $btnNext = document.querySelector('.slides > a.next');

	const $btnAuto = document.querySelector('.slides>.btn'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*8); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$slides[nowIdx].classList.add('on');
	$indicators[nowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$indicators.forEach(function($indicator, idx){

		$indicator.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

			//이전 인디케이터 비활성화
			$indicators[oldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$indicators[nowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$slides[oldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$slides[nowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.addEventListener('click', function(evt){

		oldIdx = nowIdx;

		if(nowIdx<8){
			nowIdx++;
		}else{
			nowIdx=0;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$btnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=8;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$btnAuto.addEventListener('click', function() {
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.click();
			}, 1500);
		}
	});

	
	$('.slides > .slides-pagination > li:nth-child(1)').on('click', function(){
		  
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 -18px";
	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
		


   
	
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(2)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(3)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(4)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(5)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(6)').on('click', function(){
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
  
	  $('.slides > .slides-pagination > li:nth-child(7)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(8)').on('click', function(){
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 0";
		
	  });
  
	  $('.slides > .slides-pagination > li:nth-child(9)').on('click', function(){
		
		document.querySelector(".slides > .slides-pagination > li:nth-child(9)").style.backgroundPosition = "0 -18px";	
		document.querySelector(".slides > .slides-pagination > li:nth-child(2)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(3)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(4)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(5)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(6)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(7)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(8)").style.backgroundPosition = "0 0";
		document.querySelector(".slides > .slides-pagination > li:nth-child(1)").style.backgroundPosition = "0 0";
	  });
  
	 
    
});