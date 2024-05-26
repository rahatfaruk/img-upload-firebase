## Image upload firebase Storage
### Initialize storage inside firebase website
- Go to your project inside firebase.
- Click on Build > Storage
- Get started storage (start on test mode)

### upload image into firebase
After submitting user form, 
- get image file object using `form.image.files[0]`. 

- Create image ref (where image will uploaded): 
  ```js
    // create image url where the image will be stored (in firebase)
    const imgPath = `images/${imageFile.name}`
    // get image path ref (space)
    const imageRef = ref(storage, imgPath)
  ```

- upload image into firebase storage; get image url
  ```js
      // upload image into firebase
      await uploadBytes(imageRef, imageFile)
  ```

- get image url
  ```js
    // get image url 
    const imageUrl = await getDownloadURL(imageRef) 
  ```

- delete image (using imagePath)
  ```js
    import { ref, deleteObject } from "firebase/storage";
    import { storage } from "../firebaseConfig";

    // get image path ref (space). get "imgPath" from database.
    const imageRef = ref(storage, imgPath)

    // Delete the file
    deleteObject(imageRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  ```
  