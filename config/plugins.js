module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || env('AWS_ACCESS_KEY_ID', ''),
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || env('AWS_ACCESS_SECRET', ''),
            region: process.env.AWS_REGION || env('AWS_REGION','aws-region'),
            params: {
                Bucket: process.env.AWS_BUCKET || env('AWS_BUCKET','my-bucket'),
            },
        },
        /*provider: "cloudinary",
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET')
        }*/
    }
});