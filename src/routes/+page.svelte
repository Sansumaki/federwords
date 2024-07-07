<script lang="ts">
    import Badge from '$lib/Badge.svelte'

    let number : number;
    let image: string = "/badges/unknown.webp";
    let message: string = "Noch keine Zahl eingegeben"

    function reveal(event) {
        if (event.key === "Enter") {
            if (number >= 3000) {
                image = "/badges/3000.webp";
                message = "Du bist unschlagbar, schneller als ein Computer."
            } else if (number >= 2000) {
                image = "/badges/2000.webp";
                message = "Du bist klasse, 2000 wörter wie in der Schule."
            } else if (number >= 1000) {
                image = "/badges/1000.webp";
                message = "wohooo du hast auf dem Boden sitzend 1000 Wörter geschaft!";
            }
            else{
                message = "Leider kein Badge freigeschalten...";
            }
            console.log("revealing " + number)
        }
    }
</script>

<div class="grid grid-cols-3 gap-4 container m-auto mt-10">
    <Badge name="1000 Words" unknownImage="unknown.webp" realImage="1000.webp"></Badge>
    <Badge name="2000 Words" unknownImage="unknown.webp" realImage="2000.webp"></Badge>
    <Badge name="3000 Words" unknownImage="unknown.webp" realImage="3000.webp"></Badge>
</div>

<hr class="border bg-black m-10"/>

<div class="container m-auto mt-10 flex justify-center">
    <div class="text-xl font-bold">Enter your word count and hit enter:</div>
    <input class="border ml-3 text-xl w-20 text-right" type="number" bind:value={number} placeholder="100" on:keypress={reveal}>
</div>
<div class="container m-auto mt-10 flex justify-center">
    {message}
</div>
<div class="container m-auto mt-10 flex justify-center">
    <img src={image} alt="your badge" width="300px">
</div>