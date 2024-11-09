export class Tareas{

    //se crea el constructor que toma como parametro los atributos de las tareas
    constructor(titulo,descripcion,estado,dificultad,fechaCreacion){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.dificultad = dificultad;
        this.fechaCreacion = fechaCreacion;
    }

    //se crean los getters
    getTitulo(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }

    getEstado(){
        return this.estado;
    }

    getDificultad(){
        return this.dificultad;
    }

    getFechaCreacion(){
        return this.fechaCreacion;
    }
}

