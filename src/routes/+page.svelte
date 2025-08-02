<script lang="ts">
	import { page } from '$app/state';
	import MainContact from '$lib/components/MainContact.svelte';
	import MainHero from '$lib/components/MainHero.svelte';
	import MainAbout from '$lib/components/MainAbout.svelte';
	import MainSkills from '$lib/components/MainSkills.svelte';
	import type { Component } from 'svelte';
	import MainExperience from '$lib/components/MainExperience.svelte';
	import { pushState, replaceState } from '$app/navigation';

	const sections: { Component: Component; hash: string; title: string }[] = [
		{
			Component: MainHero,
			hash: '',
			title: 'Vincent Fabioux'
		},
		{
			Component: MainAbout,
			hash: '#about',
			title: 'À propos'
		},
		{
			Component: MainSkills,
			hash: '#skill',
			title: 'Compétences'
		},
		{
			Component: MainExperience,
			hash: '#experience',
			title: 'Expérience'
		},
		{
			Component: MainContact,
			hash: '#contact',
			title: 'Contact'
		}
	];

	let currentSectionIndex = $state(0);
	let wantedSectionIndex = $state(0);

	let mainNode: HTMLElement;

	// On URL hash update, update the wanted section
	$effect(() => {
		const sectionIndex = sections.findIndex((section) => section.hash === page.url.hash);
		if (sectionIndex !== -1) {
			wantedSectionIndex = sectionIndex;
		} else {
			replaceState('/', {});
		}
	});

	// When we want a section but we are not on it yet, scroll to it
	$effect(() => {
		if (wantedSectionIndex !== currentSectionIndex) {
			mainNode.scroll({
				top: mainNode.clientHeight / 2 + mainNode.clientHeight * wantedSectionIndex,
				behavior: 'smooth'
			});
			currentSectionIndex = wantedSectionIndex;
		}
	});

	// When manually scrolling, update the hash
	$effect(() => {
		function onScroll() {
			const newSectionIndex = Math.trunc(mainNode.scrollTop / mainNode.clientHeight);
			currentSectionIndex = newSectionIndex;
			wantedSectionIndex = newSectionIndex;
			replaceState('/' + sections[newSectionIndex].hash, {});
		}

		mainNode.addEventListener('scrollend', onScroll);
		return () => mainNode.removeEventListener('scrollend', onScroll);
	});
</script>

<header>
	<nav>
		<ul>
			{#each sections as section, sectionIndex}
				<li>
					<a href={'/' + section.hash} class={wantedSectionIndex === sectionIndex ? 'selected' : undefined}
						>{section.title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
<main bind:this={mainNode}>
	{#each sections as section}
		<section><div><section.Component /></div></section>
	{/each}
</main>

<style>
	/**
	191528
	3c162f
	5c162e
	7c162e
	110e1b
	*/

	:global {
		/* Good Open Source font */
		@font-face {
			font-family: 'Lato';
			src: url('/Lato-Regular.ttf');
		}
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100vh;
		margin: 0;
		overflow: hidden;
		width: 100vw;
	}

	:global(body) {
		color: white;
		font-family: 'Lato';
	}

	:global(body > div) {
		background: linear-gradient(300deg, #0f0606 0%, #650000 100%);
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}

	header {
		background-color: #191528;
		box-shadow: 0 0 1rem black;
		flex: 0 0 auto;
		width: 100vw;

		& > nav {
			margin: auto;
			max-width: 1000px;

			& > ul {
				display: flex;
				justify-content: space-between;
				list-style-type: none;
				margin: 0;
				padding: 0;
				width: 100%;

				& > li {
					& > a {
						color: unset;
						display: inline-block;
						font-size: 1.5rem;
						padding: 0.5rem 1rem;
						margin: 0.5rem;
						text-decoration: none;
						text-align: center;
						transition: background-color 0.5s;

						&.selected {
							text-decoration: underline;
						}

						&:hover {
							background-color: #3c162f;
						}
					}
				}
			}
		}
	}

	main {
		box-sizing: content-box;
		flex: 1 1 auto;
		overflow-x: hidden;
		overflow-y: scroll;
		scrollbar-width: none;
		scroll-snap-type: y mandatory;
		width: 100vw;
	}

	section {
		align-items: center;
		display: flex;
		justify-content: center;
		height: 100%;
		scroll-snap-align: center;
		width: 100vw;

		& > div {
			flex: 0 1 1000px;
			padding: 1rem;
		}
	}
</style>
