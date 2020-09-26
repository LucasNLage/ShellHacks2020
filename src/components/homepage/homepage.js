import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Button from '@material-ui/core/Button';

//TESTING HOME PAGE
export default function HomePage() {

    let history = useHistory()
    return (
        <div>
            <Button onClick={() => { history.push("/test") }}>Test Button</Button>
            <p>or</p>
            <Link to="/">Home</Link>
        </div>
    );
}