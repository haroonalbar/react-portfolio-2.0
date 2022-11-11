import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

//we only need the first info so [0] is used
const query = groq`
*[_type=='pageInfo'][0]
`;
//what should the response be structured as
type Data = {
  pageInfo: PageInfo;
};
//to solve type definition error typings.d.ts in root

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
