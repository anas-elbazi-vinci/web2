import type { User } from "../type";
import Footer from "./PageFooter";
import PageTitle from "./PageTitle";
import UserNameAndAge from "./UserNameAndAge";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;

  const users : User[] = [
    {name : name1 , age : age1},
    {name : name2 , age : age2},
    {name : name3 , age : age3},
  ];

  return (
    <div>
      <PageTitle title={title}/>
      {users.map((user)=> (<UserNameAndAge user={user}/>))}
      <Footer footerText={footerText}/>
    </div>
  );
};

export default App;
