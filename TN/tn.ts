import axios from "axios";

const authentication : string = "9e162212f0d9f054c84d0182c4f30d713ee5289c";
const userAgent : string = "inchauspenico@gmail.com";
const appId : number = 3161050;


if (!authentication || !userAgent) {
  throw new Error("Authentication and User-Agent variables must be defined.");
}

const url = `https://api.tiendanube.com/v1/${appId}/products`;

const getProducts = async (): Promise<void> => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authentication: authentication,
        "User-Agent": userAgent,
      },
    });
    console.log(response?.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const postProducts = async (): Promise<void> => {
  try {
    const response = await axios.post(
      url,
      {
        name: "sixth product",
        description: "Another new product",
        images: [
          {
            src: "https://http2.mlstatic.com/D_NQ_NP_842272-MLA52993977355_122022-O.jpg",
            position: 1,
          },
          {
            src: "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SX522_.jpg",
            position: 2,
          },
        ],
      },
      {
        headers: {
          Authentication: authentication,
          "User-Agent": userAgent,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response?.data);
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
  }
};

const deleteProducts = async (): Promise<void> => {
  try {
    const response = await axios.delete(url, {
      headers: {
        Authentication: authentication,
        "User-Agent": userAgent,
      },
    });
    console.log(response?.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const updateProducts = async (): Promise<void> => {
  try {
    const response = await axios.put(url, {
      headers: {
        Authentication: authentication,
        "User-Agent": userAgent,
      },
    });
    console.log(response?.data);
  } catch (error) {
    console.error("Error", error);
  }
};

getProducts();