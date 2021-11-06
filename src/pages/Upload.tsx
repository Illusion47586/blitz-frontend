import axios from "axios";
import { encode } from "base64-arraybuffer";
import { FileArrowUp } from "phosphor-react";
import React, { useRef, useState } from "react";

import styles from "../styles/css/pages/upload.module.css";

interface Props {}
enum RequestState {
  loading,
  error,
  loaded,
}

const Upload = (props: Props) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [state, setState] = useState<RequestState>(RequestState.loading);
  const [res, setRes] = useState(undefined);
  const ref = useRef<HTMLInputElement>(null);

  const upload = async (file?: File) => {
    if (file && file.size < 500000) {
      console.log("starting");
      const buffer = await file.arrayBuffer();
      const base64 = "data:image/png;base64," + encode(buffer);
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/upload",
        {
          image: base64,
        }
      );
      console.log(response);
      if (response.data.length > 0) {
        setImage(response.data);
        const res = await axios.get(
          process.env.REACT_APP_TF_URL + "/get-tags?url=" + response.data
        );
        console.log(res.data);
        setRes(res.data);
        setState(RequestState.loaded);
      }
    } else {
      alert("Only png images allowed with size less than 500KB.");
    }
  };

  //   useEffect(() => {
  //     if (ref.current?.value) {
  //       console.log(ref.current.files![0]);

  //       // setState(RequestState.loaded);
  //       // setImage(ref.current.value);
  //       upload(ref.current.files![0]);
  //     }
  //   }, [ref]);

  return (
    <>
      <h3>Upload your image and see how our server responds!</h3>

      <div className={styles.image}>
        {state === RequestState.loaded && <img src={image} />}
        {state === RequestState.error ? (
          <p>Err</p>
        ) : (
          <label>
            <FileArrowUp weight="duotone" />
            <h4>Upload a PNG image.</h4>
            <input
              type="file"
              accept=".png"
              ref={ref}
              onChange={async () => await upload(ref.current!.files?.[0])}
            />
          </label>
        )}
      </div>
      <div className={styles.data}>
        {state === RequestState.loading ? (
          <h3>Not uploaded yet</h3>
        ) : state === RequestState.loaded ? (
          <h3>
            Type: {res!["type"]}
            <br />
            Sub-Type: {res!["subtype"]}
            <br />
            Color: {res!["color"]}
          </h3>
        ) : (
          <p>Error</p>
        )}
      </div>
    </>
  );
};

export default Upload;
