import { Link } from "react-router-dom";

function SignUp() {
    return(
        <>
    <h1>signup</h1>
    <form className="flex flex-col" action="">
        <input type="text" placeholder="username" name="" id="username" />
        <input type="email" placeholder="email" name="" id="email" />
        <input type="password" placeholder="password" name="" id="password" />
        <button>sign up</button>
    </form>
    <div>
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-blue-500">Sign In</Link>
    </div>
    </>
    )
}

export default SignUp