import {Experience} from "../typings";

export const fetchexperiences =async () => {
	//make a call to the backend
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getexperience`);
	const data = await res.json();
	const experiences: Experience[] = data.experiences;

	//to check use console.log("fetching",experiences);
	return experiences;

}