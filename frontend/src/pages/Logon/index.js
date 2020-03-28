import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [id,setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();//Por padrão quando se envia um formulário a página é recadastrada.  
        try{
            const response = await api.post('/sessions', {id});
            //alert(`Nome da ONG: ${response.data.name}`);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert("ONG não identificada");
        }
    }
    
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    ></input>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}