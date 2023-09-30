<script lang="ts">
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<div class="items-center text-center p-5 bg-opacity-0 outline">
    <ul class="steps">
        <li class="step step-primary">Registrarse</li>
        <li class="step"
            class:step-primary={$page.route.id?.match(/username|tuki-foto/g)}>
            Username
        </li>
        <li class="step"
            class:step-primary={$page.route.id?.match(/tuki-foto/g)}>
            Sube tu foto
        </li>
    </ul>
</div>

<AnimatedRoute>
    <main>
        <div class="flex flex-col items-center justify-center min-h-screen">
            <section class="card w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/5 min-h-[50rem] bg-accent text-neutral-content mx-auto items-center text-center p-5">
                <div class="card-body flex items-center justify-center">
                    <slot />
                </div>
            </section>

            <div class="items-center text-center p-5">
                <button class="btn btn-secondary"><a href="/login">Volver al Inicio</a></button>
            </div>
        </div>
    </main>
</AnimatedRoute>


