# Travel App

A travel application that integrates Geonames, Weatherbit, and Pixabay APIs.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Start the server: `npm start`

## Node.js Version

Ensure you are using Node.js version **v18.18.2** to avoid any compatibility issues with dependencies.


## APIs Used

- **Geonames API**: For location coordinates.
- **Weatherbit API**: For current weather data.
- **Pixabay API**: For images of the location.

## License

This project is licensed under the MIT License.


### Webpack Configuration

The project is using Webpack 5. The `devServer` has been updated to use the `static` option instead of `contentBase`:

```js
devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 9000,
}