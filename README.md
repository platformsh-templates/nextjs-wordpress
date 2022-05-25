
<p align="right">
    <a href="https://platform.sh">
        <img src="https://platform.sh/logos/redesign/Platformsh_logo_black.svg" width="150px">
    </a>
</p>



<h1 align="center">Deploy Next.js and WordPress on Platform.sh</h1>

<p align="center">
    <strong>Contribute to the Platform.sh knowledge base, or check out our resources</strong>
    <br />
    <br />
    <a href="https://community.platform.sh"><strong>Join our community</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="https://docs.platform.sh"><strong>Documentation</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="https://platform.sh/blog"><strong>Blog</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="https://github.com/platformsh-templates/nextjs-wordpress/issues"><strong>Report a bug</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="https://github.com/platformsh-templates/nextjs-wordpress/issues"><strong>Request a feature</strong></a>
    <br /><br />
</p>

<p align="center">
    <a href="https://github.com/platformsh-templates/nextjs-wordpress/issues">
        <img src="https://img.shields.io/github/issues/platformsh-templates/nextjs-wordpress.svg?style=flat-square&labelColor=f4f2f3&color=ffd9d9&label=Issues" alt="Open issues" />
    </a>&nbsp&nbsp
    <a href="https://github.com/platformsh-templates/nextjs-wordpress/pulls/">
        <img src="https://img.shields.io/github/issues-pr/platformsh-templates/nextjs-wordpress.svg?style=flat-square&labelColor=f4f2f3&color=ffd9d9&label=Pull%20requests" alt="Open PRs" />
    </a>&nbsp&nbsp
    <a href="https://github.com/platformsh-templates/nextjs-wordpress/blob/master/LICENSE">
        <img src="https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square&labelColor=f4f2f3&color=ffd9d9" alt="License" />
    </a>&nbsp&nbsp
    <br /><br /><br />
<a href="https://console.platform.sh/projects/create-project/?template=https://raw.githubusercontent.com/platformsh-templates/nextjs-wordpress/master/.platform.template.yaml&utm_campaign=deploy_on_platform?utm_medium=button&utm_source=affiliate_links&utm_content=nextjs-wordpress" target="_blank" title="Deploy with Platform.sh"><img src="https://platform.sh/images/deploy/deploy-button-lg-blue.svg" width="175px"></a>
</p>
</p>

<hr>
<br />

## Contents

- [About this project](#about-this-project)
- [Getting started](#getting-started)
- [Customizations](#customizations)
- [Migrating](#migrating)
- [Contact](#contact)
- [Resources](#resources)
- [Contributing](#contributing)

## About this project

This template demonstrates a multi-app deployment on Platform.sh, in this case, a Next.js frontend consuming data from a WordPress backend running on the same environment. It is based largely on the configuration instructions provided by the [Nextjs-WordPress example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress).

Next.js is an open-source web framework written for Javascript, and WordPress is a flexible and extensible PHP-based CMS framework..

### Features

- PHP 8.1
- Node.js 16
- MariaDB 10.4
- Redis 6.0
- Network Storage
- Automatic TLS certificates
- Multi-app configuration
- yarn-based builds
- Delayed SSG build (post deploy hook)

## Getting started

### Deploy

#### Quickstart

The quickest way to deploy this template on Platform.sh is by clicking the button below. This will automatically create a new project and initialize the repository for you.

<p align="center">
    <a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/nextjs-wordpress/.platform.template.yaml&utm_content=nextjs-wordpress&utm_source=github&utm_medium=button&utm_campaign=deploy_on_platform">
        <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="170px" />
    </a>
</p>

> **Note:**
>
> If you do not already have a Platform.sh account, you will be asked to fill out some basic information, after which you will be given a 30-day free trial to experiment with our platform.

#### Other deployment options

<details>
<summary>Deploy directly to Platform.sh from the command line</summary><br />

1. Clone this repository:

   ```bash
   git clone https://github.com/platformsh-templates/nextjs-wordpress
   ```

1. Create a free trial:

   [Register for a 30 day free trial with Platform.sh](https://auth.api.platform.sh/register). When you have completed signup, select the **Create from scratch** project option. Give you project a name, and select a region where you would like it to be deployed. As for the *Production environment* option, make sure to match it to this repository's settings, or to what you have updated the default branch to locally.

1. Install the Platform.sh CLI

   #### Linux/OSX

   ```bash
   curl -sS https://platform.sh/cli/installer | php
   ```

   #### Windows

   ```bash
   curl -f https://platform.sh/cli/installer -o cli-installer.php
   php cli-installer.php
   ```

   You can verify the installation by logging in (`platformsh login`) and listing your projects (`platform project:list`).

1. Set the project remote

   Find your `PROJECT_ID` by running the command `platform project:list`

   ```bash
   +---------------+------------------------------------+------------------+---------------------------------+
   | ID            | Title                              | Region           | Organization                    |
   +---------------+------------------------------------+------------------+---------------------------------+
   | PROJECT_ID    | Your Project Name                  | xx-5.platform.sh | your-username                   |
   +---------------+------------------------------------+------------------+---------------------------------+
   ```

   Then from within your local copy, run the command `platform project:set-remote PROJECT_ID`.

1. Push

   ```bash
   git push platform DEFAULT_BRANCH
   ```

</details>

<details>
<summary>Deploy from GitHub</summary><br />

If you would instead to deploy this template from your own repository on GitHub, you can do so through the following steps.

> **Note:**
>
> You can find the full [GitHub integration documentation here](https://docs.platform.sh/integrations/source/github.html).

1. Clone this repository:

   Click the [Use this template](https://github.com/platformsh-templates/nextjs-wordpress/generate) button at the top of this page to create a new repository in your namespace containing this demo. Then you can clone a copy of it locally with `git clone git@github.com:YOUR_NAMESPACE/nextjs-wordpress.git`.

1. Create a free trial:

   [Register for a 30 day free trial with Platform.sh](https://auth.api.platform.sh/register). When you have completed signup, select the **Create from scratch** project option. Give you project a name, and select a region where you would like it to be deployed. As for the *Production environment* option, make sure to match it to whatever you have set at `https://YOUR_NAMESPACE/nextjs-wordpress`.

1. Install the Platform.sh CLI

   #### Linux/OSX

   ```bash
   curl -sS https://platform.sh/cli/installer | php
   ```

   #### Windows

   ```bash
   curl -f https://platform.sh/cli/installer -o cli-installer.php
   php cli-installer.php
   ```

   You can verify the installation by logging in (`platformsh login`) and listing your projects (`platform project:list`).

1. Setup the integration:

   Consult the [GitHub integration documentation](https://docs.platform.sh/integrations/source/github.html#setup) to finish connecting your repository to a project on Platform.sh. You will need to create an Access token on GitHub to do so.

</details>

<details>
<summary>Deploy from GitLab</summary><br />

If you would instead to deploy this template from your own repository on GitLab, you can do so through the following steps.

> **Note:**
>
> You can find the full [GitLab integration documentation here](https://docs.platform.sh/integrations/source/gitlab.html).

1. Clone this repository:

   ```bash
   git clone https://github.com/platformsh-templates/nextjs-wordpress
   ```

1. Create a free trial:

   [Register for a 30 day free trial with Platform.sh](https://auth.api.platform.sh/register). When you have completed signup, select the **Create from scratch** project option. Give you project a name, and select a region where you would like it to be deployed. As for the *Production environment* option, make sure to match it to this repository's settings, or to what you have updated the default branch to locally.

1. Install the Platform.sh CLI

   #### Linux/OSX

   ```bash
   curl -sS https://platform.sh/cli/installer | php
   ```

   #### Windows

   ```bash
   curl -f https://platform.sh/cli/installer -o cli-installer.php
   php cli-installer.php
   ```

   You can verify the installation by logging in (`platformsh login`) and listing your projects (`platform project:list`).

1. Create the repository

   Create a new repository on GitLab, set it as a new remote for your local copy, and push to the default branch.

1. Setup the integration:

   Consult the [GitLab integration documentation](https://docs.platform.sh/integrations/source/gitlab.html#setup) to finish connecting a repository to a project on Platform.sh. You will need to create an Access token on GitLab to do so.

</details>

<details>
<summary>Deploy from Bitbucket</summary><br />

If you would instead to deploy this template from your own repository on Bitbucket, you can do so through the following steps.

> **Note:**
>
> You can find the full [Bitbucket integration documentation here](https://docs.platform.sh/integrations/source/bitbuckethtml).

1. Clone this repository:

   ```bash
   git clone https://github.com/platformsh-templates/nextjs-wordpress
   ```

1. Create a free trial:

   [Register for a 30 day free trial with Platform.sh](https://auth.api.platform.sh/register). When you have completed signup, select the **Create from scratch** project option. Give you project a name, and select a region where you would like it to be deployed. As for the *Production environment* option, make sure to match it to this repository's settings, or to what you have updated the default branch to locally.

1. Install the Platform.sh CLI

   #### Linux/OSX

   ```bash
   curl -sS https://platform.sh/cli/installer | php
   ```

   #### Windows

   ```bash
   curl -f https://platform.sh/cli/installer -o cli-installer.php
   php cli-installer.php
   ```

   You can verify the installation by logging in (`platformsh login`) and listing your projects (`platform project:list`).

1. Create the repository

   Create a new repository on Bitbucket, set it as a new remote for your local copy, and push to the default branch.

1. Setup the integration:

   Consult the [Bitbucket integration documentation](https://docs.platform.sh/integrations/source/bitbucket.html#setup) to finish connecting a repository to a project on Platform.sh. You will need to create an Access token on Bitbucket to do so.

</details>

### Post-install instructions

There are two steps you will need to execute in order to complete the demo template run for the first deploy.

<details>
<summary>1. Update WordPress credentials</summary><br />

This demo repository is set up to deploy both front and backend application containers to the production environment, and to initialize the database with files and data generated by a collection of scripts that run during Drupal's first deploy.

When the project is initialized, a set of initial administrator credentials were used to install Drupal. In this case, the slug of the first commit event was used as the password. This is important because this information is only available during this first commit. After you've deployed the demo, view the first activity for the production environment, and find this block of text when Drupal's deploy hook runs:

```bash
Creating environment pr-1
  Starting environment
	Opening applications api, nextjs, and their relationships
	Executing deploy hook for application api

	  * Fresh project detected.
		  ✔ Installing WordPress
	  Success: WordPress installed successfully.
		  ✔ Installation complete.
		  ✔ Site is available at https://api.main-bvxea6i-z6d5mdnrun4va.ca-1.platformsh.site/
		  ✔ Your WordPress site has been installed with the following credentials:
			  * user:  admin
			  * pass:  PASSWORD-GENERATED-HERE-ON-FIRST-BUILD
			  * email: admin@example.com
		  ✗ WARNING: Update your password and email immediately. They will only be available once.
		  ✗ WARNING: Make sure to update the email address for both the admin user and in Settings --> General.
```

From this, you can log into WordPress using the credentials listed (`admin`/`PASSWORD-GENERATED-HERE-ON-FIRST-PUSH`) and then update them to something more memorable.

</details>

<details>
<summary>2. Rebuild the container</summary><br />

Platform.sh is secure by default. Part of that security involves read-only access to the file system and container isolation during the build process. Because of this, credentials for the frontend application were not yet available for the first Next.js build.

This will only be the case for this first deployment. The final post-install step is to add a build-visible environment variable to rebuilt and restart the Next.js container:

```bash
platform variable:create -p PROJECT_ID -e ENVIRONMENT -l environment --name DEPLOY --value FRIDAY --visible-build=true --prefix=env: -n
```

Once you have completed these steps, you will have a deployed Next.js container consuming data from a backend WordPress container on the same environment. You will be able to create a new environment that is an exact copy of production and start developing.

```bash
platform get PROJECT_ID
cd project-name
platform environment:branch updates
```

</details>

### Local development

This section provides instructions for running the Next.js + WordPress template locally, connected to a live database instance on an active Platform.sh environment.

In all cases for developing with Platform.sh, it's important to develop on an isolated environment - do not connect to data on your production environment when developing locally. Each of the options below assume the following starting point:

```bash
platform get PROJECT_ID
cd project-name
platform environment:branch updates
```

> **Note:**
>
> For many of the steps below, you may need to include the CLI flags `-p PROJECT_ID` and `-e ENVIRONMENT_ID` if you are not in the project directory or if the environment is associated with an existing pull request.

<details>
<summary>Running the WordPress backend</summary><br />

1. **Using ddev**:

   ddev provides an integration with Platform.sh that makes it simple to develop WordPress locally. Check the [providers documentation](https://ddev.readthedocs.io/en/latest/users/providers/platform/) for the most up-to-date information.

   In general, the steps are as follows:

	1. A configuration file has already been provided at `api/.ddev/providers/platform.yaml`, so you should not need to run `ddev config`.
	1. [Retrieve an API token](https://docs.platform.sh/development/cli/api-tokens.html#get-a-token) for your organization via the management console.
	1. Update your dedev global configuration file to use the token you've just retrieved:

	   ```yaml
	   web_environment:
	   - PLATFORMSH_CLI_TOKEN=abcdeyourtoken`
	   ```

	1. Run `ddev restart`.
	1. Get your project ID with `platform project:info`. If you have not already connected your local repo with the project (as is the case with a source integration, by default), you can run `platform project:list` to locate the project ID, and `platform project:set-remote PROJECT_ID` to configure Platform.sh locally.
	1. Update the `.ddev/providers/platform.yaml` file for your current setup:

	   ```yaml
	   environment_variables:
		  project_id: PROJECT_ID
		  environment: CURRENT_ENVIRONMENT
		  application: wordpress
	   ```

	1. Get the current environment's data with `ddev pull platform`.
	1. When you have finished with your work, run `ddev stop` and `ddev poweroff`.

1. **Using Lando**:

   Lando supports PHP applications configured to run on Platform.sh, and pulls from the same registry Platform.sh uses on your remote environments during your local builds through its own [recipe and plugin](https://docs.lando.dev/platformsh/).


      1. When you have finished with your work, run `lando stop` and `lando poweroff`.

</details>

<details>
<summary>Running the Next.js frontend</summary><br />

After you have created a new environment, you can connect to a backend WordPress instance and develop the frontend locally with the following steps.

1. `cd client`
1. Update the environment variables for the current environment by running `./get_local_config.sh`. This will pull the generated `.env.local` file for the current environment.

   ```bash
   # This .environment file is generated programmatically within the backend WordPress app for each Platform.sh
   # environment and stored within an network storage mount so it can be used locally.
   WORDPRESS_API_URL=https://api.ENVIRONMENT-HASH-PROJECTID.REGION.platformsh.site/graphql
   WORDPRESS_PREVIEW_SECRET=GENERATED_SECRET
   IMAGE_DOMAIN=api.ENVIRONMENT-HASH-PROJECTID.REGION.platformsh.site
   WORDPRESS_AUTH_REFRESH_TOKEN=GENERATED_TOKEN
   ```

1. Install dependencies: `yarn --frozen-lockfile`.
1. Run the development server: `yarn dev`. Next.js will then run on http://localhost:3000.

</details>

## Customizations

The following changes have been made relative to the WordPress Composer template. If using this project as a reference for your own existing project, replicate the changes below to your project.

<details>
<summary>Shared files</summary><br />

- `.platform/services.yaml`, and `.platform/routes.yaml` files have been added. These provide Platform.sh-specific configuration for provisioning a MariaDB container and for defining how traffic is handled between the two application containers, respectively. They are present in all projects on Platform.sh, and you may customize them as you see fit. Consult those files for more information, or take a look at the [Routes](https://docs.platform.sh/configuration/routes.html) and [Services](https://docs.platform.sh/configuration/services.html) documentation for details about configuration.

</details>

<details>
<summary>WordPress (<code>api</code>)</summary><br />

- `api/wp-cli.yml`: @todo document
- `api/.lando.upstream.yml`: A default Lando configuration file has been added to make starting up locally with Lando easier. See the [Local development](#local-development) section for more details.
- `api/wp-config.php`: Contains Platform.sh-specific configuration, namely setting up the database connection to the MariaDB service and caching via Redis.
- `api/plugins/headless-frontend-preview`: Alters the preview link in WordPress to allow previewing of the post as built by the NextJS application.
- A `api/.platform.app.yaml` file has been added, which is required to define the build and deploy process for all application containers on Platform.sh. Take a look at the [Application](https://docs.platform.sh/configuration/services.html) documentation for more details about configuration.
- `.ddev`: ddev local development configuration has been provided. See the [Local development](#local-development) section for more details.

In addition, a number of extra files have been included in this template to support Next.js + WordPress connections across development environments on Platform.sh. All of those files can be found in the `api/platformsh-scripts` directory.

In most cases, you will be able to use most of the files included in that directory in your migration, but not all of them will be relevant since this template is intended to provide a "one-click" demo for Next.js-WordPress. [See the Migrating section for more information](#migrating).

</details>
<!-- 
<details>
<summary>Next.js customizations (<code>client</code>)</summary><br />

As outlined in the [Next.js-Drupal documentation](https://next-drupal.org/), the Next.js frontend application has been generated from the [Chapter Three upstream](https://github.com/chapter-three/next-drupal-basic-starter) using the `npx create-next-app -e https://github.com/chapter-three/next-drupal-basic-starter` command. The most important changes made to that starting point are listed below. You can replicate those changes to migrate your own Next.js frontend pulling data from Drupal.

- `sharp` was added as a dependency, since it is recommended for handling images.
- The upstream repo comes with a single start command (`yarn preview`) which is a combination of two commands (`next build && next start`). During deployment these commands need to be run separately, so the commands `yarn build` and `yarn start` have been added to `package.json`.
- A `client/.environment` file has been added. This file is sourced on a Platform.sh environment during startup, at the beginning of the deploy hook, and whenever you SSH into the environment (`platform ssh -e ENVIRONMENT_ID`). It initializes environment variables specific to this demo, related to the Drupal backend URL and initial connection credentials.
- A `client/get_local_config.sh` script has been added. This script simplies the local development process, by connecting to an active Platform.sh environment and retrieving the required `.env.local` file needed to run Next.js on your computer. See the [Local development](#local-development) section for more details.
- A `client/.platform.app.yaml` file has been added, which is required to define the build and deploy process for all application containers on Platform.sh. Because of how Platform.sh works, the Next.js build is delayed considerably to the `post_deploy` hook after the Drupal container has fully deployed and has begun serving its endpoints. Take a look at the [Application](https://docs.platform.sh/configuration/services.html) documentation for more details about configuration.
- `client/platformsh-scripts/test/next-drupal-debug`: Despite very detailed documentation provided from the Chapter Three team, developers often run into issues setting up the Next.js/Drupal connection for the first time. The problem is made more difficult on Platform.sh, since certain parts of the configuration need to be re-established each time a new development environment is opened. Chapter three provides a debugging tool, [`next-drupal-debug`](https://github.com/shadcn/next-drupal-debug), that uses the expected connection credentials (on the Next.js side) to test that Drupal has been properly configured. This demo template includes a copy of this tool, which has been modified slightly to pull those credentials from environment variables. You will see that the connection is tested during the `post_deploy` hook in `.platform.app.yaml` to ensure everything is working properly.

</details>
-->

### Migrating

Read the [#customizations](Customizations) section first if you have not already. It contains added files that are required to deploy on Platform.sh, and that will be necessary to migrate WordPress, and to deploy a Next.js site alongside it. 

This repository is intended to be a demo. It makes certain decisions so that users can quickly deploy a full Next.js + WordPress project that

1. Will work automatically across development environments.
1. Deploys successfully upon initialization, with a single click.
1. Comes with generated dummy content to showcase the final application.

In reality, only the first point is relevant for your migration, but this section attempts to explain the full logic of how configuration is handled to be the most helpful to your use case. 

<details>
<summary>Summary and Platform.sh development environment configuration logic</summary><br />

A completely fresh WordPress installation is our starting point. A number of configuration changes are made to WordPress (adding plugins, configuring a user specific to NextJS, generating tokens, etc.) that make it a valid API that a specific Next.js site can consume. Then the Next.js frontend example from the [NextJS WordPress example demo](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) is cloned and used for the frontend.

Part of the documentation's assumptions are the fact that the final WordPress site will be deployed somewhere, and that the Next.js site will be deployed somewhere else. Going forward, everything about the frontend and backend connection credentials are hard-coded and must be updated by the developer into their pipeline.

Platform.sh works differently. We assume that WordPress and Next.js will be deployed together to a single final environment. There are some advantages to this approach, namely that the location and connection secrets for the backend can be pulled from the environment itself rather than hardcoded. Also, because of this, it's possible to branch off *new* development environments that likewise have access to these credentials.

In order to accomplish, some of the configuration has to be accomplished once when the demo is first deployed, while others have to be run on the first deployment of each new environment. As you might expect, the steps run only once can be executed manually during migration on the production environment. They are included here in the case that you have many of these kinds of sites being deployed in a fleet, where some automation is desired. For the most part however, the environment-level configuration of the second kind will need to be replicated or copied in your own migration, for which this template provides one example of how to do it.

</details>

<details>
<summary>How configuration is tracked across enviroments</summary><br />

There are a lot of moving parts to make this relationship work. Because of this, there is a committed `api/platformsh-scripts/settings.default.json` included with this template. On a quick glance, most of the settings described in the [Next.js-Drupal documentation](https://next-drupal.org/) are included here. Other values (like secret keys) are pulled from non-public Platform.sh-provided environment variables during deployment.

It's with this file that we will set both project and environment level configuration. It is placed in a network storage mount, so that we can retain write access to it when new environments are created. You can view this contents of this file by SSHing into either application container and viewing `deploy/settings.json`.

Besides that, all of the steps below that either configure WordPress or modify this file can be found from `api/platformsh-scripts/hooks.deploy.sh`. By following the comments in that script, along with the accompanying called scripts for each step, you should have everything you need to track and replicate for your own migration. File names and locations relevant to this demo can be found in `api/.environment`.

</details>

<details>
<summary>Project-level configuration: initializing the production environment</summary><br />

Below are the steps taken during WordPress' deploy hook only on the first deployment:

1. `api/platformsh-scripts/settings.default.json` is copied to a well-defined writable location.
1. WordPress is installed and an initial admin account with password is created.
1. Plugins relevant to Next.js-WordPress are enabled.
1. A user account specific to the NextJS app is created.
1. Content is configured. This step is will likely not be needed in your migration. Because of this, the script `04-configure-content` checks for two environment variables (`CREATE_DEMO_NODES` and `CREATE_PATHAUTO_ALIASES`) that are set in `api/.platform.app.yaml`. If you do not need to 1) configure pathauto aliases, or 2) generate dummy articles, you can set both of those values to `false`. Once you have dont that, it should be possible to copy the `platformsh-scripts` directory completely and run it for your own migration.

When you first deploy this template, the activity log should look like this for the deploy hook:

```bash
Opening applications api, nextjs, and their relationships
Executing deploy hook for application api

  * Fresh project detected.
	  ✔ Installing WordPress
  Success: WordPress installed successfully.
	  ✔ Installation complete.
	  ✔ Site is available at https://api.main-bvxea6i-z6d5mdnrun4va.ca-1.platformsh.site/
	  ✔ Your WordPress site has been installed with the following credentials:
		  * user:  admin
		  * pass:  PASSWORD-GENERATED-HERE-ON-FIRST-PUSH
		  * email: admin@example.com
	  ✗ WARNING: Update your password and email immediately. They will only be available once.
	  ✗ WARNING: Make sure to update the email address for both the admin user and in Settings --> General.
	  ✔ Enabing plugins (see https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress).
		  * wp-graphql
		  * wp-graphql-jwt-authentication
		  * headless-frontend-preview
		  * wp-graphql-jwt-authentication-wp-cli
  Plugin 'wp-graphql' activated.
  Success: Activated 1 of 1 plugins.
  Plugin 'wp-graphql-jwt-authentication' activated.
  Success: Activated 1 of 1 plugins.
  Plugin 'headless-frontend-preview' activated.
  Success: Activated 1 of 1 plugins.
  Plugin 'wp-graphql-jwt-authentication-wp-cli' activated.
  Success: Activated 1 of 1 plugins.
	  ✔ Generating demo posts (see https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress#step-2-populate-content).
		  * Post data:       04-dummy-posts.json
		  * Number of posts: 15
		  ! Get some coffee, this will take a moment...
		  * Post 4: A Circumhorizontal Arc Over Ohio
      ...
      ...
          * Post 32: Dark Craters and Bright Spots Revealed on Asteroid Ceres
```

There will be additional steps after that, but those are addressed in the next section on **Environment-level configuration**.

</details>

<details>
<summary>Environment-level configuration: Reconfiguring every new environment</summary><br />

At this point you would configure a user refreshToken associated with a specific Next.js frontend url location. On Platform.sh, this location will entirely depend on which development environment we're on, so this configuration has to be done on every new environment, instead of just once at the project-level.

1. In the first step, its determined whether or not we're running on a newly created environment. Every development environment on Platform.sh inherits data from its parent, so this first step resets all of the configuration described in the next steps if it is indeed a new environment.
2. We verify we have a user account that we can use for connecting from the NextJS application.
3. An application password is created for the user, associated with the NextJS application.
4. A refreshToken is requested using the user's credentials.
5. In the last step executed in `04-track-environment.sh`, it may seem like a lot of things are going on. The summary is as follows:

   a. Our tracking settings file is updated to reflect the changes for the current environment.
   b. A `platformsh.environment` file is generated. You will recognize this file as containing all of the required environment variables for the Next.js side. In this step, the file is created, and then saved into a network storage mount. Network storage is a helpful service, because once moved there the frontend Next.js container will have access to it.
   c. Almost identically to the above, a `platformsh.env` file is generated. While the above is meant to be used within a Platform.sh environment, this file is meant to be used for local development. You can see the [#local-development](Local Development) section for details, but the important point is that the script `/client/get_local_config.sh` can be run to retrieve this file for the current environment while you are working.

When a new environment is created, the deploy hook will look like the below in the activity log:
@todo - finish
<!--
```bash
* New environment detected.
   ✔ Deleting parent environment's configuration
* Configuring the current environment.
   ✔ Generating keys (see https://next-drupal.org/learn/quick-start/create-consumer).
      * location: /app/private
      * public_key: /app/private/public.key
      * private_key: /app/private/private.key
   ✔ Creating the OAuth consumer for the current environment (see https://next-drupal.org/learn/quick-start/create-consumer).
      * user_uid: 2
      * consumer_id: oauth_consumer_env
      * consumer_label: Next.js OAuth Env Consumer
      * consumer_site: oauth_consumer_role
      * consumer_secret: SOME_SECRET
      * consumer_uid: SOME_ID
   ✔ Creating the NextJS site entity (see https://next-drupal.org/learn/quick-start/create-nextjs-site).
      * id: nextjs_site
      * label: Next.js Site
      * base_url: https://ENVIRONMENT-HASH-PROJECT_ID.eu-3.platformsh.site
      * preview_url: https://ENVIRONMENT-HASH-PROJECT_ID.eu-3.platformsh.site/api/preview
      * preview_secret: ENVIRONMENT-HASH
   ✔ Configuring previews (see https://next-drupal.org/learn/quick-start/configure-content-types).
      * site: nextjs_site
      * id: node.article
      * site_resolver: site_selector
   ✔ Logging frontend configuration.
* Preparing credentials to hand off to frontend container.
* Writing local configuration.
```
-->
After this line, two configuration files are shown - a `.env.local` and a `.environment` file - which are used to help you develop locally and connect to the backend within a Platform.sh environment, respectively.

</details>

## Contact

This template is maintained primarily by the Platform.sh Developer Relations team, and they will be notified of all issues and pull requests you open here.

- **Community:** Share your question with the community, or see if it's already been asked on our [Community site](https://community.platform.sh).
- **Slack:** If you haven't done so already, you can join Platform.sh's [public Slack](https://chat.platform.sh/) channels and ping the `@devrel_team` with any questions.

## Resources

- [Next.js WordPress Demo](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
- [WordPress on Platform.sh](https://docs.platform.sh/guides/wordpress/deploy.html)

## Contributing

<h3 align="center">Help us keep top-notch templates!</h3>

Every one of our templates is open source, and they're important resources for users trying to deploy to Platform.sh for the first time or better understand the platform. They act as getting started guides, but also contain a number of helpful tips and best practices when working with certain languages and frameworks.

See something that's wrong with this template that needs to be fixed? Something in the documentation unclear or missing? Let us know!

<h4 align="center"><strong>How to contribute</strong></h4>
<br />
<p align="center">
    <a href="https://github.com/platformsh-templates/nextjs-drupal/issues"><strong>Report a bug</strong></a><br />
    <a href="https://github.com/platformsh-templates/nextjs-drupal/issues"><strong>Submit a feature request</strong></a><br />
    <a href="https://github.com/platformsh-templates/nextjs-drupal/pulls"><strong>Open a pull request</strong></a><br />
</p>
<br />
<h4 align="center"><strong>Need help?</strong></h4>
<br />
<p align="center">
    <a href="https://community.platform.sh"><strong>Ask the Platform.sh Community</strong></a><br />
    <a href="https://chat.platform.sh"><strong>Join us on Slack</strong></a><br />
</p>
<br /><br />
<h3 align="center"><strong>Thanks to all of our amazing contributors!</strong></h3>

<br/>

![GitHub Contributors Image](https://contrib.rocks/image?repo=platformsh-templates/nextjs-drupal)

<br />
