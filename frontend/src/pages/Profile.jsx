import { useSelector } from "react-redux"
import { useRef, useState, useEffect } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { app } from "../firebase"
import { updateUserStart, updateUserSucess, updateUserFailure, deleteUserStart
, deleteUserSucess, deleteUserFailure, 
signOutUserStart, signOutUserSucess, signOutUserFailure} from "../redux/user/userSlice"
import { useDispatch } from "react-redux"

function Profile() {
    const {currentUser, loading, error} = useSelector((state)=>state.user)
    const fileRef = useRef(null)
    const [file, setFile] = useState(undefined);
    const [filePercent, setFilePercent] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateSucess, setUpdateSuccess] = useState(false)
    const dispatch = useDispatch()

    console.log(filePercent)
    console.log(formData)
    console.log(fileUploadError)

    useEffect(()=>{
        if(file){
            handleFileUpload(file)
        }
    },[file])

    const handleFileUpload = async(file)=>{
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercent(Math.round(progress))
        //   console.log('Upload is ' + progress + '% done');
        //   switch (snapshot.state) {
        //     case 'paused':
        //       console.log('Upload is paused');
        //       break;
        //     case 'running':
        //       console.log('Upload is running');
        //       break;
        //   }
        },
        (error) => {
          // Handle unsuccessful uploads
          setFileUploadError(true)
          console.log(error)
        },() => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFormData({...formData, avatar: downloadURL})
            })
        })
    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          dispatch(updateUserStart())
          const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success){
          dispatch(updateUserSucess(data))
          setUpdateSuccess(true)
        } else {
          dispatch(updateUserFailure(data.message))
        }
      } catch (error) {
          dispatch(updateUserFailure(error.message))
        }
    }

    const handleDeleteUser = async()=>{
      try {
        dispatch(deleteUserStart())
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: "DELETE",
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data.message))
        return
      }
      dispatch(deleteUserSucess(data))
      } catch (error) {
        dispatch(deleteUserFailure(error.message))
      }   
    }

    const handleSignOut = async()=>{
      try {
        dispatch(signOutUserStart())
        const res = await fetch('/api/auth/signout')
        const data = await res.json()
        if(data.success === false){
          dispatch(signOutUserFailure(data.message))
          return
        } 
        dispatch(signOutUserSucess(data))
      } catch (error) {
        dispatch(signOutUserFailure(error.message))
      }
    }

    return (
      <>
        <h1>Profile page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
            src={formData.avatar || currentUser.avatar}
            alt="profile picture"
          />
          <p>
            {fileUploadError ? (
              <span className="text-red-500">
                Something went wrong during file upload.
              </span>
            ) : filePercent > 0 && filePercent < 100 ? (
              <span className="text-blue-500">Uploading: {filePercent}%</span>
            ) : filePercent === 100 ? (
              <span className="text-green-500">
                File uploaded successfully.
              </span>
            ) : (
              <span className="text-gray-500">
                Click the image to change your profile picture
              </span>
            )}
          </p>
          <input onChange={handleChange} type="text" placeholder="username" defaultValue={currentUser.username} id="username" />
          <input onChange={handleChange} type="email" placeholder="email" defaultValue={currentUser.email} id="email" />
          <input onChange={handleChange}  type="password" placeholder="password" id="password" />
          <button disabled={loading}>{loading ? 'loading....': 'Update'}</button>
        </form>
        <div>
          <button onClick={handleDeleteUser}>Delete Account</button>
          <button onClick={handleSignOut}>Logout</button>
          <p>{error?error:""}</p>
          <p>{updateSucess?"Profile updated sucessfully":""}</p>
        </div>
      </>
    );
}

export default Profile