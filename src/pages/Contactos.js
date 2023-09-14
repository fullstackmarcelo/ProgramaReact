import React from 'react';
import '../styles/componentes/pages/contactos.css';

const Contactos = (props) => {
    return (
        <main class='holder contacto'>
            <div>
                <h2>CONTACTO</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/> </p>

                </form>
            </div>
            <div class="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse por los siguientes medios:</p>
                <ul>
                    <li>Telefono: 54 9 3544 51-4133</li>
                    <li>e-mail: raizserrana@gmail.com</li>
                    <li>Oficinas: Velez Sarsfield esq Independencia. Local 2. </li>
                </ul>
            </div>

        </main>

    );

}

export default Contactos