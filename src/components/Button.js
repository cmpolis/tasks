import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick}) => {

    return (
        <button
        onClick={onClick}
          className='btn'
          style={{backgroundColor: color }}>
            {text} foo
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
