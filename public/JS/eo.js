$(function(){
    var mesas= $(".mesa")
    var sala=$(".sala")
    var almacen=$(".almacen")

    mesas.draggable({
        revert: true,
        helper: 'clone',
        revertDuration: 0,
        start: function(ev,ui){
            ui.helper.attr("id",ui.helper.prevObject.attr("id").split("_")[1]);
        }
    });
    almacen.droppable({
        drop: function (ev, ui) {
            console.log("ee")
            var mesaArrastrada=$(ui)[0].helper;
            mesaArrastrada.prevObject[0].style.top="0px";
            mesaArrastrada.prevObject[0].style.left= "0px";
            this.append(mesaArrastrada.prevObject[0])
        }
    });

    sala.droppable({
        
        drop: function( event,ui){
            var mesaArrastrada=$(ui)[0].helper;
            var mesaId=ui.helper.attr("id");
            var mesa = new Mesa({
                "id": ui.helper.attr("id"),
                "x" : parseInt(mesaArrastrada[0].style.top), 
                "y" : parseInt(mesaArrastrada[0].style.left), 
                "ancho":parseInt(mesaArrastrada.prevObject[0].offsetWidth),
                "alto":parseInt(mesaArrastrada.prevObject[0].offsetHeight)
            });
            // console.log(mesa)

            var AllMesas=$(".sala .mesa");
            var choca=false;
            let i=0;
            while (i<AllMesas.length && choca == false) {
                if(AllMesas[i].id.split("_")[1] != mesaId){
                    choca = mesa.solapa($(AllMesas)[i])
                    i++;
                }
                else{
                    i++;
                }
            }

            if(!choca){
                this.append(mesaArrastrada.prevObject[0])
                mesaArrastrada.prevObject[0].style.top= mesa.x+"px";
                mesaArrastrada.prevObject[0].style.left= mesa.y+"px";
                console.log("x "+mesa.x)
                console.log("y "+mesa.y)
                console.log("anchp "+mesa.ancho)
                console.log("alto "+mesa.alto)

                $.ajax( "http://localhost:8000/api/mesa/"+mesa.id,  
                {
                    method:"PUT",
                    dataType:"json",
                    crossDomain: true,
                    data: {
                        "x" : parseInt(mesa.x), 
                        "y" : parseInt(mesa.y), 
                        "ancho":parseInt(mesa.ancho),
                        "alto":parseInt(mesa.alto)
                    },
                })
            }
            else{

            }
        }
    });


})