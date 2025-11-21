import { useState } from "react";

const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "About":
        return <AboutPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo("Home")}>Home</button>
        <button onClick={() => navigateTo("About")}>About</button>
        <button onClick={() => navigateTo("Contact")}>Contact</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
export { HomePage, AboutPage, ContactPage };
