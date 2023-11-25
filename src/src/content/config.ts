import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string(),
            heroImage: image(),
            shortDescription: z.string(),
            btsDescription: z.string(),
            category: z.string(),
            featured: z.boolean().default(false),
            actors: z.array(z.string())
        })
})

const profilesCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string(),
            image: image(),
            userType: z.string()
        })
})

const categoriesCollection = defineCollection({
    schema: () => z.object({title: z.string()})
})

const userTypesCollection = defineCollection({
    schema: () => z.object({title: z.string()})
})

export const collections = {
    projects: projectsCollection,
    profiles: profilesCollection,
    categories: categoriesCollection,
    userTypes: userTypesCollection
}
