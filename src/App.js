import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm'

function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in")
        } else {
            console.log("Invalid Credentials")
        }
    }

    const Logout = () => {
        console.log("Logout");
    }

    return (
        <div className="App">
            <LoginForm Login={Login} error={error}></LoginForm>
        </div>
    );
}

export default App;
