import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                console.log('Tentativa de envio');
                setCategorias([
                    ...categorias,
                    nomeDaCategoria3
                ])
            }}>
                <label>
                    Nome da Categoria:
                <input
                    type="text"
                    value={nomeDaCategoria}
                    onChange={function(event) {
                        console.log('[nomeDaCatergoria]:', nomeDaCategoria);
                        setNomeDaCategoria(event.target.value);
                    }}
                />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
  