import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`
*[_type=='experience']{
	...,
	technologies[]->
}
`;
//what should the response be structured as
type Data = {
  experiences: Experience[];
};
//to solve type definition error typings.d.ts in root

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
