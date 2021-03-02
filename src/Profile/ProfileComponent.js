import PropTypes from 'prop-types';

const ProfileComponent = (props) => {
    return (
        <div>
            {props.myName(props.fullName)}
            <h1 style={{fontSize: '40px', fontWeight: '700', fontFamily: 'cursive', color: 'dodgerblue'}}>My Name is: {props.fullName} </h1>
            <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}> {props.bio} </p>
            <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}>My job is: {props.profession} </p>
            <p> {props.children} </p>
        </div>
    )
}

ProfileComponent.defaultProps = {
    fullName: "Ahmed",
    bio: "Born on 01 January, 1970 in Paris",
    profession: "Student"
}

ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    myName: PropTypes.func
}

export default ProfileComponent;
