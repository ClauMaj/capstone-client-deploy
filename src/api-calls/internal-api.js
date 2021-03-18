import axios from "axios";
import { toast } from "react-toastify";
import store, { loadTokenFromLocalStorage } from "../redux/store";
import capitalize from "../helper-functions/capitalize";
import {
  setWhoOwnsIt,
  saveOwnedBooks,
  saveReadBooks,
  saveWantBooks,
} from "../redux/actions/baseActions";

// Adds token to every http request using this axios instance
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = loadTokenFromLocalStorage();

  return config;
});

export const bookAddPost = async (book) => {
  let response = await axiosInstance.post("http://localhost:3005/books", {
    book,
  });

  console.log(response?.data?.publishedDate);
};

export const bookDeleteRequest = async (type, id) => {
  let response = await axiosInstance.delete("http://localhost:3005/books", {
    data: {
      idType: type,
      id: id,
    },
  });
  console.log(response);
};

export const bookDeleteRequestByDatabaseID = async (id) => {
  return await bookDeleteRequest("id", id);
};

export const bookDeleteRequestByGoogleBookID = async (id) => {
  return await bookDeleteRequest("googleBookID", id);
};

export const addBookToPersonalLists = async (book, whichList) => {
  try {
    let response = await axiosInstance.post("http://localhost:3005/books", {
      book,
      whichList,
    });
    console.log(response);
    if (response.data[1]) {
      toast.success(
        `${book.title} was added to your ${capitalize(whichList)} List`
      );
    } else {
      toast.warn(
        `${book.title} is already in your ${capitalize(whichList)} List`
      );
    }
  } catch (err) {
    console.error(err);
    toast.error("There was an ERROR saving your book!");
  }
};

export const deleteBookFromPersonalLists = async (bookID, whichList) => {
  try {
    console.log("INSIDE DELETE FUNCTION ON CLIENT");
    console.log(bookID);
    console.log(whichList);
    let response = await axiosInstance.delete("http://localhost:3005/books", {
      data: {
        bookID,
        whichList,
      },
    });
    console.log(response);
    // if (response.data[1]) {
    //   toast.success(
    //     `${book.title} was added to your ${capitalize(whichList)} List`
    //   );
    // } else {
    //   toast.warn(
    //     `${book.title} is already in your ${capitalize(whichList)} List`
    //   );
    // }
  } catch (err) {
    console.error(err);
    toast.error("There was an ERROR saving your book!");
  }
};

export const fetchOwnedBooks = async () => {
  return await fetchSpecifiedPersonalBookList("ownedbooks");
};

export const fetchReadBooks = async () => {
  return await fetchSpecifiedPersonalBookList("readbooks");
};

export const fetchWantBooks = async () => {
  return await fetchSpecifiedPersonalBookList("wantbooks");
};

const fetchSpecifiedPersonalBookList = async (relativePath) => {
  try {
    let response = await axiosInstance.get(
      `http://localhost:3005/${relativePath}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// book.authors: "["Wise Publications"]"
// book.categories: "["Music"]"
// book.createdAt: "2021-03-09T20:46:44.038Z"
// book.description: "A modern day music theatre phenomenon, Matilda: The Musical is the multiple Olivier Award-winning adaptation of Roald Dahl’s classic children’s novel, newly adapted for the stage with music and lyrics by Tim Minchin. This official songbook presents all the songs from the show arranged for Voice and Piano, with full lyrics and Guitar chord boxes. An eight-page colour photo section and exclusive foreword by Tim Minchin round off this beautiful folio, the perfect way to relive a perfect stage performance."
// book.googleBookID: "4H7HDgAAQBAJ"
// book.id: 24
// book.imageLinks: "{"smallThumbnail":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70JmXjCvXR253bUFnmIpTH-hF2TWBBHEYNQAdTWwpbFSob-Gzl_KxN290Lr0zBUKwXs0VAPIsnat6Pvw0PQ-6aAkijXPkG4E_T_nWl_YzC2fnQS1X-ILr2Y7JIoxxpDcoIHS_0_&source=gbs_api","thumbnail":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71H0UTPr15VPJATrinvcXAXLw6V85y-fFicWOlASXab0yvLegi5jrHZMiO7TKlL74O-qyc3gyLgWbI6fjeBXi6L_YMFhRbVy8tL3HVetDokmRGeFoKQyjh0zNpJ6GU9SQ98gSN6&source=gbs_api","small":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE7262asZ47J-poCYJDDiRRAWfTyVmKaGwGoviDqouCz_-mk5VQhGgxfp2eyFhV5IWnObdjPkQq-h_M90TteK5JIKXmhkdI5dmKIbQAW3KCyVkOKkhFvXqC2IxhrdZyq_Xf9AF7BT&source=gbs_api","medium":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72OEJSJ8YafiIo0vJWhWPzei4RLzGv6bZMzHdNCFZMf37aNJZEmQkVAyWYXs9xHLiX5-IvX6DppvAxITriv3ip_jF2cBifR_w9cQu44JvxaA2xxTjFApWDHKt7oD8Z1E0492zgS&source=gbs_api","large":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71kNTV_Svh9QMc5y8WxAolQItbzVVOQ_g2Q69ZKRO78mW4iFDT864srMxDnJ8md3A_3IQTxSlgnkL8BEgTw7J8qQ2vJ7sPfp-_bXnFUL-xOPmjAufKAvQ6KuGaxjONugBIca5Wn&source=gbs_api","extraLarge":"http://books.google.com/books/publisher/content?id=4H7HDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70oceEHRs1IRZQRVhC_F6saY4gmss-GJyAwOdCe0kbGdZHPYkUBg49X_g2801-nDEHS3sTcZ32rWUnS5C1W_3MWPfwhtMcjcVFkehGZKuRpS5A-XtD5Oyap_14wI_CdNEqrZr1I&source=gbs_api"}"
// book.isbn: "[{"type":"ISBN_13","identifier":"9781783230075"},{"type":"ISBN_10","identifier":"178323007X"}]"
// book.publishedDate: "2012-12-07"
// book.publisher: "Wise Publications"
// book.title: "Matilda: The Musical (PVG)"
// book.updatedAt: "2021-03-09T20:46:44.038Z"
// bookID: 24
// createdAt: "2021-03-09T20:46:44.168Z"
// id: 7
// lendToID: null
// updatedAt: "2021-03-09T20:46:44.168Z"
// userID: 28
export const cleanFetchedBooks = async (books) => {
  return await books.map((book) => {
    let {
      "book.title": title,
      "book.authors": authors,
      "book.categories": categories,
      "book.description": description,
      "book.imageLinks": imageLinks,
      "book.isbn": isbn,
      "book.publishedDate": publishedDate,
      "book.publisher": publisher,
      "book.googleBookID": googleBookID,
      bookID,
      id,
      userID,
      lendToID,
    } = book;
    return {
      title,
      description,
      publisher,
      publishedDate,
      googleBookID,
      isbn: JSON.parse(isbn),
      authors: JSON.parse(authors),
      categories: JSON.parse(categories),
      imageLinks: JSON.parse(imageLinks),
      bookID,
      id,
      userID,
      lendToID,
    };
  });
};

export const fetchAllUsersWhoOwnsBookANDDispatch = async (bookID, whichID) => {
  console.log("FETCH ALL OWNERS OF A SPECIFIC BOOK - 1");
  try {
    console.log(bookID);
    console.log(whichID);
    let whoOwnsIt = await axiosInstance.post(
      "http://localhost:3005/whoownsit",
      {
        bookID,
        whichID,
      }
    );
    whoOwnsIt = whoOwnsIt.data;
    console.log(whoOwnsIt);
    console.log("FETCH ALL OWNERS OF A SPECIFIC BOOK - 2");
    store.dispatch(setWhoOwnsIt(whoOwnsIt));
  } catch (error) {
    console.error(error);
    console.log("There was an issue fetching your friend requests!");
  }
};

export const fetchAllPersonalBooksANDDispatch = async (bookID, whichID) => {
  try {
    let ownedBooks = await cleanFetchedBooks(await fetchOwnedBooks());
    store.dispatch(saveOwnedBooks(ownedBooks));
    let readBooks = await cleanFetchedBooks(await fetchReadBooks());
    let wantBooks = await cleanFetchedBooks(await fetchWantBooks());
    store.dispatch(saveReadBooks(readBooks));
    store.dispatch(saveWantBooks(wantBooks));
  } catch (error) {
    console.error(error);
    console.log("There was an issue fetching your books!");
  }
};
