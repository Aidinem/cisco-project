import React from 'react';
import "./card.style.css"

export const Card = ({users}) => (
    <a href="https://google.com">
        <div className="card">
            <img alt="users" src={`https://robohash.org/${users.id}?set=set2&size=180x180`} />
            <h2>{users.name}</h2>
            <p>{users.email}</p>
        </div>
    </a>
)