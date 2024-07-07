<script lang="ts">

    export let name: string;
    export let unknownImage: string;
    export let realImage: string;

    let _revealed = false;


    function reveal() {
        _revealed = true;
        console.log("Revealed " + this._name);
    }

    $: image = _revealed ? realImage : unknownImage;
</script>

<button
        class="bg-gray-300 p-5 rounded-3xl drop-shadow-2xl cursor-pointer"
        tabindex="0"
        on:click={() => reveal()}>
    <img src="/badges/{image}" alt="Unknown">
    <div class="text-center bottom-0 font-bold">{name}</div>
</button>