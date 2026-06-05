import Nav from "./Nav";

function Inicio() {
    return (
        <>
        <Nav/>
        <section className="hero">
            <div className="hero-card">
            <div className="hero-copy">
                <p className="eyebrow">Elegancia bajo demanda</p>
                <h1>RentStyle</h1>
                <p>Alquila atuendos cuidadosamente seleccionados para cada ocasión. Diseño fresco, accesible y con estilo para tus eventos más especiales.</p>
            </div>
            <div className="hero-tag">
                <h3>Tu armario premium </h3>
                <p>Explora tus looks de gala, cóctel y eventos especiales con colores suaves y detalles cuidadosamente pensados.</p>
            </div>
            </div>
        </section>
        </>
    );
}
export default Inicio;