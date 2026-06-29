/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? "/today-gauge-app" : undefined,
  assetPrefix: isGitHubPages ? "/today-gauge-app/" : undefined,
};

export default nextConfig;
