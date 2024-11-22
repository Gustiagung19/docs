import nextra from 'nextra'
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    basePath: '/docs',
    // images: {
    //     unoptimized: true
    // },
    // Optional: Change the output directory `out` -> `dist`
    // distDir: "build"
}
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
export default withNextra(nextConfig)