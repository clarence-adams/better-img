<script>
	import { onMount } from 'svelte';
	import init, { greet } from 'wasm';

	onMount(async () => {
		await init();
	});

	let form;

	const getImages = async () => {
		const formData = new FormData(form);
		const image = formData.get('image');

		// convert image file to an array of bytes
		const buffer = await image.arrayBuffer();
		const imageData = new Uint8Array(buffer);
		console.log(image);
		greet(imageData);
	};
</script>

<h2>
	Upload an uncompressed jpeg or png and we will return compressed versions of your image along with
	an efficient img tag to go along with them!
</h2>

<form on:submit|preventDefault={getImages} bind:this={form}>
	<label for="image">Upload a png or jpeg</label>
	<input name="image" id="image" type="file" accept=".jpg,.png" />
	<button>Give me a picture!</button>
</form>

<style>
	h2 {
		margin: 0 0 2rem 0;
		font-size: 1.25rem;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
		border: solid #000 1px;
		border-radius: 0.5rem;
	}

	label {
		transform: translate(0, 0, 75rem);
		background-color: #fff;
	}
</style>
