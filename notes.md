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

schema is bacially saying what should be the shape of the database be
transform post.js to pageInfo.js

schema.js add pageInfo and remove all the unessasary to start with a clean page

delete all other except pageInfo and schema in schemas

copy paste pageInfo to make experience
simillarly make project skill social

and import all those in schema

To Deploy sanity

cd sanity
sanity start // not working
npx @sanity/cli start // works// if you want to work with local host and see the vision use this

add all the deatils in sanity

npx @sanity/cli deploy
give a host name: react-portfolio-demo
now you teammembers can work on it

install next sanity
cd ..
yarn add next-sanity @portabletext/react @sanity/image-url

create sanity.ts on the root folder
create .env.example
and .env.local //we use this one

login in sanity.io to get the project ID

create new api endpoint to get the socials from sanity
pages/api/getSocials.ts

create typings.d.ts to do type definitions for all the components
we get the values from sanity vision 
*[_type=='experience']{} //example used to fetch experience in the vision
if you want to expand and view the reference eg. expanding technologies in project
*[_type=='project']{
	...,
	technologies[]->
}

new file on pages/api copy/paste and edit edit groq for the ones using reference for expansion
getSkills.ts
getProjects.ts
getPageInfo.ts
getExperience.ts

now all these api endpoints will fetch the relevent info
to check its working eg.
localhost:3000/api/getSocials

creating utility features in frontend
root/utils create folder
inside create fetchSkills.ts
cpy/paste for all other fetchs

