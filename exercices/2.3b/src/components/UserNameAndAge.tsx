import type { User } from "../type";

interface UserProps {
    user : User;
}

const UserNameAndAge = (props : UserProps)  => {
    return <div><h1>{props.user.name}</h1><p>Age : {props.user.age}</p></div>;
}

export default UserNameAndAge;