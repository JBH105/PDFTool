require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUCKETNAME: process.env.BUCKETNAME,
    ACCESSKEYID: process.env.ACCESSKEYID,
    SECRETACCESSKEY: process.env.SECRETACCESSKEY 
  }
};

module.exports = nextConfig;
