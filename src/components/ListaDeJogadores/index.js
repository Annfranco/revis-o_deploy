// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDeJogadores() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const carregarJogadores = async () => {
            try {
                const response = await axios.get('https://revisao-backend-4gft.onrender.com/usuarios')
                setUsuarios(response.data)
            } catch (error) {
                alert('Erro ao buscar usuários: ', error)
                setUsuarios([])
            }
        }
        carregarJogadores()
    }, [])

    return (
        <ul id="listaJogadores" className="lista-usuarios">
            {usuarios.length === 0 ? (
                <li>Nenhum jogador encontrado.</li>
            ) : (
                usuarios.map( usuario => (
                    <li key={usuario.id}>
                        <strong>Nome: </strong> {usuario.nome}<br />
                        <strong>Sexo: </strong> {usuario.sexo}<br />
                        <strong>Idade: </strong> {usuario.idade}<br />           
                        <strong>Altura: </strong> {usuario.altura}<br />           
                        <strong>Peso: </strong> {usuario.peso}<br />           
                        <strong>Posição: </strong> {usuario.posicao}<br />           
                        <strong>Número da Camisa: </strong> {usuario.numeroCamisa}           
                    </li>
                ))
            )}
        </ul>
    )
    
}

export default ListaDeJogadores