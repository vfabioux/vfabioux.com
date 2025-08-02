<div class="card">
	<img src="photo.png" alt="Vincent Fabioux" />
	<h1>Vincent <b>Fabioux</b></h1>
	<h2>Ingénieur logiciel confirmé</h2>
	<p>
		Ce site est en cours de rénovation et n'est pas fini. Beaucoup de sections sont incomplètes et il n'est pas
		responsive du tout, surtout sur mobile.
	</p>
</div>
<ul class="links">
	<li>
		<a href="https://fr.ivalua.com/" target="_blank">
			<img src="ivalua.png" alt="Polytech" />Employé chez<b>Ivalua (France)</b>depuis 2021</a
		>
	</li>
	<li>
		<a href="https://www.polytech.universite-paris-saclay.fr/" target="_blank"
			><img src="polytech.png" alt="Polytech" />Diplômé de<b>Polytech Paris-Sud</b>depuis 2018</a
		>
	</li>
	<li><a href="/#contact">&nbsp;<b>Me contacter</b>&nbsp;</a></li>
</ul>
<div class="scroll"><span>Défilez pour plus d'informations</span><span>↓</span></div>

<style>
	@keyframes ScrollIconMove {
		0%,
		100% {
			top: 0;
		}
		50% {
			top: 10px;
		}
	}

	h1 {
		font-size: 3rem;
		font-weight: normal;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 1.5rem;
		margin: 1rem 0 2rem 0;
	}

	div.card {
		background-color: #191528;
		box-shadow: 0 0 1rem black;
		height: 24rem;
		padding: 2rem;

		img {
			float: left;
			height: 20rem;
			margin-right: 2rem;
			width: 20rem;
		}
	}

	ul.links {
		display: flex;
		gap: 3rem;
		justify-content: stretch;
		list-style-type: none;
		margin: 4rem 0;
		padding: 0;

		li {
			flex: 1 1 auto;
		}

		img {
			float: left;
			height: 4rem;
			margin: 0.5rem;
			width: 4rem;
		}

		a {
			background-color: #191528;
			box-shadow: 0 0 1rem black;
			color: unset;
			display: inline-block;
			padding: 1rem;
			text-align: center;
			text-decoration: none;
			transition:
				background-color 0.2s,
				color 0.2s;
			width: 100%;
		}

		a:hover {
			background-color: white;
			color: black;
		}

		b {
			display: block;
			font-size: 1.2rem;
			margin: 0.5rem 0;
		}
	}

	div.scroll {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-top: 8rem;
		width: 100%;

		span:last-child {
			animation: ScrollIconMove 1s ease infinite;
			display: block;
			font-size: 2rem;
			position: relative;
		}
	}
</style>
