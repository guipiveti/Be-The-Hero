import React, { useEffect, useState } from 'react';//UseEffect 
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get(
            'profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    async function handleIncidentDelete(id) {

        try {
            const response = await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident=>incident.id!==id));
        } catch (err) {
            alert("Erro ao deletar caso.");
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novos casos</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() =>
                            handleIncidentDelete(incident.id)
                        } type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))
                }

            </ul>

        </div>
    );
}