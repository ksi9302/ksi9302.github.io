import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: "p5i6.sg.idrivee2-32.com", //your storage-endpoint
  accessKeyId: "OsvjKfvCITpheQPNT6UH", //your access-key
  secretAccessKey: "YerdORDvfhVlj9quspwh4d9Bl1wsNMy2oGNworuD", //your secret-key
});

const getS3File = async (Key: string) => {
  try {
    const url = await s3.getSignedUrlPromise("getObject", {
      Bucket: "github",
      Key,
    });

    return url as string;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default getS3File;
