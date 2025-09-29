import { createDirectus, rest } from '@directus/sdk';
// stop the suggestions
const directus = createDirectus('http://44.222.202.60:8055').with(rest({
    onRequest: (options) => ({ ...options, cache: 'no-store'  })
}));

export default directus;