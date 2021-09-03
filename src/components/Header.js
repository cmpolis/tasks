import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {

    return (
        <header className='header'>
            <h1>Task tracker {title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add Task'} onClick={onAdd} />
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
