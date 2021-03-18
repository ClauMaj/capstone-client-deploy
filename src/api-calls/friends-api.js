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
    return await axiosInstance.post("http://localhost:3005/users", {
      searchQuery,
    });
  } catch (err) {
    console.error(err);
    // toast.error("");
  }
};

export const sendFriendRequest = async (pendingFriendUserID) => {
  try {
    return await axiosInstance.post("http://localhost:3005/friends/pending", {
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
      "http://localhost:3005/friends/pending"
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
    console.log("on client!");
    let response = await axiosInstance.post(
      "http://localhost:3005/friends/accept",
      {
        pendingFromFriendUserID: pendingFromFriendUserID,
      }
    );
    console.log(response);
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
  console.log("FETCH ALL IDS - 1");
  try {
    let allFriendsRelationsIDs = await axiosInstance.get(
      "http://localhost:3005/friends/fullstatus"
    );
    allFriendsRelationsIDs = allFriendsRelationsIDs.data;
    console.log(allFriendsRelationsIDs);
    console.log("FETCH ALL IDS - 2");
    store.dispatch(setAllFriendRelationsIDs(allFriendsRelationsIDs));
  } catch (error) {
    console.error(error);
    console.log("There was an issue fetching your friend requests!");
  }
};

export const fetchAllFriendsANDDispatch = async () => {
  try {
    let response = await axiosInstance.get("http://localhost:3005/friends");
    response = response.data;
    console.log("\n\n\n\n\n");
    console.log("ALL FRIENDS FETCH");
    console.log(response);
    store.dispatch(setAllFriendsData(response));
  } catch (err) {
    console.log(err.response);
    console.error(err);
  }
};
