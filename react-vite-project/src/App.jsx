function App() {
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/


  function Header() {
    return (
      <header>
        <nav>
          <img src="./react-logo.png" alt="react logo" width="50px" />
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  function List() {
    return (
      <>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>
            It's a popular library, so I'll be able to fit in with the cool
            kids!
          </li>
          <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
      </>
    );
  }
  function Footer() {
    return <footer>&copy; 2024 React development. All rights reserved.</footer>;
  }
  return (
    <>
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
