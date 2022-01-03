import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom"

function About({component}) {
    return (
        <Card>
            <h1>About</h1>
            <p>This is a react application where user can give feedback.</p>
            <Link to="/">Back to home</Link>
        </Card>
    )
}

export default About
