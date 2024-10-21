import "./userCard.css";

interface UserCardProps {
    name: string;
    age: number;
    isOnline: boolean;
}

const UserCard = (props: UserCardProps) => {
    return (
        <div className="user-card">
            <h2 className="user-name">{props.name}</h2>
            <p className="user-age">Âge : {props.age}</p>
            <div className={props.isOnline ? "online" : "offline"}>
                {props.isOnline ? "En ligne" : "Hors ligne"}
            </div>
        </div>
    );
};

export default UserCard;
