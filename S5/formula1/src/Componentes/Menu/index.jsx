import Header from "../Header";

import img_menu from '../../assets/images/img_menu.png';

const Menu = () => {
    return <>

        <Header/>

        <div class="container">
		<div class="row">
			<div class="col-md-8 mb-4">
				<h2>Pilotos</h2>
				<table class="table table-striped">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Nome</th>
				      <th scope="col">Idade</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>João</td>
				      <td>25</td>
				    </tr>
				    <tr>
				      <th scope="row">2</th>
				      <td>Maria</td>
				      <td>30</td>
				    </tr>
				    <tr>
				      <th scope="row">3</th>
				      <td>Pedro</td>
				      <td>20</td>
				    </tr>
				  </tbody>
				</table>
			</div>
			<div class="col-md-4 mb-4">
				<img src={img_menu} alt="Imagem" class="img-fluid rounded"/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12 mb-4">
				<h2>Formulário de Pesquisa</h2>
				<form action="#" method="get">
					<div class="form-group">
						<label for="pesquisa">Pesquisa:</label>
						<input type="text" class="form-control" id="pesquisa" name="pesquisa"/>
					</div>
					<button type="submit" class="btn btn-primary">Pesquisar</button>
				</form>
			</div>
		</div>
	</div>
    
    </>
}


export default Menu;