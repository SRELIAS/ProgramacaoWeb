import Header from "../Header";

const Home = () => {
    return <>
    
    <Header/>

    <div class="container">


		{/* <!-- Parágrafo introdutório --> */}
		<p>A Formula 1 é a mais alta categoria de automobilismo do mundo. Criada em 1950, a competição é composta por equipes que projetam e constroem seus próprios carros, disputando corridas ao redor do mundo.</p>

		{/* <!-- Título da seção --> */}
		<h2 class="mt-5">Pilotos</h2>

		{/* <!-- Lista de pilotos --> */}
		<ul>
			<li>Lewis Hamilton</li>
			<li>Max Verstappen</li>
			<li>Sergio Perez</li>
			<li>Valtteri Bottas</li>
			<li>Charles Leclerc</li>
		</ul>

		{/* <!-- Título da seção --> */}
		<h2 class="mt-5">Equipes</h2>

		{/* <!-- Lista de equipes --> */}
		<ul>
			<li>Mercedes</li>
			<li>Red Bull Racing</li>
			<li>McLaren</li>
			<li>Ferrari</li>
			<li>Aston Martin</li>
		</ul>

		{/* <!-- Link externo --> */}
		<p class="mt-5">Saiba mais sobre a <a href="https://www.formula1.com/">Formula 1</a>.</p>
	</div>

    </>
}

export default Home;