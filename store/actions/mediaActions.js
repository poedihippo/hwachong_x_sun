import { ADD_FILE_TO_LIST } from "./types";
import axios from "axios";

export const uploadAction = (mediaFiles) => async (dispatch, getState) => {
  //   console.log(file);
  const data = getState().media;

  let files = [mediaFiles];

  if (files && files.length > 0) {
    const existingFiles = data.fileList.map((f) => f.name);

    files.filter((f) => !existingFiles.includes(f.name));

    return dispatch({ type: ADD_FILE_TO_LIST, payload: files });
  }
};

export const sendAction = () => async (dispatch, getState) => {
  const files = getState().media;

  let form = new FormData();

  //   console.log(files);

  if (files.fileList.length > 0) {
    files.fileList.forEach((file) => form.append("media", file));
  }

//   console.log(files.fileList.length);

  await axios(`/api/test`, {
    method: "POST",
    data: form,
    "content-type": "multipart/form-data",
  }).then((res) => console.log(res));
};
