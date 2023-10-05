<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ViewTransition from "$lib/components/ViewTransition.svelte"
    import { user, userData } from "$lib/firebase";

    $user;
    $userData
</script>


<svelte:head>
    <title>Silli</title>
</svelte:head>

<div class=app>
    <ViewTransition />
    <NavBar />
    <main class="min-h-screen bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400">
        <slot />
    </main>
    <Footer />
</div>

