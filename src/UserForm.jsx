import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebaseConfig";

function UserForm() {
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    // get image file object from user input
    const imageFile = form.image.files[0]

    // create image url where the image will be stored (in firebase)
    const imgPath = `images/${imageFile.name}`
    // get image path ref (space)
    const imageRef = ref(storage, imgPath)

    // upload image into firebase
    await uploadBytes(imageRef, imageFile)
    // get image url 
    const imageUrl = await getDownloadURL(imageRef) 

    // --- do anything with your image url ---
    // store image-url into database
    // store image-path into database (it is useful to get, delete image)
    console.log(imgPath, imageUrl);

  }

  return (  
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" name="image" className="border py-1 px-3 rounded-md bg-gray-100 border-gray-500" placeholder="name" />

        <button type="submit" className="border py-1 px-3 rounded-md bg-green-400 border-gray-500 hover:opacity-80">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;