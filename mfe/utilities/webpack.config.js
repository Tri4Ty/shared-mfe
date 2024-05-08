/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");
const path = require("path");

const config = (env, { mode = "development", port = 9012 }) => {
	return {
		mode,
		resolve: {
			modules: [path.resolve(__dirname, "src"), "node_modules"],
			extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
			alias: {
				"react-dom": "@hot-loader/react-dom"
			}
		},
		entry: {
			main: "./src"
		},
		...(mode === "development" && { devtool: "eval-source-map" }), // 'eval' is not supported by error-overlay-webpack-plugin
		output: {
			filename: "[name].[contenthash].js",
			path: path.resolve(__dirname, "dist"),
			publicPath: "auto",
			clean: true,
			pathinfo: false
		},
		devServer: {
			historyApiFallback: {
				disableDotRule: true
			},
			client: {
				overlay: {
					errors: true,
					warnings: false
				},
				progress: true
			},
			port: port,
			liveReload: true,
			hot: false
		},
		optimization: {
			// disable chunk optimization; otherwise getting `ChunkLoadError: Loading chunk vendors failed.` when trying
			// to load mfe from remotes.
			splitChunks: false
		},
		performance: {
			maxAssetSize: 350000,
			hints: "warning"
		},
		plugins: [
			new ModuleFederationPlugin({
				name: "utilities",
				filename: "utilitiesRemoteEntry.js",
				exposes: {
					"./IAm": "./src/components/IAm.tsx"
				},
				shared: packageJson.dependencies
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "src", "index.html")
			})
		],
		watchOptions: {
			ignored: "**/node_modules"
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				},
				{ test: /\.(sa|sc|c)ss$/, use: ["style-loader", "css-loader", "sass-loader"] },
				{
					test: /\.scss$/,
					use: [
						{
							loader: "css-loader",
							options: {
								modules: true
							}
						},
						"sass-loader"
					],
					issuer: /\.html?$/i
				},
				{
					test: /\.html$/i,
					loader: "html-loader"
				},
				{
					test: /\.svg$/,
					use: ["@svgr/webpack"]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: "file-loader"
						}
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource"
				},
				{
					test: /\.po$/,
					loader: "ignore-loader"
				}
			]
		}
	};
};

module.exports = config;
