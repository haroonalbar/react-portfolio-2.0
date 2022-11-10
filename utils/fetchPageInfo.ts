import {PageInfo} from "../typings";

export const fetchpageInfo =async () => {
	//make a call to the backend
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpageInfo`);
	const data = await res.json();
	const pageInfo: PageInfo[] = data.pageInfo;

	//to check use console.log("fetching",pageInfo);
	return pageInfo;

}