import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`
*[_type=='project']{
	...,
	technologies[]->
}
`;
//what should the response be structured as
type Data = {
  projects: Project[];
};
//to solve type definition error typings.d.ts in root

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
