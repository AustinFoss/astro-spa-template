# Astro SPA Template

This repo serves as a repeatable starting point, incorporating several Astro features and integrations to avoid having to recreate the same repo structure and install/configure the same integrations.

### Integrations

- Svelte
- Tailwind CSS
- Daisy UI
- Astro View Transitions
- Nano Stores

### Structure

- App
    - RootLayout
        - Head
            - ViewTransitions (Astro SPA Integration)
            - ...meta Tags
        - Body
            - HeaderLayout
            - BodyLayout
                - Page
                    - index
                    - about
                    - ...
            - FooterLayout

## 