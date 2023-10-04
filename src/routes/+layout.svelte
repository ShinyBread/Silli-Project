<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<NavBar></NavBar>
<body class="min-h-screen bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400">
    <slot />
</body>  
<Footer></Footer>
