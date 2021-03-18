//setting initial state
const initialState = {
  modalShow: false,
  whoOwnsModalShow: false,
  individBook: [],
  searchResults: [],
  ownedBooks: [],
  readBooks: [],
  wantBooks: [],
  token: "",
  profileImage: null,
  googleAuth: false,
  loggedUser: { firstName: "", lastName: "" },
  pendingSentFriendRequests: [],
  pendingReceivedFriendRequests: [],
  potentialFriendsSearchResults: [],
  allFriendRelationIDs: {
    allFriendIDs: [],
    sentFriendRequestIDs: [],
    receivedFriendRequestIDs: [],
  },
  friends: [],
  whoownsit: {
    book: {},
    allOwners: [],
  },
};

//purpose of reducer is to return a new global state
//reducer must be passed into store
const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLEMODAL": //must match name of action.type in actions
      return {
        ...state,
        modalShow: !state.modalShow,
      };
    case "TOGGLE_WHO_OWNS_MODAL": //must match name of action.type in actions
      return {
        ...state,
        whoOwnsModalShow: !state.whoOwnsModalShow,
      };
    case "ADDINDIVIDBOOK":
      return {
        ...state,
        individBook: action.book,
      };
    case "SEARCHFUNCTION":
      return {
        ...state,
        searchResults: action.results,
      };

    case "SAVETOKEN":
      return {
        ...state,
        token: action.data.token,
        loggedUser: {
          firstName: action.data.firstName,
          lastName: action.data.lastName,
        },
      };

    case "SAVE_OWNED_BOOKS":
      return {
        ...state,
        ownedBooks: action.data,
      };

    case "SAVE_READ_BOOKS":
      return {
        ...state,
        readBooks: action.data,
      };

    case "SAVE_WANTTOREAD_BOOKS":
      return {
        ...state,
        wantBooks: action.data,
      };

    case "SAVEGOOGLEIMG":
      return {
        ...state,
        profileImage: action.data,
      };

    case "SETGOOGLEAUTH":
      return {
        ...state,
        googleAuth: action.data,
      };

    case "SET_PENDING_SENT_FRIEND_REQUESTS":
      return {
        ...state,
        pendingSentFriendRequests: action.data,
      };

    case "SET_PENDING_RECEIVED_FRIEND_REQUESTS":
      return {
        ...state,
        pendingReceivedFriendRequests: action.data,
      };

    case "SET_POTENTIAL_FRIENDS_SEARCH_RESULTS":
      return {
        ...state,
        potentialFriendsSearchResults: action.data,
      };
    case "SET_ALL_FRIEND_RELATIONS_IDS":
      return {
        ...state,
        allFriendRelationIDs: action.data,
      };
    case "SET_FRIENDS_DATA":
      return {
        ...state,
        friends: action.data,
      };
    case "SET_WHO_OWNS_IT":
      return {
        ...state,
        whoownsit: action.data,
      };

    default:
      return state;
  }
};

export default baseReducer;
