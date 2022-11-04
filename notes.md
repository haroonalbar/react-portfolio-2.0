create a next js app using the appropriate commands
if it is yarn then use yarn add insted of npm install
install tailwindcss for next js

create a new folder called components and create a component file called Header.tsx because we are using ts

header.tsx
type tsrfc to auto making it component for typescript

index.js
use ctl+SPACE on the component in index.tsx to import it automatically

header.tsx
make social icons
react-social-icons
use it becuse it can automatically get the icon for the url
go to its site and get the cmd to install it
use yarn insted of npm and add insted for install
import it like in the site
use the sample in the site to make an icon

framer motion fro the animations
yarn add framer-motion
to install it

if you want to add an animation using framer motion change the div to motion.div
and import it using
import {motion} from 'framer-motion';

header is done now hero section

index.tsx
create a component <hero />
make a hero.tsx in components and use tsrfce for auto componet code

use react-simple-typewriter for the typewriter animation in hero section
yarn add react-simple-typewriter
to install it

hero.tsx
use the correct import for typerwriter
read the documetaion for importing and how to use it

making background circles
make a component for it
create circles using tailwind

hero.tsx
make the main div overflow-hidden to not show anything outside the screen in index.js and hero.tsx

index.js
div

BackgroundCircles.tsx
use framer motion

hero.tsx
set up nav buttons and stuff

index.js
new section about component

about.tsx
tsrfce
don't know what happened but the images is not poping on about

WorkExperience.tsx

yarn add next-images
worked for adding images that was not displaying first
use relative on div and use layout='fill' and objectFit='cover' and rounded inside className in Image component

do skills and projects

use hero icon for icons in contact

there are issues with skill and projects but we will see if we can fix it later

after making the contactme component

use react hooks from
to get the data from the from
yarn add react-hook-form

adding tailwind scroller
yarn add -D tailwind-scrollbar
also add the plugin to the tailwindconfig

//note look at bhance and dribble for design ispiration

make an at the footer to goto the hero section

sanity
working:
npm install -g @sanity/cli

used:
yarn global add @sanity/cli
npx @sanity/cli init --coupon sonny2022
set project name: portfolio-2-react
path name : sanity
use default
select blog

notworking:
sanity init --coupon sonny2022

through the site got tis also
npx -y @sanity/cli init --template get-started --project geiweo4k --dataset production --provider google
to set up

exclude the nodemodules in the sanity folder if dont want to get any error while installing dependencies
