const getS3File = async (Key: string) => {
  try {
    const response = await fetch(
      "https://xpq4wd5fei.execute-api.ap-southeast-2.amazonaws.com/prod/getS3URL",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: Key,
        }),
      }
    );

    const url = await response.text();

    return url as string;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default getS3File;
