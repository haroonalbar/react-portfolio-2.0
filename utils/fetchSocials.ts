import {Social} from "../typings";

export const fetchSocials =async () => {
	//make a call to the backend
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
	const data = await res.json();
	const socials: Social[] = data.socials;

	//to check use console.log("fetching",socials);
	return socials;

}