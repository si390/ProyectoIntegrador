let canciones;
canciones = obtenerCancionesEnBD();
canciones = filtrarResulados(canciones);
canciones = ordenarResulados(canciones);
mostrarResultados(canciones);