<?php require ('pages/header.php') ?>
<main>
	<div class="container">
		<div class="container_content">
			<div class="horizont_line"></div>
			<h2 class="main_heading">Заказать</h2>
			<div class="horizont_line"></div>
		</div>
		<div class="ordering_heading">
			<div class="horizontal_line"></div>
			<img src="img/icons/basket.png" alt="shop_icon">
			<div class="horizontal_line"></div>
			
		</div>
		<p class="ordering_notice">Это выгодно, просто и доступно! Оформите заявку и получите выгодное предложение уже сегодня!</p>
		<div class="ordering_form">
			<form method="POST" action="send_order.php" class="clearfix" id="form_order">
				<div class="input_field_container">
					<input class="input_field requireName" type="text" name="customer_name" placeholder="Представьтесь, пожалуйста" pattern="^[A-Za-zА-Яа-яЁё\s]{1,20}" required>
				</div>
				<div class="input_field_container">
					<input class="input_field icons_order requirePhone" type="text" name="customer_phone" placeholder="Ваш номер телефона" required>
				</div>
				<div class="input_field_container">
					<input class="input_field icons_order" type="text" name="customer_address_delivery" placeholder="Адрес доставки">
				</div>
				<div class="input_field_container half-container">
					<select class="input_field half_max" name="customer_product">
						<option value="" disabled selected>Тип товара</option>
						<option value="Щебень гравийный фр.5-20">Щебень гравийный фр.5-20</option>
						<option vlaue="Щебень гравийный фр.20-40">Щебень гравийный фр.20-40</option>
						<option value="Щебень гравийный фр.40-70">Щебень гравийный фр.40-70</option>
						<option value="Щебень гранитный фр.5-20">Щебень гранитный фр.5-20</option>
						<option value="Щебень гранитный фр.20-40">Щебень гранитный фр.20-40</option>
						<option value="Щебень гранитный фр.25-60">Щебень гранитный фр.25-60</option>
						<option value="Щебень гранитный фр.40-70">Щебень гранитный фр.40-70</option>
						<option value="Отсев гранитный фр.0-5">Отсев гранитный фр.0-5</option>
						<option value="Щебень дорожный фр.0-20">Щебень дорожный фр.0-20</option>
						<option value="Щебень дорожный фр.20-70">Щебень дорожный фр.20-70</option>
						<option value="Песок строительный">Песок строительный</option>
						<option value="Песок природный">Песок природный</option>
						<option value="Песок мытый">Песок мытый</option>
						<option value="Кварцит фр.5-20">Кварцит фр.5-20</option>
						<option value="Кварцит фр.20-40">Кварцит фр.20-40</option>
						<option value="Отсев кварцитный фр.0-10">Отсев кварцитный фр.0-10</option>
						<option value="Сланец фр.5-20">Сланец фр.5-20</option>
						<option value="Отсев сланцевый фр.0-20">Отсев сланцевый фр.0-20</option>
						<option value="Отсев сланцевый фр.20-60">Отсев сланцевый фр.20-60</option>
						<option value="Отсев сланцевый фр.0-80">Отсев сланцевый фр.0-80</option>
						<option value="Керамзит фр.10-20">Керамзит фр.10-20</option>
						<option value="Керамзит фр.20-40">Керамзит фр.20-40</option>
					</select>
					<div class="united-field-container">
						<input class="input_field" type="text" name="customer_order_volume" placeholder="Объем">
						<select class="input_field" name="units">
							<option value="м³">м³</option>
							<option value="т">т</option>
						</select>
					</div>
				</div>
				
				<div class="input_field_container">
					<textarea name="customer_comment" placeholder="Доп. комментарий" class="icons_order"></textarea>
				</div>
				<input id="btnSendOrder" class="btn_submit" type="submit" name="" value="отправить">
			</form>
		</div>
		<div class="dust_icon"><img src="img/icons/dust.png"></div>
	</div>
</main>
<?php require ('pages/footer.php') ?>
