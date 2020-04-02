
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://kit.fontawesome.com/82b39bba48.js" crossorigin="anonymous"></script>
	<link href="https://fonts.googleapis.com/css?family=Stint+Ultra+Condensed&display=swap&subset=latin-ext"
		rel="stylesheet">
	<link
		href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display:400,700|Playfair+Display:400,700&display=swap&subset=latin-ext"
		rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap&subset=latin-ext" rel="stylesheet">

	<link rel="stylesheet" href="style.css">

</head>

<body>
	<div class="wrapper">
		<header>ŻANETA SZAŁAŃSKA</header>
		<section class="mobile">
			<i class="fas fa-bars"></i>
			<nav class="burger">
				<ul>
					<li><a href="index.html">Strona główna</a></li>
					<li><a href="about.html">O mnie</a></li>
					<li><a href="projects.html">Projekty</a></li>
					<li><a href="contact.html">Kontakt</a></li>
				</ul>
			</nav>
		</section>
		<section class="desktop">
			<nav>
				<ul>
					<li><a href="index.html">Strona główna</a></li>
					<li><a href="about.html">O mnie</a></li>
					<li><a href="projects.html">Projekty</a></li>
					<li><a href="contact.html">Kontakt</a></li>
				</ul>
			</nav>
		</section>
		<div class="move">
		</div>
		<div class="scroll-up">
			<i class="fas fa-arrow-up"></i>
		</div>
	</div>
	<footer>
		<p>&copy; Żaneta Szałańska 2020</p>
	</footer>
	<?php
$to      = 'zaneta.szalanska@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy email od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';

mail($to, $subject, $message, $headers);

echo '<h1 class="mail-message">Wiadomość wysłana</h1>';
?>
	<script src="main.js"></script>
</body>

</html>