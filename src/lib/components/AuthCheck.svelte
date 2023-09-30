<script lang="ts">
    import { user } from "$lib/firebase";
    import { alertAction } from "svelte-legos";

function onClose() {
  // handle on alert close
}

function onOk() {
  // handle on ok click
}

</script>
<div class="flex flex-col items-center justify-center text-center">  
    {#if $user}
    <slot />
    {:else}
        <p class="text-warning text-3xl mb-4">
            Ups!
        </p>
        <a class="btn btn-info mt-5 text-black" href="/login"use:alertAction={{
            title: "No te has logeado",
            description: "Para poder ingresar, debes logearte!",
            onClose,
            onOk
          }}>Volver</a>
    {/if}
</div>
