function buscarTaller(busqueda) {
    // la idea es que busque uno de los 3 objetos creados a mano: ungs, terrazas, cancha sanmi.
    busqueda = busqueda.toLowerCase();

    const resultado = talleres_fisicos.filter(taller => {
        return taller.tags.some(tag => {
            return tag.toLowerCase().includes(busqueda);
        });
    });

    return resultado;   
}

