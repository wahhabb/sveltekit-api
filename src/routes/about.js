const url = "https://icanhazdadjoke.com";
export async function get({ params }) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Learning exercise, myname@xxxxxx.com",
    },
  });
  const joke = await response.json();
  if (joke) {
    return {
      body: { joke },
    };
  }
  return {
    status: 404,
  };
}
