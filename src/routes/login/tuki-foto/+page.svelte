<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import UploadPhotoForm from "$lib/components/UploadPhotoForm.svelte";
    

</script>

<AuthCheck>
    <UploadPhotoForm />
    <a href="/login/username">
        <button class="btn btn-black hover:btn-warning mt-10">Atras</button>
    </a>
</AuthCheck>