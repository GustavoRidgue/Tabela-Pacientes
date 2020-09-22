titulo.addEventListener('click', function() {
	alert('Você acabou de clicar no titulo da página');
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
		exibeMensagensDeErro(erros);
		return;
	}

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

function adicionaPaciente(paciente) {
	var pacienteTr = montarTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}


function exibeErros(erros) {
	var ul = document.querySelector("#msgsErro");
	ul.innerHTML = "";
	//pra cada item do array faz isso
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function pacienteForm(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;	
}

function montarTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add('paciente'); 

	//appendChil coloca algo como filho de algo
	pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
	pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
	pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
	pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
	pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

	return pacienteTr;
}

function montarTd(dado, classe) {
	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validarPaciente(paciente) {
	var erros = [];

	if (paciente.nome == '') {
		erros.push("Valor de nome não pode ser nulo");
	}
	if (!validarPeso(paciente.peso)) {
		erros.push("Peso inválido");
	}
	if (!validarAltura(paciente.altura)) {
		erros.push("Altura inválido");
	}

	if (paciente.peso.length == 0) {
		erros.push("Valor de peso não pode ser nulo");
	}

	if (paciente.altura.length == 0) {
		erros.push("Valor de altura não pode ser nulo");
	}

	if (paciente.gordura.length == 0) {
		erros.push("Valor de gordura não pode ser nulo");
	}


	return erros;
}