<script lang="ts">

    export let name: string;
    export let image: string;
    export let message: string;
</script>

<div class="bg-gray-300 p-5 rounded-lg drop-shadow-2xl border-blue-900 border-2">
    <div class="italic text-sm text-center h-20">{message}</div>
    <img src="/badges/{image}" alt="{name}">
    <div class="text-center mt-4 bottom-0 font-bold h-14">{name}</div>
</div>