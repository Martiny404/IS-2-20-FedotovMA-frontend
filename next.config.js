/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	optimizeFonts: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/static/**',
			},
		],
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:5000/api/:path*`,
			},
			{
				source: '/static/:path*',
				destination: `http://localhost:5000/static/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
