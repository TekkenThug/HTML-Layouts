<?php
require('header.php');
$item='alien';
$item_cost=700;
?>
<main>
	<figure>
	<img src="img/tshirt_alien.png" class = 'item'>
	<figcaption>
		<?= $item ?>
		<p><?= $item_cost?> RUB</p>
	</figcaption>
	</figure>
</main>

<?php
require('footer.php');
?>