export const LOAD_COLLECTIBLES_SUCCESS = "CONTACT:LOAD_CONTACTS_SUCCESS";

export interface CollectibleState {
  data: Collectible[];
}

export interface Collectible {
  id: number;
  url: string;
  name: string;
  createdBy: string;
}

interface LoadCollectibleSuccessAction {
  type: typeof LOAD_COLLECTIBLES_SUCCESS;
  collectibles: Collectible[];
}
export type CollectibleActionTypes = LoadCollectibleSuccessAction;
