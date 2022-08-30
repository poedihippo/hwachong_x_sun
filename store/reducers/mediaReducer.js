import { ADD_FILE_TO_LIST } from "../actions/types";

const inititalState = {
  fileList: [],
};

export default (state = inititalState, { type, payload }) => {
  switch (type) {
    case ADD_FILE_TO_LIST:
      // console.log(payload)
      return {
        ...state,
        fileList: state.fileList.concat(payload),
      };
    default:
      return state;
  }
};
