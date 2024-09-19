function App() {
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/


  function Header() {
    return (
      <header>
        <nav>
          <img src="./react-logo.png" alt="react logo" width="50px" />
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
