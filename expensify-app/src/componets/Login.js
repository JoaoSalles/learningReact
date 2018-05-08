import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


const LoginComponent = ({ startLogin }) => {

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Despesas</h1>
                <button type="submit"
                onClick={startLogin} className="button">Login com Google</button>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginComponent);

