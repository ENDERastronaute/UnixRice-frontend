<script>
	import Header from "./components/header/header.svelte";
	import { IconArrowNarrowDown } from "@tabler/icons-svelte";
</script>

<svelte:head>
	<title>Home Page</title>
	<meta name="description" content="UnixRice Home Page" />
</svelte:head>

<Header></Header>
<main>
	<section class="landing">
		<h1>Nix4All</h1>
		
		<span class="scroll-icon">
			<IconArrowNarrowDown />
		</span>
	</section>
	<section class="channels">
		
	</section>
</main>

<style lang="scss">
	@import 'style.scss';
</style>