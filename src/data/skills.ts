export type Skill = {
  image?: string;
  name: string;
  expertise: 'Expert' | 'Intermediate';
};

const skills: Skill[] = [
  { name: 'Flutter', expertise: 'Expert' },
  { name: 'Android', expertise: 'Expert' },
  { name: 'SQL', expertise: 'Expert' },
  { name: 'Firebase', expertise: 'Expert' },

  { name: 'Node.js', expertise: 'Expert' },
  { name: 'Rest Api', expertise: 'Expert' },
  { name: 'GraphQL', expertise: 'Expert' },
];

export default skills;
