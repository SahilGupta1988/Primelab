import {
  CollectibleState,
  CollectibleActionTypes,
  LOAD_COLLECTIBLES_SUCCESS,
} from "./type";

export const initialState: CollectibleState = {
  data: [
    {
      id: 1,
      url: "",
      name: "johndoe.near",
      createdBy: "devon.near",
    },
    {
      id: 2,
      url: "",
      name: "mike.near",
      createdBy: "devon.near",
    },
    {
      id: 3,
      url: "",
      name: "jhon.near",
      createdBy: "devon.near",
    },
  ],
};

const collectibleReducer = (
  state = initialState,
  action: CollectibleActionTypes
) => {
  switch (action.type) {
    case LOAD_COLLECTIBLES_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.collectibles],
      };
    default:
      return state;
  }
};

export default collectibleReducer;
