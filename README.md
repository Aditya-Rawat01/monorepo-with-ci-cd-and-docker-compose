# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

- note: had to update the turbo.json to add the "globalPassThroughEnv": ["DATABASE_URL"] part so that it passes the github secret to nextjs build step.
the build step is passed with arg DB_URL which is used in packages/db env file.

- about:
This has cd pipelines which pushes to dockerhub for any changes pushed to github.
The only thing remaining is to add the final step of pulling the dockerhub images in vm and running them.