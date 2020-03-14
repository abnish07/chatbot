import LOCALSTORAGE_KEYS from "../constants/localStorageKeys";
import { DEFAULT_USER_AUTH } from "../customHooks/AuthHandler";

export default function getUserFromLocalStorage() {
  const userDetails = localStorage.getItem(LOCALSTORAGE_KEYS.USER_AUTH);
  if (userDetails) {
    const updateDetails = JSON.parse(userDetails);
    updateDetails.id = Number(updateDetails.id)
    updateDetails.userInfo = {...updateDetails.userInfo, id: Number(updateDetails.userInfo.id)}
    return updateDetails
  }
  return DEFAULT_USER_AUTH;
}
