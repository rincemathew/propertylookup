import { useSelector } from "react-redux"
import { useRef, useState, useEffect } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { app } from "../firebase"

function Profile() {
    const {currentUser} = useSelector((state)=>state.user)
    const fileRef = useRef(null)
    const [file, setFile] = useState(undefined);
    const [filePercent, setFilePercent] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
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

    return (
      <>
        <h1>Profile page</h1>
        <form className="flex flex-col gap-4 mt-4">
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
            src={formData.avatar || currentUser.rest.avatar}
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
          <input type="text" placeholder="username" id="username" />
          <input type="email" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <button>Update</button>
        </form>
        <div>
          <button>Delete Account</button>
          <button>Logout</button>
        </div>
      </>
    );
}

export default Profile