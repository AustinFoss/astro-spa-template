# Astro SPA Template

This repo serves as a repeatable starting point, incorporating several Astro features and integrations to avoid having to recreate the same repo structure and install/configure the same integrations.

### Integrations

- Svelte
- Tailwind CSS
- Daisy UI
- Astro View Transitions (SPA)
- Nano Stores (State Management)
- Vite-PWA

### Structure

- App
    - RootLayout
        - Head
            - ViewTransitions (Astro SPA Integration)
            - ...meta Tags
        - Body
            - HeaderLayout
                - Navigation
                - Banner
                - Logo
                - ...
            - BodyLayout
                - Page
                    - index
                    - about
                    - ...
            - FooterLayout

## 