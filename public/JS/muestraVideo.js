function accionPlay()
{
  if(!medio.paused && !medio.ended) 
  {
    medio.pause();
    play.value='\u25BA'; //\u25BA
    
  }
  else
  {
    medio.play();
    play.value='||';
  }
}
function accionReiniciar()
{
    medio.load();  
    play.value='\u25BA';
}
function accionRetrasar()
{
    if (medio.currentTime-5<0){
        medio.currentTime=0;
    }
    else{
        medio.currentTime -= 5;
    }
    
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
    if (medio.currentTime+5>medio.duration){
        medio.currentTime=medio.duration;
    }
    else{
        medio.currentTime += 5;
    }
  //Contemplar que no existen valores mayores a medio.duration  
}
function accionSilenciar()
{
    if (this.value=="silenciar"){
        this.value="Activar sonido";
        medio.muted= true;
    }
    else{
        this.value="silenciar";
        medio.muted=false;
    }
    
    
}
function accionMasVolumen()
{
  //Contemplar que el valor máximo de volumen es 1
    if (medio.volume<1){
        medio.volume += 0.1;
    }
    
}
function accionMenosVolumen()
{
    if (medio.volume>=0.1){
        medio.volume -= 0.1;
    }
  //Contemplar que el valor mínimo de volumen es 0
}

function iniciar() 
{
  
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  reiniciar=document.getElementById('reiniciar');
  retrasar=document.getElementById('retrasar');
  adelantar=document.getElementById('adelantar');
  silenciar=document.getElementById('silenciar');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}
$(function(){
    var ayuda=$(".ayuda");
    ayuda.click(function(ev){
        ev.preventDefault();
        var plantilla=`
        <div>
            <video id="medio" width="720" height="400">
                <source src="Videos/Explicacion_Reservas.mp4">
                {# <source src="Videos/Explicacion_Reservas.ogv"> #}
            </video>
      
            <nav>
                <input type="button" class="btn btn-primary" id="reiniciar" value="Reiniciar">
                <input type="button" class="btn btn-primary" id="retrasar" value="&laquo;">
                <input type="button" class="btn btn-primary" id="play" value="&#9658;">
                <input type="button" class="btn btn-primary" id="adelantar" value="&raquo;">
                <input type="button" class="btn btn-primary" id="silenciar" value="Silenciar">
                <label>Volumen</label>
                <input type="button" class="btn btn-primary" id="menosVolumen" value="-">
                <input type="button" class="btn btn-primary" id="masVolumen" value="+">
            </nav>
        </div>`;

            jqPlantilla=$(plantilla);
            
            jqPlantilla.dialog({
                title: "¿Cómo hacer una reserva?",
                height: 600,
                width: 800,
                modal: true,
                buttons: {
                    
                    Cancel: function() {
                    jqPlantilla.dialog( "close" );
                    },
                },
                close: function() {
                    jqPlantilla.dialog( "close" );
                },
            })
            iniciar();
    })
})
// window.addEventListener('load', iniciar, false);