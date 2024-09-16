/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "ataaman.github.io",
                protocol: "https",
            },
            {
                hostname: "portfolio-aman-ata.netlify.app",
                protocol: "https",
            }
        ],
    },
};

export default nextConfig;
