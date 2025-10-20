import { User } from "../types";
import "./UserCard.css"

interface UserCardPros{
    userCard : User;
}

const UserCard = (props : UserCardPros)=>{
    return (
        <div className="user-card">
            <h1>
                {props.userCard.name}
            </h1>
            <p>
                {props.userCard.age}
            </p>
            <p className={props.userCard.isOnline ? "user-card--online" : "user-card--offline"}>
                {props.userCard.isOnline ? "En ligne" : "Hors ligne"}
            </p>
        </div>
    );
}

export default UserCard;