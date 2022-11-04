export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    //name represents the name in hero section Yo! It's Haroon
    { name: "name", title: "Name", type: "string" },
    //software engineer in hero section
    { name: "role", title: "Role", type: "string" },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: { hotspot: true },
    },
    { name: "phoneNumber", title: "PhoneNumber", type: "string" },
    //in video type is in string I changed to email
    { name: "email", title: "Email", type: "email" },
    { name: "address", title: "Address", type: "string" },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
