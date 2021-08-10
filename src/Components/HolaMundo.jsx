import React from 'react'

const HolaMundo = () => {

    const hello = <span>Hola Mundo de un String</span>;
    const isTrue = true;

    return(
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso práctico de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="react" />
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
            {isTrue && <h6>Soy verdadero "&&"</h6>}
        </div>
    );
}

export default HolaMundo