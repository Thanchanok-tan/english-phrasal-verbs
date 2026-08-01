/**
 * EngMastery - Main Application Logic
 * Implements Theme Switching, Font Size Scaling, View Routing, 
 * Radial Mind-Map Generation, Web Speech API Audio, and Mastered Progress Tracking.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- State Variables ---
  let currentBaseVerbKey = 'run';
  let activeSubNodeData = null;
  let masteredItems = JSON.parse(localStorage.getItem('engmastery_mastered') || '[]');

  // --- DOM Elements ---
  const themeSelect = document.getElementById('theme-select');
  const fontSizeBtns = document.querySelectorAll('.btn-toggle-opt');
  
  const homeView = document.getElementById('home-view');
  const verbsSelectionView = document.getElementById('verbs-selection-view');
  const verbsStudyView = document.getElementById('verbs-study-view');
  
  const brandHomeBtn = document.getElementById('brand-home-btn');
  const modulePhrasalVerbs = document.getElementById('module-phrasal-verbs');
  const btnBackGrid = document.getElementById('btn-back-grid');
  
  const baseVerbsGrid = document.getElementById('base-verbs-grid');
  const sidebarVerbsList = document.getElementById('sidebar-verbs-list');
  
  const currentVerbTitle = document.getElementById('current-verb-title');
  const currentVerbDesc = document.getElementById('current-verb-desc');
  const centerNodeText = document.getElementById('center-node-text');
  const centerNodeCount = document.getElementById('center-node-count');
  
  const mindmapStage = document.getElementById('mindmap-stage');
  const mindmapLinesSvg = document.getElementById('mindmap-lines');
  
  const detailPanel = document.getElementById('detail-panel');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const btnCloseDetail = document.getElementById('btn-close-detail');
  
  const detailVerbTitle = document.getElementById('detail-verb-title');
  const detailPhonetic = document.getElementById('detail-phonetic');
  const detailThaiPhonetic = document.getElementById('detail-thai-phonetic');
  const detailThaiTranslation = document.getElementById('detail-thai-translation');
  const detailExampleEn = document.getElementById('detail-example-en');
  const detailExampleTh = document.getElementById('detail-example-th');
  const btnAudioVerb = document.getElementById('btn-audio-verb');
  const btnAudioSentence = document.getElementById('btn-audio-sentence');
  const btnToggleMastered = document.getElementById('btn-toggle-mastered');
  const masteredBtnText = document.getElementById('mastered-btn-text');
  const masteredCountBadge = document.getElementById('mastered-count-badge');

  // ==========================================
  // 1. Theme & Font Size Controllers
  // ==========================================

  // Load Saved Preferences
  const savedTheme = localStorage.getItem('engmastery_theme') || 'light';
  const savedFontSize = localStorage.getItem('engmastery_fontsize') || 'normal';

  setTheme(savedTheme);
  setFontSize(savedFontSize);

  themeSelect.value = savedTheme;
  themeSelect.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });

  fontSizeBtns.forEach(btn => {
    if (btn.dataset.size === savedFontSize) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      fontSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setFontSize(btn.dataset.size);
    });
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('engmastery_theme', theme);
  }

  function setFontSize(size) {
    document.documentElement.setAttribute('data-fontsize', size);
    localStorage.setItem('engmastery_fontsize', size);
  }


  // ==========================================
  // 2. View Navigation Engine & Hash Router
  // ==========================================

  function switchView(targetView, updateHash = true) {
    [homeView, verbsSelectionView, verbsStudyView].forEach(view => {
      view.classList.remove('active');
    });

    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (updateHash) {
      let hash = '#home';
      if (targetView === verbsSelectionView) hash = '#selection';
      else if (targetView === verbsStudyView) hash = `#study/${currentBaseVerbKey}`;
      
      if (window.location.hash !== hash) {
        window.location.hash = hash;
      }
      localStorage.setItem('engmastery_last_hash', hash);
    }
  }

  brandHomeBtn.addEventListener('click', () => switchView(homeView));
  modulePhrasalVerbs.addEventListener('click', () => switchView(verbsSelectionView));
  btnBackGrid.addEventListener('click', () => switchView(verbsSelectionView));

  // 🔄 Hash Change Router (Prevents resetting to Home on refresh & enables back/forward navigation)
  function handleHashChange() {
    let hash = window.location.hash || localStorage.getItem('engmastery_last_hash') || '#home';
    
    if (hash.startsWith('#study/')) {
      const verbKey = hash.replace('#study/', '').toLowerCase();
      if (PHRASAL_VERBS_DATA[verbKey]) {
        openStudyView(verbKey, false);
      } else {
        openStudyView('run', false);
      }
    } else if (hash === '#selection') {
      switchView(verbsSelectionView, false);
    } else {
      switchView(homeView, false);
    }
    localStorage.setItem('engmastery_last_hash', hash);
  }

  window.addEventListener('hashchange', handleHashChange);


  // ==========================================
  // 3. Render Base Verbs Grid (Selection View)
  // ==========================================

  function renderBaseVerbsGrid() {
    baseVerbsGrid.innerHTML = '';

    Object.keys(PHRASAL_VERBS_DATA).forEach(key => {
      const verbData = PHRASAL_VERBS_DATA[key];
      const card = document.createElement('div');
      card.className = 'base-verb-card';

      card.innerHTML = `
        <div class="base-verb-icon">${verbData.icon}</div>
        <div class="base-verb-title">${verbData.baseVerb}</div>
        <div class="base-verb-thai">${verbData.thaiMeaning}</div>
        <div class="base-verb-count">${verbData.items.length} Phrasal Verbs</div>
      `;

      card.addEventListener('click', () => {
        openStudyView(key);
      });

      baseVerbsGrid.appendChild(card);
    });
  }

  // Render Sidebar
  function renderSidebar() {
    sidebarVerbsList.innerHTML = '';

    Object.keys(PHRASAL_VERBS_DATA).forEach(key => {
      const verbData = PHRASAL_VERBS_DATA[key];
      const li = document.createElement('li');
      li.className = `sidebar-item ${key === currentBaseVerbKey ? 'active' : ''}`;

      li.innerHTML = `
        <span class="sidebar-item-icon">${verbData.icon}</span>
        <span>${verbData.baseVerb}</span>
      `;

      li.addEventListener('click', () => {
        openStudyView(key);
      });

      sidebarVerbsList.appendChild(li);
    });
  }


  // ==========================================
  // 4. Open Interactive Study View & Circular Mind-Map
  // ==========================================

  function openStudyView(verbKey, updateHash = true) {
    currentBaseVerbKey = verbKey;
    const verbData = PHRASAL_VERBS_DATA[verbKey];

    if (!verbData) return;

    // Update Header Info
    currentVerbTitle.textContent = verbData.baseVerb;
    currentVerbDesc.textContent = `(${verbData.thaiMeaning})`;
    centerNodeText.textContent = verbData.baseVerb.toUpperCase();
    centerNodeCount.textContent = `${verbData.items.length} nodes`;

    // Render Radial Mind Map
    renderRadialMindMap(verbData.items);

    // Update Sidebar Active state
    renderSidebar();

    // Switch View
    switchView(verbsStudyView, updateHash);
  }

  // 🌀 Generate Circular Mind-Map with Radial Positioning
  function renderRadialMindMap(items) {
    // Remove existing sub-nodes
    const existingNodes = mindmapStage.querySelectorAll('.sub-node');
    existingNodes.forEach(node => node.remove());
    mindmapLinesSvg.innerHTML = '';

    const centerNode = document.getElementById('center-base-node');
    const stageWidth = 550;
    const stageHeight = 550;
    const centerX = stageWidth / 2;
    const centerY = stageHeight / 2;
    const radius = 200; // Distance from center

    const totalItems = items.length;

    items.forEach((item, index) => {
      // Calculate angle around circle starting from top
      const angle = (2 * Math.PI / totalItems) * index - (Math.PI / 2);
      const subX = centerX + radius * Math.cos(angle);
      const subY = centerY + radius * Math.sin(angle);

      // Create SVG Line connecting Center to Sub-node
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', centerX);
      line.setAttribute('y1', centerY);
      line.setAttribute('x2', subX);
      line.setAttribute('y2', subY);
      line.setAttribute('class', 'mindmap-line');
      mindmapLinesSvg.appendChild(line);

      // Create Sub-Node Element
      const subNode = document.createElement('div');
      subNode.className = `sub-node ${masteredItems.includes(item.id) ? 'active' : ''}`;
      subNode.style.left = `${subX - 65}px`; // Offset by half width
      subNode.style.top = `${subY - 55}px`;  // Offset by half height

      subNode.innerHTML = `
        <div class="sub-node-icon">${item.icon}</div>
        <div class="sub-node-title">${item.verb}</div>
        <div class="sub-node-def">${item.quickDef}</div>
      `;

      subNode.addEventListener('click', () => {
        openDetailPanel(item);
      });

      mindmapStage.appendChild(subNode);
    });
  }


  // ==========================================
  // 5. Slide-in Detail Panel Drawer & Web Speech API
  // ==========================================

  function openDetailPanel(itemData) {
    activeSubNodeData = itemData;

    detailVerbTitle.textContent = itemData.verb;
    detailPhonetic.textContent = itemData.phonetic;
    detailThaiPhonetic.textContent = itemData.thaiPhonetic;
    detailThaiTranslation.textContent = itemData.thaiTranslation;
    detailExampleEn.textContent = `"${itemData.exampleEn}"`;
    detailExampleTh.textContent = itemData.exampleTh;

    // Check Mastered status
    updateMasteredButtonState();

    detailPanel.classList.add('open');
    drawerBackdrop.classList.add('open');
  }

  function closeDetailPanel() {
    detailPanel.classList.remove('open');
    drawerBackdrop.classList.remove('open');
  }

  btnCloseDetail.addEventListener('click', closeDetailPanel);
  drawerBackdrop.addEventListener('click', closeDetailPanel);

  // 🔊 Web Speech API Text-To-Speech (Native English)
  function speakEnglishText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop active speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for clear pronunciation
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support audio pronunciation.');
    }
  }

  btnAudioVerb.addEventListener('click', () => {
    if (activeSubNodeData) {
      speakEnglishText(activeSubNodeData.verb);
    }
  });

  btnAudioSentence.addEventListener('click', () => {
    if (activeSubNodeData) {
      speakEnglishText(activeSubNodeData.exampleEn);
    }
  });

  // ⭐ Mastered Progress Toggle
  function updateMasteredButtonState() {
    if (!activeSubNodeData) return;
    const isMastered = masteredItems.includes(activeSubNodeData.id);

    if (isMastered) {
      btnToggleMastered.classList.add('active');
      masteredBtnText.textContent = 'Mastered! (Click to Undo)';
    } else {
      btnToggleMastered.classList.remove('active');
      masteredBtnText.textContent = 'Mark as Mastered';
    }

    // Update Progress summary counter
    masteredCountBadge.textContent = `${masteredItems.length} Mastered`;
  }

  btnToggleMastered.addEventListener('click', () => {
    if (!activeSubNodeData) return;

    const itemId = activeSubNodeData.id;
    const index = masteredItems.indexOf(itemId);

    if (index > -1) {
      masteredItems.splice(index, 1);
    } else {
      masteredItems.push(itemId);
    }

    localStorage.setItem('engmastery_mastered', JSON.stringify(masteredItems));
    updateMasteredButtonState();

    // Refresh active mindmap to reflect node styling
    const verbData = PHRASAL_VERBS_DATA[currentBaseVerbKey];
    if (verbData) {
      renderRadialMindMap(verbData.items);
    }
  });


  // ==========================================
  // 6. App Initialization
  // ==========================================
  renderBaseVerbsGrid();
  renderSidebar();
  updateMasteredButtonState();
  handleHashChange(); // Restores exact view & verb state from URL hash or localStorage after F5 refresh

});
