# Burden Bot for Open Source Github Repositories
The Burden Bot is a tool that can be added to open source Github repositories to help with the management of issues and pull requests. This bot has advanced features such as identifying feature requests and the requestor's affiliation with a Fortune 500 organization. Additionally, it can identify if the requestor's organization has sponsored the repo maintainer via Thanks.dev.

## Features
The Burden Bot can perform the following functions:

Automatically identify if an issue or pull request is a feature request.
Identify if the requestor is affiliated with a Fortune 500 organization.
Identify if the requestor's organization has sponsored the repo maintainer via Thanks.dev.
Leave a message asking for sponsorship from the requestor's organization if they belong to a Fortune 500 company and have requested a feature but have not sponsored the repo maintainer.
How to Use
To use the Burden Bot, you must first add it to your open source Github repository. Once added, the bot will start monitoring the repository's issues and pull requests.

## Configuration
To enable the advanced features of the Burden Bot, you need to configure it with the necessary access tokens and API keys. This configuration can be done via environment variables or a configuration file.

The following are the environment variables that need to be set:

GITHUB_TOKEN: This token is required to access Github's API.
THANKS_DEV_TOKEN: This token is required to access Thanks.dev's API.
Usage
Once the Burden Bot is configured, it will start monitoring the repository's issues and pull requests. When it identifies a feature request raised by a requestor from a Fortune 500 company that has not sponsored the repo maintainer via Thanks.dev, it will leave a message asking for sponsorship.

The Burden Bot will continue to monitor the repository's issues and pull requests and perform the necessary actions based on the configured rules.

## Conclusion
The Burden Bot is an excellent tool for managing open source Github repositories. It can help reduce the burden on the repository maintainer and ensure that feature requests are managed efficiently.
