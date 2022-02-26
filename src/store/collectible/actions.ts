import { Collectible, LOAD_COLLECTIBLES_SUCCESS } from "./type";

const loadCollectibleSuccess = (collectibles: Collectible[]) => ({
  type: LOAD_COLLECTIBLES_SUCCESS,
  collectibles,
});

export { loadCollectibleSuccess };
