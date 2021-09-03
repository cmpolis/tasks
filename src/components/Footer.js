import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright (c) foo bar baz</p>
           <Link to='/about'>About</Link> 
        </footer>
    )
}

export default Footer
