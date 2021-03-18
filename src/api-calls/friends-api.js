import axios from "axios";
import { toast } from "react-toastify";
import store, { loadTokenFromLocalStorage } from "../redux/store";
import {
  setPendingReceivedFriendRequests,
  setPendingSentFriendRequests,
  setAllFriendRelationsIDs,
  setAllFriendsData,
} from "../redux/actions/baseActions";

// Adds token to every http request using this axios instance
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = loadTokenFromLocalStorage();

  return config;
});

export const fetchUserSearchResults = async (searchQuery) => {
  try {
    return await axiosInstance.post("https://digitalcraftscapstoneserver.josephpstocks.com/users", {
      searchQuery,
    });
  } catch (err) {
    console.error(err);
    // toast.error("");
  }
};

export const sendFriendRequest = async (pendingFriendUserID) => {
  try {
    return await axiosInstance.post("https://digitalcraftscapstoneserver.josephpstocks.com/friends/pending", {
      pendingFriendUserID: pendingFriendUserID,
    });
  } catch (err) {
    console.error(err);
    // toast.error("");
  }
};

export const fetchPendingFriendRequests = async () => {
  try {
    let response = await axiosInstance.get(
      "https://digitalcraftscapstoneserver.josephpstocks.com/friends/pending"
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
    // toast.error("");
  }
};

export const acceptFriendRequest = async (pendingFromFriendUserID) => {
  try {
    let response = await axiosInstance.post(
      "https://digitalcraftscapstoneserver.josephpstocks.com/friends/accept",
      {
        pendingFromFriendUserID: pendingFromFriendUserID,
      }
    );
  } catch (err) {
    console.log(err.response);
    console.error(err);
    // toast.error("");
  }
};

///////
export const fetchPendingFriendRequestsANDDispatchToRedux = async () => {
  try {
    let {
      receivedRequests: receivedFriendRequests,
      sentRequests: sentFriendRequests,
    } = await fetchPendingFriendRequests();
    // console.log(sentFriendRequests);
    // console.log(receivedFriendRequests);
    // dispatch(saveOwnedBooks(ownedBooks));
    store.dispatch(setPendingReceivedFriendRequests(receivedFriendRequests));
    store.dispatch(setPendingSentFriendRequests(sentFriendRequests));
  } catch (error) {
    console.error(error);
    console.log("There was an issue fetching your friend requests!");
  }
};

export const fetchAllFriendRelationsIDsANDDispatch = async () => {

  try {
    let allFriendsRelationsIDs = await axiosInstance.get(
      "https://digitalcraftscapstoneserver.josephpstocks.com/friends/fullstatus"
    );
    allFriendsRelationsIDs = allFriendsRelationsIDs.data;
    store.dispatch(setAllFriendRelationsIDs(allFriendsRelationsIDs));
  } catch (error) {

  }
};

export const fetchAllFriendsANDDispatch = async () => {
  try {
    let response = await axiosInstance.get("https://digitalcraftscapstoneserver.josephpstocks.com/friends");
    response = response.data;
    store.dispatch(setAllFriendsData(response));
  } catch (err) {
    console.log(err.response);
    console.error(err);
  }
};
