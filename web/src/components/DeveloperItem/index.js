import React from 'react'

import './styles.css'

function DevItem({ developer }) {
    return (
        <li className="dev-item">
            <header>
                <img src={developer.avatar_url} alt={developer.name} />
                <div className="user-info">
                    <strong>{developer.name || developer.github_username}</strong>
                    <span>{developer.techs.join(', ')}</span>
                </div>
            </header>
            <p>{developer.bio}</p>
            <a href={`https://github.com/${developer.github_username}`}>Acessar perfil no GitHub</a>
        </li>
    )
}

export default DevItem