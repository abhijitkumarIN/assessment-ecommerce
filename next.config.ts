import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    INSTANCE_URL: process.env.INSTANCE_URL
  },
  images:{
    unoptimized:true
  }
};

export default nextConfig;
