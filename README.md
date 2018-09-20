# adidas GitHub Portal

Website to display adidas Open Source projects.

# How To

## Show a REPOSITORY in adidas GitHub Portal

A repository must comply with the following:

1. Belongs to https://github.com/adidas
1. `.meta.yml` file exists

### .meta.yml definition

| Key | Defaults | Description |
| --- | --- | --- |
| `imageUrl` | `'/img/source.jpg'` | A representative image of the project |
| `backgroundColor` | N/A | Background color for the card |
| `display.name` | `""` | Overrides the repository name from GitHub |
| `display.description` | `""` | Overrides the repository description from GitHub |
| `keywords` | `[]` | A list of keywords to search for this repo |

## Show a PROJECT in adidas GitHub Portal

To show a project in the GitHub portal, go to adidas GitHub portal CMS.

### Project configuration

| Key | Required | Defaults | Description |
| --- | --- | --- | --- |
| `id` | Yes | N/A | A unique identifier for the project |
| `name` | Yes | N/A | The name of the project |
| `description` | Yes | N/A | A brief description of the project |
| `url` | Yes | N/A | The link to the public website of the project |
| `config.imageUrl` | Yes | N/A | A representative image of the project |
| `config.backgroundColor` | No | N/A | Background color for the card |
| `config.keywords` | No | `[]` | A list of keywords to search for this project |

# Development

## Requirements

- node >= 8
- npm >= 5

## npm scripts

```npm start```

Runs a development server on `localhost:3000`. Runs `nuxt` under the hood.

```npm run build```

Builds the project distributables. Runs `nuxt generate --spa` under the hood so the website is ready to be deployed as a Single Page Application.

```npm run serve```

Runs the site on a server with SSR capabilities. Runs `nuxt build && nuxt start` under the hood.

```npm run lint```

Runs `eslint` to check that all the source JS and Vue files are compliant.

## Style and font definitions

This project style is based on [adidas **YARN** Design System][yarn] with some customizations.

adidas is using this project as GitHub page, and the fonts used to deploy it on GitHub do not have public rights. For that reason, this project has been configured to use [_Poppins_][poppins] and [_Roboto_][roboto] as default fonts, however, they can be changed (see [**YARN** documentation][yarn-doc-fonts]).

# Deployment

## GitHub Pages

```
git checkout develop
npm install
npm run build
git add -f ./dist
git commit -m "Update gh-pages"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:master
```

## Dockerize

```
npm install
npm run build
npm prune --production
docker build -t adidas-github-io .

docker run -dit \
           --name adidas-github-io \
           -p 1337:80 \
           adidas-github-io
```

## Deploy to k8s

Set up your k8s cluster to deploy the Docker image.

```
npm install
npm run build
npm prune --production
docker build -t tools.adidas-group.com:5000/pabb/adidas-github-io .
docker push tools.adidas-group.com:5000/pabb/adidas-github-io
envsubst < deploy/all.yml > deploy.yml
kubectl apply -f deploy.yml
```
[poppins]: https://fonts.google.com/specimen/Poppins
[roboto]: https://fonts.google.com/specimen/Roboto
[yarn]: https://adidas.github.io/adidas-yarn-design-system/
[yarn-doc-fonts]: https://github.com/adidas/adidas-yarn-design-system/#font-definitions
