import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { getGreater } from '../../helpers/getGreater';

export const Comparador = () => {

    const [ isClicked, setIsClicked ] = useState( false );
    const [ result, setResult ] = useState( "" );

    const [ form, handleInputChange ] = useForm({
        firstNumber: "",
        secondNumber: "0.5",
    });

    const { firstNumber, secondNumber } = form;

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if ( firstNumber.length > 0 && secondNumber.length > 0 ) {
            const greater = getGreater( parseFloat( firstNumber ), parseFloat( secondNumber ) )
            setResult( `El numero mayor es ${ greater }` );
            setIsClicked( true );
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <form className="form-inline" onSubmit={ handleSubmit }>
                    <div className="alert alert-warning">
                       Primer Numero
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only"> Primer Numero </label>
                        <input 
                            type="text"
                            name="firstNumber"
                            onChange={ handleInputChange }
                            value={ firstNumber }
                        />
                    </div>
                    
                    <div className="alert alert-warning">
                        Segundo Numero
                    </div>

                    <div className="form-group mx-sm-2 mb-2">
                        <label className="sr-only"> Primer Numero </label>
                        <input 
                            type="text"
                            name="secondNumber"
                            onChange={ handleInputChange }
                            value={ secondNumber }
                        />
                    </div>

                    <button className="btn btn-success" type="submit"> Cual es mayor? </button>
                </form>
            </div>

            {
                isClicked
                &&
                <div className="d-flex justify-content-center">
                    <div className="alert alert-success"> { result } </div>
                </div>
            }
        </>
    );

};
