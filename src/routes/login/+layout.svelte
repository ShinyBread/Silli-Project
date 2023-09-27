<script lang="ts">
    import {page} from "$app/stores";
</script>

<div class="items-center text-center ">
    <ul class="steps">
        <a href="/login" class="step step-primary">Registrarse</a>
        <a 
        href="/login/username" 
        class="step"
        class:step-primary={$page.route.id?.match(/username|tuki-foto/g)}>
        Username
    </a>
        <a href="/login/tuki-foto" class="step"
        class:step-primary={$page.route.id?.match(/tuki-foto/g)}
        >Sube tu foto
    </a>
    </ul>
</div>


<section class="card w-96 bg-accent text-neutral-content mx-auto">
    <div class="card-body items-center text-center">
        <slot></slot>
    </div>
</section>

<div class="items-center text-center">
    <button class="btn btn-secondary"><a href="/.">Volver al Inicio</a></button>
</div>
