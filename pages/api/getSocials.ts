import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type=='social']
`;
//what should the response be structured as
type Date = {
  socials: Social[];
};
//to solve type definition error typings.d.ts in root

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
