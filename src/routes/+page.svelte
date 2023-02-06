<script>
    import { Button } from 'sveltestrap'

    let count = 0;

    function IncrementCount() {
        count++;
    }
</script>

<main>
    <Button on:click={IncrementCount} class='gap-3'>{count}</Button>
    <h1>Svelte - Deployed from VERCEL</h1>
</main>

<style>

</style>
