# Title Constraint Deck

A minimal, non-generative title-focusing tool built for a literary essay collection about animal translation.

The tool **does not generate titles with AI**. Every prompt and every example title is written into the source code. The only algorithmic behavior is selection: `Better` and `Worse` change how often different kinds of constraints appear.

## How it works

- A writing constraint appears in the center.
- Three smaller gray titles show examples of what that constraint might do.
- **Better** makes that kind of prompt more likely to return.
- **Worse** makes that kind of prompt less likely.
- **Skip** moves on without affecting the direction.
- A small amount of randomness remains so the deck does not become repetitive.
- Direction preferences are saved locally in the browser.

Keyboard shortcuts:

- `←` = Worse
- `Space` = Skip
- `→` = Better

## GitHub Pages

1. Create a new GitHub repository.
2. Upload:
   - `index.html`
   - `styles.css`
   - `app.js`
3. Commit the files.
4. In GitHub, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save.

GitHub will provide the public URL once Pages is enabled.

## Editing the deck

All prompts and example titles live in the `cards` array near the top of `app.js`.

Each card looks like:

```js
{
  category: "oblique",
  prompt: "If the title explains itself, damage it.",
  examples: [
    "Milk Tooth",
    "Soft Grammar",
    "The False Quiet"
  ]
}
```

Add, delete, or rewrite cards freely.

## Design philosophy

This is a constraint machine, not a writing machine.

It is meant to help a writer notice what kinds of titles, images, structures, and intellectual framings feel alive. It does not attempt to write the book's title on the writer's behalf.

The D3 dependency is used only for weighted selection and simple transitions.
