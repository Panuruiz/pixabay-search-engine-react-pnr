import React, {useState} from 'react'
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //validar
        if(termino.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //enviar el término de búsqueda hacia el componente principal
        guardarBusqueda(termino);


        
    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-cotrol-lg"
                        placeholder="Search for an Image, f. ex.: coffee"
                        onChange={ e => guardarTermino(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Introduce a search term" /> : null }
        </form>
     );
}
 
export default Formulario;