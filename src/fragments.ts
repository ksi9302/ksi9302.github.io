import { gql } from "@apollo/client";

export const ProjectFields = gql`
  fragment ProjectFields on projects {
    id
    title
    desc
    code
    imgs
    statusId
    status {
      id
      name
      color
    }
    stacks
    ended
    duration
    lang
  }
`;
