# dark-mode-pin-login

Create a single main page with a 4 digit pin login system all in dark mode. The site title is 'FlexNode 4'. 

The login page should have the site title 'FlexNode 4', with the node 'Name: Something' and node 'ID: 1', followed by the entry field and a numeric keypad with enter button all centered in a stylish layout. Only allow the user to use the on screen number pad, with enter and back button added to the pad.

The main page once logged in should have the title in the top left, with a 'Upload', 'Download', 'Reboot', and 'Logout' buttons in the top right.

On the main page first is a row of Styled Individual Widgets displaying stats like 'CPU' with CPU load in % and on the subline below in the widget temperature in F, 'Network' with current throughput in Mb/s and on the subline below in the widget packets per second on the lower part, 'Storage' used in MB with free storage in MB on the subline below in the widget, 'Environment' chassis temp in F and on the subline below in the widget humidity in %, and 'Power' total load in Watts and on the subline below in the widget a source like 'POE'.

Then after the stats widgets row, I would like a fll width 'Settings' section with 2 items per row to make it more compact such as 'Node Name' string field (ensure alphanumeric only up to 32 chars), Node ID integer from 0 - 999999 (check and warn for input), Illumination (Bright/Normal/Low/Off) default Normal, etc.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/dark-mode-pin-login.git
cd dark-mode-pin-login
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
