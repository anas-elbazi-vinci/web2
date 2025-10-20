import type { User } from "../types";
import UserCard from "./UserCard";


const users : User[] = [
    {name : "John" , age : 25 , isOnline : true},
    {name : "Anas" , age : 22 , isOnline : false},
    {name : "Oompa" , age : 100 , isOnline : true}
];

const App = () =>{return(
    <>
        <h1>Users</h1>
        {users.map((user,index)=>(
            <UserCard key={index} userCard={user}/>
        ))}
    </>    )
};

export default App;