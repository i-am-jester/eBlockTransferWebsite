(() => {
  'use strict';

  // 1. OS-aware keyboard shortcut labels (macOS/iOS vs Windows/Linux)
  const isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.userAgent);

  document.querySelectorAll('.js-copy-key').forEach((el) => {
    el.textContent = isMac ? 'Cmd+C' : 'Ctrl+C';
  });

  document.querySelectorAll('.js-paste-key').forEach((el) => {
    el.textContent = isMac ? 'Cmd+V' : 'Ctrl+V';
  });

  // 2. Interactive Extension Popup Preview
  const popup = document.getElementById('demo-popup');
  const toggle = document.getElementById('demo-toggle');
  const toggleLabel = document.getElementById('demo-toggle-label');
  const copyBtn = document.getElementById('demo-copy-page');
  const copyText = document.getElementById('demo-copy-text');
  const clearBtn = document.getElementById('demo-clear');
  const list = document.getElementById('demo-list');
  const empty = document.getElementById('demo-empty');

  if (
    !popup ||
    !(toggle instanceof HTMLInputElement) ||
    !toggleLabel ||
    !(copyBtn instanceof HTMLButtonElement) ||
    !copyText ||
    !(clearBtn instanceof HTMLButtonElement) ||
    !list ||
    !empty
  ) {
    return;
  }

  let cleared = false;
  let feedbackTimer = null;

  function syncDemo() {
    const enabled = toggle.checked;
    toggleLabel.textContent = enabled ? 'ON' : 'OFF';
    popup.classList.toggle('is-disabled', !enabled);
    copyBtn.disabled = !enabled;

    if (!enabled) {
      copyBtn.classList.remove('copied');
      copyText.textContent = 'Extension Disabled';
    } else if (!copyBtn.classList.contains('copied')) {
      copyText.textContent = 'Copy Entire Page';
    }

    clearBtn.textContent = cleared ? 'Restore' : 'Clear';
    list.style.display = cleared ? 'none' : 'flex';
    empty.hidden = !cleared;
  }

  toggle.addEventListener('change', syncDemo);

  list.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('[data-item]') : null;
    if (!target || !toggle.checked) {
      return;
    }
    list.querySelectorAll('[data-item]').forEach((item) => item.classList.remove('active'));
    target.classList.add('active');
  });

  copyBtn.addEventListener('click', () => {
    if (!toggle.checked) {
      return;
    }
    cleared = false;
    syncDemo();
    copyBtn.classList.add('copied');
    copyText.textContent = 'Entire Page Copied \u2713';

    if (feedbackTimer !== null) {
      window.clearTimeout(feedbackTimer);
    }
    feedbackTimer = window.setTimeout(() => {
      copyBtn.classList.remove('copied');
      if (toggle.checked) {
        copyText.textContent = 'Copy Entire Page';
      }
    }, 1500);
  });

  clearBtn.addEventListener('click', () => {
    if (!toggle.checked) {
      return;
    }
    cleared = !cleared;
    syncDemo();
  });
})();
