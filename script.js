let trialsCompleted = 0;

// 🐾 Interaction: Pet Oreo
function petOreo() {
  const text = trialsCompleted < 3
    ? "Oreo purrs but stays planted like a furry mountain."
    : "Oreo nuzzles Regine and watches proudly from the couch.";
  document.getElementById("statusText").innerText = text;
}

// 🧦 Slipper Offering
function offerSlippers() {
  if (trialsCompleted < 3) {
    document.getElementById("statusText").innerText =
      "Regine places her slippers near Oreo... he nods like royalty.";
    trialsCompleted++;
    checkProgress();
  }
}

// 🐟 Tuna Snack Bribe
function giveSnack() {
  if (trialsCompleted < 3) {
    document.getElementById("statusText").innerText =
      "Oreo devours the tuna and resumes his majestic defense.";
    trialsCompleted++;
    checkProgress();
  }
}

// 🧶 Toy Tribute
function offerToy() {
  if (trialsCompleted < 3) {
    document.getElementById("statusText").innerText =
      "Oreo squeaks the yarn mouse and slowly softens his gaze.";
    trialsCompleted++;
    checkProgress();
  }
}

// 📖 Journal Unlock Check
function checkProgress() {
  if (trialsCompleted === 3) {
    document.getElementById("statusText").innerText =
      "Oreo steps aside with honor. The journal is now yours.";
    document.getElementById("journal").style.display = "inline-block";
  }
}

// ✨ Journal Reveal
function openJournal() {
  alert("📖 Regine’s Journal:\n\n• Doodles of floating cakes\n• A secret wish for more surprises\n• ‘Promise to self: never forget the warmth of being loved.’");
}
