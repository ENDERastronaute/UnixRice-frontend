
<script lang="ts">
    import { onMount } from "svelte";
    import Loading from "$lib/components/loading/loading.svelte";
    import PostCard from "$lib/components/postCard/postCard.svelte";
    import type Post from "$lib/models/post";

    let posts: Post[] = [];

    onMount(() => {
        const section = document.querySelector('.mostviewed') as HTMLElement;
        const div = document.querySelector('.showcase') as HTMLElement;

        const divWidth = div.offsetWidth;

        window.addEventListener('resize', scrollShowcase);
        window.addEventListener('scroll', scrollShowcase);

        function scrollShowcase() {
            const offset = 20;

            const rect = section.getBoundingClientRect();

            const maxScroll = section.offsetHeight - window.innerHeight;
            const currentScroll = window.scrollY - section.offsetTop;

            const scrollPercentage = currentScroll / maxScroll;
            
            div.style.transform = `translateX(${Math.min(0, Math.max(-scrollPercentage * (div.offsetWidth - window.innerWidth / 2) + 50, -(div.offsetWidth - window.innerWidth / 2) + 80))}px)`; // assez de maths pour ma scolarité rien qu'ici
        }
    })
</script>

<div class="showcase">
    {#if posts === undefined}
        <Loading text="Chargement des postes"></Loading>
    {:else if posts.length === 0}
        <article class="error">No posts avaible</article>
    {:else}
        {#each posts as post (post)}
            <PostCard post={post}></PostCard>
        {/each}
    {/if}
</div>

<style lang="scss">
    @import './style.scss';
</style>