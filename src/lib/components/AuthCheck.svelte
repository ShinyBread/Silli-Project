<script lang="ts">
    import { user } from "$lib/firebase";
</script>
<div class="flex flex-col items-center justify-center text-center">  
    {#if $user}
    <slot />
    {:else}
        <p class="text-warning text-3xl mb-4">
            Para poder ingresar un nick, debes logearte
        </p>
        <a class="btn btn-info mt-5 text-black" href="/login">Volver</a>
    {/if}
</div>
