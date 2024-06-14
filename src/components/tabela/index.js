export function ListagemDeMotos() {
    return (
        <div id="Listagem-Motos" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
        }} >
            <p style={{
                fontWeight: 600,
                fontSize: "25px",
                color: "#CAC9CD"
            }}> Tabela de Motos</p>
            <div>
                <input />
                <button style={{
                    padding: "11px",
                    borderRadius: "5px"
                }}>

                    <span>+</span>   NOVO REGISTRO

                </button>
            </div>
        </div>
    )
}