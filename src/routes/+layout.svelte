<script>
	import '../app.css';
</script>

<header>
	<h1>Welcome to better img!</h1>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 0 8rem;
		text-align: center;
	}

	h1 {
		margin: 0 4rem;
		font-weight: bold;
		font-size: 1.875rem;
	}

	main {
		padding: 0 8rem;
		text-align: center;
	}
</style>
