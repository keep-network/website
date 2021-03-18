# keep.network website

The Keep network website - [keep.network](https://keep.network)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Want to contribute? Check out our [guidelines](CONTRIBUTING.md).

## Development
### Setup
Install dependencies:

```sh
npm install 
```

### Run
To run the app in the development mode:
```sh
npm run develop
```

Open http://localhost:8000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment
Currently the site is auto-deployed on master merge to Google Cloud Storage and fronted by Cloudflare at [keep.network](https://keep.network/). Pull requests (including those created by the CMS) are auto-deployed to subdirectories at [preview.keep.network](https://preview.keep.network) by branch name.
