
<script lang="ts">
    import type Post from "$lib/models/post";
    import { onMount } from "svelte";

    export let post: Post;

    let index = 0
    let image: string = post.content.images[index];
</script>

<article class="post">
    <div class="images">
        {#if image}
            <img class="image" src={image} alt="th" />
        {/if}
    </div>
    <div class="body">
        <div class="text">
            <h3>{post.content.title}</h3>
            {#if post.content.paragraph}
                <p>{post.content.paragraph}</p>
            {/if}
        </div>

        <footer>
            <div class="user"></div>
        </footer>
    </div>
</article>

<style lang="scss">
    @import './style.scss';
</style>