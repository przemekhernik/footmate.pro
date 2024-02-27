# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

#### Guiding Principles
- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- The latest version comes first.
- The release date of each version is displayed.

#### Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.
- `BVM Changes` for changes in BVM theme/plugin.

## [Unreleased]
### Added
- Core: `DocHooks` module - https://tentyp.dev/blog/wordpress/dochooks-sugar-syntax-for-hooking-system/
- Core: Add `Config` facade with default values.
- App: Add `Filesystem` object to app facade - https://tentyp.dev/blog/wordpress/introducing-laravel-blade/
- Templates: Add Blade templating engine - https://tentyp.dev/blog/wordpress/introducing-laravel-blade/
- Integrations: Vite for the development process - https://tentyp.dev/blog/wordpress/vite/
- Integrations: Static assets handling in the backend code - https://tentyp.dev/blog/wordpress/vite-2/
- Development: Add .editorconfig - https://tentyp.dev/blog/environment/editorconfig/
### Changed
- App: Use `DocHooks` for handling hooks in the modules - https://tentyp.dev/blog/wordpress/dochooks-sugar-syntax-for-hooking-system/
- App: Remove `Core` facade for separated objects for core submodules.

## [0.1.1] 27.06.2023
### Added
- Core: Widgets module
- Code: Singleton to app facade
## [0.1.0] 09.06.2023
### Added
- Teams: Module facade
- Posts: Module facade
- Teams: CPT
- Core: Module facade
