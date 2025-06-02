// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo-psg.png'
import axios from 'axios'

function CadastroJogadores() {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numeroCamisa, setNumeroCamisa] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarJogador = async () => {
        try {
            const response = await axios.post('https://revisao-backend-4gft.onrender.com/usuarios', {nome, sexo, idade, altura, peso, posicao, numeroCamisa})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setSexo('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setNumeroCamisa('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" className="logo" />
            <h2>Cadastro de Jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarJogador()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <select
                    id="sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                >
                    <option value="" disabled>Selecione o sexo</option>
                    <option value="FEMININO">Feminino</option>
                    <option value="MASCULINO">Masculino</option>
                </select>
                <input 
                    type="number"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    min="16"
                    max="60"
                    required
                />
                <input 
                    type="text"
                    id="altura"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="peso"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
                <select
                    id="posicao"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required
                >
                    <option value="" disabled>Selecione a posição</option>
                    <option value="ALA">Ala</option>
                    <option value="ATACANTE">Atacante</option> 
                    <option value="CENTROAVANTE">Centroavante</option> 
                    <option value="DEFENSOR">Defensor</option>
                    <option value="GOLEIRO">Goleiro</option> 
                    <option value="LATERAL">Lateral</option> 
                    <option value="MEIA">Meia</option> 
                    <option value="MEIO_ATACANTE">Meio Atacante</option> 
                    <option value="MEIO_CAMPO">Meio Campo</option> 
                    <option value="PONTA">Ponta</option> 
                    <option value="VOLANTE">Volante</option> 
                    <option value="ZAGUEIRO">Zagueiro</option> 
                </select>
                <input 
                    type="number"
                    id="numeroCamisa"
                    placeholder="Número da Camisa"
                    value={numeroCamisa}
                    onChange={(e) => setNumeroCamisa(e.target.value)}
                    min="1"
                    max="26"
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/usuarios')} className="link-jogadores">
                Ver jogadores cadastrados
            </button>

            <button onClick={() => navigate('/')} className='link-pagina-inicial'>
                Voltar
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default CadastroJogadores