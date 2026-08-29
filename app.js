(() => {
  "use strict";

  const STORAGE_KEY = "title-constraint-deck-v1";

  const cards = [
    {
      category: "absence",
      prompt: "Remove the animal from the title. Leave only the disturbance it caused.",
      examples: ["The False Quiet", "After the Howl", "What Silence Keeps"]
    },
    {
      category: "translation",
      prompt: "Name the space between a signal and the meaning we force onto it.",
      examples: ["The Distance Between Calls", "A Grammar of Echoes", "What the Signal Refuses"]
    },
    {
      category: "body",
      prompt: "Let one small piece of anatomy carry the whole metaphysical problem.",
      examples: ["Ear Bone", "Milk Tooth", "The Listening Bone"]
    },
    {
      category: "estrangement",
      prompt: "Take a human faculty and give it back to the animal.",
      examples: ["The Ear Is an Animal", "The Listening Animal", "The Mouth Before Us"]
    },
    {
      category: "misdirection",
      prompt: "Begin in philosophy. End in the mouth.",
      examples: ["A Grammar of Teeth", "The Tongue of the Question", "Syntax with Fur"]
    },
    {
      category: "listening",
      prompt: "Make listening feel less like reception and more like trespass.",
      examples: ["Into the Listening", "The Trespass of Hearing", "What Enters the Ear"]
    },
    {
      category: "negation",
      prompt: "Title the false belief the book spends its pages undoing.",
      examples: ["The False Quiet", "Nothing Was Silent", "Against the Wordless"]
    },
    {
      category: "extinction",
      prompt: "Let the vanished animal act in the present tense.",
      examples: ["The Dead Are Making Sounds", "The Extinct Keep Singing", "A Voice After the Body"]
    },
    {
      category: "scale",
      prompt: "Put something immense inside something anatomical.",
      examples: ["The World in the Ear", "A Mouth Full of Distance", "The Weather of the Tongue"]
    },
    {
      category: "syntax",
      prompt: "Put the animal inside a structure built for human language.",
      examples: ["The Animal in the Sentence", "The Rat Inside the Word", "A Creature in the Grammar"]
    },
    {
      category: "voice",
      prompt: "Write a title that cannot quite decide who is speaking.",
      examples: ["The Voice Is Not Ours", "Someone Else Is Speaking", "The Mouth Was Not Human"]
    },
    {
      category: "condition",
      prompt: "Do not name the subject. Name the condition of being alive beside it.",
      examples: ["The False Quiet", "The Age of Listening", "A World of Other Voices"]
    },
    {
      category: "inheritance",
      prompt: "Make the new title feel related to The Age of Loneliness without sounding like its sequel.",
      examples: ["The False Quiet", "What the Living Hear", "The Company of Voices"]
    },
    {
      category: "constraint",
      prompt: "Use two nouns. No adjective. No explanation.",
      examples: ["Ear Bone", "Ghost Grammar", "Signal Animal"]
    },
    {
      category: "constraint",
      prompt: "Pair one abstract system with one physical thing.",
      examples: ["A Grammar of Teeth", "The Physics of Fur", "The Syntax of Bone"]
    },
    {
      category: "constraint",
      prompt: "Forbid every word that announces the book’s subject.",
      examples: ["The False Quiet", "The Other Side of Hearing", "What Remains Audible"]
    },
    {
      category: "reversal",
      prompt: "Do not ask what animals are saying. Ask what humans have failed to hear.",
      examples: ["The Human Ear Is Small", "The Failure of Listening", "What We Could Not Hear"]
    },
    {
      category: "reversal",
      prompt: "Make the human the strange animal in the sentence.",
      examples: ["The Human Ear Is Small", "The Animal Called Human", "Our Strange Mouth"]
    },
    {
      category: "evidence",
      prompt: "Title a trace, not a creature.",
      examples: ["Ear Bone", "A Fossil Song", "The Last Frequency"]
    },
    {
      category: "uncertainty",
      prompt: "Let the title admit that translation may be a beautiful failure.",
      examples: ["What Cannot Be Carried Over", "The Art of Mishearing", "Almost a Language"]
    },
    {
      category: "uncertainty",
      prompt: "Replace knowledge with attention.",
      examples: ["A Practice of Listening", "The Shape of Attention", "What the Ear Learns"]
    },
    {
      category: "compression",
      prompt: "Reduce the entire book to one impossible compound.",
      examples: ["Ghost Grammar", "Fossil Mouth", "Signal Animal"]
    },
    {
      category: "sentence",
      prompt: "Write a title that sounds factual until the second time you read it.",
      examples: ["The Ear Is an Animal", "The World Was Speaking", "The Dead Are Making Sounds"]
    },
    {
      category: "sentence",
      prompt: "Write a title that feels like the middle of an argument.",
      examples: ["Because the Animal Answered", "What We Called Silence", "When the World Spoke Back"]
    },
    {
      category: "wrongness",
      prompt: "Put two words together that should not quite belong together.",
      examples: ["Soft Grammar", "Animal Weather", "Tender Frequency"]
    },
    {
      category: "sound",
      prompt: "Choose the phrase that feels good in the mouth before it explains itself.",
      examples: ["Milk Tooth", "False Quiet", "Fossil Mouth"]
    },
    {
      category: "rhythm",
      prompt: "Use four hard nouns. No connective tissue.",
      examples: ["Language Fire Laughter Fear", "Mouth Bone Signal Weather", "Voice Tooth Echo Skin"]
    },
    {
      category: "found language",
      prompt: "Borrow the authority of a scientific phrase. Remove its certainty.",
      examples: ["The Living Signal", "A Theory of Other Voices", "The Animal Frequency"]
    },
    {
      category: "found language",
      prompt: "Make a technical phrase emotionally unstable.",
      examples: ["The Last Frequency", "Tender Signal", "A Grammar of Loss"]
    },
    {
      category: "perspective",
      prompt: "Imagine the title was written from the other side of the translation.",
      examples: ["The Voice Is Not Ours", "What You Call a Cry", "The Human Noise"]
    },
    {
      category: "ethics",
      prompt: "Let the title contain the violence of putting another life into human words.",
      examples: ["The Animal in the Sentence", "What We Make Them Mean", "A Creature in Our Grammar"]
    },
    {
      category: "ethics",
      prompt: "Replace mastery with attention.",
      examples: ["The Shape of Listening", "The Practice of Hearing", "To Attend to an Animal"]
    },
    {
      category: "counterfactual",
      prompt: "Assume the world has always been speaking. Name our mistake.",
      examples: ["The False Quiet", "What We Called Silence", "The World Was Speaking"]
    },
    {
      category: "counterfactual",
      prompt: "Assume language was never ours to begin with.",
      examples: ["Other Tongues", "Before Human Speech", "The Language We Entered"]
    },
    {
      category: "Oulipo",
      prompt: "Write ten titles without using: animal, language, voice, wild, world, listening, or translation.",
      examples: ["Milk Tooth", "The False Quiet", "A Fossil Song"]
    },
    {
      category: "Oulipo",
      prompt: "Write five titles using only one-syllable words.",
      examples: ["Milk Tooth", "Ghost Song", "Small Teeth"]
    },
    {
      category: "Oulipo",
      prompt: "Write a three-word title. Remove the most informative word.",
      examples: ["The False Quiet", "The Other Mouth", "After the Call"]
    },
    {
      category: "Oulipo",
      prompt: "Write the obvious title. Ban every word in it. Begin again.",
      examples: ["Ear Bone", "The False Quiet", "What Remains Audible"]
    },
    {
      category: "Oulipo",
      prompt: "Replace every abstraction with something that can bleed, break, shed, or decay.",
      examples: ["A Grammar of Teeth", "The Word Has Fur", "The Tongue of the Dead"]
    },
    {
      category: "oblique",
      prompt: "Pretend the book is about hearing, not translation.",
      examples: ["The Animal Ear", "What Enters the Ear", "The Shape of Listening"]
    },
    {
      category: "oblique",
      prompt: "Pretend the book is about extinction, not communication.",
      examples: ["The Dead Are Making Sounds", "The Last Frequency", "A Fossil Song"]
    },
    {
      category: "oblique",
      prompt: "Pretend the book is about bodies, not ideas.",
      examples: ["Milk Tooth", "Ear Bone", "The Other Mouth"]
    },
    {
      category: "oblique",
      prompt: "Stop summarizing. Name the thing in the book you cannot stop seeing.",
      examples: ["Ear Bone", "The Rat’s Ear", "A Mouth Full of Elsewhere"]
    },
    {
      category: "oblique",
      prompt: "Make the title less intelligent and more alive.",
      examples: ["Little Mouth", "Small Teeth", "Bright Animal"]
    },
    {
      category: "oblique",
      prompt: "Make the title dangerous to misunderstand.",
      examples: ["The Ear Is an Animal", "The Dead Are Making Sounds", "The Human Noise"]
    },
    {
      category: "oblique",
      prompt: "If the title explains itself, damage it.",
      examples: ["Milk Tooth", "Soft Grammar", "The False Quiet"]
    },
    {
      category: "oblique",
      prompt: "Choose the title that creates a question before it creates a category.",
      examples: ["The Animal in the Sentence", "The Ear Is an Animal", "What We Called Silence"]
    },
    {
      category: "oblique",
      prompt: "Push the title one inch past good taste.",
      examples: ["The Word Has Fur", "The Human Noise", "The Mouth Was Not Human"]
    },
    {
      category: "oblique",
      prompt: "Keep the beautiful phrase. Remove the beautiful word.",
      examples: ["The False Quiet", "After the Call", "What Remains Audible"]
    },
    {
      category: "oblique",
      prompt: "Make the title colder than the essays.",
      examples: ["The Animal Frequency", "Signal Animal", "The Last Frequency"]
    },
    {
      category: "oblique",
      prompt: "Make the title warmer than the argument.",
      examples: ["The Company of Voices", "Little Mouth", "What the Living Hear"]
    },
    {
      category: "oblique",
      prompt: "Replace the central idea with its physical consequence.",
      examples: ["Ear Bone", "The Mouth After Speech", "Small Teeth"]
    },
    {
      category: "oblique",
      prompt: "What if the subtitle carried the information and the title carried only the wound?",
      examples: ["The False Quiet", "Milk Tooth", "A Fossil Song"]
    },
    {
      category: "image",
      prompt: "Title the book with an image that cannot be paraphrased into an argument.",
      examples: ["A Mouth Full of Elsewhere", "The Listening Bone", "A Fossil Song"]
    },
    {
      category: "image",
      prompt: "Find an image where sound becomes matter.",
      examples: ["The Listening Bone", "The Sound Has Teeth", "A Mouth Full of Echo"]
    },
    {
      category: "threshold",
      prompt: "Title the moment before a sound becomes a word.",
      examples: ["Before Human Speech", "Almost a Language", "At the Edge of Meaning"]
    },
    {
      category: "threshold",
      prompt: "Title the moment after a word stops being enough.",
      examples: ["After Language", "What Remains Audible", "Beyond the Human Ear"]
    },
    {
      category: "failure",
      prompt: "Treat mistranslation as evidence, not error.",
      examples: ["The Art of Mishearing", "What We Make Them Mean", "Almost a Language"]
    },
    {
      category: "failure",
      prompt: "What title would remain true even if the animals never meant what we thought they meant?",
      examples: ["The False Quiet", "What We Called Silence", "The Distance Between Calls"]
    },
    {
      category: "animal",
      prompt: "Do not use “animal” as a category. Use it as pressure on the sentence.",
      examples: ["The Ear Is an Animal", "The Animal in the Sentence", "The Animal Called Human"]
    },
    {
      category: "animal",
      prompt: "Make the animal present without naming a species.",
      examples: ["Small Teeth", "The Other Mouth", "What the Living Hear"]
    },
    {
      category: "translation",
      prompt: "Treat translation as crossing a border no one agreed was there.",
      examples: ["The Language We Entered", "Across the Animal Line", "What Cannot Be Carried Over"]
    },
    {
      category: "translation",
      prompt: "Treat translation as an intimacy with a built-in mistake.",
      examples: ["Almost a Language", "The Art of Mishearing", "What We Make Them Mean"]
    },
    {
      category: "title physics",
      prompt: "Make the title behave like a door, not a label.",
      examples: ["The Other Mouth", "Into the Listening", "The Language We Entered"]
    },
    {
      category: "title physics",
      prompt: "Make the title open wider after the reader finishes the book.",
      examples: ["The False Quiet", "The Ear Is an Animal", "What We Called Silence"]
    },
    {
      category: "title physics",
      prompt: "Choose a title that can survive without a subtitle.",
      examples: ["Ear Bone", "The False Quiet", "The Ear Is an Animal"]
    },
    {
      category: "pressure",
      prompt: "What is the title if the book is not about animal language, but about the human need to translate it?",
      examples: ["What We Make Them Mean", "The Human Noise", "The Art of Mishearing"]
    },
    {
      category: "pressure",
      prompt: "What is the title if translation is the symptom and loneliness is the disease?",
      examples: ["The False Quiet", "The Company of Voices", "The Distance Between Calls"]
    },
    {
      category: "pressure",
      prompt: "What if every act of translation contains a small act of invention?",
      examples: ["Almost a Language", "What We Make Them Mean", "A Grammar of Echoes"]
    },
    {
      category: "pressure",
      prompt: "What if the most important voice in the book cannot enter language intact?",
      examples: ["What Cannot Be Carried Over", "The Voice Is Not Ours", "At the Edge of Meaning"]
    },
    {
      category: "pressure",
      prompt: "Title the desire to cross the species boundary, not the success of crossing it.",
      examples: ["Across the Animal Line", "The Distance Between Calls", "Into the Listening"]
    },
    {
      category: "pressure",
      prompt: "What phrase becomes stranger if the reader cannot tell whether it refers to us or them?",
      examples: ["The Listening Animal", "The Animal Called Human", "Someone Else Is Speaking"]
    }
  ];

  const categoryEl = document.getElementById("category");
  const promptEl = document.getElementById("prompt");
  const examplesEl = document.getElementById("examples");
  const signalEl = document.getElementById("signal");
  const betterButton = document.getElementById("better");
  const worseButton = document.getElementById("worse");
  const skipButton = document.getElementById("skip");
  const resetButton = document.getElementById("reset");
  const deckEl = document.getElementById("deck");

  [categoryEl, promptEl, examplesEl].forEach((node) => {
    node.classList.add("fade-target");
  });

  const categories = [...new Set(cards.map((card) => card.category))];

  let weights = Object.fromEntries(categories.map((category) => [category, 1]));
  let ratingCount = 0;
  let current = null;
  let previous = null;
  let transitionLocked = false;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const saved = JSON.parse(raw);

      if (saved && typeof saved === "object") {
        if (saved.weights && typeof saved.weights === "object") {
          categories.forEach((category) => {
            const value = Number(saved.weights[category]);
            if (Number.isFinite(value)) {
              weights[category] = Math.min(6, Math.max(0.16, value));
            }
          });
        }

        const count = Number(saved.ratingCount);
        if (Number.isFinite(count) && count >= 0) {
          ratingCount = Math.floor(count);
        }
      }
    } catch (_) {
      // If browser storage is unavailable or corrupted, the deck still works.
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          weights,
          ratingCount
        })
      );
    } catch (_) {
      // Persistence is optional.
    }
  }

  function resetState() {
    weights = Object.fromEntries(categories.map((category) => [category, 1]));
    ratingCount = 0;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_) {
      // Persistence is optional.
    }

    signalEl.textContent = "direction reset";
    window.setTimeout(() => nextCard(), 220);
  }

  function weightedCard() {
    const explorationRate = Math.max(0.15, 0.30 - ratingCount * 0.007);
    const candidates = cards.filter((card) => card !== previous);

    if (Math.random() < explorationRate) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    const totalWeight = d3.sum(
      candidates,
      (card) => weights[card.category] || 1
    );

    let cursor = Math.random() * totalWeight;

    for (const card of candidates) {
      cursor -= weights[card.category] || 1;
      if (cursor <= 0) return card;
    }

    return candidates[candidates.length - 1];
  }

  function renderExamples(card) {
    examplesEl.replaceChildren();

    card.examples.forEach((title) => {
      const line = document.createElement("div");
      line.textContent = title;
      examplesEl.appendChild(line);
    });
  }

  function applyCard() {
    categoryEl.textContent = current.category;
    promptEl.textContent = current.prompt;
    renderExamples(current);
  }

  function nextCard(immediate = false) {
    if (transitionLocked) return;

    previous = current;
    current = weightedCard();
    signalEl.textContent = "";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (immediate || reduceMotion) {
      applyCard();
      return;
    }

    transitionLocked = true;
    const targets = d3.selectAll([categoryEl, promptEl, examplesEl]);

    targets
      .interrupt()
      .transition()
      .duration(110)
      .style("opacity", 0)
      .on("end", (_, index) => {
        if (index !== 2) return;

        applyCard();

        targets
          .transition()
          .duration(170)
          .style("opacity", 1)
          .on("end", (_, fadeIndex) => {
            if (fadeIndex === 2) transitionLocked = false;
          });
      });
  }

  function rate(direction) {
    if (!current || transitionLocked) return;

    ratingCount += 1;
    const category = current.category;
    const oldWeight = weights[category] || 1;

    if (direction === "better") {
      weights[category] = Math.min(6, oldWeight * 1.6 + 0.2);
      signalEl.textContent = "more pressure in this direction";
    } else {
      weights[category] = Math.max(0.16, oldWeight * 0.48);
      signalEl.textContent = "move away from this direction";
    }

    saveState();
    window.setTimeout(() => nextCard(), 180);
  }

  betterButton.addEventListener("click", () => rate("better"));
  worseButton.addEventListener("click", () => rate("worse"));
  skipButton.addEventListener("click", () => nextCard());
  resetButton.addEventListener("click", resetState);

  deckEl.addEventListener("keydown", (event) => {
    const tagName = event.target && event.target.tagName;

    if (
      tagName === "INPUT" ||
      tagName === "TEXTAREA" ||
      tagName === "SELECT"
    ) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      rate("better");
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      rate("worse");
    } else if (event.key === " ") {
      event.preventDefault();
      nextCard();
    }
  });

  loadState();
  nextCard(true);
  deckEl.focus({ preventScroll: true });
})();
