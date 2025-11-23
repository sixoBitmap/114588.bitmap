const REGEX = /bitmap/gi;
const REPLACEMENT = "🟧";

function replaceInTextNode(node) {
  // Only operate on pure text nodes, not attributes
  if (!node || node.nodeType !== Node.TEXT_NODE) return;

  const parent = node.parentNode;

  // Do NOT replace inside <a href="..."> attributes, only their text
  // Example:
  // <a href="example.com/bitmap">bitmap</a>
  // should become visually: 🟧
  // but href remains untouched!
  if (!REGEX.test(node.textContent)) return;

  // Replace only the VISIBLE TEXT, not attributes
  node.textContent = node.textContent.replace(REGEX, REPLACEMENT);
}

function walkAndReplace(rootNode) {
  const walker = document.createTreeWalker(
    rootNode,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        // Ignore empty nodes
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

        // Do NOT touch script/style tags
        const parent = node.parentNode;
        if (parent && (parent.tagName === "SCRIPT" || parent.tagName === "STYLE")) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node;
  while ((node = walker.nextNode())) {
    replaceInTextNode(node);
  }
}

// Initial run
walkAndReplace(document.body);

// Watch for dynamic changes
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "characterData") {
      replaceInTextNode(mutation.target);
    }

    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          replaceInTextNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          walkAndReplace(node);
        }
      });
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});
