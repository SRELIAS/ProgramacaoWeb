import Header from "../Header";

const Formulario = () => {
    return <>
    
    <Header/>

    <div className="container">
		<h3 className="text-center my-5">Formulário de cadastro de pilotos</h3>
		<form action="processar_formulario.php" method="post">
			{/* <!-- Campo de entrada de texto para o nome do piloto --> */}
			<div className="form-group">
				<label for="nome">Nome:</label>
				<input type="text" className="form-control" id="nome" name="nome" required/>
			</div>

			{/* <!-- Campo de entrada de texto para o número do carro do piloto --> */}
			<div className="form-group">
				<label for="numero_carro">Número do carro:</label>
				<input type="text" className="form-control" id="numero_carro" name="numero_carro" required/>
			</div>

			{/* <!-- Caixa de seleção para selecionar a equipe do piloto --> */}
			<div className="form-group">
				<label for="equipe">Equipe:</label>
				<select className="form-control" id="equipe" name="equipe">
					<option value="Mercedes">Mercedes</option>
					<option value="Red Bull Racing">Red Bull Racing</option>
					<option value="McLaren">McLaren</option>
					<option value="Ferrari">Ferrari</option>
					<option value="Aston Martin">Aston Martin</option>
				</select>
			</div>

			{/* <!-- Botões de opção para selecionar a posição do piloto --> */}
			<div className="form-group">
				<label>Posição:</label>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="posicao" id="primeiro" value="primeiro"/>
					<label className="form-check-label" for="primeiro">Primeiro</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="posicao" id="segundo" value="segundo"/>
					<label className="form-check-label" for="segundo">Segundo</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="posicao" id="terceiro" value="terceiro"/>
					<label className="form-check-label" for="terceiro">Terceiro</label>
				</div>
			</div>

			{/* <!-- Campo de entrada de texto para a data de nascimento do piloto --> */}
			<div className="form-group">
				<label for="data_nascimento">Data de nascimento:</label>
				<input type="date" className="form-control" id="data_nascimento" name="data_nascimento" required/>
			</div>

			{/* <!-- Checkbox para concordar com os termos de uso --> */}
			<div className="form-check">
				<input className="form-check-input" type="checkbox" id="termos_uso" name="termos_uso" required/>
				<label className="form-check-label" for="termos_us">Aceito os termos</label>
            </div>

            <div className="form-check">
                <button className="btn btn-success bt_enviar">Enviar</button>
            </div>

        </form>
    </div>


    </>
}

export default Formulario;