function App() {
  /**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
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
  return (
    <>
      <Header />
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>&copy; 2024 React development. All rights reserved.</footer>
    </>
  );
}

export default App;
