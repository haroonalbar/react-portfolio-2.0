import {Skill} from "../typings";

export const fetchSkills =async () => {
	//make a call to the backend
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`);
	const data = await res.json();
	const skills: Skill[] = data.skills;

	//to check use console.log("fetching",skills);
	return skills;

}