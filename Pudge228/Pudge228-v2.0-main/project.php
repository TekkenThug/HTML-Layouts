<?php require("pages/meta.php") ?>
<body class="" onclick>
<?php require("pages/header.php") ?>

<main class="get_agent_container">
	<div class="carousel_wrapper hidden">
	<div id="js-carousel-1" class="owl-carousel">
		<div class="carousel-item">
			<picture>
				<source srcset="img/carousel/1.webp" type="image/webp">
				<img src="img/carousel/1.jpg" alt="">
			</picture>
		</div>
		<div class="carousel-item">
			<picture>
				<source srcset="img/carousel/2.webp" type="image/webp">
				<img src="img/carousel/2.jpg" alt="">
			</picture>
		</div>
		<div class="carousel-item">
			<picture>
				<source srcset="img/carousel/3.webp" type="image/webp">
				<img src="img/carousel/3.webp" alt="">
			</picture>
		</div>
		<div class="carousel-item">
			<picture>
				<source srcset="img/carousel/4.webp" type="image/webp">
				<img src="img/carousel/4.jpg" alt="">
			</picture>
		</div>
		<div class="carousel-item">
			<picture>
				<source srcset="img/carousel/5.webp" type="image/webp">
				<img src="img/carousel/5.jpg" alt="">
			</picture>
		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/6.webp" type="image/webp">
				<img src="img/carousel/6.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/7.webp" type="image/webp">
				<img src="img/carousel/7.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/8.webp" type="image/webp">
				<img src="img/carousel/8.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/9.webp" type="image/webp">
				<img src="img/carousel/9.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/10.webp" type="image/webp">
				<img src="img/carousel/10.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/11.webp" type="image/webp">
				<img src="img/carousel/11.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/12.webp" type="image/webp">
				<img src="img/carousel/12.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/13.webp" type="image/webp">
				<img src="img/carousel/13.jpg" alt="">
			</picture>
 		</div>
 		<div class="carousel-item">
 			<picture>
				<source srcset="img/carousel/14.webp" type="image/webp">
				<img src="img/carousel/14.jpg" alt="">
			</picture>
 		</div>
	</div>
	</div>
	<div class="employ hidden">
		<p>Данный сайт является выдуманной интерактивной историей, в которой участвуют друзья и знакомые.</p>
		<p>Возмножно, кто-то из них никогда не пересекался с другими.</p>
		<!-- <p>Проект был сделан с огромной душой.</p> -->
		<p>Вступай в наше агентство ПШОД уже сегодня. Стань одним из нас.</p>
		<p>Оставь свою оценку данному проекту</p>
		<div class="site_mark">
			<form action="php/mark.php" method="POST" id="mark_form">
				<div class="field_container">
					<label for=""><input type="radio" name="mark" value="1">1</label>
				</div>
				<div class="field_container">
					<label><input type="radio" name="mark" value="2">2</label>
				</div>
				<div class="field_container">
					<label><input type="radio" name="mark" value="3">3</label>
				</div>
				<div class="field_container">
					<label><input type="radio" name="mark" value="4">4</label>
				</div>
				<div class="field_container">
					<label><input type="radio" name="mark" value="5">5</label>
				</div>
				<div class="button_container">
					<input type="submit" value="Оценка" id="btnSend">
				</div>
			</form>
		</div>
		<div id="answerForm">
		</div>
	</div>
</main>

<?php require("pages/footer.php") ?>
<script src="js/owl.carousel.min.js"></script>
<script src="js/owlCarousel.js"></script>
<script src="js/ajax.js"></script>
</body>
</html>
