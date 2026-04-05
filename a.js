(() => {
    // --- SETTINGS & STATE ---
    const state = {
        swapEnabled: false,
        buyEnabled: false,
        baseHatId: 11, // Default: Tail (Index 10 + 1)
        empId: 9,      // EMP (Index 8 + 1)
        delay: 0,
        lastSwitch: 0,
        currentEquipped: -1,
        lastBuyAttempt: 0
    };

    const hatList = [
        "Cow", "Duck", "Piggy", "Bear", "Pixel", "Bush", "Tree", 
        "Stone", "EMP", "Tube", "Tail", "Mole", "Eye", "Medic"
    ];

    // --- GUI DESIGN ---
    const style = document.createElement('style');
    style.innerHTML = `
        #utility-gui {
            position: fixed; top: 20px; right: 20px; width: 220px;
            background: rgba(15, 15, 15, 0.85); backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px;
            padding: 15px; color: #eee; font-family: 'Inter', sans-serif;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5); z-index: 999999;
        }
        .gui-title { font-size: 14px; font-weight: 800; color: #40d1ff; letter-spacing: 1px; margin-bottom: 15px; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 5px; }
        .gui-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 12px; }
        .gui-label { color: #aaa; font-weight: 500; }
        .gui-select, .gui-input { background: #222; border: 1px solid #444; color: #fff; border-radius: 4px; padding: 2px 5px; font-size: 11px; outline: none; }
        .gui-select:focus, .gui-input:focus { border-color: #40d1ff; }
        input[type="checkbox"] { cursor: pointer; accent-color: #40d1ff; }
        .divider { height: 1px; background: #333; margin: 10px 0; }
    `;
    document.head.appendChild(style);

    const gui = document.createElement('div');
    gui.id = 'utility-gui';
    gui.innerHTML = `
        <div class="gui-title">Utility Panel</div>
        
        <div class="gui-row">
            <span class="gui-label">Auto Hat Swap</span>
            <input type="checkbox" id="swap-toggle">
        </div>

        <div class="gui-row">
            <span class="gui-label">Auto Buy Hat</span>
            <input type="checkbox" id="buy-toggle">
        </div>

        <div class="divider"></div>

        <div class="gui-row">
            <span class="gui-label">Main Hat</span>
            <select id="base-hat-select" class="gui-select">
                ${hatList.map((name, i) => `<option value="${i+1}" ${name === 'Tail' ? 'selected' : ''}>${name}</option>`).join('')}
            </select>
        </div>

        <div class="gui-row">
            <span class="gui-label">Swap Delay (ms)</span>
            <input type="number" id="swap-delay" class="gui-input" value="0" min="0" step="50" style="width: 50px;">
        </div>
    `;
    document.body.appendChild(gui);

    // GUI Listeners
    document.getElementById('swap-toggle').onchange = (e) => state.swapEnabled = e.target.checked;
    document.getElementById('buy-toggle').onchange = (e) => state.buyEnabled = e.target.checked;
    document.getElementById('base-hat-select').onchange = (e) => state.baseHatId = parseInt(e.target.value);
    document.getElementById('swap-delay').oninput = (e) => state.delay = parseInt(e.target.value) || 0;

    // --- HELPER FUNCTIONS ---
    
    function isHatOwned(id) {
        // Checking the internal DOM elements created by the game for ownership status
        const skinEl = _0x5691f4[id - 1];
        if (!skinEl) return true; 
        // In the original code, the buy button is hidden (display: none) when owned
        return skinEl.querySelector('.shop-btn').style.display === 'none';
    }

    function getDynamicRange(type) {
        const itemData = _0xca1cdc.ev.find(item => item.placeBlock === type);
        if (itemData) {
            return (itemData.cannonRange || 450) + 80; // Cannon range + buffer
        }
        return 500;
    }

    // --- CONSOLIDATED UPDATE LOOP ---
    
    function updateLoop() {
        // 1. Core Prerequisites
        if (!_0x466240 || _0x466240.isDead) return;

        const now = Date.now();

        // 2. Auto-Buy Logic (Lower frequency check to save resources)
        if (state.buyEnabled && now - state.lastBuyAttempt > 1000) {
            state.lastBuyAttempt = now;
            const hatIndex = state.baseHatId - 1;
            const hatData = _0xca1cdc.WM[hatIndex];
            
            if (hatData && !isHatOwned(state.baseHatId)) {
                if (_0x4e3cab >= hatData.cost) { // _4e3cab is current gold
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iBuySkin, hatIndex]));
                }
            }
        }

        // 3. Auto-Swap Logic
        if (state.swapEnabled) {
            if (now - state.lastSwitch < state.delay) return;

            let inDanger = false;
            const entities = _0x5a712e;

            for (let i = 0; i < entities.length; i++) {
                const ent = entities[i];
                if (ent.isCannon && !ent.isDead) {
                    const dist = Math.hypot(ent.x - _0x466240.x, ent.y - _0x466240.y);
                    if (dist <= getDynamicRange(ent.type)) {
                        inDanger = true;
                        break;
                    }
                }
            }

            const target = inDanger ? state.empId : state.baseHatId;

            if (target !== state.currentEquipped) {
                // Ensure we actually own the hat before trying to equip it
                if (isHatOwned(target)) {
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iChangeSkin, target]));
                    state.currentEquipped = target;
                    state.lastSwitch = now;
                }
            }
        }
    }

    // Run loop at 60 FPS
    setInterval(updateLoop, 1000 / 60);

})();
