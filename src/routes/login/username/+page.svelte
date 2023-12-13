<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte"
    import UsernameForm from "$lib/components/UsernameForm.svelte";

</script>
<AuthCheck>
    <UsernameForm />
    <a href="/login">
        <button class="btn btn-black hover:btn-warning mt-10">Atras</button>
    </a>
</AuthCheck>