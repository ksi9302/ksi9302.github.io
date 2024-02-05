import { TypedDocumentNode, gql } from "@apollo/client";
import { ProjectFields } from "./fragments";
import { project } from "./types";

export const GET_PROJECTS: TypedDocumentNode<{ projects: project[] }> = gql`
  ${ProjectFields}
  query GET_PROJECTS {
    projects(order_by: { ended: desc }) {
      ...ProjectFields
    }
  }
`;

export const GET_PROJECT_BY_ID: TypedDocumentNode<{
  projects_by_pk: project;
}> = gql`
  ${ProjectFields}
  query GET_PROJECT_BY_ID($id: Int!) {
    projects_by_pk(id: $id) {
      ...ProjectFields
    }
  }
`;
