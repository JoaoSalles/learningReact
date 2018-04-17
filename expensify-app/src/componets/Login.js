import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


const LoginComponent = ({ startLogin }) => {

    return (
        <div>
            {/* <form className="login-view" action="">
                <input type="text" name="" id="username"/>
                <input type="password" name="" id="password"/> */}
                <button type="submit"
                onClick={startLogin} >Submit</button>
            {/* </form> */}
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginComponent);

