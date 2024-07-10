<script lang="ts">
	import Badge from '$lib/Badge.svelte';

	let number: number;
	let image: string = '/badges/unknown.webp';
	let message: string = 'Noch keine Zahl eingegeben';
	let error: string | undefined = undefined;

	let badges: {number: number, name: string, message: string, image: string}[] = [
		{
			number: 0,
			name: 'Ready to Go',
			message: 'Leider noch kein Badge freigeschalten',
			image: 'unknown.webp'
		},
		{
			number: 1000,
			name: 'Schreiben am Boden',
			message: 'wohooo du hast auf dem Boden sitzend 1000 Wörter geschaft!',
			image: '1000.webp'
		},
		{
			number: 2000,
			name: 'Schreiben mit Feder',
			message: 'Du bist klasse, 2000 wörter wie in der Schule.',
			image: '2000.webp'
		},
		{
			number: 3000,
			name: 'Schreiben wie ein Computer',
			message: 'Du bist unschlagbar, schneller als ein Computer.',
			image: '3000.webp'
		}
	];
	let achieved: {number: number, name: string, message: string, image: string}[] = [];

	function reveal(event: KeyboardEvent) {
		if (event.key === 'Enter') {
        achieved = badges.filter((badge) => badge.number <= number);
		}
		if (number > 0 && number < 1000000) {
			error = undefined;
		} else if (number > 1000000) {
			error = 'your writing way to much. take a break.';
		} else {
			error = 'your number looks not valid.';
		}
	}
</script>

<div class="container m-auto mt-10 text-center">
	<div class="text-2xl font-bold">Enter your word-count</div>
	<div>
		<input
			class="rounded-3xl {error !== undefined ? 'border-red-900' : 'border-gray-800'} border-2 outline-0 bg-gray-400 text-black mt-3 p-2 text-3xl w-[200px] text-center placeholder-gray-500"
			bind:value={number}
			placeholder="1253"
			on:keyup={reveal}
			required
			autocomplete="off"
		>
		{#if error !== undefined}<p class="error text-red-700 mt-3">{error}</p>{/if}
	</div>
</div>

<div class="container m-auto mt-3 grid grid-cols-3 gap-4 justify-center">
{#each achieved as badge}
		<div>
			<Badge name={badge.name} image={badge.image} message={badge.message}></Badge>
		</div>
{/each}
</div>