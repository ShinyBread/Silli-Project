<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>
<NavBar></NavBar>
<body class="min-h-screen bg-neutral">
    <slot />
</body>
<Footer></Footer>