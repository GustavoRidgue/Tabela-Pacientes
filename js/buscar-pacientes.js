var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
  	var btnAjax = document.querySelector("#erro-ajax");

  	if (xhr.status == 200){
  		btnAjax.classList.add("invisivel");
  		console.log(xhr.responseText);
	  	var resposta = xhr.responseText;
	  	var pacientes = JSON.parse(resposta);

	  	pacientes.forEach(function(paciente){
	  		adicionaPaciente(paciente);
	  	});
  	} else {
  		console.log(xhr.status);
  		console.log(xhr.responseText);
  		btnAjax.classList.remove("invisivel");
  	}

  	
  });
  xhr.send();

});
