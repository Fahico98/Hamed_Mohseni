
$(document).ready(() => {
    
    $('#frmIniciarSesionUsuario').submit((event) => {
        var form = this;
        event.preventDefault();

        let cedula = $('#cedula').val();
        let contrasegnia = $('#contrasegnia').val();

        $.ajax({
            url: 'backend/obtener_usuarios.php'
        }).done((data) => {
            let personas = JSON.parse(data);

            let arbol = new BST();

            $.each(personas, (index, value) => { 
                arbol.insertar(parseInt(value.cedula));
            });

            if (arbol.buscar(cedula)){
                let encontrado;

                for(let persona of personas){
                    if (persona.contrasegnia == contrasegnia){
                        encontrado = true;
                        break;
                    }
                }

                if(encontrado){
                    setCookie('cedula', cedula);
                    setCookie('inicio', true);
                    window.location.href = "compra.php";
                } else {
                    alert('Sus datos de acceso no son correctos.');
                }
            } else {
                alert('Sus credenciales no son correctas.');
            }
        }).fail((data) => {
            console.log('fail', data);
        });
    });

    $('#frmInicioSesionAdmin').submit((event) => {
        var form = this;
        event.preventDefault();

        let cedula = $('#cedula').val();
        let contrasegnia = $('#contrasegnia').val();

        $.ajax({
            url: 'backend/obtener_usuarios_admin.php'
        }).done((data) => {
            let personas = JSON.parse(data);

            let arbol = new BST();

            $.each(personas, (index, value) => { 
                arbol.insertar(parseInt(value.cedula));
            });

            if (arbol.buscar(cedula)){
                let encontrado;

                for(let persona of personas){
                    if (persona.contrasegnia == contrasegnia){
                        encontrado = true;
                        break;
                    }
                }

                if(encontrado){
                    setCookie('cedula', cedula);
                    setCookie('inicio', true);
                    window.location.href = "plataforma-admin.php";
                } else {
                    alert('Sus datos de acceso no son correctos.');
                }
            } else {
                alert('Sus credenciales no son correctas.');
            }
        }).fail((data) => {
            console.log('fail', data);
        });
    });
});

function inorder(node){
    if(node){
       inorder(node.izquierda);
       console.log(node.cedula);
       inorder(node.derecha);
    }
 }
