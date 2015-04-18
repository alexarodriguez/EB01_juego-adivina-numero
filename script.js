window.onload = function ()
{
	var rangoMaximo=Math.floor(Math.random()*200+50);
	var adivinaNumero=Math.floor(Math.random()*rangoMaximo+1);
	var maxIntentos=20;
	var intentosRealizados=1;


	var adivina=function()
	{
		console.log(""+adivinaNumero);
		//creo la funcion nom_div para imprimir
		function nom_div(div){return document.getElementById(div)}


		nom_div("pista").innerHTML="PISTA";
		nom_div("rangoAdivina").innerHTML="El número está entre 1 y "+rangoMaximo;
		nom_div("intentos").innerHTML="INTENTO "+intentosRealizados+" DE "+maxIntentos;
		nom_div("numero").value="";
		nom_div("numero").focus()};
		adivina();

		nom_div("reinicia").addEventListener("click",function(event){adivina()});
		var comprueba= function(){

			if(numero>0 && numero<200)
                    {
                        intentosRealizados+=1;
                        
                        if(numero>adivinaNumero)
                        {
                           //cuando el numero es mayor
                           nom_div("pista")=" "+numero+" - El numero que buscas es inferior";
                          
                        }else if(numero<adivinaNumero){
                            // cuando e l numero es inferior
                           
                           nom_div("pista")="<br>"+numero+" - El numero que buscas es superior";
                                                    }else{
                            // respuesta correcta
                            nom_div("pista")="<br><span class='acertado'>"+numero+" - HAS ACERTADO!!</span>";
                        }
                        // vaciamos el valor del numero
                        nom_div("numero").value="";
                    	if(numero>201)
                    	{
                        nom_div("pista")="<br><span class='error'>"+numero+" - Tiene que ser un valor numerico comprendido entre 1 y 200</span>";
                     }
                    }else{nom_div("pista").innerHTML="El número debe estar entre 1 y "+rangoMaximo;}

		}
		nom_div("form").addEventListener("submit",function(event){
			comprueba();
			event.preventDefault();
			return false});

        

	}

