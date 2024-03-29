import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string(),
            heroImage: image().optional(),
            verticalImage: image().optional(),
            heroVideo: z.string().optional(),
            shortDescription: z.string(),
            btsDescription: z.string(),
            primaryCategory: z.string(),
            secondaryCategories: z.array(z.string()).optional(),
            featured: z.boolean().default(false),
            actors: z.array(z.string()).optional()
        })
})

const profilesCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            name: z.string(),
            profileImage: image().optional(),
            userType: z.string()
        })
})

const categoriesCollection = defineCollection({
    schema: () => z.object({
        title: z.string(),
        displayOnMovies: z.boolean().default(false).optional(),
        displayOnHome: z.boolean().default(true).optional()
    })
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
