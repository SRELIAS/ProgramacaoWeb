import Header from "../Header";

const Tabelas = () => {
    return <>
    
    <Header/>

    <div class="container">
		<h3 class="text-center my-5">Corridas</h3>

		{/* <!-- Tabela 1 --> */}
		<table class="table table-striped table-bordered" id="tabela1">
			<thead class="thead-dark">
				<tr>
					<th>Posição</th>
					<th>Piloto</th>
					<th>Equipe</th>
					<th>Pontos</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Lewis Hamilton</td>
					<td>Mercedes</td>
					<td>385</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Max Verstappen</td>
					<td>Red Bull Racing</td>
					<td>308</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Valtteri Bottas</td>
					<td>Mercedes</td>
					<td>249</td>
				</tr>
			</tbody>
		</table>

		{/* <!-- Tabela 2 --> */}
		<table class="table table-hover table-bordered" id="tabela2">
			<thead class="thead-dark">
				<tr>
					<th>Posição</th>
					<th>Equipe</th>
					<th>Vitórias</th>
					<th>Pontos</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Mercedes</td>
					<td>15</td>
					<td>634</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Red Bull Racing</td>
					<td>11</td>
					<td>538</td>
				</tr>
				<tr>
					<td>3</td>
					<td>McLaren</td>
					<td>1</td>
					<td>202</td>
				</tr>
			</tbody>
		</table>

		{/* <!-- Tabela 3 --> */}
		<table class="table table-bordered" id="tabela3">
			<thead class="thead-dark">
				<tr>
					<th>Posição</th>
					<th>País</th>
					<th>Piloto</th>
					<th>Equipe</th>
					<th>Pontos</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Reino Unido</td>
					<td>Lewis Hamilton</td>
					<td>Mercedes</td>
					<td>385</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Holanda</td>
					<td>Max Verstappen</td>
					<td>Red Bull Racing</td>
					<td>308</td>
				</tr>
				<tr>
					<td>3</td>
                    <td>Irlanda</td>
					<td>Max Verstappen</td>
					<td>Red Bull Racing</td>
					<td>308</td>
                </tr>
            </tbody>
        </table>
    </div>

    </>
}

export default Tabelas;