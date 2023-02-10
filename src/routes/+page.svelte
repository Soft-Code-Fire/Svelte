<script>
    import { Button } from 'sveltestrap'

    let count = 0;

    function IncrementCount() {
        count++;
    }
</script>

<main>
    <Button on:click={IncrementCount} class='text-3xl'>{count}</Button>
    <h1 class="text-red-500 text-3xl">Svelte - Deployed from VERCEL</h1>
</main>

<style>

</style>
