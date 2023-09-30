<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte"
    import UsernameForm from "$lib/components/UsernameForm.svelte";

</script>
<AuthCheck>
    <h1 class="text-xl p-5">Escribe tu nick</h1>
    <UsernameForm />
    <button class="btn btn-secondary mt-20"><a href="/login">Atras</a></button>
</AuthCheck>