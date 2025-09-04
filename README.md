# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```
This has cd pipelines which pushes to dockerhub for any changes pushed to github.
The only thing remaining is to add the final step of pulling the dockerhub images in vm and running them.