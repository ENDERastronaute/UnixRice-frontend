
<script lang="ts">
    import type Post from "$lib/models/post";

    export let post: Post;
</script>

<article class="post">
    <div class="images">
        {#each post.content.images as image}
             <div class="image" style={`background-image: url(${image});`}></div>
        {/each}
    </div>
    <div class="body">
        <h3>{post.content.title}</h3>
        {#if post.content.paragraph}
            <p>{post.content.paragraph}</p>
        {/if}
    </div>
</article>

<style lang="scss">
    @import './style.scss';
</style>