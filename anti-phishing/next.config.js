/** @type {import('next').NextConfig} */
const nextConfig = {
    output : 'export',
    images : {
        loader : 'custom',
        loaderFile : './app/page.tsx'

    }
}

module.exports = nextConfig