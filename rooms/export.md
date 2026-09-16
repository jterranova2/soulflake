# Room: Export / Import

**Live tonight:** chrome only. Buttons on My flake and in the dots menu are present and **disabled**. Cipher note still in repo: `Soulflake-Export-Cipher.md`.
**Job:** Carry a flake between phones without an account. Not a file desk on first visit.

## Rules when it returns

- Not a working dock on About. About stays mood.
- Name the file first. Password is optional.
- Every export is XOR’d with SHA-256 of the house key, then optionally XOR’d with SHA-256 of the password, then Base64.
- Shape: `{ v: 2, kind: "soulflake-profile", cipher: "house-v1", locked, name, payload }`
- Download name: `{slug(name)}.soulflake.json`
- House key lives only in code and in the cipher note. Do not put it in marketing copy.
- v1 files (password XOR only, no house layer) still import if a password is given.
- Last designed placement: export from My flake, import on Together. 09-14 put both labels on My flake and in the menu, gray. 09-15 left that chrome in the shell + `view-me.html`.

## Test asset

`assets/Justin-Terranova.soulflake.json` — locked house-v1 file named Justin. Dev only. Importing it must not make a fresh phone present as a built-in Justin preset.
