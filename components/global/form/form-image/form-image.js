import { useEffect, useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import Image from "next/image";

import classes from "./form-image.module.css";
// redux
import { connect } from "react-redux";
import {
  uploadAction,
  sendAction,
} from "../../../../store/actions/mediaActions";

const FormImage = ({ uploadAction, sendAction, media }) => {
  // case 1
  //   const [images, setImages] = useState(null);
  //   const [createObjectURL, setCreateObjectURL] = useState([]);

  //   const uploadToClient = (event) => {
  //     if (event.target.files && event.target.files[0]) {
  //       //   const i = event.target.files[0];
  //       let temp = [];
  //       for (let i = 0; i < event.target.files.length; i++) {
  //         temp.push({ link: URL.createObjectURL(event.target.files[i]) });
  //       }
  //       console.log(temp);
  //       setCreateObjectURL(temp);
  //       //   setImages(event.target.files[0]);
  //       //   setCreateObjectURL(URL.createObjectURL(i));
  //     }
  //   };

  // case 2
  //   const uploadToServer = async (event) => {
  //     // console.log(createObjectURL);
  //     const body = new FormData();
  //     for (let i = 0; i < images; i++) {
  //       body.append("file", images[i]);
  //     }
  //     body.append("file", images);
  //     console.log(body);
  //     const response = await fetch("/api/test", {
  //       method: "POST",
  //       body,
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     });
  //   };

  //   const [imgsSrc, setImgsSrc] = useState([]);
  //   const onChange = (e) => {
  //     for (const file of e.target.files) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         setImgsSrc((imgs) => [...imgs, reader.result]);
  //       };
  //       reader.onerror = () => {
  //         console.log(reader.error);
  //       };
  //     }
  //   };
  //   console.log(imgsSrc, imgsSrc.length);

  // case 3
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("");
  const [imagesList, setImagesList] = useState([]);
  const uploadImage = async () => {
    const upload = () => {
      let images = [];
      for (let i = 0; i < image.length; i++) {
        const data = new FormData();
        // for (let i = 0; i < image.length; i++) {
        //   data.append("file", image[i]);
        // }
        data.append("file", image[i]);
        data.append("upload_preset", "albaprogrammer");
        data.append("cloud_name", "dgdmhrjoy");
        fetch("https://api.cloudinary.com/v1_1/dgdmhrjoy/image/upload", {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUrl(data.url);
            console.log(data.url);
            images.push({ name: image[i], url: data.url });
          })
          .catch((err) => console.log(err));
      }
      setImagesList(images);
    };

    upload();
  };

  useEffect(() => {
    console.log(imagesList);
  }, [imagesList]);

  // const handleChange = (e) => {
  //   let result = e.target.files;
  //   for (let i = 0; i < result.length; i++) {
  //     uploadAction(result[i]);
  //   }
  // };

  return (
    <div>
      {/* <input
        type="file"
        name="image"
        multiple
        className={classes.file_form}
        accept=".jpg, .png, .jpeg"
        onChange={handleChange}
      />
      <div>
        <button onClick={handleImageUpload} disabled={!selectedImage}>
          Upload
        </button>
      </div> */}
      {/* <div>
        {createObjectURL &&
          createObjectURL.map((data) => {
            return <img style={{ width: "100px" }} src={data.link} />;
          })}
        <h4>Select Image</h4>
        <input type="file" name="myImage" multiple onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div> */}
      {/* <div>
        <input onChange={onChange} type="file" name="file" multiple />
        {imgsSrc.map((link) => (
          <img src={link} />
        ))}
      </div> */}

      {/* <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files)}
          multiple
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        {imagesList &&
          imagesList.map((data, idx) => {
            return <img src={data.url} key={idx} />;
          })}
      </div> */}

      {/* <div>
        <input multiple type="file" onChange={(e) => handleChange(e)}></input>
        <button onClick={() => sendAction()}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        {media.fileList.map((file, idx) => {
          return (
            <div key={idx}>
              <Image src={URL.createObjectURL(file)} width={100} height={100} alt="test"/>
            </div>
          );
        })}
        <Image
          src={"/23-08-2022/HCIS-Promotionbanner.jpg"}
          width={100}
          height={100}
          alt="test"
        />
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  media: state.media,
});

export default connect(mapStateToProps, { uploadAction, sendAction })(
  FormImage
);
