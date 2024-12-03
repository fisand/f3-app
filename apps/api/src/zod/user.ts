import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompletePost, RelatedPostModel } from "./index"

export const UserModel = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  posts: CompletePost[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  posts: RelatedPostModel.array(),
}))
