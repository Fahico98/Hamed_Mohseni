function BST() {
    this.raiz = null;
}

BST.prototype.insertar = function (cedula) {
    var raiz = this.raiz;

    if (!raiz) {
        this.raiz = new Nodo(cedula);
        return;
    }

    var nodoActual = raiz;
    var nuevoNodo = new Nodo(cedula);

    while (nodoActual) {
        if (cedula < nodoActual.cedula) {
            if (!nodoActual.izquierda) {
                nodoActual.izquierda = nuevoNodo;
                break;
            }
            else {
                nodoActual = nodoActual.izquierda;
            }
        }
        else {
            if (!nodoActual.derecha) {
                nodoActual.derecha = nuevoNodo;
                break;
            }
            else {
                nodoActual = nodoActual.derecha;
            }
        }
    }

}

BST.prototype.buscar = function(cedula) {
    if (this.raiz){
        return buscarRecursivo(this.raiz, cedula);
    } else {
        return false;
    }
}

function buscarRecursivo(nodo, cedula){
    if(nodo.cedula == cedula){
        return true;
    } else {
        if (nodo.izquierda && cedula < nodo.cedula){
            return buscarRecursivo(nodo.izquierda, cedula);
        } else if (nodo.derecha && cedula > nodo.cedula){
            return buscarRecursivo(nodo.derecha, cedula);
        } else {
            return false;
        }
    }
}
