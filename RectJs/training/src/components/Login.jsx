import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Link to={'/Signup'}>
                <button>signup</button>
            </Link>

        </div>
    )
}

export default Login