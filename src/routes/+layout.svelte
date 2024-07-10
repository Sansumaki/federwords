<script>
	import '../app.css';
</script>

<style>
    body {
        font-family: Arial, sans-serif;
        height: 100vh;
        margin: 0;
        background-color: #f4f4f4;
        background-image: url("/background.webp");
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
</style>

<svelte:head>
    <title>Meine Homepage</title>
</svelte:head>

<body>
<header>
    <h1 class="drop-shadow-lg text-gray-700 font-mono font-bold font-italic text-6xl text-center pt-[120px]">Federkratzer Word Challange</h1>
</header>

<slot></slot>

<footer class="bg-gray-900 text-white text-center p-2 fixed w-full bottom-0">
    <p>&copy; 2024 Santasia. Alle Rechte vorbehalten.</p>
</footer>
</body>
