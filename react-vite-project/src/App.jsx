import Header from "./Header.jsx";
import List from "./List.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  /**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
- Challenge: move the Footer and MainContent components
  into their own files.
*/

  return (
    <>
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
