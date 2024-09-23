export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1>Fun Facts about React</h1>
      <ul className="list-items">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>is maintained by meta</li>
        <li>Powers thousands of enterprise apps,<br />including mobile apps</li>
      </ul>
    </main>
  );
}
