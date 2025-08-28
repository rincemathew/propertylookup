import { useSelector } from "react-redux"

function Profile() {
    const {currentUser} = useSelector((state)=>state.user)
    return (
        <>
    <h1>Profile page</h1>
    <form className="flex flex-col gap-4 mt-4">
        <img className="rounded-full h-24 w-24 object-cover cursor-pointer self-center" src={currentUser.rest.avatar} alt="profile picture"/>
    <input type="text" placeholder="username" id="username"/>
    <input type="email" placeholder="email" id="email"/>
    <input type="password" placeholder="password" id="password"/>
    <button>Update</button>
    </form>
    <div>
        <button>Delete Account</button>
        <button>Logout</button>
    </div>
    </>
    )
}

export default Profile