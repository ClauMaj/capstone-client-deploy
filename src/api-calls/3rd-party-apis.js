import axios from "axios";
// import qs from "qs";

let volumeInfoFields = [
  "title",
  "description",
  "authors",
  "ratingsCount",
  "publisher",
  "publishedDate",
  "previewLink",
  "pageCount",
  "infoLink",
  "imageLinks",
  "categories",
  "canonicalVolumeLink",
  "averageRating",
  "industryIdentifiers",
];

const defaultParams = {
  key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
  country: "US",
  printType: "books",
  projection: "full",
  maxResults: 40,
  langRestrict: "en",
  fields: `totalItems,items(id,selfLink),items(searchInfo/textSnippet,${volumeInfoFields
    .map((field) => `volumeInfo/${field}`)
    .join(",")})`,
};

// bringing nested volumeInfo object up one level, easier to work with
const flattenDeeplyNestedObject = (results) => {
  return {
    ...results,
    data: {
      ...results.data,
      items: results.data.items.map((item) => {
        //be careful of empty fields!
        return {
          id: item.id,
          selfLink: item.selfLink,
          textSnippet: item?.searchInfo?.textSnippet,
          ...item.volumeInfo,
        };
      }),
    },
  };
};

const baseSearch = async (query) => {
  return await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      ...defaultParams,
      q: query.trim(),
    },
  });
};

export const bookSearchByISBN = async (isbn) => {
  return flattenDeeplyNestedObject(await baseSearch(`isbn:"${isbn.trim()}"`))
    .data;
};

export const bookSearchByTitle = async (title) => {
  return flattenDeeplyNestedObject(await baseSearch(`intitle:${title.trim()}`))
    .data;
};

export const bookSearchByAuthor = async (author) => {
  return flattenDeeplyNestedObject(
    await baseSearch(`inauthor:${author.trim()}`)
  ).data;
};

export const searchMapping = {
  default: baseSearch,
  isbn: bookSearchByISBN,
  title: bookSearchByTitle,
  author: bookSearchByAuthor,
};

export const addLargerImageLinks = async (originalBook) => {
  let { selfLink } = originalBook;
  try {
    let url = new URL(selfLink); //check if it is URL
    let result = await axios.get(selfLink, {
      params: {
        fields: `volumeInfo/imageLinks`,
      },
    });
    let imageLinks = result.data.volumeInfo.imageLinks;
    return { ...originalBook, imageLinks };
  } catch (error) {
    console.error(error);
    return originalBook;
  }
};
