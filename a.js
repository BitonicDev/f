// MOD START
(() => {
    // --- SETTINGS & STATE ---
    const state = {
        swapEnabled: false,
        buyEnabled: false,
        autoCactus: false,
        autoBlocker: false,
        baseHatId: 11, 
        empId: 9,      
        delay: 0,
        lastSwitch: 0,
        lastBlockerTime: 0,
        currentEquipped: -1,
        guiVisible: true,
        isDragging: false,
        dragOffset: { x: 0, y: 0 },
        storageWasOpen: false,
        ownedCache: new Set() // Used to detect new purchases
    };

    const hatList = [
        "Cow", "Duck", "Piggy", "Bear", "Pixel", "Bush", "Tree", 
        "Stone", "EMP", "Tube", "Tail", "Mole", "Eye", "Medic"
    ];

    // --- GUI STYLING ---
    const style = document.createElement('style');
    style.innerHTML = `
        #utility-gui {
            position: fixed; top: 120px; right: 30px; width: 260px;
            background: rgba(15, 15, 20, 0.8); backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px;
            color: #f0f0f0; font-family: 'Segoe UI', system-ui, sans-serif;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5); z-index: 1000000;
            user-select: none; transition: opacity 0.3s, transform 0.3s;
        }
        #gui-header {
            padding: 16px; cursor: move; border-bottom: 1px solid rgba(255,255,255,0.05);
            display: flex; justify-content: center; align-items: center;
        }
        .gui-title { font-size: 12px; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; }
        .gui-content { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
        .gui-row { display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
        .gui-label { color: #bbb; font-weight: 500; }
        
        /* Custom Switches */
        .toggle-switch { position: relative; width: 38px; height: 20px; }
        .toggle-switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.1); transition: .3s; border-radius: 20px; }
        .slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 3px; bottom: 3px; background: #fff; transition: .3s; border-radius: 50%; }
        input:checked + .slider { background: #40d1ff; }
        input:checked + .slider:before { transform: translateX(18px); }

        .gui-select, .gui-input { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 6px; padding: 5px 8px; font-size: 12px; outline: none; }
        .divider { height: 1px; background: rgba(255,255,255,0.08); margin: 5px 0; }
        .gui-hint { font-size: 10px; color: #666; text-align: center; font-weight: 600; }
    `;
    document.head.appendChild(style);

    const gui = document.createElement('div');
    gui.id = 'utility-gui';
    gui.innerHTML = `
        <div id="gui-header"><span class="gui-title">Utility Console</span></div>
        <div class="gui-content">
            <div class="gui-row"><span class="gui-label">Auto-Swap (EMP)</span>
                <label class="toggle-switch"><input type="checkbox" id="swap-toggle"><span class="slider"></span></label>
            </div>
            <div class="gui-row"><span class="gui-label">Auto-Buy Hat</span>
                <label class="toggle-switch"><input type="checkbox" id="buy-toggle"><span class="slider"></span></label>
            </div>
            <div class="gui-row"><span class="gui-label">Auto-Cactus</span>
                <label class="toggle-switch"><input type="checkbox" id="cactus-toggle"><span class="slider"></span></label>
            </div>
            <div class="gui-row"><span class="gui-label">Auto-Blocker</span>
                <label class="toggle-switch"><input type="checkbox" id="blocker-toggle"><span class="slider"></span></label>
            </div>
            <div class="divider"></div>
            <div class="gui-row"><span class="gui-label">Target Hat</span>
                <select id="base-hat-select" class="gui-select">
                    ${hatList.map((name, i) => `<option value="${i+1}" ${name === 'Tail' ? 'selected' : ''}>${name}</option>`).join('')}
                </select>
            </div>
            <div class="gui-row"><span class="gui-label">Swap Delay</span>
                <input type="number" id="swap-delay" class="gui-input" value="0" min="0" style="width: 50px;">
            </div>
            <div class="gui-hint">ALT + K TO TOGGLE MENU</div>
        </div>
    `;
    document.body.appendChild(gui);

    // --- GUI INTERACTION ---
    const header = document.getElementById('gui-header');
    header.onmousedown = (e) => { state.isDragging = true; state.dragOffset.x = e.clientX - gui.offsetLeft; state.dragOffset.y = e.clientY - gui.offsetTop; };
    window.onmousemove = (e) => { if (state.isDragging) { gui.style.left = (e.clientX - state.dragOffset.x) + 'px'; gui.style.top = (e.clientY - state.dragOffset.y) + 'px'; gui.style.right = 'auto'; } };
    window.onmouseup = () => state.isDragging = false;
    window.onkeydown = (e) => { if (e.altKey && e.code === 'KeyK') { state.guiVisible = !state.guiVisible; gui.style.opacity = state.guiVisible ? '1' : '0'; gui.style.pointerEvents = state.guiVisible ? 'all' : 'none'; gui.style.transform = state.guiVisible ? 'scale(1)' : 'scale(0.9)'; } };

    document.getElementById('swap-toggle').onchange = (e) => state.swapEnabled = e.target.checked;
    document.getElementById('buy-toggle').onchange = (e) => state.buyEnabled = e.target.checked;
    document.getElementById('cactus-toggle').onchange = (e) => state.autoCactus = e.target.checked;
    document.getElementById('blocker-toggle').onchange = (e) => state.autoBlocker = e.target.checked;
    document.getElementById('base-hat-select').onchange = (e) => state.baseHatId = parseInt(e.target.value);
    document.getElementById('swap-delay').oninput = (e) => state.delay = parseInt(e.target.value) || 0;

    // --- UTILITIES ---
    function isHatOwned(id) {
        const skinEl = _0x5691f4[id - 1];
        const isOwned = skinEl ? skinEl.querySelector('.shop-btn').style.display === 'none' : true;
        if (isOwned && !state.ownedCache.has(id)) {
            state.ownedCache.add(id);
            _0x336d9a(`[Auto-Buy]: Bought ${hatList[id-1]}`, true);
        }
        return isOwned;
    }

    function getClearAngle() {
        const directions = 8; 
        const step = (Math.PI * 2) / directions;
        const blockerSize = 35; 
        const placeDist = 70; 

        for (let i = 0; i < directions; i++) {
            let angle = i * step;
            let checkX = _0x466240.x + Math.cos(angle) * placeDist;
            let checkY = _0x466240.y + Math.sin(angle) * placeDist;
            
            let obstructed = false;
            for (let ent of _0x5a712e) {
                if (ent.isDead) continue;
                let dist = Math.hypot(ent.x - checkX, ent.y - checkY);
                if (dist < (ent.size + blockerSize)) {
                    obstructed = true;
                    break;
                }
            }
            if (!obstructed) return angle;
        }
        return null;
    }

    // --- MAIN TICK ---
    setInterval(() => {
        if (!_0x466240 || _0x466240.isDead) return;
        const now = Date.now();

        // 1. Auto-Buy Monitoring
        if (state.buyEnabled) {
            const hatIndex = state.baseHatId - 1;
            const hatData = _0xca1cdc.WM[hatIndex];
            if (hatData && _0x4e3cab >= hatData.cost && !isHatOwned(state.baseHatId)) {
                _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iBuySkin, hatIndex]));
            }
        }

        // 2. Auto-Cactus Logic
        if (state.autoCactus) {
            const storageUI = document.querySelector('.storage');
            const isOpen = storageUI && storageUI.classList.contains('show');
            if (isOpen && !state.storageWasOpen) {
                const bal = document.querySelector('.storage-balance');
                if (bal) {
                    const getNum = s => parseInt((bal.querySelector(s)?.getAttribute('stroke') || '0').replace(/,/g, ''));
                    const f = getNum('.food-count'), w = getNum('.wood-count'), s = getNum('.stone-count'), g = getNum('.gold-count');
                    if (f+w+s+g > 0) {
                        const p = new DataView(new ArrayBuffer(17));
                        p.setUint8(0, _0xca1cdc.wT.iWithdraw); 
                        p.setUint32(1, f); p.setUint32(5, w); p.setUint32(9, s); p.setUint32(13, g);
                        _0x2d5e24(p);
                        _0x336d9a(`[Auto-Cactus]: Withdrew [F:${f}, W:${w}, S:${s}, G:${g}]`, true);
                    }
                }
            }
            state.storageWasOpen = isOpen;
        }

        // 3. Auto-Blocker Logic
        if (state.autoBlocker && now - state.lastBlockerTime > 250) {
            const explosives = [_0xca1cdc.gv.landmine, _0xca1cdc.gv.tnt, _0xca1cdc.gv.nuke];
            const threat = _0x5a712e.find(e => explosives.includes(e.type) && !e.isDead && Math.hypot(e.x - _0x466240.x, e.y - _0x466240.y) < 160);
            
            if (threat) {
                const clearAngle = getClearAngle();
                const blocker = _0xca1cdc.ev.find(x => x.name === "Blocker");
                if (clearAngle !== null && blocker) {
                    // Angle
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iAngle, _0xca1cdc.eG(clearAngle)]));
                    // Switch
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iChangeItem, blocker.id]));
                    // Place (Attack Key Bit)
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iKeyState, 0x10]));
                    // Release
                    setTimeout(() => _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iKeyState, 0x0])), 30);
                    
                    state.lastBlockerTime = now;
                    _0x336d9a(`[Auto-Blocker]: Defended against explosive!`, true);
                }
            }
        }

        // 4. Auto-Swap (Standard EMP Logic)
        if (state.swapEnabled && (now - state.lastSwitch >= state.delay)) {
            const danger = _0x5a712e.some(e => e.isCannon && !e.isDead && Math.hypot(e.x - _0x466240.x, e.y - _0x466240.y) < 530);
            const target = danger ? state.empId : state.baseHatId;
            if (target !== state.currentEquipped && isHatOwned(target)) {
                _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iChangeSkin, target]));
                state.currentEquipped = target;
                state.lastSwitch = now;
            }
        }
    }, 1000 / 60);
})();
// MOD END
