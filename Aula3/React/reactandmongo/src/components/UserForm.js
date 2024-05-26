import React, { useState } from 'react';
import UserService from '../service/UserService';
import UIkit from 'uikit'; // Import UIKit

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, password };
        try {
            const resp = await UserService.createUser(user);
            setMessages("Usuario criado com sucesso!");
            UIkit.notification({message: 'Usuario criado com sucesso!', status: 'success'});
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            UIkit.notification({message: 'Erro ao criar usuário.', status: 'danger'});
        }
    };

    return (
        <div className='uk-container uk-margin-large-top'>
            <h2>Cadastro de Usuários</h2>

            <form onSubmit={handleSubmit}>
                <label>Nome:</label><br />
                <input type='text' required value={name} onChange={(e) => setName(e.target.value)} className='uk-input'/><br />
                <label>Email:</label><br />
                <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} className='uk-input'/><br />
                <label>Senha:</label><br />
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} className='uk-input'/><br />
                <button type='submit' className='uk-button uk-button-primary uk-margin-small-top'>Cadastrar</button>
            </form>
        </div>
    );
}

export default UserForm;
