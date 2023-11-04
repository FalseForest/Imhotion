import { defineConfig } from 'astro/config';
import DecapCMS from "astro-decap-cms";

export default defineConfig({
    integrations: [
        DecapCMS({
            config: {
                media_folder: "public/images/uploads",
                public_folder: "/images/uploads",
                // publish_mode: editorial_workflow,
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    // Projects Collection
                    {
                        name: 'projects',
                        label: 'Projects',
                        label_singular: 'Project',
                        folder: 'src/pages/projects',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'Project Name'},
                            { name: 'hero-image', widget: 'image', label: 'Hero Image', required: false },
                            { name: 'hero-video', widget: 'file', label: 'Hero Video', required: false },
                            { name: 'short-description', widget: 'markdown', label: 'Project Description (Short Description)' },
                            { name: 'bts-description', widget: 'markdown', label: 'Behind The Scenes Description' },
                            { name: 'category', widget: 'relation', label: 'Select Category', collection: 'categories', search_fields: ['title'], value_field: 'title' },
                            { name: 'featured', widget: 'select', label: 'Do you want to feature this project on the front page?', default: 'false',
                                options: [
                                    { label: 'Yes', value: 'true'},
                                    { label: 'No', value: 'false'},
                                ]
                            },
                            { name: 'actors', widget: 'relation', label: 'Actors', collection: 'profiles', search_fields: ['title'], value_field: 'title', multiple: true }
                        ],
                    },
                    // Profiles Collection
                    {
                        name: 'profiles',
                        label: 'Profiles',
                        label_singular: 'Profile',
                        folder: 'src/pages/profiles',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'Name'},
                            { name: 'profile-image', widget: 'image', label: 'Profile Image' },
                            { name: 'user-type', widget: 'select', label: 'User Type',
                                options: [
                                    { label: 'Actor', value: 'actor'},
                                    { label: 'Music Artist', value: 'music-artist'}
                                ]
                            }
                        ],
                    },
                    {
                        name: 'categories',
                        label: 'Categories',
                        label_singular: 'Category',
                        folder: 'src/pages/categories',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            {name: 'title', widget: 'string', label: 'Category Name'}
                        ]
                    }
                ],
            },
        }),
    ],
});
