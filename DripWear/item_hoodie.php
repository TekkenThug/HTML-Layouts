<?php
require('header.php');
$item='feelings';
$item_cost=2200;
?>
<main>
	<figure>
	<img src="img/hoodie.png" class = 'item'>
	<figcaption>
		<?= $item ?>
		<p><?= $item_cost?> RUB</p>
	</figcaption>
	</figure>
</main>
<?php
require('footer.php');
?>