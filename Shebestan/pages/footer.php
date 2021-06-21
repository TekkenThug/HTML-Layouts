<footer>
		<div class="container_footer">
			<div class="navigation_footer">
				<h3 class="footer_heading">Навигация</h3>
				<div class="footer_line"></div>
				<nav>
					<a href="index.php">Главная</a>
					<span class="square">■</span>
					<a href="contacts.php">Контакты</a>
					<span class="square">■</span>
					<a href="order.php">Заказать</a>
				</nav>
			</div>
			<div class="feedback">
				<h3 class="footer_heading">Быстрая связь</h3>
				<div class="footer_line"></div>
				<p>Станьте нашим партнёром. Это просто!</p>
				<form action="send.php" method="POST" class="form_footer" id="form_footer">
					<input id="phone_field_footer" type="text" name="phone_footer" placeholder="79205553535" pattern="(\+[0-9]{2,12}|[0-9]{1,11})" required>
					<input id="btnSendFormFooter" type="submit" value="Отправить">
				</form>
			</div>
		</div>
		<div class="contacts_footer">
			<a href="mailto:mail@mail.ru" class="email_icon contact_list_footer">email@mail.ru</a>
			<div class="vertical_line"></div>
			<a href="tel:+79205555555" class="phone_icon contact_list_footer">+7 (920) 555-70-70</a>
		</div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/jquery.magnific-popup.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/ajax.js"></script>
<script src="js/carousel.js"></script>
<script src="js/formValidatorFooter.js"></script>
<script src="js/localStorage.js"></script>
</body>
</html>