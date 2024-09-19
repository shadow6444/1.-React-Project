import logo from '../assets/react-logo.png';
export default function Navbar(){
    return <>
        <nav className='nav'>
            <img src={logo} alt="React Logo" />
            <div className='header-container'>
                <h3>ReactFacts</h3>
                <h4>React course - project 1</h4>
            </div>
        </nav>
    </>
}