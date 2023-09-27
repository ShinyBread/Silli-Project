<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>
<NavBar></NavBar>
<main class="min-h-screen">
    <slot />
</main>
<Footer></Footer>