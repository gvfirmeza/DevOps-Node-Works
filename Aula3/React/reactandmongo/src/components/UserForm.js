import React, { useState, useRef } from 'react';
import UserService from '../service/UserService';
import { Messages } from 'primereact/messages';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importar o tema do PrimeReact
import 'primereact/resources/primereact.min.css'; // Importar os estilos principais do PrimeReact
import 'primeicons/primeicons.css'; // Importar os ícones do PrimeReact

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const msgs = useRef(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const user = { name, email, password };
            const resp = await UserService.createUser(user);
            msgs.current.show({ severity: 'success', summary: 'Success', detail: 'Usuario criado com sucesso!'});
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            msgs.current.show({ severity: 'error', summary: 'Error', detail: 'Não foi possível criar usuário'});
        }
    };

    return (
        <div className='uk-container uk-margin-large-top'>
            <h2>Cadastro de Usuários</h2>
            <Messages ref={msgs} />

            <form onSubmit={handleSubmit}>
                <label>Nome:</label><br />
                <input type='text' required value={name} onChange={(e) => setName(e.target.value)} className='uk-input' /><br />
                <label>Email:</label><br />
                <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} className='uk-input' /><br />
                <label>Senha:</label><br />
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} className='uk-input' /><br />
                <button type='submit' className='uk-button uk-button-primary uk-margin-small-top'>Cadastrar</button>
            </form>
        </div>
    );
}

export default UserForm;