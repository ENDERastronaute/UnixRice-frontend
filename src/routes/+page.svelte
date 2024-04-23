<script lang="ts">
	import Header from "$lib/components/header/header.svelte";
	import { IconArrowNarrowDown } from "@tabler/icons-svelte";
	import { onMount } from "svelte";
  	import Showcase from "$lib/components/showcase/showcase.svelte";
    import { PUBLIC_LOGIN_URL, PUBLIC_SIGNUP_URL } from "$env/static/public";

	export let data;

	let avatar = data.avatar;
	let userId = data.userId;

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu
	}

	onMount(() => {
		const main = document.querySelector(".main") as HTMLElement;
		const channelsSection = document.querySelector('.channels') as HTMLElement;
		const headerElements = document.querySelectorAll('header *') as NodeListOf<HTMLElement>;

		let channelsSectionVisited = false;

		window.addEventListener("resize", animateChannelsSection);
		window.addEventListener("scroll", animateChannelsSection);

		function animateChannelsSection() {
			const offset = 0.4

			const rect = channelsSection.getBoundingClientRect();
			const elementHeight = channelsSection.offsetHeight * (1 - offset);
			const elementTop = rect.top;
			const elementBottom = rect.bottom;
			const documentTop = document.documentElement.clientTop;
			
			const opacity = channelsSectionVisited ? 1 : Math.max(0, Math.min(1, (window.innerHeight - elementTop) / elementHeight - offset));

			channelsSectionVisited = opacity === 1 ? true : false;

			channelsSection.style.opacity = opacity.toString();

			headerElements.forEach(element => {
				element.style.color = elementTop - 30 <= documentTop && elementBottom - 30 >= documentTop ? 'black' : 'white';		
			})
		}
	})
</script>

<svelte:head>
	<title>Home Page</title>
	<meta name="description" content="UnixRice Home Page" />
</svelte:head>

<Header bind:showMenu bind:avatar userId={userId}></Header>
<menu class="menu" class:active={showMenu}>
	<button class="close" on:click={toggleMenu}>close</button>
	<a href={PUBLIC_LOGIN_URL}>login</a>
	<a href={PUBLIC_SIGNUP_URL}>sign up</a>

	{#if data.avatar}
		<img src={data.avatar} alt="userId">
	{/if}
</menu>
<main class="main">
	<section class="landing">
		<h1>Nix4All</h1>
		
		<span class="scroll-icon">
			<IconArrowNarrowDown />
		</span>
	</section>
	<section class="channels">
		<h2>Channels</h2>

		<div class="container">
			<article class="rices">
				<a href="/c/rices">Rices</a>
			</article>
			<article class="workspaces">
				<a href="/c/workspaces">Workspaces</a>
			</article>
		</div>
	</section>
	<section class="mostviewed">
		<div class="bg">
			<Showcase></Showcase>
		</div>
	</section>
	<section class="test"></section>
</main>

<style lang="scss">
	@import './style.scss';
</style>