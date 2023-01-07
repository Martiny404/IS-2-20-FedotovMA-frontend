/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	reactStrictMode: false,
	optimizeFonts: true,
	env: {
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '5000',
				pathname: '/static/**',
			},
		],
	},

	async rewrites() {
		return [
			// {
			// 	source: '/api/:path*',
			// 	destination: `http://localhost:5000/api/:path*`,
			// },
			{
				source: '/static/:path*',
				destination: `http://localhost:5000/static/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
