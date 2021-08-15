import React from 'react'
import "./card-list.style.css"
import {Card} from "../card/card.component";


export const CardList = ({users}) => (
    <div className="card-list">
        {users.map(user => (
            <Card key={user.id} users={user}/>
        ))}
    </div>
)





