# Soulflake-Export-Cipher

House decoder. Not a user password. Every `.soulflake.json` is run through this first so a raw dump is not readable JSON.

## House key (v1)

```
Ice Laboratory · Soulflake · 070B14 · JTNOVA
```

Do not put this phrase in marketing copy. Pages that Import must include the same key. If the key changes, old files need a v2 decoder path.

## Algorithm — house-v1

1. UTF-8 JSON of the profile object.
2. XOR those bytes with `SHA-256(house key)`, repeating the 32-byte digest.
3. If the user set a password: XOR again with `SHA-256(password)`.
4. Base64 the bytes into `payload`.

Unwrap is the reverse. Password layer first (if `locked: true`), then house layer, then `JSON.parse`.

## File shape

```json
{
  "v": 2,
  "kind": "soulflake-profile",
  "cipher": "house-v1",
  "locked": false,
  "name": "Justin",
  "payload": "..."
}
```

`locked` is true only when a user password was applied. Name is chosen at export, before password.

## v1 files

Old exports (`v: 1`, password XOR only, no house layer) still import if a password is given.
