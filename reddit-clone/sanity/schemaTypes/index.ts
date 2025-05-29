import { type SchemaTypeDefinition } from 'sanity'
import { userType } from './userType'
import { postType } from './postType'
import { subredditType } from './subredditType' 
import { voteType } from './voteType'
import { commentType } from './commentType' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType, postType, subredditType, voteType, commentType],
}
