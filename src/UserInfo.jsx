import { useEffect } from "react";
import { useState } from "react";

function UserInfo() {
  const [image, setImage] = useState('')
  // get user's image from firebase
  useEffect(() => {
    // - get image-url from database (fetch). [Note: i have used direct link just for demo purpose]
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/test-66c49.appspot.com/o/images%2Fflower-sm.jpg?alt=media&token=e222b36c-4b2a-44b9-9cee-e3f124bef62f'

    // - show image 
    setImage(imageUrl)
  }, [])

  return (  
    <div>
      <h2 className='text-2xl mb-3'>User Info</h2>
      <div>
        <h3 className="mb-3">Name: Watson</h3>
        {image && <img src={image} className="size-48 object-cover" alt="" />}
      </div>
    </div>
  );
}

export default UserInfo;