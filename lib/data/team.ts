export interface TeamMember {
  slug: string; // sert aussi de clé de traduction : team.members.<slug>.role
  firstName: string;
  lastName: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    slug: "youssef",
    firstName: "Youssef",
    lastName: "Ounana",
    photo: "/images/team/youssef.jpeg",
  },
];
