import React, { useState } from "react";

function Index() {
    return (
        <main>
        <section class="banner"> 
            <div class="banner-text">
                <h2>Bienvenido a la Biblioteca Metropolitana </h2>
                <p>Un espacio para el aprendizaje, la cultura y el conocimiento.</p> 
            </div>
        </section>

        <section class="servicios">
        
                <div class="libros">
                    <img src="libros.JPG" alt="Icono de servicio" class="libros" width="85%" />
                    <h3>Préstamo de libros</h3>
                    <p>Consulta nuestros libros disponibles.</p>
                    <button type="button" class="button-images">  LIBROS  </button>
                </div>
                <div class="service-card">
                    <img src="cubiculos.JPG" alt="Icono de servicio" width="85%" />
                    <h3>Cubiculos </h3>
                    <p>Accede a nuestros cubiculos, es el espacio ideal para tener una junta.</p>
                    <button type="button" class="button-images">  CUBICULOS  </button>
                </div>
                <div class="service-card">
                    <img src="computadoras.JPG" alt="Icono de servicio" width="85%" />
                    <h3>Computadoras</h3>
                    <p>Accede al prestamo de una de nuestras computadoras.</p>
                    <button type="button" class="button-images">  COMPUTADORAS  </button>


            </div>
        </section>

        <section class="about">
            <div class="container">
                <h2>Sobre nosotros</h2>
                <p>La Biblioteca Metropolitana es un espacio  gratuito que ofrece la Universidad Tecnologica Metropolitana </p>
                <p>Contamos con una amplia colección de libros, revistas, periódicos, recursos audiovisuales y materiales digitales.</p>
                <p>Te invitamos a visitarnos y descubrir todo lo que tenemos para ofrecerte.</p>
            </div>
        </section>
    </main>  
    );
}

export default Index;
