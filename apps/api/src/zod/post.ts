import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteUser, RelatedUserModel } from "./index"

export const PostModel = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string().nullish(),
  published: z.boolean(),
  authorId: z.number().int(),
})

export interface CompletePost extends z.infer<typeof PostModel> {
  author: CompleteUser
}

/**
 * RelatedPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModel: z.ZodSchema<CompletePost> = z.lazy(() => PostModel.extend({
  author: RelatedUserModel,
}))
