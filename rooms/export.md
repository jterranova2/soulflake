# Room: Export / Import

**Live file:** Welcome `index.html` dock + `Soulflake-Export-Cipher.md`
**Job:** Carry a flake between phones without an account.

## Live rules

- Name the file first. Password is optional.
- Every export is XOR’d with SHA-256 of the house key, then optionally XOR’d with SHA-256 of the password, then Base64.
- Shape: `{ v: 2, kind: "soulflake-profile", cipher: "house-v1", locked, name, payload }`
- Download name: `{slug(name)}.soulflake.json`
- House key lives only in code and in the cipher note. Do not put it in marketing copy.
- v1 files (password XOR only, no house layer) still import if a password is given.

## Test asset

`assets/Justin-Terranova.soulflake.json` — locked house-v1 file named Justin. Dev only. Importing it must not make a fresh phone present as a built-in Justin preset.
