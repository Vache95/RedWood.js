import { gql } from '@apollo/client'

export const All_TODO = gql`
query AllTodos{
  links{
    /todos/1
  }
}
`
