import { defineConfig } from 'astro/config';
import DecapCMS from "astro-decap-cms";

export default defineConfig({
    integrations: [
        DecapCMS({
            config: {
                media_folder: "/src/content/assets",
                public_folder: "../assets",
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
                        folder: '/src/content/projects',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'Project Name'},
                            { name: 'heroImage', widget: 'image', label: 'Hero Image', required: false },
                            { name: 'heroVideo', widget: 'file', label: 'Hero Video', required: false },
                            { name: 'shortDescription', widget: 'markdown', label: 'Project Description (Short Description)' },
                            { name: 'btsDescription', widget: 'markdown', label: 'Behind The Scenes Description' },
                            { name: 'category', widget: 'relation', label: 'Select Category', collection: 'categories', search_fields: ['title'], value_field: 'title' },
                            { name: 'featured', widget: 'boolean', label: 'Do you want to feature this project on the front page?', default: false },
                            { name: 'actors', widget: 'relation', label: 'Actors', collection: 'profiles', search_fields: ['name'], value_field: 'name', multiple: true }
                        ],
                    },
                    // Profiles Collection
                    {
                        name: 'profiles',
                        label: 'Profiles',
                        label_singular: 'Profile',
                        folder: 'src/content/profiles',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        identifier_field: 'name',
                        fields: [
                            { name: 'name', widget: 'string', label: 'Name'},
                            { name: 'profileImage', widget: 'image', label: 'Profile Image'},
                            { name: 'userType', widget: 'relation', label: 'Select User Type', collection: 'userTypes', search_fields: ['title'], value_field: 'title' },

                        ],
                    },
                    // Categories Collection
                    {
                        name: 'categories',
                        label: 'Categories',
                        label_singular: 'Category',
                        folder: 'src/content/categories',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            {name: 'title', widget: 'string', label: 'Category Name'}
                        ]
                    },
                    // UserTypes Collection
                    {
                        name: 'userTypes',
                        label: 'User types',
                        label_singular: 'User Type',
                        folder: 'src/content/userTypes',
                        slug: '{{slug}}',
                        create: true,
                        delete: true,
                        fields: [
                            {name: 'title', widget: 'string', label: 'User Type'}
                        ]
                    }
                ],
            },
        }),
    ],
});
