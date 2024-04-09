// import axios from "axios";

// class Api {
//   async getArticles(query?: any) {
//     console.log("query in api class", query);

//     try {
//       const response = await axios.get(
//         `http://localhost:9000/api/v1/articles?${query}`
//       );
//       //   const response = await axios.get(
//       //     `https://msny-backend-deepansh.vercel.app/api/v1/articles?${query}`
//       //   );
//       const articles_response = response.data;
//       console.log("articles_response in api class", articles_response);

//       return articles_response;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// export const api = new Api();
