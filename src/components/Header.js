import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

    const headerClick = () => {
        console.log('header clicked');
    }

    return (
        <header className='header'>
            <h1>Task tracker {title}</h1>
            <Button color='green' text='Addz' onClick={headerClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'default title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
