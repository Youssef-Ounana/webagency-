export interface TeamMember {
  slug: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
}

export const team: TeamMember[] = [
  {
    slug: "youssef",
    firstName: "Youssef",
    lastName: "Ounana",
    photo: "/images/team/youssef.jpeg",
    role :"Fondateur & Développeur Full Stack"
  },
  {
    slug: "Za3im negh",
    firstName: "Ilham",
    lastName: "Ouhaddou",
    photo: "/images/team/ilham.jpeg",
    role :"Za3im negh i7lan, aynna tnna ayd illan"
  }
];