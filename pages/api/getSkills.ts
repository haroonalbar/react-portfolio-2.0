import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`
		*[_type=='skill']
`;
//what should the response be structured as
type Data = {
  skills: Skill[];
};
//to solve type definition error typings.d.ts in root

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
