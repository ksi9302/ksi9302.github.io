import AWS from "aws-sdk";
import S3 from "aws-sdk/clients/s3"; // Import only the S3 client

const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
});

const s3 = new S3({
  params: { Bucket: "githubksi" },
  region: "ap-southeast-2",
});

const getS3File = async (Key: string) => {
  try {
    const url = await s3.getSignedUrlPromise("getObject", {
      Bucket: "githubksi",
      Key,
    });

    return url as string;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default getS3File;
