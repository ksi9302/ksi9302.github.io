export interface project {
  id: number;
  title: string;
  status: {
    id: number;
    color: string;
    name: string;
  };
  imgs: string[];
  code: string;
  desc: string;
  stacks: string[];
  duration: number;
  ended?: string;
}
