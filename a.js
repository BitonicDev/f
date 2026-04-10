(() => {
  'use strict';

  var _0x155687 = {
    0x117: (_0x180c5f, _0x10b2d1, _0x47744b) => {
      _0x47744b.d(_0x10b2d1, {
        '$p': () => _0x1931dc,
        'BR': () => 0x190,
        'Cn': () => 0x34bc,
        'DH': () => 0x10,
        'Hx': () => _0x34621f,
        'Jl': () => _0xf9dcf8,
        'KN': () => 0x2328,
        'OU': () => _0x4cf00f,
        'Pm': () => _0x5181b2,
        'SD': () => _0x48f4fb,
        'UA': () => _0x2c2aa9,
        'WM': () => _0x2b1728,
        'Wv': () => _0x544a89,
        'cS': () => 0x28,
        'dJ': () => 0x1e,
        'e1': () => 0x320,
        'eG': () => _0x3e6999,
        'ev': () => _0x2d7a5d,
        'gv': () => _0x368d9e,
        'nH': () => _0x49a7e0,
        'nf': () => _0x173726,
        'ry': () => 0x151,
        'uW': () => _0x50ace0,
        'wT': () => _0x4ccc14,
        'xz': () => 0xc,
        'y1': () => 0xfa,
        'z6': () => _0x48f7f6,
        'zB': () => 0xa,
        'zb': () => _0x5a1b00
      });
      const _0x4ccc14 = {
        'kicked': 0x0,
        'joinedGame': 0x1,
        'update': 0x2,
        'loggedIn': 0x3,
        'joinedClan': 0x4,
        'clanJoinRejected': 0x5,
        'leftClan': 0x6,
        'cantPerformAction': 0x7,
        'addClanPlayer': 0x8,
        'removeClanPlayer': 0x9,
        'addClan': 0xa,
        'updateClan': 0xb,
        'removeClan': 0xc,
        'fullClanList': 0xd,
        'clanJoinReq': 0xe,
        'clanReqRejected': 0xf,
        'skinOwned': 0x10,
        'gotGift': 0x11,
        'accountData': 0x12,
        'usernameClaimed': 0x13,
        'usernameTaken': 0x14,
        'glbData': 0x15,
        'challenge': 0x16,
        'accountNotFound': 0x17,
        'tryAgainLater': 0x18,
        'showEditDisplay': 0x19,
        'hideEditDisplay': 0x1a,
        'showStorage': 0x1b,
        'hideStorage': 0x1c,
        'matRewardAck': 0x1d,
        'matRewardDelivered': 0x1e,
        'joinGame': 0x0,
        'iKeyState': 0x1,
        'iAngle': 0x2,
        'iChangeItem': 0x3,
        'iChat': 0x4,
        'login': 0x5,
        'iClanJoinReq': 0x6,
        'iClanCreate': 0x7,
        'iClanKick': 0x8,
        'iClanLeave': 0x9,
        'iClanJoinReqVerdict': 0xa,
        'iClanKick': 0xb,
        'iBuySkin': 0xc,
        'iChangeSkin': 0xd,
        'iGift': 0xe,
        'iClaimUsername': 0xf,
        'iGlbReq': 0x10,
        'iAccountDataReq': 0x11,
        'iPing': 0x12,
        'iDisplayEdit': 0x13,
        'iDeposit': 0x14,
        'iWithdraw': 0x15,
        'iReqMats': 0x16
      };
      const _0xf9dcf8 = {
        'invalidProtocol': 0x0,
        'afk': 0x1,
        'tooManyConnections': 0x2,
        'outdatedVersion': 0x3,
        'connectionIdle': 0x4,
        'loginFailed': 0x5
      };
      const _0x368d9e = {
        'player': 0x0,
        'food': 0x1,
        'stone': 0x2,
        'wood': 0x3,
        'windmill': 0x4,
        'spike': 0x5,
        'platform': 0x6,
        'trap': 0x7,
        'boostPad': 0x8,
        'cannon': 0x9,
        'bullet': 0xa,
        'goldStone': 0xb,
        'npcCow': 0xc,
        'wall': 0xd,
        'npcDuck': 0xe,
        'wall1': 0xf,
        'wall2': 0x10,
        'spike1': 0x11,
        'spike2': 0x12,
        'windmill1': 0x13,
        'windmill2': 0x14,
        'boostPad1': 0x15,
        'teleporter': 0x16,
        'cannon1': 0x17,
        'cannon2': 0x18,
        'npcPig': 0x19,
        'blocker': 0x1a,
        'tnt': 0x1b,
        'nuke': 0x1c,
        'landmine': 0x1d,
        'npcBear': 0x1e,
        'hole': 0x1f,
        'display': 0x20
      };
      const _0x48f4fb = [0x6, 0x1d, 0x7, 0x8, 0x15, 0x16, 0x20, 0x5, 0x11, 0x12, 0xd, 0xf, 0x10, 0x9, 0x17, 0x18, 0x1a, 0x1b, 0x1c, 0x0, 0xa, 0x2, 0xb, 0x1, 0x4, 0x13, 0x14, 0x3];
      function _0x173726(_0x53eec2) {
        return 'goldFarmed' === _0x53eec2 || "maxGold" === _0x53eec2;
      }
      function _0x1931dc(_0xd528de) {
        return _0xd528de.trim().slice(0x0, 0x1e);
      }
      const _0x2c2aa9 = {
        'snow': 1800,
        'desert': 7200,
        'river': [4200, 4800]
      };
      function _0x49a7e0(_0x9c05f6) {
        return {
          'snow': 0.2 * _0x9c05f6,
          'desert': 0.8 * _0x9c05f6,
          'river': [0.5 * _0x9c05f6 - 0x12c, 0.5 * _0x9c05f6 + 0x12c]
        };
      }
      const _0x2c81ef = 0x2 * Math.PI;
      function _0x3e6999(_0x2f2c38) {
        if ((_0x2f2c38 %= _0x2c81ef) < 0x0) {
          _0x2f2c38 += _0x2c81ef;
        }
        return Math.round(_0x2f2c38 / _0x2c81ef * 0xff);
      }
      function _0x5181b2(_0x251ee9) {
        return _0x251ee9 / 0xff * _0x2c81ef;
      }
      function _0x48f7f6(_0x190fac) {
        return !(!_0x190fac || 0x24 !== _0x190fac.length) && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x190fac);
      }
      const _0x2b1728 = [{
        'name': "Cow",
        'cost': 0x0,
        'desc': "Nothing special here, just a cow hat.",
        'special': false
      }, {
        'name': "Duck",
        'cost': 0x0,
        'desc': "Quack!",
        'special': false
      }, {
        'name': "Piggy",
        'cost': 0x0,
        'desc': "A slaughted pig's head makes a good comestic.",
        'special': false
      }, {
        'name': "Bear",
        'cost': 0x0,
        'desc': "Cute teddy bear hat.",
        'special': false
      }, {
        'name': 'Pixel',
        'cost': 0x7d0,
        'desc': "Your player becomes pixelated.",
        'special': false
      }, {
        'name': "Bush",
        'cost': 0x2710,
        'desc': "Be a deadly cactus in the desert. Others can hit you to gain food. Gain food over time.",
        'special': true,
        'inv': true,
        'rewards': true
      }, {
        'name': "Tree",
        'cost': 0x2710,
        'desc': "Gives you wood over time. Others can hit you to gain wood.",
        'inv': true,
        'special': true,
        'rewards': true
      }, {
        'name': "Stone",
        'cost': 0x2710,
        'desc': "Gives you stone over time. Others can hit you to gain stone.",
        'inv': true,
        'special': true,
        'rewards': true
      }, {
        'name': "EMP",
        'cost': 0x4e20,
        'desc': "Cannons don't shoot you.",
        'special': true
      }, {
        'name': "Tube",
        'cost': 0x1b58,
        'desc': "Allows you to swim around in water.",
        'special': true
      }, {
        'name': "Tail",
        'cost': 0x3a98,
        'desc': "You move faster.",
        'dmgFactor': 0x1,
        'moveFactor': 1.4,
        'special': true
      }, {
        'name': "Mole",
        'cost': 0x4e20,
        'desc': "Press F to go underground. You can move through objects while you are underground.",
        'special': true,
        'canUse': true
      }, {
        'name': "Eye",
        'cost': 0x4e20,
        'desc': "Increases your view range by 20% and lets you see enemy traps.",
        'viewScale': 1.2,
        'special': true
      }, {
        'name': "Medic",
        'cost': 0x1b58,
        'desc': "Regenerates 5 HP per second.",
        'special': true
      }];
      for (let _0x5d1b1e = 0x0; _0x5d1b1e < _0x2b1728.length; _0x5d1b1e++) {
        const _0x3c5d09 = _0x2b1728[_0x5d1b1e];
        _0x3c5d09.id = _0x5d1b1e;
        _0x3c5d09.dmgFactor = _0x3c5d09.dmgFactor || 0x1;
        _0x3c5d09.moveFactor = _0x3c5d09.moveFactor || 0x1;
      }
      const _0x2d7a5d = [{
        'name': 'Axe',
        'isWeapon': true,
        'damage': 0.25,
        'blockDamage': 0.25,
        'range': 0x1,
        'reload': 0x190,
        'woodReward': 0x4,
        'foodReward': 0x2,
        'stoneReward': 0x2,
        'goldReward': 0x5,
        'moveSpeed': 0x1,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'digSize': 0x1,
        'desc': "A tool best for gathering resources.",
        'subItems': ["Diamond Axe", "Gold Axe", "Diamond Hammer", "Gold Hammer", "Hammer"]
      }, {
        'name': "Sword",
        'isWeapon': true,
        'damage': 0.35,
        'blockDamage': 0.35,
        'range': 1.4,
        'reload': 0x1f4,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0x1,
        'goldReward': 0x1,
        'moveSpeed': 0.85,
        'uiY': 0xc,
        'uiX': -0x7,
        'uiScale': 0.8,
        'digSize': 0x1,
        'desc': "Increased range and damage but slower cooldown. Best for close combat.",
        'subItems': ["Diamond Sword", "Gold Sword"]
      }, {
        'name': 'Bat',
        'isWeapon': true,
        'damage': 0.2,
        'blockDamage': 0.2,
        'range': 1.4,
        'reload': 0x190,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0x1,
        'goldReward': 0x1,
        'repelFactor': 0x3,
        'moveSpeed': 0x1,
        'uiY': 0xe,
        'uiX': -0xc,
        'uiScale': 0.9,
        'digSize': 0x1,
        'desc': "High knockbacks with increased range.",
        'canEditDisplay': true,
        'subItems': ["Diamond Bat", "Gold Bat"]
      }, {
        'name': "Musket",
        'isWeapon': true,
        'range': 1.8,
        'isProj': true,
        'animFactor': 0x3,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0x1,
        'goldReward': 0x1,
        'proj': 0xa,
        'projRecoil': 0x1e,
        'projR': 0x88,
        'projDamage': 0.5,
        'projSpeed': 0x64,
        'projIter': 0x5,
        'projSize': 0x7,
        'damage': 0.2,
        'blockDamage': 0.2,
        'stoneCost': 0xa,
        'reload': 0x5dc,
        'uiY': 0x10,
        'uiX': -0xf,
        'uiAngle': -Math.PI / 0x4,
        'uiScale': 0.88,
        'moveSpeed': 0.65,
        'digSize': 0x1,
        'desc': "Ranged weapon with insane damage. A little heavy to carry.",
        'subItems': ["Diamond Musket", "Gold Musket"]
      }, {
        'name': 'Apple',
        'isFood': true,
        'hpRegen': 0.25,
        'reload': 0x190,
        'foodCost': 0x5,
        'uiY': 0xa,
        'uiScale': 1.2,
        'desc': "Heals 25 HP when consumed.",
        'subItems': ["Golden Apple", "Cookie"]
      }, {
        'name': "Spike",
        'placeBlock': 0x5,
        'canBlockHurt': true,
        'touchDmg': 0.2,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x14,
        'stoneCost': 0x5,
        'blockHealth': 0x4,
        'desc': "Hurts enemies that touch it.",
        'subItems': ["Stinger", "Toxic"]
      }, {
        'name': "Trap",
        'placeBlock': 0x7,
        'size': 0x28,
        'canBeWalkedOver': true,
        'isTrap': true,
        'reload': 0xc8,
        'woodCost': 0x1e,
        'stoneCost': 0x1e,
        'blockHealth': 2.5,
        'desc': "A hole in the ground that traps enemies that walk into it.",
        'subItems': ["Big Trap"]
      }, {
        'name': 'Windmill',
        'placeBlock': 0x4,
        'goldGen': 0x1,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x32,
        'stoneCost': 0xa,
        'desc': "Generates 1 gold per second.",
        'blockHealth': 0x4,
        'blockProj': true,
        'subItems': ["Generator", "Turbine"]
      }, {
        'name': 'Booster',
        'placeBlock': 0x8,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x5,
        'stoneCost': 0x14,
        'canBeWalkedOver': true,
        'boostAmount': 0x50,
        'blockHealth': 1.5,
        'desc': "A pad that boosts everything that walks on it in the direction of the arrow.",
        'subItems': ["Display", "Teleporter", "Thruster"]
      }, {
        'name': "Cannon",
        'placeBlock': 0x9,
        'size': 0x21,
        'isCannon': true,
        'bulletSize': 0x12,
        'bulletSpeed': 0x32,
        'bulletDmg': 0.15,
        'bulletRepel': 0x1e,
        'cannonReload': 0x1e,
        'reload': 0xc8,
        'woodCost': 0xc8,
        'stoneCost': 0x96,
        'blockHealth': 0x4,
        'desc': "Auto shoots at nearby enemies.",
        'subItems': ['Sniper', "Gunner"]
      }, {
        'name': "Platform",
        'placeBlock': 0x6,
        'size': 0x28,
        'reload': 0xc8,
        'woodCost': 0x14,
        'onlyInWater': true,
        'canBeWalkedOver': true,
        'canBePlacedOver': true,
        'blockHealth': 0x3,
        'desc': "Can be used to make bridges in water.",
        'subItems': ["Nuke", 'Bomb', "Landmine", "Blocker"]
      }, {
        'name': "Wall",
        'placeBlock': 0xd,
        'size': 0x2a,
        'reload': 0xc8,
        'woodCost': 0x0,
        'stoneCost': 0x32,
        'desc': "A strong block.",
        'blockHealth': 0x6,
        'blockProj': true,
        'subItems': ["Boulder", "Rock"]
      }, {
        'name': 'Rock',
        'placeBlock': 0xf,
        'size': 0x2c,
        'reload': 0xc8,
        'woodCost': 0x0,
        'stoneCost': 0x64,
        'goldCost': 0x190,
        'desc': "A stronger block.",
        'blockHealth': 0x9,
        'blockProj': true,
        'showInSlot': false
      }, {
        'name': "Boulder",
        'placeBlock': 0x10,
        'size': 0x2e,
        'reload': 0xc8,
        'woodCost': 0x0,
        'stoneCost': 0xc8,
        'goldCost': 0x320,
        'desc': "The strongest wall along with mole resistance.",
        'moleProof': true,
        'blockHealth': 0xc,
        'blockProj': true,
        'showInSlot': false
      }, {
        'name': "Toxic",
        'placeBlock': 0x11,
        'canBlockHurt': true,
        'touchDmg': 0.3,
        'size': 0x23,
        'reload': 0xc8,
        'foodCost': 0xa,
        'woodCost': 0x28,
        'stoneCost': 0x14,
        'goldCost': 0x12c,
        'blockHealth': 0x6,
        'desc': "Hurts & poisons enemies that touch it for 5 second.",
        'canPoison': true,
        'showInSlot': false
      }, {
        'name': "Stinger",
        'placeBlock': 0x12,
        'canBlockHurt': true,
        'touchDmg': 0.4,
        'size': 0x28,
        'reload': 0xc8,
        'woodCost': 0x64,
        'stoneCost': 0x32,
        'goldCost': 0x258,
        'blockHealth': 0x7,
        'desc': "Mole resistant spike that hurts enemies that touch it.",
        'moleProof': true,
        'showInSlot': false
      }, {
        'name': "Thruster",
        'placeBlock': 0x15,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0xf,
        'stoneCost': 0x28,
        'goldCost': 0x96,
        'canBeWalkedOver': true,
        'boostAmount': 0x78,
        'blockHealth': 0x2,
        'desc': "A faster version of booster.",
        'showInSlot': false
      }, {
        'name': 'Turbine',
        'placeBlock': 0x13,
        'goldGen': 0x5,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0xc8,
        'stoneCost': 0x32,
        'goldCost': 0x2ee,
        'desc': "Generates 5 gold per second.",
        'blockHealth': 0x6,
        'blockProj': true,
        'showInSlot': false
      }, {
        'name': "Generator",
        'placeBlock': 0x14,
        'goldGen': 0xa,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x190,
        'stoneCost': 0x64,
        'goldCost': 0x5dc,
        'desc': "Generates 10 gold per second.",
        'blockHealth': 0x8,
        'blockProj': true,
        'showInSlot': false
      }, {
        'name': "Cookie",
        'isFood': true,
        'hpRegen': 0.35,
        'reload': 0x190,
        'foodCost': 0xf,
        'goldCost': 0x32,
        'uiY': 0x6,
        'uiScale': 1.35,
        'desc': "Heals 35 HP when consumed.",
        'showInSlot': false
      }, {
        'name': "Teleporter",
        'placeBlock': 0x16,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x3c,
        'stoneCost': 0x3c,
        'goldCost': 0x1f4,
        'canBeWalkedOver': true,
        'blockHealth': 1.5,
        'desc': "Teleports entities to a random location when they walk over it",
        'showInSlot': false
      }, {
        'name': "Gunner",
        'placeBlock': 0x17,
        'size': 0x21,
        'isCannon': true,
        'bulletSize': 0x12,
        'bulletSpeed': 0x23,
        'bulletDmg': 0.05,
        'bulletRepel': 0xc,
        'cannonReload': 0x7,
        'reload': 0xc8,
        'woodCost': 0x190,
        'stoneCost': 0x12c,
        'goldCost': 0x1f4,
        'blockHealth': 0x5,
        'desc': "Fast reload but low bullet damage and speed.",
        'showInSlot': false
      }, {
        'name': 'Sniper',
        'placeBlock': 0x18,
        'size': 0x21,
        'isCannon': true,
        'bulletSize': 0xc,
        'bulletSpeed': 0x64,
        'cannonReload': 0x3c,
        'bulletDmg': 0.4,
        'bulletRepel': 0x32,
        'reload': 0xc8,
        'woodCost': 0x320,
        'stoneCost': 0x258,
        'goldCost': 0x3e8,
        'blockHealth': 0x5,
        'cannonRange': 0x258,
        'desc': "Long range, faster bullets, more damage, but slow reload.",
        'showInSlot': false
      }, {
        'name': "Big Trap",
        'placeBlock': 0x7,
        'size': 0x46,
        'canBeWalkedOver': true,
        'isTrap': true,
        'reload': 0xc8,
        'woodCost': 0x64,
        'stoneCost': 0x64,
        'blockHealth': 0x5,
        'goldCost': 0x1f4,
        'desc': "A bigger hole in the ground that traps enemies that walk into it.",
        'showInSlot': false
      }, {
        'name': 'Hammer',
        'isWeapon': true,
        'damage': 0.1,
        'blockDamage': 0.65,
        'range': 0x1,
        'animFactor': 1.2,
        'reload': 0x1c2,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0x4,
        'goldReward': 0xa,
        'moveSpeed': 0.9,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'desc': "Deals heavy damage to blocks but low damage to mobs. Gives 4x stone and 5x gold.",
        'showInSlot': false
      }, {
        'name': "Golden Apple",
        'isFood': true,
        'hpRegen': 0.3,
        'healOverTime': true,
        'attractMobs': true,
        'reload': 0x190,
        'foodCost': 0x19,
        'goldCost': 0x1f4,
        'uiY': 0xa,
        'uiScale': 1.2,
        'desc': "Heals 30 HP when consumed and then heals 10 HP every second for 5 seconds. Attracts mobs towards you.",
        'showInSlot': false
      }, {
        'name': "Blocker",
        'placeBlock': 0x1a,
        'size': 0x23,
        'reload': 0xc8,
        'woodCost': 0x28,
        'stoneCost': 0x14,
        'goldCost': 0xfa,
        'desc': "Prevents players from placing blocks nearby. Blocks impact of explosion.",
        'blockHealth': 0x4,
        'showInSlot': false
      }, {
        'name': "Landmine",
        'placeBlock': 0x1d,
        'size': 0x22,
        'reload': 0xc8,
        'woodCost': 0x3c,
        'stoneCost': 0x3c,
        'goldCost': 0xfa,
        'desc': "Cuases a small explosion when someone walks over it.",
        'blockHealth': 0x3,
        'isExplosive': true,
        'explodeRange': 0x64,
        'explodeBlockDmg': 0x2,
        'explodePlayerDmg': 0.3,
        'explodeRepel': 0x1e,
        'canBeWalkedOver': true,
        'showInSlot': false
      }, {
        'name': "Bomb",
        'placeBlock': 0x1b,
        'size': 0x28,
        'reload': 0xc8,
        'woodCost': 0xc8,
        'stoneCost': 0xc8,
        'goldCost': 0x1f4,
        'desc': "Explodes when hit by a bullet. 400 damage to blocks and 40 damage to players.",
        'blockHealth': 0x4,
        'digSize': 0x96,
        'isExplosive': true,
        'explodeRange': 0x12c,
        'explodeBlockDmg': 0x4,
        'explodePlayerDmg': 0.4,
        'explodeRepel': 0x32,
        'showInSlot': false
      }, {
        'name': "Nuke",
        'placeBlock': 0x1c,
        'size': 0x2b,
        'reload': 0xc8,
        'woodCost': 0x1f4,
        'stoneCost': 0x1f4,
        'goldCost': 0x1388,
        'desc': "Giant explosion when it gets hit by a bullet. 700 damage to blocks and 50 damage to players",
        'blockHealth': 0x6,
        'digSize': 0xff,
        'isExplosive': true,
        'explodeRange': 0x190,
        'explodeBlockDmg': 0x7,
        'explodePlayerDmg': 0.5,
        'explodeRepel': 0x50,
        'showInSlot': false
      }, {
        'name': "Gold Sword",
        'isWeapon': true,
        'damage': 0.38,
        'blockDamage': 0.38,
        'range': 1.4,
        'reload': 0x1f4,
        'woodReward': 0x2,
        'foodReward': 0x2,
        'stoneReward': 0x2,
        'goldReward': 0x2,
        'goldCost': 0x96,
        'moveSpeed': 0.85,
        'uiY': 0xc,
        'uiX': -0x7,
        'uiScale': 0.8,
        'desc': "Better variant of Sword.",
        'digSize': 1.25,
        'showInSlot': false
      }, {
        'name': "Diamond Sword",
        'isWeapon': true,
        'damage': 0.42,
        'blockDamage': 0.42,
        'range': 1.4,
        'reload': 0x1f4,
        'woodReward': 0x3,
        'foodReward': 0x3,
        'stoneReward': 0x3,
        'goldReward': 0x3,
        'goldCost': 0x12c,
        'moveSpeed': 0.85,
        'uiY': 0xc,
        'uiX': -0x7,
        'uiScale': 0.8,
        'digSize': 1.5,
        'desc': "Best variant of Sword.",
        'showInSlot': false
      }, {
        'name': "Gold Axe",
        'isWeapon': true,
        'damage': 0.28,
        'blockDamage': 0.28,
        'range': 0x1,
        'reload': 0x190,
        'woodReward': 0x8,
        'foodReward': 0x4,
        'stoneReward': 0x4,
        'goldReward': 0xa,
        'moveSpeed': 0x1,
        'goldCost': 0x7d,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'digSize': 1.25,
        'desc': "Better variant of Axe.",
        'showInSlot': false
      }, {
        'name': "Diamond Axe",
        'isWeapon': true,
        'damage': 0.3,
        'blockDamage': 0.3,
        'range': 0x1,
        'reload': 0x190,
        'woodReward': 0xc,
        'foodReward': 0x6,
        'stoneReward': 0x6,
        'goldReward': 0xf,
        'moveSpeed': 0x1,
        'goldCost': 0xfa,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'digSize': 1.5,
        'desc': "Best variant of Axe.",
        'showInSlot': false
      }, {
        'name': "Gold Hammer",
        'isWeapon': true,
        'damage': 0.15,
        'blockDamage': 0.72,
        'range': 0x1,
        'animFactor': 1.2,
        'reload': 0x1c2,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0x8,
        'goldReward': 0x14,
        'moveSpeed': 0.9,
        'goldCost': 0x7d,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'digSize': 1.25,
        'desc': "Better variant of Hammer",
        'showInSlot': false
      }, {
        'name': "Diamond Hammer",
        'isWeapon': true,
        'damage': 0.2,
        'blockDamage': 0.8,
        'range': 0x1,
        'animFactor': 1.2,
        'reload': 0x1c2,
        'woodReward': 0x1,
        'foodReward': 0x1,
        'stoneReward': 0xc,
        'goldReward': 0x1e,
        'goldCost': 0xfa,
        'moveSpeed': 0.9,
        'uiY': 0xa,
        'uiX': -0x5,
        'uiScale': 0x1,
        'digSize': 1.5,
        'desc': "Best variant of Hammer.",
        'showInSlot': false
      }, {
        'name': "Gold Bat",
        'isWeapon': true,
        'damage': 0.25,
        'blockDamage': 0.25,
        'range': 1.4,
        'reload': 0x190,
        'woodReward': 0x2,
        'foodReward': 0x2,
        'stoneReward': 0x2,
        'goldReward': 0x2,
        'goldCost': 0x7d,
        'repelFactor': 0x3,
        'moveSpeed': 0x1,
        'uiY': 0xe,
        'uiX': -0xc,
        'uiScale': 0.9,
        'digSize': 1.25,
        'canEditDisplay': true,
        'desc': "Better variant of Bat.",
        'showInSlot': false
      }, {
        'name': "Diamond Bat",
        'isWeapon': true,
        'damage': 0.3,
        'blockDamage': 0.3,
        'range': 1.4,
        'reload': 0x190,
        'woodReward': 0x3,
        'foodReward': 0x3,
        'stoneReward': 0x3,
        'goldReward': 0x3,
        'goldCost': 0xfa,
        'repelFactor': 0x3,
        'moveSpeed': 0x1,
        'uiY': 0xe,
        'uiX': -0xc,
        'uiScale': 0.9,
        'digSize': 1.5,
        'desc': "Best variant of Bat.",
        'canEditDisplay': true,
        'showInSlot': false
      }, {
        'name': "Gold Musket",
        'isWeapon': true,
        'range': 1.8,
        'isProj': true,
        'animFactor': 0x3,
        'woodReward': 0x2,
        'foodReward': 0x2,
        'stoneReward': 0x2,
        'goldReward': 0x2,
        'proj': 0xa,
        'projRecoil': 0x1e,
        'projR': 0x88,
        'projDamage': 0.6,
        'projSpeed': 0x64,
        'projIter': 0x5,
        'projSize': 0x7,
        'damage': 0.2,
        'blockDamage': 0.2,
        'stoneCost': 0xa,
        'goldCost': 0xfa,
        'reload': 0x5dc,
        'uiY': 0x10,
        'uiX': -0xf,
        'uiAngle': -Math.PI / 0x4,
        'uiScale': 0.88,
        'moveSpeed': 0.7,
        'digSize': 1.25,
        'desc': "Better variant of Musket. Lighter to carry and more damage.",
        'showInSlot': false
      }, {
        'name': "Diamond Musket",
        'isWeapon': true,
        'range': 1.8,
        'isProj': true,
        'animFactor': 0x3,
        'woodReward': 0x3,
        'foodReward': 0x3,
        'stoneReward': 0x3,
        'goldReward': 0x3,
        'proj': 0xa,
        'projRecoil': 0x1e,
        'projR': 0x88,
        'projDamage': 0.65,
        'projSpeed': 0x64,
        'projIter': 0x5,
        'projSize': 0x7,
        'damage': 0.2,
        'blockDamage': 0.2,
        'stoneCost': 0xa,
        'goldCost': 0x1f4,
        'reload': 0x5dc,
        'uiY': 0x10,
        'uiX': -0xf,
        'uiAngle': -Math.PI / 0x4,
        'uiScale': 0.88,
        'moveSpeed': 0.75,
        'digSize': 1.5,
        'desc': "Best variant of Musket. Lightest to carry and deals the most damage.",
        'showInSlot': false
      }, {
        'name': "Display",
        'placeBlock': 0x20,
        'size': 0x28,
        'reload': 0xc8,
        'woodCost': 0x32,
        'stoneCost': 0x32,
        'goldCost': 0x32,
        'desc': "A LED display on which you can write text. Hit with bat to edit later on.",
        'blockHealth': 0x3,
        'canBeWalkedOver': true,
        'showInSlot': false
      }];
      const _0x550ae1 = {};
      for (let _0x2f3bf4 = 0x0; _0x2f3bf4 < _0x2d7a5d.length; _0x2f3bf4++) {
        const _0x374d06 = _0x2d7a5d[_0x2f3bf4];
        _0x374d06.id = _0x2f3bf4;
        if (_0x374d06.reload) {
          _0x374d06.repelFactor = _0x374d06.repelFactor || 0x1;
          _0x374d06.blockDamage = _0x374d06.blockDamage || _0x374d06.damage;
        }
        _0x374d06.foodCost = _0x374d06.foodCost || 0x0;
        _0x374d06.goldCost = _0x374d06.goldCost || 0x0;
        _0x374d06.woodCost = _0x374d06.woodCost || 0x0;
        _0x374d06.stoneCost = _0x374d06.stoneCost || 0x0;
        _0x374d06.goldCost = _0x374d06.goldCost || 0x0;
        _0x374d06.blockHealth = 0x1 / _0x374d06.blockHealth;
        _0x374d06.range = _0x374d06.range || 0x1;
        _0x374d06.moveSpeed = _0x374d06.moveSpeed || 0x1;
        _0x550ae1[_0x374d06.name] = _0x374d06;
      }
      for (let _0x1c3bad = 0x0; _0x1c3bad < _0x2d7a5d.length; _0x1c3bad++) {
        const _0x58c9db = _0x2d7a5d[_0x1c3bad];
        if (_0x58c9db.subItems) {
          for (let _0x187825 = 0x0; _0x187825 < _0x58c9db.subItems.length; _0x187825++) {
            const _0x5538f1 = _0x58c9db.subItems[_0x187825];
            _0x58c9db.subItems[_0x187825] = _0x550ae1[_0x5538f1];
          }
        }
      }
      const _0x50ace0 = ["#d9aa6f", "#dbc7b1", '#8da1e4', "#fba9ae", '#faabff', '#a3e089'];
      const _0x5a1b00 = ["#ff3529", '#34fc32', "#32dffc", "#dd39ff"];
      function _0x34621f(_0x4d7ea6, _0xaa8c64 = '') {
        return _0x4d7ea6.replace(/(\u200D|\u200B|\u0020\u00A0|\u1680|\u180E|\u2000|\u2001|\u2002|\u2003|\u2004|\u2005|\u2006|\u2007|\u2008|\u2009|\u200A|\u200B|\u202F|\u205F|\u3000|\uFEFF|\u0307|\s|\r|\t|\n)/g, _0xaa8c64).slice(0x0, 0xc);
      }
      function _0x4cf00f() {
        return {
          'timePlayed': 0x0,
          'gamesPlayed': 0x0,
          'totalKills': 0x0,
          'playersKilled': 0x0,
          'cowsKilled': 0x0,
          'ducksKilled': 0x0,
          'pigsKilled': 0x0,
          'bearsKilled': 0x0,
          'projectilesFired': 0x0,
          'projectileKills': 0x0,
          'spikeKills': 0x0,
          'foodEaten': 0x0,
          'bombsExploded': 0x0,
          'bombKills': 0x0,
          'woodFarmed': 0x0,
          'stoneFarmed': 0x0,
          'foodFarmed': 0x0,
          'goldFarmed': 0x0,
          'maxWood': 0x0,
          'maxStone': 0x0,
          'maxFood': 0x0,
          'maxGold': 0x0,
          'maxKills': 0x0,
          'weaponSwings': 0x0,
          'blocksPlaced': 0x0,
          'blocksDestroyed': 0x0,
          'maxGoldGenSpeed': 0x0,
          'chatSent': 0x0,
          'maxTimeAlive': 0x0,
          'timeJoined': Math.floor(Date.now() / 0x3e8 / 0x3c / 0x3c)
        };
      }
      function _0x544a89(_0x4a91e2) {
        return _0x4a91e2.timePlayed / 0x78 + _0x4a91e2.playersKilled / 0xc8 + (_0x4a91e2.totalKills - _0x4a91e2.playersKilled) / 0x2ee0 + (_0x4a91e2.woodFarmed + _0x4a91e2.foodFarmed + _0x4a91e2.stoneFarmed) / 0x30d40 + _0x4a91e2.goldFarmed / 0x989680 + Math.min(0x3, _0x4a91e2.timePlayed / 0xf);
      }
    }
  };
  var _0x124e1a = {};
  function _0x8e7474(_0x54c8e9) {
    var _0x4379f6 = _0x124e1a[_0x54c8e9];
    if (undefined !== _0x4379f6) {
      return _0x4379f6.exports;
    }
    var _0x1c5221 = _0x124e1a[_0x54c8e9] = {
      'exports': {}
    };
    _0x155687[_0x54c8e9](_0x1c5221, _0x1c5221.exports, _0x8e7474);
    return _0x1c5221.exports;
  }
  _0x8e7474.d = (_0x2d44bd, _0x37d6ab) => {
    for (var _0x323cbe in _0x37d6ab) if (_0x8e7474.o(_0x37d6ab, _0x323cbe) && !_0x8e7474.o(_0x2d44bd, _0x323cbe)) {
      Object.defineProperty(_0x2d44bd, _0x323cbe, {
        'enumerable': true,
        'get': _0x37d6ab[_0x323cbe]
      });
    }
  };
  _0x8e7474.o = (_0x41dfb3, _0x3740ca) => Object.prototype.hasOwnProperty.call(_0x41dfb3, _0x3740ca);
  (() => {
    var _0xca1cdc = _0x8e7474(0x117);
    console.log("running...");
    const _0x362c43 = [{
      'name': 'Forever',
      'desc': "A very pro poooo player",
      'url': 'https://www.youtube.com/channel/UCZs-_I1U3F_Fh-JNoeAfIDA'
    }, {
      'name': 'ChocoMilk',
      'desc': "High quality videos",
      'url': "https://www.youtube.com/channel/UCXLTBQJr_eBawN6AYK6grDA"
    }, {
      'name': "Xochi",
      'desc': "Very cool person!",
      'url': "https://www.youtube.com/channel/UCakaOGL2lgFG5uB4SFDKFmQ"
    }, {
      'name': "dePapel",
      'desc': "Leader of the [🔰] clan",
      'url': "https://www.youtube.com/@depapel2151/"
    }, {
      'name': 'Zert',
      'desc': "Pro developer of poopoo",
      'url': 'https://www.youtube.com/channel/UCIOS0DXnHeJntd6ykPbCPNg'
    }, {
      'name': 'Cx0',
      'desc': "Youtuber from the unholy era of poopoo",
      'url': "https://www.youtube.com/channel/UCPhWcFinYTYdShMXoyGbTzA"
    }, {
      'name': "BBG on YT",
      'desc': "Youtuber from the unholy era of poopoo",
      'url': "https://www.youtube.com/@BBGOnYT/"
    }, {
      'name': 'Ark',
      'desc': "Makes 2 FPS videos",
      'url': 'https://www.youtube.com/@ArkThePro'
    }];
    const _0x945860 = document.querySelector(".featured");
    const _0x149d90 = document.querySelector(".featured-name");
    const _0x52e800 = document.querySelector(".featured-desc");
    let _0x451d63 = Math.floor(Math.random() * _0x362c43.length);
    function _0x233db5() {
      const _0x16362f = _0x362c43[_0x451d63];
      _0x451d63 = (_0x451d63 + 0x1) % _0x362c43.length;
      if (_0x16362f) {
        _0x5a0152(_0x149d90, _0x16362f.name);
        _0x5a0152(_0x52e800, _0x16362f.desc);
        _0x945860.onclick = function () {
          window.open(_0x16362f.url, '_blank');
          _0x233db5();
        };
        _0x945860.style.display = '';
      } else {
        _0x945860.style.display = "none";
      }
    }
    _0x233db5();
    let _0x3cbef9 = {};
    try {
      _0x3cbef9 = window.localStorage;
    } catch (_0x4dc07c) {
      console.log("WARNING: localStorage denied.");
    }
    document.querySelector(".export-btn").onclick = function () {
      window.prompt("Copy and store it safely.\nWARNING: You will lose your account if you lose it.", _0x3f59c9);
    };
    document.querySelector(".import-btn").onclick = function () {
      const _0x18dfad = window.prompt("Enter account ID below.\nWARNING: Make sure to export your current account before proceeding.");
      if (_0x18dfad) {
        0x0;
        if (!_0xca1cdc.z6(_0x18dfad)) {
          return alert("Invalid account.");
        }
        _0x3cbef9.playerId = _0x18dfad;
        delete _0x3cbef9.discord_data;
        if (_0x419dc9) {
          try {
            _0x419dc9.close();
          } catch (_0x226b95) {}
        }
      }
    };
    const _0x2885af = document.querySelector(".alert");
    _0x2885af.style.display = 'none';
    const _0x1dc200 = document.querySelector('.alert-title');
    const _0x1e7640 = document.querySelector(".alert-info");
    const _0x301307 = Math.random() + '-' + Math.random();
    let _0x4acee0 = true;
    const _0xe09dd7 = document.querySelector('.ad-blocker');
    fetch("/weborama.js").then(_0x29aa18 => {
      _0xe09dd7.style.display = 'none';
      _0x4acee0 = false;
    })["catch"](_0x5b75e8 => {
      _0xe09dd7.style.display = '';
    });
    const _0x319b7e = document.createElement("div");
    const _0x6e5fae = [['Move', "ASWD or Arrow Keys"], ["Look Around", "Mouse Move"], ["Auto Attack", 'E'], ["Attack", "Spacebar or Left Click"], ["Chat", "Enter"], ["Sprint", 'Shift'], ["Select Item", "Number Keys 0-9, V, B"], ["Select Food", 'Q'], ["Select Spike", 'R'], ["Select Windmill", 'G'], ["Select Trap", 'C'], ["Show Hitboxes", 'P'], ["Toggle Kill Feed", '/'], ["Expand Minimap", "M or Hover Minimap"], ["Toggle Night Mode", 'L'], ["Toggle Clans", 'J'], ["Toggle Shop", 'H'], ["Accept Clan Join Req", 'T'], ["Reject Clan Join Req", 'Y'], ["Toggle Clan Chat", 'N'], ["Close Dialogs", 'Escape']];
    const _0x2c03ab = document.querySelector(".leaderboard");
    const _0x3ff515 = _0x2c03ab.querySelector(".dialog-content");
    const _0xcb70fe = document.querySelector(".leaderboard-btn");
    const _0x1999c3 = document.createElement('select');
    _0x1999c3.style.position = "absolute";
    _0x1999c3.style.pointerEvents = "none";
    _0x1999c3.style.visibility = "hidden";
    document.body.appendChild(_0x1999c3);
    const _0x14363d = document.createElement("option");
    _0x1999c3.appendChild(_0x14363d);
    const _0x390cd0 = _0x2c03ab.querySelector('select');
    _0x390cd0.onchange = function () {
      const _0x29a8a5 = this.selectedOptions[0x0];
      if (_0x29a8a5) {
        _0x14363d.innerText = _0x29a8a5.innerText;
        _0x390cd0.style.width = _0x1999c3.offsetWidth + 'px';
      }
      _0x164990();
    };
    const _0x3b5f38 = document.querySelector(".num-accounts");
    let _0x345450;
    function _0x164990() {
      if (!_0x345450) {
        return;
      }
      _0x3ff515.innerHTML = '';
      const _0x50bc9e = _0x390cd0.value;
      const _0x1c2439 = _0x345450[_0x50bc9e];
      for (let _0x3c0993 = 0x0; _0x3c0993 < _0x1c2439.length; _0x3c0993++) {
        const [_0x141556, _0xcde9b6] = _0x1c2439[_0x3c0993];
        _0x319b7e.innerHTML = "\n\t\t<div class=\"slot\">\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t</div>\n\t\t";
        const _0x55d297 = _0x319b7e.children[0x0];
        const [_0x96d545, _0x314847] = _0x55d297.children;
        if (_0x141556) {
          _0x55d297.classList.add("link");
          _0x55d297.onclick = function (_0x439b34) {
            if (!!(_0x439b34 instanceof Event && _0x439b34.isTrusted)) {
              _0x1bb451(_0x141556);
            }
          };
        }
        _0x5a0152(_0x96d545, _0x3c0993 + 0x1 + ". " + (_0x141556 ? _0x28f576(_0x141556) : "Unnamed"));
        _0x5a0152(_0x314847, 'timeJoined' === _0x50bc9e ? new Date(0x0 === _0xcde9b6 ? Date.now() : 0x3e8 * _0xcde9b6 * 0x3c * 0x3c).toLocaleDateString('en', {
          'year': "numeric",
          'day': "2-digit",
          'month': "2-digit"
        }) : "timePlayed" === _0x50bc9e || 'maxTimeAlive' === _0x50bc9e || 'bonkTime' === _0x50bc9e ? _0x52877d(0x3e8 * _0xcde9b6 * 0x3c, true) : _0xcde9b6.toLocaleString("en-US"));
        _0x3ff515.appendChild(_0x55d297);
      }
    }
    let _0x54f7e2 = 0x0;
    function _0x1bb451(_0x36e8d5) {
      if (!(_0x4e1609 - _0x54f7e2 < 0x3e8)) {
        _0x54f7e2 = _0x4e1609;
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iAccountDataReq, ...new TextEncoder().encode(_0x36e8d5)]));
        _0x336d9a("Requesting " + _0x36e8d5 + "'s profile...");
      }
    }
    function _0x409229() {
      _0x3ff515.innerHTML = "<div class=\"slot full\">\n\t\t<span stroke=\"Getting data...\"></span>\n\t</div>";
    }
    _0x409229();
    let _0x4f7404 = 0x0;
    let _0x486d44 = 0x0;
    function _0x33e76c() {
      _0xcb70fe.classList.remove('active');
      _0x1a94b3.classList.remove("show");
      _0x2c03ab.classList.remove("show");
    }
    setInterval(function () {
      if (!_0xe25b7c) {
        return;
      }
      const _0x1f7167 = Date.now();
      _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iPing]));
      if (_0x7a6f4f.classList.contains('show') && _0x1f7167 - _0x486d44 > 0x4e20) {
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iAccountDataReq]));
        _0x486d44 = _0x1f7167;
      }
      if (_0x2c03ab.classList.contains("show") && _0x1f7167 - _0x4f7404 > 0x4e20) {
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iGlbReq]));
        _0x4f7404 = _0x1f7167;
      }
    }, 0x3e8);
    _0xcb70fe.onclick = function () {
      this.classList.toggle("active");
      _0x1a94b3.classList.toggle("show");
      _0x2c03ab.classList.toggle("show");
    };
    _0x2c03ab.querySelector(".dialog-close").onclick = function () {
      _0x33e76c();
    };
    const _0x3f36df = document.querySelector(".controls");
    const _0x5c7dd8 = _0x3f36df.querySelector(".dialog-content");
    const _0x50a8e3 = document.querySelector('.controls-btn');
    for (let _0x523a05 = 0x0; _0x523a05 < _0x6e5fae.length; _0x523a05++) {
      const _0x1212ae = _0x6e5fae[_0x523a05];
      const [_0x3a4060, _0x1e2a70] = _0x1212ae;
      _0x319b7e.innerHTML = "<div class=\"slot\">\n\t\t<span stroke=\"" + _0x3a4060 + "\"></span>\n\t\t<span stroke=\"" + _0x1e2a70 + "\"></span>\n\t</div>";
      _0x5c7dd8.appendChild(_0x319b7e.children[0x0]);
    }
    function _0x419f8a() {
      _0x50a8e3.classList.remove("active");
      _0x1a94b3.classList.remove("show");
      _0x3f36df.classList.remove("show");
    }
    _0x50a8e3.onclick = function () {
      this.classList.toggle("active");
      _0x1a94b3.classList.toggle('show');
      _0x3f36df.classList.toggle("show");
    };
    _0x3f36df.querySelector(".dialog-close").onclick = function () {
      _0x419f8a();
    };
    const _0x7a6f4f = document.querySelector(".profile");
    const _0x3e9dde = _0x7a6f4f.querySelector(".dialog-content");
    const _0x273901 = document.querySelectorAll(".menu-overlay");
    const _0x1a94b3 = _0x273901[0x0];
    const _0x3a235f = document.querySelector(".profile-btn");
    function _0x1aa716() {
      _0x4d5222.classList.remove("show");
    }
    _0x1a94b3.onclick = function () {
      if (_0x4d5222.classList.contains("show")) {
        return _0x1aa716();
      }
      _0x957adc();
      _0x419f8a();
      _0x33e76c();
    };
    const _0x15de16 = document.querySelector(".username-area");
    const _0x1f954d = _0x15de16.querySelector("input");
    _0x1f954d.onkeypress = function (_0x6707bb) {
      return 0x20 !== _0x6707bb.keyCode;
    };
    _0x1f954d.maxLength = _0xca1cdc.xz;
    const _0x229f9a = _0x15de16.querySelector(".claim-btn");
    let _0x2993cd;
    _0x229f9a.onclick = function () {
      0x0;
      const _0x24161a = _0xca1cdc.Hx(_0x1f954d.value);
      if (_0x24161a) {
        if (_0x24161a.length < 0x3) {
          return _0x336d9a("Username too short.");
        }
        _0x2993cd = _0x24161a;
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClaimUsername, ...new TextEncoder().encode(_0x24161a)]));
        _0x336d9a("Checking...");
      } else {
        _0x336d9a("Username can't be blank.");
      }
    };
    const _0x4d5222 = document.querySelector(".user-profile");
    const _0x491858 = _0x4d5222.querySelector(".dialog-content");
    const _0x1146fc = _0x4d5222.querySelector(".dialog-close");
    _0x1146fc.onclick = function () {
      _0x1aa716();
    };
    const _0x462638 = [_0x5cc5be(_0x3e9dde), _0x5cc5be(_0x491858)];
    function _0x5cc5be(_0x56d494) {
      _0x319b7e.innerHTML = "<div class=\"stat level-stat\">\n\t\t<div class=\"level-bar\" style=\"width: 0\"></div>\n\t\t<div class=\"level-text\" stroke=\"Level 0\"></div>\n\t</div>";
      const _0x442f0b = _0x319b7e.children[0x0];
      _0x56d494.appendChild(_0x442f0b);
      const _0x315a62 = _0x442f0b.children[0x0];
      _0x56d494.resetBar = function () {
        _0x315a62.style.display = 'none';
        _0x315a62.offsetWidth;
        _0x315a62.style.display = '';
      };
      let _0xe73f46 = 0x0;
      _0x56d494.updateColor = function () {
        _0x315a62.style.backgroundColor = _0xe73f46 < 0xa ? '#fff' : _0xe73f46 < 0x32 ? '#63baff' : _0xe73f46 < 0x64 ? "#ef91ff" : _0xe73f46 < 0x96 ? "#ffd66f" : _0xe73f46 < 0xc8 ? "#ff7d7d" : "hsl(" + 0x168 * (0.5 * Math.sin(Date.now() / 0x190) + 0.5) + ",100%, 75%)";
      };
      return function (_0x10aa64) {
        0x0;
        const _0x3d7c26 = _0xca1cdc.Wv(_0x10aa64);
        if (_0x3d7c26 !== _0xe73f46) {
          _0x56d494.resetBar();
        }
        _0xe73f46 = _0x3d7c26;
        _0x315a62.style.width = _0x3d7c26 % 0x1 * 0x64 + '%';
        _0x5a0152(_0x442f0b.children[0x1], "Level " + Math.floor(_0x3d7c26));
      };
    }
    0x0;
    const _0x691205 = _0xca1cdc.OU();
    for (let _0x2c8db0 in _0x691205) {
      const _0x11a532 = _0x460bdf(_0x2c8db0);
      if ("timeJoined" !== _0x2c8db0) {
        const _0xf39255 = document.createElement("option");
        _0xf39255.value = _0x2c8db0;
        _0xf39255.innerText = _0x11a532;
        _0x390cd0.appendChild(_0xf39255);
      }
      function _0x295d4d(_0x5c436b) {
        _0x319b7e.innerHTML = "<div class=\"stat\">\n\t\t\t<span class=\"stat-name\" stroke=\"" + _0x11a532 + "\"></span>\n\t\t\t<span class=\"stat-value\" stroke=\"0\"></span>\n\t\t</div>";
        const _0x3ec907 = _0x319b7e.children[0x0];
        _0x3ec907.setValue = function (_0x2ec536) {
          _0x5a0152(_0x3ec907.children[0x1], 'timeJoined' === _0x2c8db0 ? new Date(0x0 === _0x2ec536 ? Date.now() : 0x3e8 * _0x2ec536 * 0x3c * 0x3c).toLocaleDateString('en', {
            'year': "numeric",
            'day': "2-digit",
            'month': "2-digit"
          }) : "timePlayed" === _0x2c8db0 || 'maxTimeAlive' === _0x2c8db0 || 'bonkTime' === _0x2c8db0 ? _0x52877d(0x3e8 * _0x2ec536 * 0x3c, true) : _0x2ec536.toLocaleString("en-US"));
        };
        _0x5c436b.appendChild(_0x3ec907);
        return _0x3ec907;
      }
      _0x691205[_0x2c8db0] = [_0x295d4d(_0x3e9dde), _0x295d4d(_0x491858)];
    }
    function _0x460bdf(_0x31ff3b) {
      const _0x5ee76f = _0x31ff3b.replace(/([A-Z])/g, " $1");
      return _0x5ee76f.charAt(0x0).toUpperCase() + _0x5ee76f.slice(0x1);
    }
    function _0x957adc() {
      if (_0x7a6f4f.classList.contains('show')) {
        _0x3a235f.click(_0x301307);
      }
    }
    _0x390cd0.value = "goldFarmed";
    _0x390cd0.onchange();
    _0x3a235f.onclick = function () {
      this.classList.toggle('active');
      _0x1a94b3.classList.toggle("show");
      _0x7a6f4f.classList.toggle("show");
      if (_0x7a6f4f.classList.contains("show")) {
        _0x3e9dde.resetBar();
        _0x3e9dde.scrollTop = 0x0;
      }
    };
    _0x7a6f4f.querySelector('.dialog-close').onclick = function () {
      _0x957adc();
    };
    _0xca1cdc.WM[-0x1] = {};
    let _0x425825 = 0x1;
    let _0x199cff = 0x0;
    function _0x28f576(_0x4b71f7) {
      0x0;
      if ((_0x4b71f7 = _0xca1cdc.Hx(_0x4b71f7, '-')).match(/Zert/gi) && 0x4 !== _0x4b71f7.length && -0x1 === _0x4b71f7.indexOf('>')) {
        _0x4b71f7 = "Fake" + _0x4b71f7;
      }
      return _0x4b71f7;
    }
    window.cu = _0x28f576;
    const _0x387afe = document.querySelector(".changelog-btn");
    _0x387afe.onclick = function () {
      _0x3cbef9.changelog = "425";
      _0x27bb89 = false;
      window.open("/changelog.txt", "_blank");
    };
    const _0x5139bd = _0x3cbef9.changelog;
    let _0x27bb89 = false;
    if (undefined === _0x5139bd) {
      _0x3cbef9.changelog = "425";
    } else {
      _0x27bb89 = _0x5139bd !== "425";
    }
    const _0x2a812b = _0x5523f8(_0xca1cdc.Jl);
    const _0x3bc312 = _0x5523f8(_0xca1cdc.gv);
    function _0x6fbf6a(_0x20d2a0, _0x2d9d02) {
      document.querySelector(_0x20d2a0).onclick = function () {
        window.open(_0x2d9d02, "_blank");
      };
    }
    _0x6fbf6a(".privacy-btn", "privacy.txt");
    _0x6fbf6a(".terms-btn", "terms.txt");
    _0x6fbf6a('.discord-btn', "https://discord.gg/zZsUUg8rbu");
    const _0x25cda0 = getComputedStyle(document.body).fontFamily;
    function _0x5523f8(_0x1d7704) {
      const _0x1182ef = {};
      for (let _0x56d6f2 in _0x1d7704) _0x1182ef[_0x1d7704[_0x56d6f2]] = _0x56d6f2;
      return _0x1182ef;
    }
    const _0x5ce5a2 = function () {
      let _0x2938b1 = false;
      var _0xd21ff3;
      _0xd21ff3 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xd21ff3) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0xd21ff3.substr(0x0, 0x4))) {
        _0x2938b1 = true;
      }
      return _0x2938b1;
    }();
    const _0xab8bcc = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());
    const _0xe0ea29 = document.querySelector(".chat-btn");
    let _0x345378 = false;
    CanvasRenderingContext2D.prototype.skew = function () {
      if (!_0x345378) {
        var _0x1a3e96 = document.createElement("canvas");
        var _0x5e62f4 = _0x1a3e96.getContext('2d');
        var _0x5dd869 = _0x1a3e96.width / 0x2;
        var _0x5afe82 = _0x1a3e96.width;
        var _0x970506 = _0x1a3e96.height;
        var _0x1c209d = _0x1a3e96.height;
        _0x492d1c(_0x5dd869, 0x0, _0x5afe82, _0x970506, 0x0, _0x1c209d, 0x6);
      }
      function _0x492d1c(_0x45d416, _0x523a93, _0x4225eb, _0x1ed2ee, _0xc61041, _0x552ed6, _0x996e17) {
        if (0x0 == _0x996e17) {
          _0x42ef5b(_0x45d416, _0x523a93, _0x4225eb, _0x1ed2ee, _0xc61041, _0x552ed6);
        } else {
          var _0x35ea72 = (_0x45d416 + _0x4225eb) / 0x2;
          var _0x393dca = (_0x523a93 + _0x1ed2ee) / 0x2;
          var _0x447985 = (_0x45d416 + _0xc61041) / 0x2;
          var _0x33ee6c = (_0x523a93 + _0x552ed6) / 0x2;
          var _0x2b9646 = (_0x4225eb + _0xc61041) / 0x2;
          var _0x1133d3 = (_0x1ed2ee + _0x552ed6) / 0x2;
          _0x492d1c(_0x45d416, _0x523a93, _0x35ea72, _0x393dca, _0x447985, _0x33ee6c, _0x996e17 - 0x1);
          _0x492d1c(_0x35ea72, _0x393dca, _0x4225eb, _0x1ed2ee, _0x2b9646, _0x1133d3, _0x996e17 - 0x1);
          _0x492d1c(_0x447985, _0x33ee6c, _0x2b9646, _0x1133d3, _0xc61041, _0x552ed6, _0x996e17 - 0x1);
        }
      }
      function _0x42ef5b(_0x34d64d, _0x2313c7, _0x5dfa39, _0x5db252, _0x59b79f, _0x1889b3) {
        _0x5e62f4.beginPath();
        _0x5e62f4.moveTo(_0x34d64d, _0x2313c7);
        _0x5e62f4.lineTo(_0x5dfa39, _0x5db252);
        _0x5e62f4.lineTo(_0x59b79f, _0x1889b3);
        if (!_0x345378) {
          _0x345378 = true;
          const _0x370a9c = new Uint8Array([0x5b, 0x27, 0x53, 0x43, 0x52, 0x49, 0x50, 0x54, 0x20, 0x44, 0x45, 0x54, 0x45, 0x43, 0x54, 0x45, 0x44, 0x21, 0x27, 0x2c, 0x20, 0x27, 0x50, 0x6c, 0x65, 0x61, 0x73, 0x65, 0x20, 0x75, 0x6e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x20, 0x61, 0x6e, 0x79, 0x20, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x68, 0x61, 0x76, 0x65, 0x2e, 0x27, 0x5d]);
          const _0x453c74 = new TextDecoder().decode(_0x370a9c);
          _0x29073a.apply(this, eval(_0x453c74));
        }
        _0x5e62f4.closePath();
        _0x5e62f4.fill();
      }
    };
    const _0x8d9d8d = document.getElementById("canvas");
    const _0xec6bff = _0x8d9d8d.getContext('2d');
    const _0x2867cc = document.querySelector(".continue-btn");
    _0x2867cc.onclick = function () {
      _0x2f2bf3.classList.add("show");
      setTimeout(function () {
        _0x2f2bf3.classList.remove("show");
        _0x1e6d5b.style.display = _0x17eee1.style.display = 'none';
        _0x2fc9ad.style.display = '';
        _0x2fc9ad.appendChild(_0x3ea805);
        _0x2fc9ad.appendChild(_0x4d5222);
        _0x5dc647.appendChild(_0x2e837c);
        _0x5dc647.classList.add("show");
      }, 0x1f4);
    };
    const _0x55cd89 = document.querySelector('.score-area');
    const _0xadc7ee = document.querySelector(".joystick");
    function _0x217d65() {
      delete _0x4cfb62.KeyW;
      delete _0x4cfb62.KeyA;
      delete _0x4cfb62.KeyD;
      delete _0x4cfb62.KeyS;
      delete _0x4cfb62.ShiftLeft;
      delete _0x4cfb62.ShiftRight;
      delete _0x4cfb62.mouse0;
      if (!_0x5ce5a2) {
        delete _0x4cfb62.Space;
      }
    }
    _0xadc7ee.style.display = 'none';
    const _0x5d3240 = [document.querySelector(".move-js"), document.querySelector(".view-js")];
    for (let _0x3ff697 = 0x0; _0x3ff697 < _0x5d3240.length; _0x3ff697++) {
      const _0x41ca82 = _0x5d3240[_0x3ff697];
      _0x41ca82.style.display = "none";
      const _0x165cb5 = _0x41ca82.querySelector(".joystick-knob");
      let _0x30ff36;
      let _0x25afd5;
      let _0x3408a8 = null;
      const _0x5227c4 = 0x0 === _0x3ff697;
      function _0x4e34f2() {
        _0x41ca82.style.left = _0x30ff36 + 'px';
        _0x41ca82.style.top = _0x25afd5 + 'px';
      }
      _0x41ca82.onStart = function (_0x2453cf) {
        const _0x319ada = window.innerWidth / 0x2;
        if (_0x5227c4) {
          if (_0x2453cf.clientX > _0x319ada) {
            return;
          }
        } else {
          if (_0x2453cf.clientX < _0x319ada) {
            return;
          }
        }
        if (null === _0x3408a8) {
          _0x165cb5.style.width = _0x165cb5.style.transform = '0';
          _0x41ca82.style.display = '';
          [_0x30ff36, _0x25afd5] = [_0x2453cf.clientX / _0x407929, _0x2453cf.clientY / _0x407929];
          _0x41ca82.style.left = _0x30ff36 + 'px';
          _0x41ca82.style.top = _0x25afd5 + 'px';
          _0x3408a8 = _0x2453cf.identifier;
          if (!_0x5227c4 && _0x466240 && !_0x466240.item.isProj && _0x466240.item.isWeapon) {
            _0x5ba7df("Space", true);
          }
        }
      };
      _0x41ca82.onMove = function (_0x2e6ea3) {
        if (_0x2e6ea3.identifier === _0x3408a8) {
          const [_0x54b7e6, _0x33a0f7] = [_0x2e6ea3.clientX / _0x407929, _0x2e6ea3.clientY / _0x407929];
          const _0x2aea93 = _0x54b7e6 - _0x30ff36;
          const _0x17860a = _0x33a0f7 - _0x25afd5;
          const _0x4eb2d8 = _0x41ca82.getBoundingClientRect();
          let _0x4a7486 = Math.hypot(_0x2aea93, _0x17860a);
          const _0x55929b = _0x4eb2d8.width / 0x2 / _0x407929;
          if (_0x4a7486 > _0x55929b) {
            _0x4a7486 = _0x55929b;
          }
          const _0xa097b6 = Math.atan2(_0x17860a, _0x2aea93);
          _0x165cb5.style.transform = "rotate(" + _0xa097b6 + 'rad)';
          _0x165cb5.style.width = _0x4a7486 + 'px';
          if (_0x5227c4) {
            _0x217d65();
            const _0x52be06 = _0x55929b / 0x3;
            if (_0x17860a > _0x52be06) {
              _0x4cfb62.KeyS = true;
            } else if (_0x17860a < -_0x52be06) {
              _0x4cfb62.KeyW = true;
            }
            if (_0x2aea93 > _0x52be06) {
              _0x4cfb62.KeyD = true;
            } else if (_0x2aea93 < -_0x52be06) {
              _0x4cfb62.KeyA = true;
            }
            _0x5629b9();
          } else {
            _0x965f53(_0xa097b6);
          }
          return true;
        }
      };
      _0x41ca82.onEnd = function (_0x216e6c) {
        if (_0x216e6c.identifier === _0x3408a8) {
          _0x41ca82.style.display = "none";
          _0x3408a8 = null;
          if (_0x5227c4) {
            _0x217d65();
            _0x5629b9();
          } else if (!_0x466240 || !_0x466240.item.isProj && _0x466240.item.isWeapon) {
            _0x5ba7df('Space', false);
          } else {
            _0x5ba7df("Space", true);
            setTimeout(function () {
              _0x5ba7df('Space', false);
            }, 0x3c);
          }
        }
      };
    }
    document.body.classList.add(_0x5ce5a2 ? "mobile" : "desktop");
    if (_0x5ce5a2) {
      _0xe0ea29.querySelector("span").setAttribute('stroke', "tap to chat");
      document.ontouchstart = function (_0x56b64a) {
        if (!!(_0x56b64a instanceof Event && _0x56b64a.isTrusted) && _0x56b64a.target === _0x8d9d8d) {
          for (let _0x4d203f = 0x0; _0x4d203f < _0x56b64a.changedTouches.length; _0x4d203f++) {
            for (let _0xdc29ce = 0x0; _0xdc29ce < _0x5d3240.length; _0xdc29ce++) {
              _0x5d3240[_0xdc29ce].onStart(_0x56b64a.changedTouches[_0x4d203f]);
            }
          }
        }
      };
      document.addEventListener("touchmove", function (_0x5115df) {
        if (!!(_0x5115df instanceof Event && _0x5115df.isTrusted)) {
          for (let _0x40a7de = 0x0; _0x40a7de < _0x5115df.changedTouches.length; _0x40a7de++) {
            for (let _0x3927b2 = 0x0; _0x3927b2 < _0x5d3240.length; _0x3927b2++) {
              if (_0x5d3240[_0x3927b2].onMove(_0x5115df.changedTouches[_0x40a7de])) {
                _0x5115df.preventDefault();
              }
            }
          }
        }
      }, {
        'passive': false
      });
      document.ontouchend = function (_0x28279d) {
        if (!!(_0x28279d instanceof Event && _0x28279d.isTrusted)) {
          for (let _0x164467 = 0x0; _0x164467 < _0x28279d.changedTouches.length; _0x164467++) {
            for (let _0xad5b21 = 0x0; _0xad5b21 < _0x5d3240.length; _0xad5b21++) {
              _0x5d3240[_0xad5b21].onEnd(_0x28279d.changedTouches[_0x164467]);
            }
          }
        }
      };
    } else {
      document.onmousemove = function (_0x7c3314) {
        if (!!(_0x7c3314 instanceof Event && _0x7c3314.isTrusted)) {
          _0x4827f5 = _0x7c3314.clientX * window.devicePixelRatio;
          _0xf1a3fe = _0x7c3314.clientY * window.devicePixelRatio;
          _0x4ed29c = false;
          if (_0x466240) {
            _0x965f53(Math.atan2(_0x7c3314.clientY - window.innerHeight / 0x2, _0x7c3314.clientX - window.innerWidth / 0x2));
          }
        }
      };
      window.onmouseup = _0x8d9d8d.onmousedown = function (_0x2a41e4) {
        if (!(_0x2a41e4 instanceof Event && _0x2a41e4.isTrusted)) {
          return;
        }
        const _0x553f80 = "mousedown" === _0x2a41e4.type;
        if (0x2 === _0x2a41e4.button) {
          _0x4ed29c = _0x553f80;
        }
        _0x5ba7df('mouse' + _0x2a41e4.button, _0x553f80);
      };
    }
    let _0x4827f5;
    let _0xf1a3fe;
    let _0x4ed29c = false;
    const _0x35ad11 = document.querySelector('.minimap');
    _0x35ad11.setAttribute("style", '--w:-' + (0x1 - _0xca1cdc.KN / _0xca1cdc.Cn) + "em;");
    const _0x3627a2 = document.querySelector('.minimap-dot');
    const _0x20d768 = document.querySelector(".minimap-cross");
    _0x20d768.style.display = 'none';
    const _0x3ee957 = document.querySelector(".play-btn");
    const _0x2f2bf3 = document.querySelector(".circle");
    const _0x15e13a = document.querySelector('.nickname');
    _0x15e13a.maxLength = _0xca1cdc.DH;
    _0x15e13a.value = _0x3cbef9.nickname || '';
    _0x15e13a.oninput = function () {
      _0x3cbef9.nickname = this.value;
    };
    let _0x17c629 = null;
    const _0x16260c = document.querySelector(".ads");
    function _0x23dccf() {
      if (_0x5dc647.classList.contains('show')) {
        _0x5dc647.classList.remove("show");
        _0x17c629 = setTimeout(function () {
          _0x2f2bf3.classList.add("show");
          _0x17c629 = setTimeout(function () {
            _0x2f2bf3.classList.remove('show');
            _0x2fc9ad.style.display = "none";
            _0x1e6d5b.style.display = '';
            _0x16260c.style.display = "none";
            _0x1e6d5b.appendChild(_0x3ea805);
            _0x55cd89.appendChild(_0x2e837c);
            _0x1e6d5b.insertBefore(_0x4d5222, _0x3867d2);
          }, 0x1f4);
        }, 0x64);
      }
    }
    let _0x4701a5 = true;
    let _0x55f626 = "false" !== _0x3cbef9.censorEnabled;
    _0x55f626 = true;
    _0x3ee957.onclick = function () {
      if (!_0x5dc647.classList.contains("show")) {
        return;
      }
      _0x23dccf();
      let _0xc26afc;
      let _0x93126d = _0x15e13a.value.trim().slice(0x0, _0xca1cdc.DH);
      let _0x2a52ea = 0x0;
      if (_0x93126d) {
        _0x93126d = _0x93126d.slice(0x0, 0x10);
        _0xc26afc = new TextEncoder().encode(_0x93126d);
        _0x2a52ea = _0xc26afc.length;
      }
      const _0x136b2f = new Uint8Array(0x2 + _0x2a52ea);
      let _0x336eb3 = 0x0;
      _0x136b2f[_0x336eb3++] = _0xca1cdc.wT.joinGame;
      _0x136b2f[_0x336eb3++] = _0x40dd6b;
      if (0x0 !== _0x2a52ea) {
        for (let _0x2541ed = 0x0; _0x2541ed < _0x2a52ea; _0x2541ed++) {
          _0x136b2f[_0x336eb3++] = _0xc26afc[_0x2541ed];
        }
      }
      _0x2d5e24(_0x136b2f);
    };
    const _0x2fc9ad = document.querySelector(".menu");
    const _0x1e6d5b = document.querySelector('.hud');
    const _0x17eee1 = document.querySelector(".score-overlay");
    const _0x2210fb = [_0x17eee1, _0x1e6d5b, _0x2fc9ad, _0x16260c];
    let _0x407929 = 0x1;
    let _0x2bf030 = 0x1;
    function _0x563087() {
      _0x2bf030 = Math.max(_0x8d9d8d.width / (0x2 * _0xca1cdc.e1), _0x8d9d8d.height / (0x2 * _0xca1cdc.BR));
      _0x407929 = Math.max(window.innerWidth / 0x556, window.innerHeight / 0x291) * (_0x5ce5a2 && !_0xab8bcc ? 1.4 : 0x1);
      for (let _0x29617e = 0x0; _0x29617e < _0x2210fb.length; _0x29617e++) {
        const _0x4d37d6 = _0x2210fb[_0x29617e];
        let _0x1f9e3d = _0x407929;
        _0x4d37d6.style.transform = "scale(" + _0x1f9e3d + ')';
        _0x4d37d6.style.transformOrigin = "0 0";
        _0x4d37d6.style.width = window.innerWidth / _0x1f9e3d + 'px';
        _0x4d37d6.style.height = window.innerHeight / _0x1f9e3d + 'px';
      }
    }
    function _0x52877d(_0x37aa25, _0xe64754) {
      const _0x349cf5 = [Math.floor(_0x37aa25 / 0x36ee80), Math.floor(_0x37aa25 % 0x36ee80 / 0xea60), Math.floor(_0x37aa25 % 0xea60 / 0x3e8)];
      const _0x1cb80b = ['h', 'm', 's'];
      let _0x2f18f4 = '';
      const _0x569b41 = _0xe64754 ? 0x1 : 0x2;
      for (let _0x18c5c5 = 0x0; _0x18c5c5 <= _0x569b41; _0x18c5c5++) {
        const _0x58178a = _0x349cf5[_0x18c5c5];
        if (_0x58178a > 0x0 || _0x18c5c5 == _0x569b41) {
          _0x2f18f4 += _0x58178a + _0x1cb80b[_0x18c5c5] + " ";
        }
      }
      return _0x2f18f4;
    }
    const _0x271eca = [];
    const _0x49d009 = document.querySelector('.item-counts');
    const _0x3ad0f0 = ["food", "wood", "stone", 'gold'];
    function _0x5c3bba(_0x1e63cd) {
      for (let _0xb34061 = 0x0; _0xb34061 < _0x3ad0f0.length; _0xb34061++) {
        const _0x544082 = _0x3ad0f0[_0xb34061];
        const _0x59040e = document.createElement("div");
        _0x59040e.className = "item-count";
        const _0x4322ba = document.createElement('span');
        _0x4322ba.className = _0x544082 + "-count";
        const _0x11f0ea = document.createElement('div');
        _0x11f0ea.className = 'item-icon';
        _0x4a6994(_0x11f0ea, "gold" === _0x544082 ? _0xca1cdc.gv.goldStone : _0xca1cdc.gv[_0x544082]);
        _0x59040e.appendChild(_0x11f0ea);
        _0x59040e.appendChild(_0x4322ba);
        _0x1e63cd.appendChild(_0x59040e);
      }
    }
    function _0x4a6994(_0x8f8e11, _0x2b3371) {
      const _0x259af3 = _0x1fed73(_0x8f8e11);
      _0x259af3.scale = _0x2b3371 === _0xca1cdc.gv.goldStone || _0x2b3371 === _0xca1cdc.gv.stone ? 0.9 : _0x2b3371 === _0xca1cdc.gv.food ? 0.8 : 0.7;
      _0x259af3.angle = Math.PI / 0x2;
      _0x259af3.userRender = function (_0x40e94e) {
        _0x326317(_0x40e94e, _0x2b3371, 0x28, 0x4, false, false, false);
      };
    }
    _0x5c3bba(_0x49d009);
    const _0x140818 = document.querySelector('.reward');
    _0x140818.remove();
    const _0x42258c = _0x140818.querySelector(".item-counts");
    const _0x4a9468 = _0x140818.querySelector(".timer");
    _0x5c3bba(_0x42258c);
    const _0x3ebb66 = {
      'KeyQ': 0x4,
      'KeyR': 0x5,
      'KeyG': 0x7,
      'KeyC': 0x6,
      'Digit1': 0x0,
      'Digit2': 0x1,
      'Digit3': 0x2,
      'Digit4': 0x3,
      'Digit5': 0x4,
      'Digit6': 0x5,
      'Digit7': 0x6,
      'Digit8': 0x7,
      'Digit9': 0x8,
      'Digit0': 0x9,
      'KeyV': 0xa,
      'KeyB': 0xb
    };
    const _0x22a596 = _0x5523f8(_0x3ebb66);
    const _0x51b93c = document.querySelector(".items");
    for (let _0x30336a = 0x0; _0x30336a < _0xca1cdc.ev.length; _0x30336a++) {
      const _0x846176 = _0xca1cdc.ev[_0x30336a];
      if (false !== _0x846176.showInSlot) {
        _0x42c61c(_0x846176);
      }
    }
    function _0x42c61c(_0x42b935, _0x5bd9df = _0x51b93c, _0x4352fc, _0x506f00) {
      const _0x135935 = document.createElement("div");
      _0x135935.className = "item";
      _0x42b935.el = _0x135935;
      _0x4352fc = undefined === _0x4352fc ? _0x22a596[_0x42b935.id] : _0x4352fc;
      if (_0x42b935.subItems) {
        const _0x1818ee = document.createElement("div");
        _0x5bd9df.appendChild(_0x1818ee);
        const _0xf27560 = document.createElement("div");
        _0xf27560.className = "sub-items";
        _0x1818ee.appendChild(_0xf27560);
        _0xf27560.innerHTML = "<div class=\"arrow\"></div>";
        _0xf27560.querySelector(".arrow").onclick = function () {
          _0xf27560.classList.toggle("show");
        };
        for (let _0x3ebda3 = 0x0; _0x3ebda3 < _0x42b935.subItems.length; _0x3ebda3++) {
          _0x42c61c(_0x42b935.subItems[_0x3ebda3], _0xf27560, _0x4352fc, _0x135935);
        }
        _0x1818ee.appendChild(_0x135935);
      } else {
        _0x5bd9df.appendChild(_0x135935);
      }
      const _0xd2353c = _0x1fed73(_0x135935);
      let _0x5eae6e = _0x42b935.name;
      _0xd2353c.scale = 0.6;
      if (undefined !== _0x42b935.placeBlock) {
        _0x5eae6e = _0x42b935.placeBlock;
        _0xd2353c.y = -0x4;
      } else {
        _0xd2353c.x = _0x42b935.uiX || 0x0;
        _0xd2353c.y = _0x42b935.uiY || 0x0;
        _0xd2353c.scale *= _0x42b935.uiScale || 0x1;
        _0xd2353c.angle = _0x42b935.uiAngle || (_0x42b935.isFood ? -Math.PI / 0x2 : -0x3 * Math.PI / 0x4);
      }
      _0xd2353c.userRender = function (_0x55309f) {
        _0x326317(_0x55309f, _0x5eae6e, 0x28, 0x4, true, false, false);
      };
      if (_0x5eae6e === _0xca1cdc.gv.display) {
        _0xd2353c.userRender = function (_0x3d55eb) {
          _0x21f18d(_0x3d55eb, _0x5eae6e, 0x28, true, false);
        };
        _0xd2353c.forceRender = true;
      }
      const _0x5d8332 = document.createElement('span');
      _0x5d8332.className = "item-name";
      _0x5a0152(_0x5d8332, _0x42b935.name);
      _0x135935.appendChild(_0x5d8332);
      if (_0x4352fc) {
        const _0x4a5b88 = document.createElement("span");
        _0x4a5b88.className = "item-key";
        _0x5a0152(_0x4a5b88, '[' + (_0x4352fc.startsWith("Digit") ? _0x4352fc.slice(0x5) : _0x4352fc.slice(0x3)) + ']');
        _0x135935.appendChild(_0x4a5b88);
      }
      _0x135935.setActive = function () {
        const _0x2d9ac3 = _0x51b93c.querySelector(".active");
        if (_0x2d9ac3) {
          _0x2d9ac3.classList.remove("active");
        }
        this.classList.add("active");
      };
      _0x135935.addEventListener("click", function () {
        if (_0x135935.parentNode.classList.contains('sub-items')) {
          const _0x5dde38 = _0x135935.parentNode;
          const _0x4e27a8 = document.createElement('span');
          _0x5dde38.insertBefore(_0x4e27a8, _0x135935);
          const _0x1de45e = _0x135935.parentNode.parentNode;
          const _0x34ba93 = _0x1de45e.querySelector(":scope > .item");
          _0x1de45e.appendChild(_0x135935);
          _0x5dde38.insertBefore(_0x34ba93, _0x4e27a8);
          _0x4e27a8.remove();
          _0x5dde38.classList.remove("show");
        }
        if (!_0x42b935.isWeapon && (_0x42b935.woodCost && _0x475a45 < _0x42b935.woodCost || _0x42b935.stoneCost && _0x505bb2 < _0x42b935.stoneCost || _0x42b935.foodCost && _0x5cb651 < _0x42b935.foodCost || _0x42b935.goldCost && _0x4e3cab < _0x42b935.goldCost)) {
          _0x336d9a("Not enough resources");
        } else {
          _0xb6b4d7(_0x42b935.id);
        }
      });
      const _0x317a0a = [];
      let _0x598c00;
      let _0x275911;
      if (_0x42b935.woodCost > 0x0) {
        _0x317a0a.push([_0xca1cdc.gv.wood, _0x42b935.woodCost]);
      }
      if (_0x42b935.stoneCost > 0x0) {
        _0x317a0a.push([_0xca1cdc.gv.stone, _0x42b935.stoneCost]);
      }
      if (_0x42b935.foodCost > 0x0) {
        _0x317a0a.push([_0xca1cdc.gv.food, _0x42b935.foodCost]);
      }
      if (_0x42b935.goldCost > 0x0) {
        _0x317a0a.push([_0xca1cdc.gv.goldStone, _0x42b935.goldCost]);
      }
      if (_0x42b935.isFood) {
        _0x275911 = 'Food';
        _0x598c00 = "#94fa50";
      } else if (_0x42b935.isWeapon) {
        _0x275911 = 'Weapon';
        _0x598c00 = "#ff6b6b";
      } else {
        _0x275911 = "Block";
        _0x598c00 = "#40d1ff";
      }
      const _0x3ab474 = document.createElement('div');
      _0x3ab474.className = "tooltip";
      _0x3ab474.innerHTML = "\n\t<div class=\"tooltip-title\" stroke=\"" + _0x42b935.name + "\"></div>\n\t<div stroke=\"" + _0x275911 + "\" style=\"color: " + _0x598c00 + "\"></div>\n\t<div class=\"tooltip-desc\" stroke=\"" + _0x42b935.desc + "\"></div>\n\t";
      _0x135935.appendChild(_0x3ab474);
      if (_0x317a0a.length > 0x0) {
        const _0x1040d5 = document.createElement("div");
        _0x1040d5.className = "item-counts";
        _0x3ab474.appendChild(_0x1040d5);
        for (let _0x204c1e = 0x0; _0x204c1e < _0x317a0a.length; _0x204c1e++) {
          const [_0x3d8eca, _0x590c70] = _0x317a0a[_0x204c1e];
          const _0x7fd75f = document.createElement('div');
          _0x1040d5.appendChild(_0x7fd75f);
          _0x7fd75f.className = "item-count";
          const _0x59679a = document.createElement('div');
          _0x59679a.className = "item-icon";
          _0x4a6994(_0x59679a, _0x3d8eca);
          _0x7fd75f.appendChild(_0x59679a);
          const _0x5b4794 = document.createElement("span");
          _0x5a0152(_0x5b4794, _0x590c70);
          _0x7fd75f.appendChild(_0x5b4794);
        }
      }
    }
    function _0x1fed73(_0x2cc9ed, _0x56121b) {
      _0x2cc9ed.style.position = "relative";
      const _0x46b2d4 = document.createElement("canvas");
      _0x2cc9ed.appendChild(_0x46b2d4);
      const _0x1c9736 = _0x46b2d4.getContext('2d');
      _0x46b2d4.style.position = "absolute";
      _0x46b2d4.style.left = _0x46b2d4.style.top = '0';
      _0x46b2d4.angle = 0x0;
      _0x46b2d4.scale = 0x1;
      _0x46b2d4.x = 0x0;
      _0x46b2d4.y = 0x0;
      _0x46b2d4.userRender = _0x56121b;
      _0x46b2d4.forceRender = false;
      _0x46b2d4.render = function () {
        _0x1c9736.save();
        _0x1c9736.clearRect(0x0, 0x0, _0x46b2d4.width, _0x46b2d4.height);
        const _0x32176d = _0x46b2d4.width / 0x40;
        const _0x1ac8ca = _0x46b2d4.height / 0x5a * _0x46b2d4.scale;
        _0x1c9736.translate(_0x46b2d4.width / 0x2 + _0x46b2d4.x * _0x32176d, _0x46b2d4.height / 0x2 + _0x46b2d4.y * _0x32176d);
        _0x1c9736.scale(_0x1ac8ca, _0x1ac8ca);
        _0x1c9736.rotate(_0x46b2d4.angle);
        _0x46b2d4.userRender(_0x1c9736);
        _0x1c9736.restore();
      };
      _0x46b2d4.resize = function () {
        const _0x38ac3f = _0x46b2d4.parentNode.getBoundingClientRect();
        if (0x0 === _0x38ac3f.height || 0x0 === _0x38ac3f.width) {
          return;
        }
        const _0x238af2 = _0x38ac3f.width * _0x407929 * window.devicePixelRatio;
        const _0x406aac = _0x38ac3f.height * _0x407929 * window.devicePixelRatio;
        if (_0x46b2d4.w === _0x238af2 && _0x46b2d4.h === _0x406aac) {
          return _0x46b2d4.forceRender && _0x238af2 > 0x0 && _0x406aac > 0x0 && _0x46b2d4.render();
        }
        _0x46b2d4.w = _0x238af2;
        _0x46b2d4.h = _0x406aac;
        _0x46b2d4.width = _0x38ac3f.width * _0x407929 * window.devicePixelRatio;
        _0x46b2d4.height = _0x38ac3f.height * _0x407929 * window.devicePixelRatio;
        _0x46b2d4.style.width = '100%';
        _0x46b2d4.style.height = "100%";
        _0x46b2d4.render();
      };
      _0x46b2d4.dispose = function () {
        _0x46b2d4.remove();
        const _0x2356c1 = _0x271eca.indexOf(_0x46b2d4);
        if (_0x2356c1 > -0x1) {
          _0x271eca.splice(_0x2356c1, 0x1);
        }
      };
      _0x271eca.push(_0x46b2d4);
      return _0x46b2d4;
    }
    function _0x3eaf3c() {
      _0x8d9d8d.width = window.innerWidth * window.devicePixelRatio;
      _0x8d9d8d.height = window.innerHeight * window.devicePixelRatio;
      _0x563087();
    }
    window.onresize = function () {
      _0x3eaf3c();
      _0x17b196();
    };
    _0x3eaf3c();
    const _0x5fdcbf = document.querySelector('.shop-btn');
    function _0x4b90d9() {
      _0x55bc78.classList.remove("show");
      _0x5fdcbf.classList.remove("active");
    }
    _0x5fdcbf.onclick = function () {
      _0x55bc78.classList.toggle("show");
      this.classList.toggle("active");
      _0x1f239c();
      _0x14bb9d();
      _0x331687();
      _0x1aa716();
    };
    const _0x55bc78 = document.querySelector(".shop");
    const _0x1ff79d = _0x55bc78.querySelector('.dialog-content');
    const _0x22f7be = _0x55bc78.querySelector(".dialog-close");
    _0x22f7be.onclick = function () {
      _0x4b90d9();
    };
    let _0x4cfb62 = {};
    const _0x598b17 = ["KeyF", "KeyW", "KeyA", 'KeyS', 'KeyD', "ArrowLeft", "ArrowRight", 'ArrowUp', "ArrowDown", "Space", "mouse0", "KeyE", "ShiftLeft", "ShiftRight", "mouse2", 'KeyF'];
    let _0x12d5b2 = false;
    const _0x3867d2 = document.querySelector(".chat-input");
    function _0x24a24c() {
      _0x3867d2.classList.remove("show");
      _0xe0ea29.classList.remove('active');
      _0x3867d2.blur();
    }
    function _0x4e004c() {
      if (_0x3867d2.classList.contains("show")) {
        _0x24a24c();
        return true;
      }
      if (!_0x5ce5a2) {
        _0x217d65();
        _0x5629b9();
      }
      _0x3867d2.classList.add("show");
      _0xe0ea29.classList.add("active");
      if (!_0x5ce5a2) {
        _0x3867d2.focus();
      }
    }
    _0x3867d2.maxLength = _0xca1cdc.cS;
    _0xe0ea29.onclick = function () {
      _0x4e004c();
    };
    let _0x5d3d11 = false;
    function _0x5c1c88(_0x56e44b) {
      if (!!(_0x56e44b instanceof Event && _0x56e44b.isTrusted)) {
        if ("Escape" !== _0x56e44b.code || "keydown" !== _0x56e44b.type) {
          if (0xd !== _0x56e44b.keyCode || 'keydown' !== _0x56e44b.type) {
            if (!(_0x56e44b.repeat || document.activeElement !== document.body)) {
              _0x5ba7df(_0x56e44b.code, "keydown" === _0x56e44b.type);
            }
          } else {
            if (document.activeElement === _0x43adfa) {
              return void _0x31c3da.click(_0x301307);
            }
            if (document.activeElement === _0x1f954d) {
              return void _0x229f9a.click(_0x301307);
            }
            if (_0x1a94b3.classList.contains("show")) {
              return;
            }
            if ('' === _0x2fc9ad.style.display) {
              _0x3ee957.click(_0x301307);
            } else {
              if ('' === _0x17eee1.style.display) {
                _0x2867cc.click(_0x301307);
              } else {
                if (_0x4e004c()) {
                  const _0x26ea0d = _0x3867d2.value.trim().slice(0x0, _0xca1cdc.cS);
                  if (_0x26ea0d) {
                    _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iChat, ...new TextEncoder().encode(_0x26ea0d)]));
                  }
                  _0x3867d2.value = '';
                }
              }
            }
          }
        } else if (_0x4d5222.classList.contains("show")) {
          _0x1aa716();
        } else {
          _0x1f239c();
          _0x24a24c();
          _0x4b90d9();
          _0x957adc();
          _0x419f8a();
          _0x33e76c();
          _0x14bb9d();
          _0x331687();
        }
      }
    }
    function _0x2cccef(_0x3de1eb) {
      let _0x53a265 = _0x51b93c.children[_0x3de1eb];
      if (_0x53a265) {
        if (!_0x53a265.classList.contains('item')) {
          _0x53a265 = _0x53a265.querySelector(":scope > .item");
        }
        if (_0x53a265) {
          _0x53a265.click(_0x301307);
        }
      }
    }
    function _0x1c7520(_0x42df58, _0x53eddc, _0xec2571, _0x463dca) {
      for (let _0x27ff94 = 0x0; _0x27ff94 < _0x463dca; _0x27ff94++) {
        const _0x19746f = Math.random() * Math.PI * 0x2;
        const _0x4ae0db = (0x1 - Math.random() * _0x27ff94 / _0x463dca) * _0xec2571;
        const _0x16fed0 = _0x42df58 + Math.cos(_0x19746f) * _0x4ae0db;
        const _0x584c6b = _0x53eddc + Math.sin(_0x19746f) * _0x4ae0db;
        const _0x2c9573 = 0x46 * (0.5 * Math.random() + 0.5);
        _0xff52b.push({
          't': -0x1 * Math.random() - _0x27ff94 / _0x463dca * 0.2,
          'col': '#fff',
          'x': _0x16fed0,
          'y': _0x584c6b,
          'r': _0x2c9573,
          'xx': _0x16fed0 + (0x2 * Math.random() - 0x1) * _0x2c9573,
          'yy': _0x584c6b + (0x2 * Math.random() - 0x1) * _0x2c9573
        });
      }
    }
    document.addEventListener("keydown", _0x5c1c88);
    document.addEventListener('keyup', _0x5c1c88);
    let _0xa588b5 = 0x0;
    setInterval(function () {
      _0xa588b5 = 0x0;
    }, 0x3e8);
    function _0x5ba7df(_0x28cefd, _0x3ad0a3) {
      if (_0x3ad0a3) {
        _0x4cfb62[_0x28cefd] = true;
      } else if (_0x4cfb62[_0x28cefd]) {
        delete _0x4cfb62[_0x28cefd];
        if ("KeyP" === _0x28cefd) {
          _0x92313 = !_0x92313;
          _0x413e33("Show Hitbox", _0x92313);
        } else if ("KeyL" === _0x28cefd) {
          _0x2c4f4f = !_0x2c4f4f;
          _0x3cbef9.nightMode = _0x2c4f4f;
          _0x413e33("Night Mode", _0x2c4f4f);
        } else if ("KeyN" === _0x28cefd) {
          _0x4701a5 = !_0x4701a5;
          _0x413e33("Clan Chats", _0x4701a5);
        } else if ("Slash" === _0x28cefd) {
          _0x4ecdc6 = !_0x4ecdc6;
          _0x413e33("Show Kill Feed", _0x4ecdc6);
        } else if ("KeyT" === _0x28cefd || 'KeyY' === _0x28cefd) {
          if (_0x4b342[0x0]) {
            _0x4b342[0x0].children['KeyT' === _0x28cefd ? 0x1 : 0x2].click(_0x301307);
          }
        } else if ('KeyJ' === _0x28cefd) {
          _0x14efb7.click(_0x301307);
        } else if ("KeyH" === _0x28cefd) {
          _0x5fdcbf.click(_0x301307);
        } else if ('KeyM' === _0x28cefd) {
          _0x35ad11.classList.toggle("hover");
        } else if ('KeyE' === _0x28cefd) {
          _0x12d5b2 = !_0x12d5b2;
          _0x413e33("Auto Attack", _0x12d5b2);
        } else if ("KeyF" === _0x28cefd) {
          _0x5d3d11 = !_0x5d3d11;
        } else if ("KeyX" === _0x28cefd) {
          if (_0x288a71) {
            _0x288a71.dispose();
            _0x288a71 = null;
          } else if (_0x466240) {
            _0x288a71 = _0x336d9a("Pointer locked. Press X to disable.", false);
          }
        } else if (undefined !== _0x3ebb66[_0x28cefd]) {
          _0x2cccef(_0x3ebb66[_0x28cefd]);
        }
      }
      if (_0x598b17.includes(_0x28cefd)) {
        _0x5629b9();
      }
    }
    function _0xb6b4d7(_0xac535b) {
      const _0xcd471b = new Uint8Array(0x2);
      _0xcd471b[0x0] = _0xca1cdc.wT.iChangeItem;
      _0xcd471b[0x1] = _0xac535b;
      _0x2d5e24(_0xcd471b);
    }
    function _0x5629b9() {
      if (!_0x466240) {
        return;
      }
      const _0x4edff8 = new Uint8Array(0x2);
      _0x4edff8[0x0] = _0xca1cdc.wT.iKeyState;
      _0x4edff8[0x1] = (_0x4cfb62.KeyW || _0x4cfb62.ArrowUp ? 0x1 : 0x0) | (_0x4cfb62.KeyS || _0x4cfb62.ArrowDown ? 0x2 : 0x0) | (_0x4cfb62.KeyA || _0x4cfb62.ArrowLeft ? 0x4 : 0x0) | (_0x4cfb62.KeyD || _0x4cfb62.ArrowRight ? 0x8 : 0x0) | (_0x12d5b2 || _0x4cfb62.Space || _0x4cfb62.mouse0 ? 0x10 : 0x0) | (_0x4cfb62.ShiftLeft || _0x4cfb62.ShiftRight ? 0x20 : 0x0) | (_0x4cfb62.mouse2 || _0x5d3d11 ? 0x40 : 0x0);
      _0x2d5e24(_0x4edff8);
    }
    const _0x383dc5 = document.querySelector(".colors");
    for (let _0x18c20e = 0x0; _0x18c20e < _0xca1cdc.uW.length; _0x18c20e++) {
      const _0x36873f = document.createElement("div");
      _0x36873f.className = "color";
      _0x36873f.style.backgroundColor = _0xca1cdc.uW[_0x18c20e];
      _0x36873f.onclick = function () {
        const _0x1c361f = _0x383dc5.querySelector(".active");
        if (_0x1c361f) {
          _0x1c361f.classList.remove("active");
        }
        this.classList.add("active");
        _0x40dd6b = _0x18c20e;
        _0x3cbef9.color = _0x18c20e;
      };
      _0x383dc5.appendChild(_0x36873f);
    }
    let _0x40dd6b = parseInt(_0x3cbef9.color);
    if (isNaN(_0x40dd6b) || _0x40dd6b >= _0xca1cdc.uW.length) {
      _0x40dd6b = 0x0;
    }
    _0x383dc5.children[_0x40dd6b].click(_0x301307);
    const _0x5dc647 = document.querySelector('.grid');
    const _0x16e599 = document.querySelector('.connecting');
    function _0x353233() {
      _0xb6edb2.style.display = _0x538262.style.display = _0x86b62d.style.display = "none";
    }
    let _0x419dc9;
    let _0x3f59c9;
    let _0x5ac166;
    function _0x46310f(_0x4483e9) {
      _0xab1279 = false;
      _0x478b1f.length = 0x0;
      _0x2606a9.innerHTML = '';
      _0x4f7404 = 0x0;
      _0x486d44 = 0x0;
      _0x5ac166 = null;
      _0x353233();
      _0x16e599.classList.add("show");
      _0x5dc647.classList.remove("show");
      _0x39b6a5();
      console.log("Connecting to " + _0x4483e9 + "...");
      _0x419dc9 = new WebSocket(_0x4483e9);
      _0x419dc9.binaryType = "arraybuffer";
      _0x419dc9.onopen = _0x29cf07;
      _0x419dc9.onmessage = _0x1e84d0;
      _0x419dc9.onclose = _0x226ba6;
    }
    function _0x39b6a5() {
      if (_0x419dc9) {
        _0x419dc9.onopen = _0x419dc9.onmessage = _0x419dc9.onclose = null;
        try {
          _0x419dc9.close();
        } catch (_0x59d5df) {}
        _0x419dc9 = null;
      }
    }
    function _0x44f2f4() {
      _0x15de16.style.display = "none";
    }
    function _0x29cf07() {
      console.log("Connected!");
      _0x44f2f4();
      _0x3e99b5();
    }
    function _0x2d5e24(_0x3f334b) {
      if (_0x419dc9 && _0x419dc9.readyState === WebSocket.OPEN) {
        if (_0xe25b7c) {
          const _0x1d1f1e = new Uint8Array(_0x3f334b.buffer);
          for (let _0xd844a0 = 0x0; _0xd844a0 < _0x1d1f1e.length; _0xd844a0++) {
            _0x1d1f1e[_0xd844a0] ^= _0x49af9e;
          }
          const _0x1785d0 = _0xca1cdc.ry % _0x1d1f1e.length;
          const _0x588c76 = _0x1d1f1e[0x0];
          _0x1d1f1e[0x0] = _0x1d1f1e[_0x1785d0];
          _0x1d1f1e[_0x1785d0] = _0x588c76;
        }
        _0x419dc9.send(_0x3f334b);
      }
    }
    function _0x355e25(_0x56ede2) {
      try {
        var _0x9ed2ff = document.cookie.match(RegExp("(?:^|;\\s*)" + _0x56ede2.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1") + "=([^;]*)"));
        return _0x9ed2ff ? _0x9ed2ff[0x1] : null;
      } catch (_0x53ad10) {
        return '';
      }
    }
    crypto.randomUUID = crypto.randomUUID || function () {
      return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800).replace(/[018]/g, _0x48e06e => (_0x48e06e ^ crypto.getRandomValues(new Uint8Array(0x1))[0x0] & 0xf >> _0x48e06e / 0x4).toString(0x10));
    };
    const _0x38f944 = !window.isDevelopmentMode;
    function _0x12806c(_0x5decbe) {
      try {
        document.cookie = _0x5decbe + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" + (_0x38f944 ? " domain=.poopoo.pro" : '');
      } catch (_0x5121d9) {}
    }
    let _0x49af9e = 0x0;
    function _0x3e99b5() {
      _0x49af9e = 0x0;
      0x0;
      if (!_0xca1cdc.z6(_0x3cbef9.playerId)) {
        _0x3cbef9.playerId = crypto.randomUUID();
      }
      _0x3f59c9 = _0x3cbef9.playerId;
      _0x5ac166 = _0x3cbef9.discord_data;
      if (!_0x5ac166) {
        _0x5ac166 = _0x355e25('discord_data');
        if (_0x5ac166) {
          _0x5ac166 = decodeURIComponent(_0x5ac166);
        }
        _0x12806c("discord_data");
      }
      if (_0x5ac166) {
        try {
          const _0x428aa3 = _0x5ac166;
          _0x5ac166 = JSON.parse(decodeURIComponent(escape(atob(_0x428aa3))));
          0x0;
          if (!_0xca1cdc.z6(_0x5ac166.accountId)) {
            throw new Error("invalid uuid");
          }
          _0x3f59c9 = _0x5ac166.accountId;
          _0x4f344f.setAttribute("stroke", _0x5ac166.name);
          if (_0x5ac166.avatar) {
            _0x4e50ca.style.backgroundImage = "url(" + _0x5ac166.avatar + ')';
          }
          _0x3cbef9.discord_data = _0x428aa3;
        } catch (_0x3a7c69) {
          _0x5ac166 = null;
          delete _0x3cbef9.discord_data;
          console.error("discord err:" + _0x3a7c69);
        }
      }
      const _0x1ef7fe = _0x3f59c9;
      const _0x338aeb = _0x1ef7fe.length;
      const _0x20b71e = new DataView(new ArrayBuffer(0x3 + _0x338aeb));
      let _0x50e62f = 0x0;
      _0x20b71e.setUint8(_0x50e62f++, _0xca1cdc.wT.login);
      _0x20b71e.setUint16(_0x50e62f, _0xca1cdc.ry);
      _0x50e62f += 0x2;
      const _0x464fbf = _0xca1cdc.ry % 0xff;
      for (let _0x2ef14e = 0x0; _0x2ef14e < _0x338aeb; _0x2ef14e++) {
        _0x20b71e.setUint8(_0x50e62f++, _0x1ef7fe.charCodeAt(_0x338aeb - _0x2ef14e - 0x1) ^ _0x464fbf);
      }
      const _0x1a210a = _0x20b71e.getUint8(0x3 + _0xca1cdc.ry % _0x338aeb);
      _0x2d5e24(_0x20b71e);
      _0x49af9e = _0x1a210a;
    }
    const _0x86b62d = document.querySelector(".discord-area");
    const _0x4f344f = document.querySelector('.discord-user');
    const _0x4e50ca = document.querySelector(".discord-avatar");
    const _0x538262 = document.querySelector(".login-btn");
    _0x538262.onclick = function () {
      if (!_0x5ac166) {
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1177950629541462127&redirect_uri=' + encodeURIComponent(window.isDevelopmentMode ? 'http://localhost:8001/discord' : "https://auth.poopoo.pro/discord") + "&response_type=code&scope=identify&state=" + encodeURIComponent(btoa(_0x3f59c9));
      }
    };
    const _0xb6edb2 = document.querySelector('.logout-btn');
    let _0x4f4a25;
    let _0x466240;
    _0xb6edb2.onclick = function () {
      if (_0x3f59c9 == _0x3cbef9.playerId) {
        delete _0x3cbef9.playerId;
      }
      delete _0x3cbef9.discord_data;
      if (_0x419dc9) {
        try {
          _0x419dc9.close();
        } catch (_0x28a884) {}
      }
    };
    _0x353233();
    let _0x4cf941 = {};
    let _0x5a712e = [];
    let _0x163e1a;
    let _0xe200d0;
    function _0x29073a(_0x4914ab, _0x1cf17f, _0x24e59a = false) {
      _0x39b6a5();
      _0x1e6d5b.style.display = _0x2f2bf3.style.display = _0x17eee1.style.display = "none";
      _0x2fc9ad.style.display = '';
      _0x2fc9ad.innerHTML = '';
      _0x2fc9ad.appendChild(_0x2885af);
      _0x1dc200.setAttribute("stroke", _0x4914ab);
      _0x1e7640.setAttribute("stroke", _0x1cf17f);
      if (_0x24e59a) {
        _0x2fc9ad.style.background = "#000";
      }
      _0x2885af.style.display = '';
    }
    document.querySelector(".reload-btn").onclick = function () {
      location.reload();
    };
    window.sendBadMsg = function () {
      _0x2d5e24("lol");
    };
    const _0x4e0b69 = document.querySelector(".killer");
    function _0x334497() {
      _0xe200d0 = _0x4cf941[_0x163e1a];
      if (_0xe200d0) {
        _0x4e0b69.setAttribute("stroke", _0xe200d0.nick || 'Unknown');
        _0x163e1a = null;
        if (!_0xe200d0.isPlayer) {
          _0xe200d0 = null;
        }
      }
    }
    let _0x140eae = true;
    let _0x475a45 = 0x0;
    let _0x5cb651 = 0x0;
    let _0x505bb2 = 0x0;
    let _0x4e3cab = 0x0;
    let _0x243783 = 0x0;
    let _0x425401 = 0x0;
    let _0x96a38c = 0x0;
    let _0x532709 = 0x0;
    let _0xab1279 = false;
    let _0x523580 = 0x0;
    const _0x478b1f = [];
    const _0x319c09 = _0x49d009.querySelector(".food-count");
    const _0x49e9b2 = _0x49d009.querySelector(".wood-count");
    const _0x56d3a0 = _0x49d009.querySelector(".stone-count");
    const _0x4e0fcc = _0x49d009.querySelector(".gold-count");
    function _0x158e95() {
      _0x5a0152(_0x49e9b2, _0x475a45.toLocaleString("en-US"));
      _0x5a0152(_0x319c09, _0x5cb651.toLocaleString("en-US"));
      _0x5a0152(_0x56d3a0, _0x505bb2.toLocaleString("en-US"));
      _0x5a0152(_0x4e0fcc, _0x4e3cab.toLocaleString("en-US"));
    }
    function _0x5a0152(_0x297ee2, _0x202d99) {
      _0x297ee2.setAttribute("stroke", _0x202d99);
    }
    const _0x9a0116 = document.querySelector(".player-count");
    const _0x2606a9 = document.querySelector(".scores");
    function _0x2ed15a(_0x5024de) {
      return _0x5024de < 0.01 ? '0' : (_0x5024de = Math.round(_0x5024de)) >= 0xf4240 ? parseFloat((_0x5024de / 0xf4240).toFixed(0x2)) + 'm' : _0x5024de >= 0x3e8 ? parseFloat((_0x5024de / 0x3e8).toFixed(0x1)) + 'k' : _0x5024de;
    }
    function _0x37feb5(_0x262239, _0x4c79e8, _0x34da17, _0x56a55d) {
      const _0x353a89 = document.createElement('div');
      _0x353a89.className = 'progress';
      const _0x1f144c = document.createElement('div');
      _0x1f144c.className = "bar";
      _0x353a89.appendChild(_0x1f144c);
      const _0x339beb = document.createElement("span");
      _0x353a89.appendChild(_0x339beb);
      _0x2606a9.appendChild(_0x353a89);
      _0x353a89.setAttribute('style', "--color:" + _0x34da17);
      const _0x4148a9 = {
        'nick': _0x262239,
        'cleanedNick': _0x262239,
        'score': _0x4c79e8,
        'iScore': 0x0,
        'percent': 0x0,
        'iPercent': 0x0,
        'el': _0x353a89,
        'barEl': _0x1f144c,
        'nameEl': _0x339beb
      };
      _0x4148a9.index = _0x478b1f.length;
      if (_0x56a55d) {
        _0x4148a9.iScore = _0x4148a9.score;
        _0x4148a9.iPercent = 0x0;
      }
      _0x4148a9.update = function () {
        this.iScore += 0.1 * (this.score - this.iScore);
        this.iPercent += 0.1 * (this.percent - this.iPercent);
        this.nameEl.setAttribute("stroke", (this.nick ? this.nick + " - " : '') + _0x2ed15a(this.iScore));
        this.barEl.style.width = this.iPercent + '%';
      };
      _0x4148a9.update();
      _0x478b1f.push(_0x4148a9);
    }
    function _0x46941c(_0x1b339e) {
      if (0x0 === _0x478b1f.length) {
        return;
      }
      const _0xb22980 = _0x478b1f[0x0];
      _0xb22980.percent = _0xb22980.iPercent = 0x64;
      for (let _0x32557e = 0x1; _0x32557e < _0x478b1f.length; _0x32557e++) {
        const _0x518f8c = _0x478b1f[_0x32557e];
        _0x518f8c.percent = 0x64 * Math.min(0x1, 0x0 === _0xb22980.score ? 0x1 : _0x518f8c.score / _0xb22980.score);
        if (_0x1b339e) {
          _0x518f8c.iPercent = _0x518f8c.percent;
        }
        _0x2606a9.appendChild(_0x518f8c.el);
      }
    }
    let _0x36ef69 = 0x0;
    const _0x3f3f7d = [];
    let _0x467bbf = 0x0;
    let _0x4b0980 = 0x0;
    const _0x2ce46a = document.querySelector(".kill-count span");
    function _0x3db442() {
      _0x5a0152(_0x2ce46a, _0x4b0980.toLocaleString("en-US"));
    }
    const _0x519824 = document.querySelector(".spectator-count");
    const _0x40439c = _0x519824.querySelector('span');
    function _0x4adb91(_0x4fbde7) {
      _0x519824.style.display = 0x0 === _0x4fbde7 ? "none" : '';
      _0x5a0152(_0x40439c, _0x4fbde7.toLocaleString("en-US"));
    }
    const _0x14efb7 = document.querySelector('.clan-btn');
    const _0xf0562 = document.querySelector(".dialog-close");
    _0xf0562.onclick = function () {
      _0x1f239c();
    };
    const _0x1c0a62 = document.querySelector(".dialog");
    const _0x568a55 = document.querySelector(".dialog-title");
    const _0x311e82 = document.querySelector(".dialog-content");
    _0x14efb7.onclick = function () {
      this.classList.toggle('active');
      _0x1c0a62.classList.toggle("show");
      _0x4b90d9();
      _0x14bb9d();
      _0x331687();
      _0x1aa716();
    };
    const _0x5d44df = document.querySelector(".leave-clan");
    function _0x10a9e5(_0x71e5d2, _0x349213) {
      _0x71e5d2[_0x349213 ? 'setAttribute' : 'removeAttribute']('disabled', "true");
    }
    _0x5d44df.onclick = function () {
      _0x10a9e5(_0x5d44df, true);
      _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClanLeave]));
      _0x1ace53(false);
    };
    let _0x19c005 = {};
    const _0x221202 = document.querySelector(".gift");
    const _0x5538f4 = document.querySelector(".gift-btn");
    _0x5538f4.onclick = function (_0x597c68) {
      if (!(_0x597c68 instanceof Event && _0x597c68.isTrusted)) {
        return;
      }
      let _0x9161a6 = 0x0;
      let _0x276810 = 0x3;
      const _0x329922 = [];
      for (let _0x38e664 = 0x0; _0x38e664 < _0x3ad0f0.length; _0x38e664++) {
        const _0x5f3b4e = parseInt(_0x221202.querySelector('.' + _0x3ad0f0[_0x38e664] + "-input").value);
        if (_0x5f3b4e > 0x0) {
          if (_0x5f3b4e > [_0x5cb651, _0x475a45, _0x505bb2, _0x4e3cab][_0x38e664]) {
            return _0x336d9a("Not enough " + _0x3ad0f0[_0x38e664]);
          }
          _0x9161a6 |= 0x1 << _0x38e664;
          _0x276810 += 0x4;
          _0x329922.push(_0x5f3b4e);
        }
      }
      if (0x0 === _0x9161a6) {
        return void _0x336d9a("Gift can't be empty.");
      }
      const _0x59a201 = new DataView(new ArrayBuffer(_0x276810));
      let _0x432ab2 = 0x0;
      _0x59a201.setUint8(_0x432ab2++, _0xca1cdc.wT.iGift);
      const _0x34b9c4 = _0x2ff222(_0x311e82, _0x5833c9);
      if (-0x1 === _0x34b9c4) {
        _0x336d9a("Member not found.");
        return _0x5e18af();
      }
      _0x59a201.setUint8(_0x432ab2++, _0x34b9c4);
      _0x59a201.setUint8(_0x432ab2++, _0x9161a6);
      for (let _0x5c1526 = 0x0; _0x5c1526 < _0x329922.length; _0x5c1526++) {
        _0x59a201.setUint32(_0x432ab2, _0x329922[_0x5c1526]);
        _0x432ab2 += 0x4;
      }
      _0x2d5e24(_0x59a201);
      _0x336d9a("Sent gift");
    };
    const _0x1b6322 = _0x221202.querySelector('.item-counts');
    _0x1619af(_0x1b6322);
    const _0x53bf5e = [0x0, 0x0, 0x0, 0x0];
    const _0x5c84b0 = document.querySelector(".storage");
    const _0x52e53d = _0x5c84b0.querySelector(".dialog-close");
    const _0x3135ac = _0x5c84b0.querySelector(".storage-inputs");
    _0x1619af(_0x3135ac);
    const _0x352d64 = _0x5c84b0.querySelector('.storage-balance');
    _0x5c3bba(_0x352d64);
    const _0x58ab38 = document.querySelector(".withdraw-btn");
    const _0x40a113 = document.querySelector('.deposit-btn');
    function _0x1f685f(_0x509eeb) {
      if (!_0x58e927) {
        return;
      }
      const _0x105ed9 = new DataView(new ArrayBuffer(0x11));
      let _0x420b82 = 0x0;
      _0x105ed9.setUint8(_0x420b82++, _0x509eeb);
      const _0x45ce0f = _0x509eeb === _0xca1cdc.wT.iDeposit;
      let _0x5e8513 = false;
      for (let _0x2a6708 = 0x0; _0x2a6708 < _0x3ad0f0.length; _0x2a6708++) {
        const _0x3322c6 = _0x3ad0f0[_0x2a6708];
        const _0x4d7d18 = parseInt(_0x3135ac.querySelector('.' + _0x3322c6 + "-input").value) || 0x0;
        if (_0x4d7d18 > 0x0) {
          _0x5e8513 = true;
        }
        if (!(_0x45ce0f ? _0x4d7d18 <= [_0x5cb651, _0x475a45, _0x505bb2, _0x4e3cab][_0x2a6708] : _0x4d7d18 <= _0x53bf5e[_0x2a6708])) {
          return void _0x336d9a("Not enough " + _0x3322c6 + (_0x45ce0f ? '' : " in bank."));
        }
        _0x105ed9.setUint32(_0x420b82, _0x4d7d18);
        _0x420b82 += 0x4;
      }
      if (_0x5e8513) {
        _0x2d5e24(_0x105ed9);
      } else {
        _0x336d9a("Amount is empty");
      }
    }
    function _0x331687() {
      _0x52e53d.click(_0x301307);
    }
    function _0x1619af(_0x3071c9) {
      for (let _0xf17b89 = 0x0; _0xf17b89 < _0x3ad0f0.length; _0xf17b89++) {
        const _0x102351 = _0x3ad0f0[_0xf17b89];
        const _0x3d88d1 = document.createElement("div");
        _0x3d88d1.className = "item-count";
        const _0x1774b1 = document.createElement("input");
        _0x1774b1.type = "number";
        _0x1774b1.className = _0x102351 + '-input';
        _0x1774b1.placeholder = "Enter amount...";
        const _0x249cd1 = document.createElement('div');
        _0x249cd1.className = "item-icon";
        _0x4a6994(_0x249cd1, "gold" === _0x102351 ? _0xca1cdc.gv.goldStone : _0xca1cdc.gv[_0x102351]);
        _0x3d88d1.appendChild(_0x249cd1);
        _0x3d88d1.appendChild(_0x1774b1);
        _0x3071c9.appendChild(_0x3d88d1);
      }
    }
    let _0x5833c9;
    _0x58ab38.onclick = function () {
      _0x1f685f(_0xca1cdc.wT.iWithdraw);
    };
    _0x40a113.onclick = function () {
      _0x1f685f(_0xca1cdc.wT.iDeposit);
    };
    _0x52e53d.onclick = function () {
      _0x5c84b0.classList.remove("show");
      _0x58e927 = null;
    };
    function _0x566fa2(_0x5e1f4b, _0x4e582b) {
      const _0x3b829e = document.createElement("div");
      _0x3b829e.className = 'slot';
      _0x3b829e.playerName = _0x4e582b || 'Unnamed';
      _0x3b829e.playerId = _0x5e1f4b;
      const _0x1ff9d0 = document.createElement('span');
      _0x5a0152(_0x1ff9d0, _0x3b829e.playerName);
      _0x3b829e.appendChild(_0x1ff9d0);
      const _0x31420a = document.createElement("div");
      _0x31420a.className = "btn gift-btn";
      _0x31420a.innerHTML = "<span stroke=\"GIFT\"></span>";
      _0x3b829e.appendChild(_0x31420a);
      _0x3b829e.giftEl = _0x31420a;
      _0x31420a.onclick = function () {
        const _0x4b8122 = _0x311e82.querySelector(".gift-btn.active");
        if (_0x4b8122) {
          _0x4b8122.classList.remove("active");
        }
        if (_0x4b8122 === this) {
          _0x5833c9 = null;
          return void _0x221202.classList.remove('show');
        }
        _0x221202.classList.add("show");
        this.classList.add("active");
        _0x5833c9 = _0x3b829e;
      };
      const _0x4e2ed3 = document.createElement("div");
      _0x4e2ed3.className = "btn kick-btn";
      _0x4e2ed3.innerHTML = "<span stroke=\"KICK\"></span>";
      if (_0x373230()) {
        _0x3b829e.appendChild(_0x4e2ed3);
      }
      _0x4e2ed3.onclick = function () {
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClanKick, _0x2ff222(_0x311e82, _0x3b829e)]));
      };
      _0x3b829e.kickEl = _0x4e2ed3;
      _0x311e82.appendChild(_0x3b829e);
      const _0x4b29dd = document.createElement("div");
      _0x4b29dd.className = "minimap-dot";
      _0x4b29dd.style.opacity = "0.5";
      _0x4b29dd.style.display = 'none';
      _0x35ad11.appendChild(_0x4b29dd);
      const _0x3d9019 = document.createElement("div");
      _0x3d9019.className = "minimap-name";
      _0x5a0152(_0x3d9019, _0x3b829e.playerName);
      _0x4b29dd.appendChild(_0x3d9019);
      _0x3b829e.dotEl = _0x4b29dd;
      const _0x391769 = document.createElement("div");
      _0x391769.className = "tooltip";
      const _0x30196e = document.createElement("div");
      _0x30196e.className = "tooltip-title";
      _0x391769.appendChild(_0x30196e);
      _0x3b829e.tt = _0x391769;
      const _0xd57863 = document.createElement("div");
      _0x391769.appendChild(_0xd57863);
      _0x3b829e.appendChild(_0x391769);
      const _0x4b7943 = document.createElement('div');
      _0x4b7943.className = "tooltip-avatar";
      _0x391769.appendChild(_0x4b7943);
      const _0x37f4a5 = _0x1fed73(_0x4b7943, function (_0x32d467) {
        if (_0x3b829e.player) {
          _0x32d467.translate(-_0x3b829e.player.x, -_0x3b829e.player.y);
          _0x3b829e.player.draw(_0x32d467);
          _0x3b829e.player.drawNickAndHp(_0x32d467);
        }
      });
      _0x37f4a5.forceRender = true;
      _0x37f4a5.scale = 0.4;
      _0x3b829e.updatePlayerName = function (_0x52c9f3) {
        _0x3b829e.playerName = _0x52c9f3 || 'Unnamed';
        _0x5a0152(_0x1ff9d0, _0x3b829e.playerName);
        _0x5a0152(_0x3d9019, _0x3b829e.playerName);
        _0x5a0152(_0x30196e, _0x3b829e.playerName + "'s Status");
      };
      _0x3b829e.setPlayer = function (_0x36fc69) {
        _0x5a0152(_0xd57863, _0x36fc69 ? "Playing" : "Dead");
        _0xd57863.style.color = _0x36fc69 ? '#94fa50' : "#ff6b6b";
        _0x4b7943.style.display = _0x36fc69 ? '' : 'none';
        _0x3b829e.player = _0x36fc69;
      };
      _0x3b829e.setPlayer(_0x4cf941[_0x5e1f4b]);
      _0x3b829e.dispose = function () {
        delete _0x19c005[_0x3b829e.playerId];
        _0x3b829e.remove();
        _0x4b29dd.remove();
      };
      _0x3b829e.updatePlayerName(_0x4e582b);
      _0x19c005[_0x5e1f4b] = _0x3b829e;
      return _0x3b829e;
    }
    function _0x2ff222(_0x292d91, _0x2e4788) {
      for (let _0x1ba995 = 0x0; _0x1ba995 < _0x292d91.children.length; _0x1ba995++) {
        if (_0x292d91.children[_0x1ba995] === _0x2e4788) {
          return _0x1ba995;
        }
      }
      return -0x1;
    }
    const _0x31c3da = document.querySelector('.create-clan');
    const _0x43adfa = document.querySelector(".clan-name-input");
    function _0x1ace53(_0x4add7d) {
      _0x10a9e5(_0x5d44df, !_0x4add7d);
      _0x10a9e5(_0x31c3da, _0x4add7d);
      _0x311e82.style.display = _0x5d44df.style.display = _0x4add7d ? '' : "none";
      _0xe2d355.style.display = _0x31c3da.style.display = _0x43adfa.style.display = _0x4add7d ? "none" : '';
      if (!_0x4add7d) {
        _0x5a0152(_0x568a55, 'Clans');
        _0x43adfa.value = '';
        for (let _0x2b5cfe in _0x19c005) _0x19c005[_0x2b5cfe].dotEl.remove();
        for (_0x19c005 = {}; _0x4b342.length > 0x0;) {
          _0x4b342.shift().dispose();
        }
        _0x5e18af();
      }
    }
    _0x43adfa.maxLength = _0xca1cdc.zB;
    _0x31c3da.onclick = function () {
      const _0x375ca8 = _0x43adfa.value.trim().slice(0x0, _0xca1cdc.zB);
      if ('' !== _0x375ca8) {
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClanCreate, ...new TextEncoder().encode(_0x375ca8)]));
      } else {
        _0x336d9a("Clan name can't be blank");
      }
    };
    const _0x1a1409 = document.createElement('span');
    _0x5a0152(_0x1a1409, 'owner');
    const _0x1a3cd4 = document.createElement("span");
    function _0x3dee2b() {
      const _0x237d5e = _0x311e82.children;
      const _0x2fbe04 = _0x237d5e[0x0];
      if (_0x1a1409.parentNode !== _0x2fbe04) {
        _0x2fbe04.insertBefore(_0x1a1409, _0x2fbe04.children[0x1]);
      }
      if (_0x1a3cd4.parentNode === _0x2fbe04) {
        _0x1a3cd4.remove();
      }
      if (_0x373230()) {
        for (let _0x1cf8ac = 0x1; _0x1cf8ac < _0x237d5e.length; _0x1cf8ac++) {
          const _0x12ccc5 = _0x237d5e[_0x1cf8ac];
          _0x12ccc5.insertBefore(_0x12ccc5.kickEl, _0x12ccc5.tt);
        }
      }
    }
    _0x5a0152(_0x1a3cd4, "you");
    const _0x594644 = [];
    const _0xe2d355 = document.createElement("div");
    function _0x407eeb(_0x26e66c, _0x29806f) {
      if (0x0 === _0x594644.length) {
        _0xe2d355.innerHTML = '';
      }
      _0x319b7e.innerHTML = "\n\t<div class=\"slot\">\n\t\t<span></span>\n\t\t<span></span>\n\t\t<div class=\"btn\">\n\t\t\t<span stroke=\"JOIN\"></span>\n\t\t</div>\n\t</div>";
      const _0x4128af = _0x319b7e.children[0x0];
      _0x5a0152(_0x4128af.children[0x0], _0x26e66c);
      _0x4128af.playerCountEl = _0x4128af.children[0x1];
      _0x4128af.clanName = _0x26e66c;
      _0x4128af.setPlayerCount = function (_0x2c95f6) {
        _0x5a0152(_0x4128af.playerCountEl, _0x2c95f6 + (0x1 !== _0x2c95f6 ? " players" : " player"));
      };
      _0x4128af.setPlayerCount(_0x29806f);
      _0x4128af.joinBtnEl = _0x4128af.children[0x2];
      _0x4128af.joinBtnEl.onclick = function () {
        _0x2f013c(_0x594644.indexOf(_0x4128af));
      };
      _0x4128af.dispose = function () {
        _0x4128af.remove();
        _0x594644.splice(_0x594644.indexOf(_0x4128af), 0x1);
      };
      _0x594644.push(_0x4128af);
      _0xe2d355.appendChild(_0x4128af);
    }
    function _0x2f013c(_0x15535c) {
      _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClanJoinReq, _0x15535c]));
      _0x336d9a("Sending request");
    }
    function _0x378baa() {
      if (0x0 === _0x594644.length) {
        _0xe2d355.innerHTML = "<div class=\"slot full\">\n\t\t\t<span stroke=\"No clans found.\"></span>\n\t\t</div>";
      }
    }
    _0xe2d355.className = "dialog-content";
    _0x1c0a62.insertBefore(_0xe2d355, _0x311e82);
    const _0x4b342 = [];
    function _0x2a3d9c(_0x143292) {
      const _0x20ff21 = _0x336d9a('', false);
      _0x20ff21.classList.add("hud-btns");
      _0x20ff21.innerHTML = "\n\t<span stroke=\"\"></span>\n\t<div class=\"btn accept-btn\">\n\t\t<span stroke=\"accept [T]\"></span>\n\t</div>\n\t<div class=\"btn reject-btn\">\n\t\t<span stroke=\"reject [Y]\"></span>\n\t</div>";
      _0x20ff21.children[0].setAttribute("stroke", (_0x143292 || 'Unnamed') + " wants to join your clan");
      let _0x17b625 = false;
      _0x20ff21.children[0x1].onclick = _0x20ff21.children[0x2].onclick = function () {
        if (_0x17b625) {
          return;
        }
        const _0x2177c7 = _0x4b342.indexOf(_0x20ff21);
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iClanJoinReqVerdict, _0x2177c7, this.classList.contains("reject-btn") ? 0x0 : 0x1]));
        _0x4b342.splice(_0x2177c7, 0x1);
        _0x20ff21.dispose();
        _0x17b625 = true;
      };
      _0x4b342.push(_0x20ff21);
    }
    function _0x373230() {
      const _0x3f75d8 = _0x311e82.children[0x0];
      return _0x3f75d8 && _0x3f75d8.isMe;
    }
    function _0x5e18af() {
      for (let _0xf1d391 = 0x0; _0xf1d391 < _0x3ad0f0.length; _0xf1d391++) {
        document.querySelector('.' + _0x3ad0f0[_0xf1d391] + "-input").value = 0x0;
      }
      _0x221202.classList.remove("show");
    }
    function _0x550e7d(_0x3cf7fa, _0x55c566 = _0x7a6f4f) {
      _0x5a0152(_0x55c566.querySelector(".dialog-title"), (_0x3cf7fa ? _0x3cf7fa + "'s" : "Your") + " Profile");
    }
    function _0x55f510() {
      if (_0x288a71) {
        _0x288a71.dispose();
        _0x288a71 = null;
      }
    }
    let _0xe25b7c = false;
    let _0x2ffc7c = 0x0;
    const _0x866ea1 = [];
    function _0x1e84d0(_0x4b9305) {
      const _0xa8c94c = new DataView(_0x4b9305.data);
      let _0x457ea4 = 0x0;
      function _0x5c9f7f() {
        const _0x1a1e09 = _0xa8c94c.getUint8(_0x457ea4++);
        const _0x4a4bae = new Uint8Array(_0x1a1e09);
        for (let _0x5b8345 = 0x0; _0x5b8345 < _0x1a1e09; _0x5b8345++) {
          _0x4a4bae[_0x5b8345] = _0xa8c94c.getUint8(_0x457ea4++);
        }
        return new TextDecoder().decode(_0x4a4bae);
      }
      function _0x2572ec() {
        const _0x2bab27 = _0xa8c94c.getUint32(_0x457ea4);
        _0x457ea4 += 0x4;
        const _0x306ca6 = _0xa8c94c.getUint8(_0x457ea4++);
        _0x37feb5(_0x5c9f7f(), _0x2bab27, _0xca1cdc.uW[_0x306ca6]);
      }
      function _0x3d52ac() {
        const _0x34e669 = _0xa8c94c.getUint8(_0x457ea4++);
        _0x407eeb(_0x5c9f7f(), _0x34e669);
      }
      function _0x253ff0() {
        const _0xca692e = _0xa8c94c.getUint32(_0x457ea4);
        _0x457ea4 += 0x4;
        return _0x566fa2(_0xca692e, _0x5c9f7f());
      }
      switch (_0xa8c94c.getUint8(_0x457ea4++)) {
        case _0xca1cdc.wT.cantPerformAction:
          _0x336d9a("Can't perform that action.");
          break;
        case _0xca1cdc.wT.clanReqRejected:
          _0x336d9a("Your join request was rejected.");
          break;
        case _0xca1cdc.wT.kicked:
          window.onbeforeunload = null;
          const _0x13e297 = _0x2a812b[_0xa8c94c.getUint8(_0x457ea4)] || 'unknown';
          const _0x169fa1 = "reason: " + _0x13e297;
          console.log("Kicked! (" + _0x169fa1 + ')');
          if ("loginFailed" === _0x13e297) {
            _0x336d9a("Failed to login. Retrying...");
          } else if ("connectionIdle" === _0x13e297) {
            _0x336d9a("Kicked due to inactivity. Reconnecting...");
          } else {
            _0x140eae = false;
            _0x29073a("KICKED!", _0x169fa1);
          }
          break;
        case _0xca1cdc.wT.loggedIn:
          if (_0x5ac166) {
            _0xb6edb2.style.display = _0x86b62d.style.display = '';
          } else {
            _0x538262.style.display = '';
          }
          _0xe25b7c = true;
          _0x5dc647.classList.add('show');
          _0x16e599.classList.remove("show");
          break;
        case _0xca1cdc.wT.accountNotFound:
          _0x336d9a("Account not found.");
          break;
        case _0xca1cdc.wT.accountData:
          const _0x19e8b1 = _0xa8c94c.getUint8(_0x457ea4++);
          const _0x11ba30 = _0x28f576(_0x5c9f7f());
          if (_0x19e8b1) {
            _0x15de16.style.display = _0x11ba30 ? 'none' : '';
          } else {
            _0x336d9a("Got " + _0x11ba30 + "'s profile!");
            _0x4d5222.classList.add("show");
            _0x491858.resetBar();
            _0x491858.scrollTop = 0x0;
          }
          const _0x5e5223 = _0x19e8b1 ? 0x0 : 0x1;
          _0x550e7d(_0x11ba30, _0x19e8b1 ? _0x7a6f4f : _0x4d5222);
          0x0;
          const _0x2abd0a = _0xca1cdc.OU();
          for (let _0x3bd98e in _0x691205) {
            let _0x3c8804;
            0x0;
            if (_0xca1cdc.nf(_0x3bd98e)) {
              _0x3c8804 = Number(_0xa8c94c.getBigUint64(_0x457ea4));
              _0x457ea4 += 0x8;
            } else {
              _0x3c8804 = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            _0x691205[_0x3bd98e][_0x5e5223].setValue(_0x3c8804);
            _0x2abd0a[_0x3bd98e] = _0x3c8804;
          }
          _0x462638[_0x5e5223](_0x2abd0a);
          break;
        case _0xca1cdc.wT.usernameClaimed:
          _0x550e7d(_0x2993cd);
          _0x336d9a("Username claimed!");
          _0x15de16.style.display = 'none';
          break;
        case _0xca1cdc.wT.usernameTaken:
          _0x336d9a("Username already taken.");
          _0x2993cd = null;
          break;
        case _0xca1cdc.wT.tryAgainLater:
          _0x336d9a("Try again later.");
          break;
        case _0xca1cdc.wT.glbData:
          _0x345450 = {};
          _0x345450.numAccounts = _0xa8c94c.getUint32(_0x457ea4);
          _0x457ea4 += 0x4;
          const _0x53191e = _0x345450.numAccounts;
          _0x5a0152(_0x3b5f38, "(total " + _0x53191e.toLocaleString("en-US") + " account" + (0x0 === _0x53191e ? '' : 's') + ')');
          const _0x3cb674 = Math.min(_0x345450.numAccounts, 0xa);
          for (let _0x18aab8 in _0x691205) if ('timeJoined' !== _0x18aab8) {
            _0x345450[_0x18aab8] = [];
            for (let _0x58f5ba = 0x0; _0x58f5ba < _0x3cb674; _0x58f5ba++) {
              const _0x21fcd2 = _0x5c9f7f();
              let _0x195faf;
              0x0;
              if (_0xca1cdc.nf(_0x18aab8)) {
                _0x195faf = Number(_0xa8c94c.getBigUint64(_0x457ea4));
                _0x457ea4 += 0x8;
              } else {
                _0x195faf = _0xa8c94c.getUint32(_0x457ea4);
                _0x457ea4 += 0x4;
              }
              _0x345450[_0x18aab8][_0x58f5ba] = [_0x21fcd2, _0x195faf];
            }
          }
          _0x164990();
          break;
        case _0xca1cdc.wT.leftClan:
          if (0x2 === _0xa8c94c.byteLength) {
            _0x336d9a("You were kicked from clan");
          } else {
            _0x336d9a("You left the clan");
          }
          _0x1ace53(false);
          break;
        case _0xca1cdc.wT.fullClanList:
          _0xe2d355.innerHTML = '';
          const _0x59ef1a = _0xa8c94c.getUint8(_0x457ea4++);
          for (let _0x496b05 = 0x0; _0x496b05 < _0x59ef1a; _0x496b05++) {
            _0x3d52ac();
          }
          _0x378baa();
          break;
        case _0xca1cdc.wT.addClan:
          _0x3d52ac();
          break;
        case _0xca1cdc.wT.removeClan:
          _0x594644[_0xa8c94c.getUint8(_0x457ea4++)].dispose();
          _0x378baa();
          break;
        case _0xca1cdc.wT.updateClan:
          _0x594644[_0xa8c94c.getUint8(_0x457ea4++)].setPlayerCount(_0xa8c94c.getUint8(_0x457ea4++));
          break;
        case _0xca1cdc.wT.addClanPlayer:
          _0x336d9a(_0x253ff0().playerName + " joined the clan");
          break;
        case _0xca1cdc.wT.removeClanPlayer:
          const _0x4bc868 = _0xa8c94c.getUint8(_0x457ea4++);
          const _0x29c496 = _0x311e82.children[_0x4bc868];
          _0x29c496.dispose();
          if (_0x29c496 === _0x5833c9) {
            _0x5e18af();
          }
          _0x336d9a(_0x29c496.playerName + " left the clan");
          _0x3dee2b();
          break;
        case _0xca1cdc.wT.joinedGame:
          if (!window.isDevelopmentMode) {
            window.onbeforeunload = function () {
              return "Are you sure?";
            };
          }
          _0x23dccf();
          _0x2ce46a.parentNode.style.display = '';
          _0x4f4a25 = _0xa8c94c.getUint32(_0x457ea4);
          _0x457ea4 += 0x4;
          _0x4adb91(0x0);
          _0x243783 = _0x475a45 = 0x0;
          _0x425401 = _0x5cb651 = 0x0;
          _0x96a38c = _0x505bb2 = 0x0;
          _0x532709 = _0x4e3cab = 0x0;
          _0x5d3d11 = false;
          _0x158e95();
          _0x163e1a = -0x1;
          _0xe200d0 = null;
          _0x4cfb62 = {};
          _0x12d5b2 = false;
          _0x3627a2.style.display = '';
          _0x24a24c();
          _0x1f239c();
          _0x14bb9d();
          _0x331687();
          _0x467bbf = Date.now();
          _0x2c3d2b = 0x0;
          _0x4b0980 = 0x0;
          _0x3db442();
          _0x51b93c.children[0x0].click(_0x301307);
          _0x55f510();
          break;
        case _0xca1cdc.wT.joinedClan:
          const _0x2cfd59 = _0x5c9f7f();
          _0x336d9a("You joined " + _0x2cfd59, true);
          _0x5a0152(_0x568a55, _0x2cfd59);
          const _0x125ad1 = _0xa8c94c.getUint8(_0x457ea4++);
          _0x311e82.innerHTML = '';
          for (let _0x1c2e1f = 0x0; _0x1c2e1f < _0x125ad1; _0x1c2e1f++) {
            _0x253ff0();
          }
          const _0x367def = _0xa8c94c.getUint8(_0x457ea4++);
          const _0x4a398f = _0x311e82.children[_0x367def];
          _0x4a398f.isMe = true;
          _0x4a398f.insertBefore(_0x1a3cd4, _0x4a398f.children[0x1]);
          _0x4a398f.giftEl.remove();
          _0x1ace53(true);
          _0x3dee2b();
          break;
        case _0xca1cdc.wT.clanJoinReq:
          _0x2a3d9c(_0x5c9f7f());
          break;
        case _0xca1cdc.wT.skinOwned:
          for (; _0x457ea4 < _0xa8c94c.byteLength;) {
            const _0x2728a0 = _0xa8c94c.getUint8(_0x457ea4++);
            _0x5691f4[_0x2728a0].setOwned(true);
          }
          break;
        case _0xca1cdc.wT.gotGift:
          _0x336d9a("You received a gift from " + _0x311e82.children[_0xa8c94c.getUint8(_0x457ea4++)].playerName);
          break;
        case _0xca1cdc.wT.showEditDisplay:
          _0xadd137.classList.add('show');
          _0x4b90d9();
          _0x1f239c();
          _0x1aa716();
          _0x331687();
          const _0x18585e = _0xa8c94c.getUint32(_0x457ea4);
          _0x457ea4 += 0x4;
          _0x58e927 = _0x4cf941[_0x18585e];
          if (_0x58e927) {
            _0x6c932.displayText = _0x58e927.displayText;
            _0x6c932.angle = _0x58e927.angle;
            _0x2ac72a.value = _0x58e927.displayText;
            _0x41c2c0.children[_0x58e927.displayColorId].click(_0x301307);
          }
          break;
        case _0xca1cdc.wT.hideEditDisplay:
          _0x14bb9d();
          break;
        case _0xca1cdc.wT.showStorage:
          _0x4b90d9();
          _0x1f239c();
          _0x1aa716();
          _0x14bb9d();
          _0x5c84b0.classList.add("show");
          const _0x32efb3 = _0xa8c94c.getUint32(_0x457ea4);
          _0x457ea4 += 0x4;
          _0x58e927 = _0x4cf941[_0x32efb3];
          for (let _0x4b1a26 = 0x0; _0x4b1a26 < 0x4; _0x4b1a26++) {
            const _0x45e1b5 = _0xa8c94c.getUint32(_0x457ea4);
            _0x457ea4 += 0x4;
            _0x53bf5e[_0x4b1a26] = _0x45e1b5;
            _0x5a0152(_0x352d64.children[_0x4b1a26].children[0x1], _0x45e1b5.toLocaleString("en-US"));
          }
          break;
        case _0xca1cdc.wT.hideStorage:
          _0x331687();
          break;
        case _0xca1cdc.wT.matRewardAck:
          _0x3ea805.insertBefore(_0x140818, _0x3ea805.children[0x0]);
          setTimeout(function () {
            _0x140818.classList.add('show');
          }, 0x14);
          _0x5a0152(_0x140818.querySelector(".food-count"), _0xa8c94c.getUint16(_0x457ea4).toLocaleString("en-US"));
          _0x457ea4 += 0x2;
          _0x5a0152(_0x140818.querySelector(".wood-count"), _0xa8c94c.getUint16(_0x457ea4).toLocaleString("en-US"));
          _0x457ea4 += 0x2;
          _0x5a0152(_0x140818.querySelector(".stone-count"), _0xa8c94c.getUint16(_0x457ea4).toLocaleString("en-US"));
          _0x457ea4 += 0x2;
          _0x5a0152(_0x140818.querySelector(".gold-count"), _0xa8c94c.getUint16(_0x457ea4).toLocaleString("en-US"));
          _0x457ea4 += 0x2;
          _0x2ffc7c = Date.now() + 0x7530;
          break;
        case _0xca1cdc.wT.matRewardDelivered:
          _0x59fedb();
          _0x336d9a("Reward received!");
          break;
        case _0xca1cdc.wT.update:
          _0x36ef69++;
          const _0x38deca = _0xa8c94c.getUint16(_0x457ea4);
          _0x457ea4 += 0x2;
          for (let _0x7d5783 = 0x0; _0x7d5783 < _0x38deca; _0x7d5783++) {
            const _0x32a196 = _0xa8c94c.getUint32(_0x457ea4);
            _0x457ea4 += 0x4;
            let _0x1fa7ab = _0x4cf941[_0x32a196];
            if (_0x1fa7ab) {
              if (_0x1fa7ab.isDisplay) {
                _0x1fa7ab.displayColorId = _0xa8c94c.getUint8(_0x457ea4++);
                _0x1fa7ab.displayColor = _0xca1cdc.zb[_0x1fa7ab.displayColorId];
                _0x1fa7ab.displayText = _0x5c9f7f();
              } else {
                if (_0x1fa7ab.isExplosive) {
                  _0x1fa7ab.exploded = true;
                  if (_0x1fa7ab.type === _0xca1cdc.gv.landmine) {
                    _0x1c7520(_0x1fa7ab.x, _0x1fa7ab.y, 0x64, 0x5);
                  } else if (_0x1fa7ab.type === _0xca1cdc.gv.tnt) {
                    _0x1c7520(_0x1fa7ab.x, _0x1fa7ab.y, 0x12c, 0xa);
                  } else if (_0x1fa7ab.type === _0xca1cdc.gv.nuke) {
                    _0x1c7520(_0x1fa7ab.x, _0x1fa7ab.y, 0x190, 0x1e);
                  }
                } else {
                  if (_0x1fa7ab.isCannon) {
                    0x0;
                    _0x1fa7ab.angle = _0xca1cdc.Pm(_0xa8c94c.getUint8(_0x457ea4++));
                    _0x98b950(_0x1fa7ab, -Math.cos(_0x1fa7ab.angle), -Math.sin(_0x1fa7ab.angle));
                  } else {
                    if (_0x1fa7ab.type === _0xca1cdc.gv.bullet) {
                      _0x1fa7ab.nx = _0xa8c94c.getUint16(_0x457ea4);
                      _0x457ea4 += 0x2;
                      _0x1fa7ab.ny = _0xa8c94c.getUint16(_0x457ea4);
                      _0x457ea4 += 0x2;
                      _0x1fa7ab.ox = _0x1fa7ab.x;
                      _0x1fa7ab.oy = _0x1fa7ab.y;
                      _0x1fa7ab.T = 0x0;
                    } else {
                      const _0x5bd01f = _0xa8c94c.getUint16(_0x457ea4);
                      _0x457ea4 += 0x2;
                      if (0x1 & _0x5bd01f) {
                        _0x1fa7ab.nx = _0xa8c94c.getUint16(_0x457ea4);
                        _0x457ea4 += 0x2;
                        _0x1fa7ab.ny = _0xa8c94c.getUint16(_0x457ea4);
                        _0x457ea4 += 0x2;
                        _0x1fa7ab.lastInteractionT = 0x1;
                      }
                      if (0x2 & _0x5bd01f) {
                        0x0;
                        _0x1fa7ab.nAngle = _0xca1cdc.Pm(_0xa8c94c.getUint8(_0x457ea4++));
                      }
                      if (0x4 & _0x5bd01f) {
                        const _0x55a168 = _0xa8c94c.getUint8(_0x457ea4++) / 0xff;
                        const _0x9e0f6 = Math.round(0x64 * (_0x55a168 - _0x1fa7ab.nHealth));
                        if (!_0x1fa7ab.isActualPlayer || Math.abs(_0x9e0f6) > 0x2) {
                          const _0x393122 = _0x9e0f6 < 0x0;
                          _0x3f3f7d.push({
                            'text': (_0x393122 ? '' : '+') + _0x9e0f6,
                            'x': _0x1fa7ab.x,
                            'y': _0x1fa7ab.y,
                            't': 0x0,
                            'color': '#fff'
                          });
                        }
                        _0x1fa7ab.nHealth = _0x55a168;
                        _0x1fa7ab.lastInteractionT = 0x1;
                      }
                      if (0x10 & _0x5bd01f) {
                        const _0x2113fd = _0xa8c94c.getUint8(_0x457ea4++);
                        _0x1fa7ab.item = _0xca1cdc.ev[_0x2113fd];
                        if (_0x1fa7ab === _0x466240) {
                          _0xca1cdc.ev[_0x2113fd].el.setActive();
                        }
                      }
                      if (0x20 & _0x5bd01f) {
                        const _0x5e9d1d = _0x5c9f7f();
                        if (_0x5e9d1d) {
                          _0x1fa7ab.chat = _0x5e9d1d;
                          if (_0x4701a5) {
                            const _0x50aa9c = _0x19c005[_0x32a196];
                            if (_0x50aa9c && !_0x50aa9c.isMe) {
                              _0x336d9a("[CLAN] " + _0x50aa9c.playerName + ": " + _0x5e9d1d, undefined, 0x1f40);
                            }
                          }
                          _0x1fa7ab.chatT = 0x0;
                          _0x1fa7ab.chatTDir = 0x1;
                        } else {
                          _0x1fa7ab.chatTDir = -0x1;
                        }
                      }
                      _0x1fa7ab.spawnImmunity = 0x40 & _0x5bd01f;
                      if (0x80 & _0x5bd01f) {
                        _0x1fa7ab.setClan(_0xa8c94c.getUint8(_0x457ea4++));
                        _0x1fa7ab.isClanLeader = _0xa8c94c.getUint8(_0x457ea4++);
                      }
                      if (0x100 & _0x5bd01f) {
                        _0x1fa7ab.skin = _0xca1cdc.WM[_0xa8c94c.getUint8(_0x457ea4++) - 0x1];
                      }
                      _0x1fa7ab.isUnderground = 0x400 & _0x5bd01f;
                      if (0x8 & _0x5bd01f && (_0x1fa7ab.lastInteractionT = 0x1, _0x1fa7ab.hitT = 0x0, _0x1fa7ab.hitObject = false, !_0x1fa7ab.isUnderground)) {
                        for (let _0x3cd94c = 0x0; _0x3cd94c < _0x5a712e.length; _0x3cd94c++) {
                          const _0x14fc84 = _0x5a712e[_0x3cd94c];
                          if (_0x14fc84 !== _0x1fa7ab && (_0x14fc84.isStaticObject || _0x14fc84.skin && _0x14fc84.skin.rewards)) {
                            let _0x4904c5 = _0x14fc84.x - _0x1fa7ab.nx;
                            let _0x38f525 = _0x14fc84.y - _0x1fa7ab.ny;
                            const _0x347c65 = Math.hypot(_0x4904c5, _0x38f525);
                            if (_0x347c65 > 0x0 && _0x347c65 < _0x14fc84.size + 0x3 * _0x1fa7ab.size * _0x1fa7ab.item.range) {
                              _0x4904c5 /= _0x347c65;
                              _0x38f525 /= _0x347c65;
                              if (_0x4904c5 * Math.cos(_0x1fa7ab.nAngle) + _0x38f525 * Math.sin(_0x1fa7ab.nAngle) > 0.5) {
                                _0x98b950(_0x14fc84, _0x4904c5, _0x38f525);
                                _0x1fa7ab.hitObject = true;
                              }
                            }
                          }
                        }
                      }
                      _0x1fa7ab.fucking = 0x800 & _0x5bd01f;
                      _0x1fa7ab.gettingFucked = 0x1000 & _0x5bd01f;
                      _0x1fa7ab.drinkingMilk = 0x2000 & _0x5bd01f;
                      _0x1fa7ab.pooping = 0x4000 & _0x5bd01f;
                      if (0x8000 & _0x5bd01f) {
                        _0x1fa7ab.level = _0xa8c94c.getUint16(_0x457ea4);
                        _0x457ea4 += 0x2;
                      }
                      _0x1fa7ab.ox = _0x1fa7ab.x;
                      _0x1fa7ab.oy = _0x1fa7ab.y;
                      _0x1fa7ab.oAngle = _0x1fa7ab.angle;
                      _0x1fa7ab.oHealth = _0x1fa7ab.health;
                      _0x1fa7ab.T = 0x0;
                    }
                  }
                }
              }
            } else {
              const _0x117477 = _0xa8c94c.getUint8(_0x457ea4++);
              const _0x189637 = _0x3bc312[_0x117477];
              const _0xf64228 = _0xa8c94c.getUint16(_0x457ea4);
              _0x457ea4 += 0x2;
              const _0x578526 = _0xa8c94c.getUint16(_0x457ea4);
              _0x457ea4 += 0x2;
              const _0x196a76 = _0x117477 !== _0xca1cdc.gv.hole ? (0x0, _0xca1cdc.Pm)(_0xa8c94c.getUint8(_0x457ea4++)) : 0x0;
              const _0x2f83d1 = _0xa8c94c.getUint8(_0x457ea4++);
              const _0x286520 = _0x117477 === _0xca1cdc.gv.player;
              const _0x4c452e = _0x189637.startsWith("npc");
              if (_0x286520 || _0x4c452e) {
                const _0x4f94e9 = _0xa8c94c.getUint8(_0x457ea4++) / 0xff;
                _0x1fa7ab = new _0x29780a(_0x32a196, _0xf64228, _0x578526, _0x196a76, _0x4f94e9, _0x2f83d1);
                _0x1fa7ab.nick = _0x5c9f7f();
                if (_0x286520) {
                  _0x1fa7ab.item = _0xca1cdc.ev[_0xa8c94c.getUint8(_0x457ea4++)];
                  _0x1fa7ab.skin = _0xca1cdc.WM[_0xa8c94c.getUint8(_0x457ea4++) - 0x1];
                  _0x1fa7ab.color = _0xca1cdc.uW[_0xa8c94c.getUint8(_0x457ea4++)];
                  _0x1fa7ab.chat = _0x5c9f7f();
                  _0x1fa7ab.chatT = 0x1;
                  _0x1fa7ab.chatTDir = 0x1;
                  _0x1fa7ab.spawnImmunity = _0xa8c94c.getUint8(_0x457ea4++);
                  _0x1fa7ab.setClan(_0xa8c94c.getUint8(_0x457ea4++));
                  _0x1fa7ab.isClanLeader = _0xa8c94c.getUint8(_0x457ea4++);
                  if (_0x32a196 === _0x4f4a25) {
                    _0x466240 = _0x1fa7ab;
                    _0x1fa7ab.item.el.setActive();
                  }
                  _0x1fa7ab.username = _0x5c9f7f();
                  _0x1fa7ab.cleanedUsername = _0x28f576(_0x1fa7ab.username);
                  const _0x58afbd = _0xa8c94c.getUint8(_0x457ea4++);
                  _0x1fa7ab.fucking = !!(0x2 & _0x58afbd);
                  _0x1fa7ab.gettingFucked = !!(0x1 & _0x58afbd);
                  _0x1fa7ab.drinkingMilk = !!(0x4 & _0x58afbd);
                  _0x1fa7ab.pooping = !!(0x8 & _0x58afbd);
                  _0x1fa7ab.level = _0xa8c94c.getUint16(_0x457ea4);
                  _0x457ea4 += 0x2;
                  if (_0x1fa7ab.skin.inv) {
                    _0x1fa7ab.lastInteractionT = 0x0;
                    _0x1fa7ab.interactionAlpha = 0x0;
                  }
                  if (_0x19c005[_0x32a196]) {
                    _0x19c005[_0x32a196].setPlayer(_0x1fa7ab);
                    _0x19c005[_0x32a196].updatePlayerName(_0x1fa7ab.nick);
                  }
                  _0x866ea1.push(_0x1fa7ab);
                }
                _0x1fa7ab.isActualPlayer = _0x286520;
              } else {
                if (_0x117477 === _0xca1cdc.gv.hole) {
                  _0x1fa7ab = new _0x185422(_0x32a196, _0xf64228, _0x578526, _0x2f83d1);
                  _0x3a5abd.push(_0x1fa7ab);
                } else {
                  _0x1fa7ab = _0x117477 === _0xca1cdc.gv.bullet ? new _0x4f973a(_0x32a196, _0x117477, _0xf64228, _0x578526, _0x2f83d1, _0x196a76) : new _0x4a9c21(_0x32a196, _0x117477, _0xf64228, _0x578526, _0x2f83d1, _0x196a76);
                }
                if (_0x1fa7ab.isDisplay) {
                  _0x1fa7ab.displayColorId = _0xa8c94c.getUint8(_0x457ea4++);
                  _0x1fa7ab.displayColor = _0xca1cdc.zb[_0x1fa7ab.displayColorId];
                  _0x1fa7ab.displayText = _0x5c9f7f();
                }
              }
              _0x1fa7ab.origType = _0x117477;
              _0x5a712e.push(_0x1fa7ab);
              _0x4cf941[_0x32a196] = _0x1fa7ab;
            }
          }
          const _0x39970b = _0xa8c94c.getUint16(_0x457ea4);
          _0x457ea4 += 0x2;
          for (let _0x43889e = 0x0; _0x43889e < _0x39970b; _0x43889e++) {
            const _0x3c4dfd = _0xa8c94c.getUint32(_0x457ea4);
            _0x457ea4 += 0x4;
            if (_0x19c005[_0x3c4dfd]) {
              _0x19c005[_0x3c4dfd].setPlayer(null);
            }
            if (_0xe200d0 && _0x3c4dfd === _0xe200d0.id) {
              _0xe200d0 = null;
            }
            const _0x1cfbf3 = _0x4cf941[_0x3c4dfd];
            _0x5302c3(_0x1cfbf3);
            if (_0x1cfbf3.isActualPlayer) {
              let _0x5bbe3f = _0x866ea1.indexOf(_0x1cfbf3);
              if (_0x5bbe3f > -0x1) {
                _0x866ea1.splice(_0x5bbe3f, 0x1);
              }
            }
            if (_0x1cfbf3.isHole) {
              const _0x51219f = _0x3a5abd.indexOf(_0x1cfbf3);
              if (_0x51219f > -0x1) {
                _0x3a5abd.splice(_0x51219f, 0x1);
              }
            }
            delete _0x4cf941[_0x3c4dfd];
          }
          const _0x24cc1b = _0xa8c94c.getUint8(_0x457ea4++);
          if (_0x24cc1b > 0x0) {
            if (0x1 & _0x24cc1b) {
              _0x475a45 = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            if (0x2 & _0x24cc1b) {
              _0x5cb651 = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            if (0x4 & _0x24cc1b) {
              _0x505bb2 = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            if (0x8 & _0x24cc1b) {
              _0x4e3cab = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            _0x158e95();
          }
          _0x523580 = _0xa8c94c.getUint16(_0x457ea4);
          _0x457ea4 += 0x2;
          const _0x5a9255 = _0xa8c94c.getUint16(_0x457ea4);
          _0x457ea4 += 0x2;
          _0x9a0116.setAttribute("stroke", _0x523580 + " " + " human" + (0x1 === _0x523580 ? '' : 's') + ", " + (_0x5a9255 + " " + "user" + (0x1 === _0x5a9255 ? '' : 's')));
          const _0x43b817 = Math.min(0xa, _0x523580);
          if (_0xab1279) {
            const _0x1dfc1b = _0xa8c94c.getUint8(_0x457ea4++);
            const _0x373250 = _0x1dfc1b >> 0x4;
            const _0x32c1a8 = 0xf & _0x1dfc1b;
            const _0x11f36d = _0xa8c94c.getUint8(_0x457ea4++);
            for (let _0x136393 = 0x0; _0x136393 < _0x32c1a8; _0x136393++) {
              const _0x507feb = _0xa8c94c.getUint8(_0x457ea4++);
              _0x478b1f[_0x507feb].score = _0xa8c94c.getUint32(_0x457ea4);
              _0x457ea4 += 0x4;
            }
            const _0x54ec02 = [];
            for (let _0x290cb3 = 0x0; _0x290cb3 < _0x11f36d; _0x290cb3++) {
              _0x54ec02.push(_0xa8c94c.getUint8(_0x457ea4++));
            }
            _0x54ec02.sort(function (_0x45c999, _0x576583) {
              return _0x576583 - _0x45c999;
            });
            for (let _0x2b8de4 = 0x0; _0x2b8de4 < _0x11f36d; _0x2b8de4++) {
              const _0x252b3e = _0x54ec02[_0x2b8de4];
              _0x478b1f[_0x252b3e].el.remove();
              _0x478b1f.splice(_0x252b3e, 0x1);
            }
            for (let _0x431c5f = 0x0; _0x431c5f < _0x373250; _0x431c5f++) {
              _0x2572ec();
            }
            _0x478b1f.sort(function (_0x29820c, _0x26d1ec) {
              return _0x26d1ec.score - _0x29820c.score;
            });
          } else {
            _0x478b1f.length = 0x0;
            for (let _0x47d418 = 0x0; _0x47d418 < _0x43b817; _0x47d418++) {
              _0x2572ec();
            }
            _0xab1279 = true;
          }
          _0x46941c();
          _0x4adb91(_0xa8c94c.getUint16(_0x457ea4));
          _0x457ea4 += 0x2;
          const _0x4b7c7b = _0xa8c94c.getUint16(_0x457ea4);
          _0x457ea4 += 0x2;
          if (_0x4b7c7b > 0x0) {
            _0x4b0980 += _0x4b7c7b;
            for (let _0x23b1a0 = 0x0; _0x23b1a0 < _0x4b7c7b; _0x23b1a0++) {
              const _0x4f6182 = _0x5c9f7f();
              if (_0x4ecdc6) {
                _0x336d9a("You killed " + (_0x4f6182 || "an unnamed entity"));
              }
            }
            _0x3db442();
          }
          if (_0xa8c94c.byteLength - _0x457ea4 == 0x4) {
            _0x163e1a = _0xa8c94c.getUint32(_0x457ea4);
            _0x457ea4 += 0x4;
            _0x4af1fa();
          }
          if (_0x466240) {
            _0x2c3d2b = Math.max(_0x4e3cab, _0x2c3d2b);
          }
          for (let _0x4dd742 = 0x0; _0x4dd742 < _0x866ea1.length; _0x4dd742++) {
            const _0x29d3be = _0x866ea1[_0x4dd742];
            _0x29d3be.empBlink = false;
            if (_0x29d3be === _0x466240 || "EMP" === _0x29d3be.getSkinName()) {
              for (let _0x5a2ad9 = 0x0; _0x5a2ad9 < _0x5a712e.length; _0x5a2ad9++) {
                const _0x53a8e5 = _0x5a712e[_0x5a2ad9];
                if (_0x53a8e5.isCannon && Math.hypot(_0x29d3be.x - _0x53a8e5.x, _0x29d3be.y - _0x53a8e5.y) < 0x258) {
                  _0x29d3be.empBlink = true;
                }
              }
            }
          }
      }
    }
    const _0x3a5abd = [];
    class _0x185422 {
      constructor(_0x3d5183, _0x52a571, _0x3bd3c4, _0x5d5548) {
        this.id = _0x3d5183;
        this.x = _0x52a571;
        this.y = _0x3bd3c4;
        this.size = _0x5d5548;
        this.isHole = true;
      }
    }
    function _0x98b950(_0x4b3401, _0x10c8cd, _0x36b5e8) {
      _0x4b3401.offsetX += 0xe * _0x10c8cd;
      _0x4b3401.offsetY += 0xe * _0x36b5e8;
      let _0x2ba063 = Math.hypot(_0x4b3401.offsetX, _0x4b3401.offsetY);
      if (_0x2ba063 > 0x1e) {
        _0x2ba063 = 0x1e / _0x2ba063;
        _0x4b3401.offsetX *= _0x2ba063;
        _0x4b3401.offsetY *= _0x2ba063;
      }
    }
    function _0x59fedb() {
      _0x448f80(_0x140818);
    }
    function _0x448f80(_0x2ebf13) {
      _0x2ebf13.classList.remove("show");
      setTimeout(function () {
        _0x2ebf13.remove();
      }, 0x1f4);
    }
    const _0x3ea805 = document.querySelector(".infos");
    function _0x413e33(_0x4aca8b, _0x393654) {
      _0x336d9a(_0x4aca8b + ": " + (_0x393654 ? 'ON' : "OFF"));
    }
    function _0x336d9a(_0x65bc8a, _0x25d86b = true, _0x5117ef = 0xbb8) {
      const _0x339da3 = document.createElement('div');
      _0x339da3.className = "info";
      _0x339da3.innerHTML = "<span></span>";
      _0x5a0152(_0x339da3.children[0x0], _0x65bc8a);
      _0x339da3.dispose = function () {
        _0x448f80(_0x339da3);
      };
      if (_0x25d86b) {
        setTimeout(function () {
          _0x339da3.dispose();
        }, _0x5117ef);
      }
      setTimeout(function () {
        _0x339da3.classList.add('show');
      }, 0x14);
      _0x3ea805.prepend(_0x339da3);
      return _0x339da3;
    }
    let _0x288a71;
    let _0x726b9e;
    let _0x2c3d2b = 0x0;
    const _0x45985b = document.querySelector(".my-player");
    const _0x5bf0a6 = document.querySelector(".max-gold");
    const _0x555d09 = document.querySelector(".time-alive");
    const _0x1c6976 = document.querySelector(".total-kills");
    function _0x4af1fa() {
      if (_0x466240) {
        _0x20d768.style.display = '';
        _0x3a0767(_0x20d768, _0x466240.nx, _0x466240.ny);
      }
      _0x5a0152(_0x555d09, _0x52877d(Date.now() - _0x467bbf));
      _0x5a0152(_0x5bf0a6, _0x2c3d2b.toLocaleString("en-US"));
      _0x5a0152(_0x1c6976, _0x4b0980.toLocaleString("en-US"));
      _0x2ce46a.parentNode.style.display = "none";
      _0x17eee1.style.display = '';
      if (_0x726b9e) {
        _0x726b9e.dispose();
      }
      _0x726b9e = _0x1fed73(_0x45985b);
      _0x726b9e.p = new _0x29780a(-0x1, 0x0, 0x0, _0x466240.item.isWeapon && !_0x466240.item.isProj ? -Math.PI / 0x4 : 0x0, 0x1, 0x1e, _0x466240.item, _0x466240.color);
      _0x726b9e.scale = 0.7;
      _0x726b9e.userRender = function (_0x58afea) {
        _0x58afea.translate(-0x2d, 0x0);
        _0x726b9e.p.draw(_0x58afea);
      };
      _0x726b9e.resize();
      _0x1aa716();
      _0x55f510();
      _0x466240 = null;
      _0x4f4a25 = null;
      _0x334497();
      _0x24a24c();
      _0x4b90d9();
      _0x1f239c();
      _0x14bb9d();
      _0x331687();
      _0x21c0f3();
    }
    let _0x46e264 = Date.now();
    function _0x21c0f3() {
      console.log("ad refresh");
      _0x46e264 = Date.now();
      _0x16260c.style.display = '';
      try {
        aiptag.cmd.display.push(function () {
          aipDisplayTag.display("poopoo-pro_970x250");
        });
        aiptag.cmd.display.push(function () {
          aipDisplayTag.display('poopoo-pro_300x600');
        });
        aiptag.cmd.display.push(function () {
          aipDisplayTag.display('poopoo-pro_300x600_2');
        });
      } catch (_0x3e04c0) {
        console.log("Error refreshing ad.");
      }
    }
    function _0x1f239c() {
      _0x1c0a62.classList.remove("show");
      _0x14efb7.classList.remove("active");
      _0x43adfa.blur();
      const _0x178a58 = _0x311e82.querySelector(".gift-btn.active");
      if (_0x178a58) {
        _0x178a58.classList.remove('active');
      }
      _0x5e18af();
    }
    setInterval(function () {
      if ('' === _0x16260c.style.display && Date.now() - _0x46e264 > 0x7530) {
        _0x21c0f3();
      }
    }, 0x2710);
    let _0x1a3047 = null;
    function _0x226ba6(_0x2855c6) {
      _0x55f510();
      if (true !== _0x2855c6) {
        console.log("Disconnected.");
      }
      _0x44f2f4();
      _0xe25b7c = false;
      _0x5a712e = [];
      _0x4cf941 = {};
      _0x3a5abd.length = 0x0;
      _0x866ea1.length = 0x0;
      _0x4f4a25 = null;
      _0x466240 = null;
      _0x594644.length = 0x0;
      _0xe2d355.innerHTML = '';
      _0x1ace53(false);
      _0x1f239c();
      _0x4b90d9();
      _0x24a24c();
      for (let _0x1e6707 = 0x0; _0x1e6707 < _0x5691f4.length; _0x1e6707++) {
        _0x5691f4[_0x1e6707].setOwned(false);
      }
      _0x20d768.style.display = "none";
      _0x59fedb();
      if (_0x140eae) {
        if ("none" === _0x2fc9ad.style.display) {
          _0x2f2bf3.classList.add("show");
          if (null !== _0x1a3047) {
            clearTimeout(_0x1a3047);
          }
          _0x1a3047 = setTimeout(function () {
            _0x2f2bf3.classList.remove("show");
            _0x2fc9ad.style.display = '';
            _0x21c0f3();
            _0x17eee1.style.display = _0x1e6d5b.style.display = 'none';
            _0x2fc9ad.appendChild(_0x3ea805);
            _0x2fc9ad.appendChild(_0x4d5222);
            _0x5dc647.appendChild(_0x2e837c);
            _0x46310f(_0x419dc9.url);
          }, 0x1f4);
        } else {
          _0x2f2bf3.classList.remove("show");
          _0x46310f(_0x419dc9.url);
        }
      }
    }
    function _0x3f5b36(_0x5c8810, _0x43ae92) {
      _0x3c4d79(_0x5c8810, 0.8 * _0x43ae92, 0.5, 0xa, 1.5);
      _0x5c8810.closePath();
    }
    function _0x230d7c(_0x43ee70, _0x888608 = 0x1, _0x3e4b6d = 0x8, _0x515fa3 = 0x1) {
      _0x43ee70.beginPath();
      for (let _0x2a0e1a = 0x0; _0x2a0e1a < _0x3e4b6d; _0x2a0e1a++) {
        const _0x4ce084 = 0x2 * Math.PI * _0x2a0e1a / _0x3e4b6d;
        const _0x1eed97 = 0.1 * Math.abs(Math.cos(_0x4ce084) + _0x2a0e1a / _0x3e4b6d) * _0x515fa3;
        _0x43ee70.lineTo(Math.cos(_0x4ce084) * _0x888608 + _0x1eed97, Math.sin(_0x4ce084) * _0x888608 + _0x1eed97);
      }
      _0x43ee70.closePath();
    }
    function _0x3c4d79(_0xbd8cbd, _0x39e250 = 0.9, _0x1ad23f = 0.5, _0x52e2f9 = 0x7, _0x3dc4fb = 1.5) {
      _0xbd8cbd.beginPath();
      _0xbd8cbd.moveTo(_0x39e250, 0x0);
      for (let _0x3bb5cb = 0x1; _0x3bb5cb <= _0x52e2f9; _0x3bb5cb++) {
        const _0x4f8a9e = 0x2 * Math.PI * (_0x3bb5cb - _0x1ad23f) / _0x52e2f9;
        const _0x9444fd = 0x2 * Math.PI * _0x3bb5cb / _0x52e2f9;
        _0xbd8cbd.quadraticCurveTo(Math.cos(_0x4f8a9e) * _0x39e250 * _0x3dc4fb, Math.sin(_0x4f8a9e) * _0x39e250 * _0x3dc4fb, Math.cos(_0x9444fd) * _0x39e250, Math.sin(_0x9444fd) * _0x39e250);
      }
    }
    function _0x4b3b38(_0x3c818c, _0x97c1cd, _0x4e9537, _0x20b5ca) {
      _0x3c818c.moveTo(_0x97c1cd + _0x20b5ca, _0x4e9537);
      _0x3c818c.arc(_0x97c1cd, _0x4e9537, _0x20b5ca, 0x0, 0x2 * Math.PI);
    }
    function _0x42e742(_0x3b9fd3, _0x527438) {
      var _0x54f7a8 = 0x2 * Math.PI;
      var _0xd1075 = (_0x527438 - _0x3b9fd3) % _0x54f7a8;
      return 0x2 * _0xd1075 % _0x54f7a8 - _0xd1075;
    }
    function _0x5ea9f7(_0x3a025c, _0x57987a) {
      if (_0x3a025c.isDead) {
        _0x3a025c.dieT += _0x588741 / 0x96;
        const _0x9c36f3 = Math.min(0x1, _0x3a025c.dieT);
        const _0x4dd42e = 0x1 + 0.5 * _0x9c36f3;
        _0x57987a.scale(_0x4dd42e, _0x4dd42e);
        _0x57987a.globalAlpha = 0x1 - _0x9c36f3;
      }
    }
    class _0x4f973a {
      constructor(_0x57eab7, _0x4b89fa, _0x4c5003, _0x82719a, _0x3d7d63, _0x3e4528) {
        this.id = _0x57eab7;
        this.type = _0x4b89fa;
        this.x = _0x4c5003;
        this.y = _0x82719a;
        this.ox = _0x4c5003;
        this.oy = _0x82719a;
        this.nx = _0x4c5003;
        this.ny = _0x82719a;
        this.angle = _0x3e4528;
        this.oAngle = _0x3e4528;
        this.nAngle = _0x3e4528;
        this.size = _0x3d7d63;
        this.T = 0x0;
      }
      ["update"]() {
        this.T += _0x588741 / 0x64;
        this.T = Math.min(0x1, this.T);
        this.x = this.ox + (this.nx - this.ox) * this.T;
        this.y = this.oy + (this.ny - this.oy) * this.T;
        this.angle = this.oAngle + _0x42e742(this.oAngle, this.nAngle) * this.T;
      }
      ["draw"](_0x1fa4a5) {
        _0x1fa4a5.save();
        _0x1fa4a5.translate(this.x, this.y);
        _0x5ea9f7(this, _0x1fa4a5);
        _0x1fa4a5.lineWidth = 0x4;
        _0x1fa4a5.beginPath();
        _0x1fa4a5.arc(0x0, 0x0, this.size, 0x0, 0x2 * Math.PI);
        _0x1fa4a5.fillStyle = '#8989ad';
        _0x1fa4a5.fill();
        _0x1fa4a5.strokeStyle = "#35354d";
        _0x1fa4a5.stroke();
        _0x1fa4a5.restore();
      }
    }
    const _0x526951 = {};
    class _0x4a9c21 {
      constructor(_0x3989dd, _0x31974c, _0x407f12, _0x5c1792, _0x25219b, _0x1c0e95) {
        this.id = _0x3989dd;
        this.type = _0x31974c;
        this.x = this.nx = _0x407f12;
        this.y = this.ny = _0x5c1792;
        this.size = _0x25219b;
        this.angle = _0x1c0e95;
        this.isStaticObject = true;
        this.offsetX = 0x0;
        this.offsetY = 0x0;
        this.iOffsetX = 0x0;
        this.iOffsetY = 0x0;
        this.lightT = 0x0;
        this.displayColorId = 0x0;
        this.autoRotate = this.type === _0xca1cdc.gv.windmill || this.type === _0xca1cdc.gv.windmill1 || this.type === _0xca1cdc.gv.windmill2 || this.type === _0xca1cdc.gv.spike1;
        this.isCannon = [_0xca1cdc.gv.cannon, _0xca1cdc.gv.cannon1, _0xca1cdc.gv.cannon2].indexOf(this.type) > -0x1;
        this.isExplosive = [_0xca1cdc.gv.landmine, _0xca1cdc.gv.tnt, _0xca1cdc.gv.nuke].indexOf(this.type) > -0x1;
        this.isDisplay = this.type === _0xca1cdc.gv.display;
        this.displayText = '';
      }
      ['update']() {
        _0xd341b4(this);
      }
      ["draw"](_0x307fbb, _0x64358c = true) {
        _0x307fbb.save();
        _0x307fbb.translate(this.x + this.iOffsetX, this.y + this.iOffsetY);
        _0x5ea9f7(this, _0x307fbb);
        _0x307fbb.rotate(this.angle + (this.autoRotate ? _0x199cff : 0x0));
        const _0x287894 = _0x64358c && this.y < _0x10006c.snow;
        const _0x5d8014 = _0x64358c && this.y > _0x10006c.desert;
        _0x307fbb.globalAlpha *= this.type === _0xca1cdc.gv.trap ? 0.5 : 0x1;
        _0x21f18d(_0x307fbb, this.type, this.size, _0x287894, _0x5d8014, undefined, this.displayText, this.displayColor);
        if (_0x58e927 === this && !this.isDead) {
          const _0x3e6430 = 0x1e * Math.abs(Math.sin(Date.now() / 0x12c)) + 0x14 + 0x2 * this.size;
          _0x307fbb.beginPath();
          _0x307fbb.rect(-_0x3e6430 / 0x2, -_0x3e6430 / 0x2, _0x3e6430, _0x3e6430);
          _0x307fbb.lineWidth = 0x4;
          _0x307fbb.strokeStyle = "#000";
          _0x307fbb.stroke();
          _0x307fbb.lineWidth = 0x2;
          _0x307fbb.strokeStyle = "#ff5555";
          _0x307fbb.stroke();
        }
        _0x307fbb.restore();
      }
    }
    const _0xff52b = [];
    function _0x21f18d(_0x32bacf, _0x18952d, _0x4aa9cd, _0x4f5559, _0x4371cc, _0x491cf1, _0x2c0a2a, _0x47ed8c = _0xca1cdc.zb[0x0]) {
      _0x25bff0(_0x32bacf, _0x18952d + '_' + _0x4aa9cd + '_' + _0x4f5559 + '_' + _0x4371cc, _0x4aa9cd, function (_0xbbdbf) {
        _0x326317(_0xbbdbf, _0x18952d, _0x4aa9cd, 0x4, false, _0x4f5559, _0x4371cc);
      }, _0x491cf1);
      if (_0x18952d === _0xca1cdc.gv.display) {
        const _0x4e40f4 = 1.1 * _0x4aa9cd;
        _0x32bacf.save();
        _0x32bacf.beginPath();
        _0x32bacf.rect(-_0x4aa9cd, -_0x4aa9cd, 0x2 * _0x4aa9cd, 0x2 * _0x4aa9cd);
        _0x32bacf.clip();
        const _0x3fe2e1 = _0x100ad8(_0x32bacf, (_0x2c0a2a || "INSERT TEXT") + " >> ", "bolder " + _0x4e40f4 + "px monospace", _0x4e40f4, "LED" + _0x47ed8c);
        let _0x84d61c = -_0x4aa9cd - _0x3fe2e1.fw - Date.now() / 0xa % _0x3fe2e1.fw;
        for (; _0x84d61c < _0x4e40f4;) {
          _0x32bacf.drawImage(_0x3fe2e1, _0x84d61c, -_0x4e40f4 / 0x2, _0x3fe2e1.fw, _0x3fe2e1.fh);
          _0x84d61c += _0x3fe2e1.fw;
        }
        _0x32bacf.restore();
      }
    }
    function _0x100ad8(_0x40aa61, _0x370e9e, _0x215c82, _0x57c30d, _0x25042c, _0x155051 = false, _0x784bc = 0x4, _0x5c4fbd) {
      const _0x17c696 = _0x370e9e + '_' + _0x215c82 + '_' + _0x25042c;
      if (!_0x526951[_0x17c696]) {
        const _0x24c855 = document.createElement('canvas');
        _0x24c855.ctx = _0x24c855.getContext('2d');
        _0x526951[_0x17c696] = _0x24c855;
        _0x24c855.lastClickTime = 0x0;
      }
      const _0xf9b308 = _0x526951[_0x17c696];
      _0xf9b308.used = true;
      const _0x2592e1 = _0x25042c.startsWith('LED');
      if (_0x2592e1) {
        _0x25042c = _0x25042c.slice(0x3);
      }
      if (undefined === _0xf9b308.fw) {
        _0xf9b308.ctx.font = _0x215c82;
        _0xf9b308.fw = _0xf9b308.ctx.measureText(_0x370e9e).width + _0x784bc;
        _0xf9b308.fh = _0x57c30d + _0x784bc;
      }
      const _0x14dcbe = window.devicePixelRatio * _0x407929 * 1.3;
      const _0x29f5e0 = Math.round(_0x14dcbe * _0xf9b308.fw);
      if (_0xf9b308.s !== _0x29f5e0 && (_0xf9b308.width = _0xf9b308.fw * _0x14dcbe, _0xf9b308.height = _0xf9b308.fh * _0x14dcbe, _0xf9b308.s = _0x29f5e0, _0xf9b308.ctx.save(), _0xf9b308.ctx.scale(_0x14dcbe, _0x14dcbe), _0xf9b308.ctx.textAlign = "left", _0xf9b308.ctx.textBaseline = "top", _0xf9b308.ctx.font = _0x215c82, _0xf9b308.ctx.fillStyle = _0x2592e1 ? 'red' : _0x25042c, _0x2592e1 || (_0xf9b308.ctx.lineWidth = _0x784bc || 0x4, _0xf9b308.ctx.strokeStyle = "#35354d", _0xf9b308.ctx.strokeText(_0x370e9e, 0x2, 0x2)), _0xf9b308.ctx.fillText(_0x370e9e, 0x2, 0x2), _0xf9b308.ctx.restore(), _0x2592e1)) {
        const _0x271a19 = _0xf9b308.ctx.getImageData(0x0, 0x0, _0xf9b308.width, _0xf9b308.height);
        _0xf9b308.ctx.clearRect(0x0, 0x0, _0xf9b308.width, _0xf9b308.height);
        const _0x5742eb = _0xf9b308.width / _0xf9b308.fw;
        const _0x217073 = 0x4 * _0x5742eb;
        const _0x342c48 = Math.round(_0xf9b308.width / _0x217073);
        const _0x5a6f44 = Math.round(_0xf9b308.height / _0x217073);
        const _0x28320d = [];
        for (let _0x30c483 = 0x0; _0x30c483 <= _0x5a6f44; _0x30c483++) {
          _0x28320d[_0x30c483] = Array(_0x342c48).fill(0x0);
        }
        for (let _0x56ba7b = 0x0; _0x56ba7b < _0x271a19.data.length; _0x56ba7b += 0x4) {
          const _0x5e8cfd = _0x56ba7b / 0x4;
          const _0xa9e4d5 = Math.floor(_0x5e8cfd % _0x271a19.width);
          const _0x22ed6b = Math.floor((_0x5e8cfd - _0xa9e4d5) / _0x271a19.width);
          const _0x58b84d = Math.floor(_0x22ed6b / _0x217073);
          const _0x5e5a42 = Math.floor(_0xa9e4d5 / _0x217073);
          _0x28320d[_0x58b84d][_0x5e5a42] = ((0xff === _0x271a19.data[_0x56ba7b] ? 0x1 : 0x0) + _0x28320d[_0x58b84d][_0x5e5a42]) / 0x2;
        }
        const _0x46c16f = 1.9 * _0x5742eb;
        _0xf9b308.ctx.beginPath();
        for (let _0x152987 = 0x0; _0x152987 < _0x5a6f44; _0x152987++) {
          for (let _0x7b5eb6 = 0x0; _0x7b5eb6 < _0x342c48; _0x7b5eb6++) {
            if (_0x28320d[_0x152987][_0x7b5eb6] > 0.5) {
              const _0x3d6f39 = _0x7b5eb6 * _0x217073;
              const _0x35b360 = _0x152987 * _0x217073;
              _0xf9b308.ctx.moveTo(_0x3d6f39, _0x35b360);
              _0xf9b308.ctx.arc(_0x3d6f39, _0x35b360, _0x46c16f, 0x0, 0x2 * Math.PI);
            }
          }
        }
        _0xf9b308.ctx.fillStyle = _0x25042c;
        _0xf9b308.ctx.fill();
      }
      if (_0x2592e1) {
        return _0xf9b308;
      }
      _0x40aa61.save();
      if (!_0x155051) {
        _0x40aa61.translate(-_0xf9b308.fw / 0x2, -_0xf9b308.fh);
      }
      if (_0x5c4fbd) {
        const _0x38c02c = _0x40aa61.getTransform();
        const _0x335054 = Math.hypot(_0x38c02c.a, _0x38c02c.b);
        const _0x6e2f9 = Math.hypot(_0x38c02c.c, _0x38c02c.d);
        if (_0x4827f5 > _0x38c02c.e && _0xf1a3fe > _0x38c02c.f && _0x4827f5 < _0x38c02c.e + _0xf9b308.fw * _0x335054 && _0xf1a3fe < _0x38c02c.f + _0xf9b308.fh * _0x6e2f9) {
          _0x8d9d8d.style.cursor = "pointer";
          _0x326599.style.display = '';
          _0x326599.style.left = _0x4827f5 / window.innerWidth / window.devicePixelRatio * 0x64 + '%';
          _0x326599.style.top = _0xf1a3fe / window.innerHeight / window.devicePixelRatio * 0x64 + '%';
          _0x40aa61.save();
          _0x40aa61.fillStyle = _0x25042c;
          _0x40aa61.globalAlpha = 0.6;
          _0x40aa61.fillRect(-0x3, -0x3, _0xf9b308.fw + 0x6, _0xf9b308.fh + 0x6);
          _0x40aa61.restore();
          if (_0x4ed29c && _0x4e1609 - _0xf9b308.lastClickTime > 0x3e8) {
            _0xf9b308.lastClickTime = _0x4e1609;
            _0x5c4fbd();
            _0x4ed29c = false;
          }
        }
      }
      _0x40aa61.drawImage(_0xf9b308, 0x0, 0x0, _0xf9b308.fw, _0xf9b308.fh);
      _0x40aa61.restore();
    }
    function _0x25bff0(_0x482aee, _0x5d524e, _0x11c244, _0x86a69a, _0x589a6d = 0x1) {
      if (!_0x526951[_0x5d524e]) {
        const _0x2dbcb3 = document.createElement('canvas');
        _0x2dbcb3.ctx = _0x2dbcb3.getContext('2d');
        _0x526951[_0x5d524e] = _0x2dbcb3;
      }
      const _0x28ea49 = _0x526951[_0x5d524e];
      _0x28ea49.used = true;
      const _0x3c629c = 3.4 * _0x11c244 * _0x589a6d;
      const _0x4a92ae = Math.round(window.devicePixelRatio * _0x3c629c * _0x407929);
      if (_0x4a92ae <= 0x0) {
        return;
      }
      const _0x127e8e = _0x4a92ae / 0x2;
      if (_0x28ea49.s !== _0x4a92ae) {
        _0x28ea49.width = _0x28ea49.height = _0x4a92ae;
        _0x28ea49.s = _0x4a92ae;
        _0x28ea49.ctx.save();
        _0x28ea49.ctx.translate(_0x127e8e, _0x127e8e);
        const _0x5a9075 = _0x4a92ae / _0x3c629c;
        _0x28ea49.ctx.scale(_0x5a9075, _0x5a9075);
        _0x28ea49.ctx.lineWidth = 0x4;
        _0x28ea49.ctx.strokeStyle = "#35354d";
        _0x28ea49.ctx.lineCap = _0x28ea49.ctx.lineJoin = "round";
        _0x86a69a(_0x28ea49.ctx);
        _0x28ea49.ctx.restore();
      }
      _0x482aee.drawImage(_0x28ea49, -_0x3c629c / 0x2, -_0x3c629c / 0x2, _0x3c629c, _0x3c629c);
    }
    function _0x5302c3(_0x31ea64) {
      _0x31ea64.isDead = true;
      _0x31ea64.dieT = 0x0;
      _0x31ea64.id = -0x1;
    }
    function _0x47efee(_0x3956bc, _0x3f9ebb = "#b64168", _0x519b79 = "#9cbc4d") {
      _0x3956bc.beginPath();
      _0x3956bc.arc(0xf, 0x0, 0x14, 0x0, 0x2 * Math.PI);
      _0x3956bc.fillStyle = _0x3f9ebb;
      _0x3956bc.fill();
      _0x3956bc.stroke();
      _0x3956bc.beginPath();
      _0x3956bc.moveTo(0x18, 0xa);
      _0x3956bc.arc(0x18, 0xa, 0xf, -Math.PI / 0x4, Math.PI / 0x4);
      _0x3956bc.closePath();
      _0x3956bc.fillStyle = _0x519b79;
      _0x3956bc.fill();
      _0x3956bc.stroke();
    }
    function _0x326317(_0x5c839f, _0x3ec75c, _0x3f5ac0 = 0x64, _0x5639d5 = 0x4, _0x7e9ff7, _0x8c3061, _0x4eef07, _0x79f472) {
      function _0x21f4e4() {
        _0x5c839f.fillStyle = _0x3ec75c.startsWith("Gold") ? "#efc04b" : _0x3ec75c.startsWith("Diamond") ? '#2cedff' : '#8989ad';
      }
      _0x5c839f.save();
      _0x5c839f.scale(_0x3f5ac0, _0x3f5ac0);
      _0x5c839f.lineWidth = _0x5639d5 / _0x3f5ac0;
      _0x5c839f.strokeStyle = '#35354d';
      _0x5c839f.lineJoin = _0x5c839f.lineCap = "round";
      if ("string" == typeof _0x3ec75c) {
        _0x5c839f.save();
        _0x5c839f.scale(0.03333333333333333, 0.03333333333333333);
        _0x5c839f.lineWidth /= 0.03333333333333333;
        if ("Apple" === _0x3ec75c) {
          _0x47efee(_0x5c839f);
        } else {
          if ("Golden Apple" === _0x3ec75c) {
            _0x47efee(_0x5c839f, "#efc04b", '#c99c2c');
          } else {
            if ("Cookie" === _0x3ec75c) {
              _0x5c839f.beginPath();
              _0x5c839f.arc(0xf, 0x0, 0x14, 0x0, 0x2 * Math.PI);
              _0x5c839f.fillStyle = "#e7c587";
              _0x5c839f.fill();
              _0x5c839f.stroke();
              _0x5c839f.beginPath();
              _0x4b3b38(_0x5c839f, 0x6, 0x0, 0x4);
              _0x4b3b38(_0x5c839f, 0x18, 0x0, 0x4);
              _0x4b3b38(_0x5c839f, 0xf, -0x9, 0x4);
              _0x4b3b38(_0x5c839f, 0xf, 0x9, 0x4);
              _0x5c839f.fillStyle = "rgba(0,0,0,0.2)";
              _0x5c839f.fill();
            } else {
              if (_0x3ec75c.endsWith('Sword')) {
                _0x5c839f.beginPath();
                _0x5c839f.rect(-0x6, -0x20, 0xc, 0x44);
                _0x5c839f.fillStyle = "#986c2b";
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x21f4e4();
                _0x5c839f.beginPath();
                _0x5c839f.moveTo(-0xa, 0x2a);
                _0x5c839f.lineTo(-0xa, 0x5a);
                _0x5c839f.lineTo(0x0, 0x69);
                _0x5c839f.lineTo(0xa, 0x5a);
                _0x5c839f.lineTo(0xa, 0x2a);
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x5c839f.beginPath();
                _0x5c839f.rect(-0x11, 0x20, 0x22, 0xa);
                _0x5c839f.fill();
                _0x5c839f.stroke();
              } else {
                if (_0x3ec75c.endsWith("Axe")) {
                  _0x5c839f.beginPath();
                  _0x5c839f.rect(-0x6, -0x20, 0xc, 0x5e);
                  _0x5c839f.fillStyle = "#986c2b";
                  _0x5c839f.fill();
                  _0x5c839f.stroke();
                  _0x5c839f.beginPath();
                  _0x5c839f.rect(-0xa, 0x20, 0x23, 0x19);
                  _0x21f4e4();
                  _0x5c839f.fill();
                  _0x5c839f.stroke();
                } else {
                  if (_0x3ec75c.endsWith("Hammer")) {
                    _0x5c839f.beginPath();
                    _0x5c839f.rect(-0x6, -0x20, 0xc, 0x5e);
                    _0x5c839f.fillStyle = "#986c2b";
                    _0x5c839f.fill();
                    _0x5c839f.stroke();
                    _0x5c839f.beginPath();
                    _0x5c839f.translate(0x0, 0x2d);
                    _0x5c839f.moveTo(-0xf, -0xc);
                    _0x5c839f.lineTo(0xf, -0xc);
                    _0x5c839f.lineTo(0xf, -0xf);
                    _0x5c839f.lineTo(0x15, -0xf);
                    _0x5c839f.lineTo(0x15, 0xf);
                    _0x5c839f.lineTo(0xf, 0xf);
                    _0x5c839f.lineTo(0xf, 0xc);
                    _0x5c839f.lineTo(-0xf, 0xc);
                    _0x5c839f.lineTo(-0xf, 0xf);
                    _0x5c839f.lineTo(-0x15, 0xf);
                    _0x5c839f.lineTo(-0x15, -0xf);
                    _0x5c839f.lineTo(-0xf, -0xf);
                    _0x21f4e4();
                    _0x5c839f.fill();
                    _0x5c839f.stroke();
                  } else {
                    if (_0x3ec75c.endsWith('Bat')) {
                      function _0xff3851(_0x1ca5e1, _0x4b67fd, _0x5d4c1f = 0x0) {
                        _0x5c839f.save();
                        _0x5c839f.translate(_0x1ca5e1, _0x4b67fd);
                        _0x5c839f.rotate(-Math.PI / 0x2 + _0x5d4c1f);
                        _0x5c839f.beginPath();
                        _0x5c839f.moveTo(0x0, 0xe);
                        _0x5c839f.lineTo(-0x4, 0x0);
                        _0x5c839f.lineTo(0x4, 0x0);
                        _0x5c839f.closePath();
                        _0x5c839f.restore();
                        _0x5c839f.stroke();
                        _0x5c839f.fill();
                      }
                      _0x5c839f.beginPath();
                      _0x5c839f.moveTo(-0x6, -0x18);
                      _0x5c839f.lineTo(0x6, -0x18);
                      _0x5c839f.lineTo(0x8, 0x5a);
                      _0x5c839f.bezierCurveTo(0x8, 0x64, -0x8, 0x64, -0x8, 0x5a);
                      _0x5c839f.closePath();
                      _0x5c839f.fillStyle = "#986c2b";
                      _0x5c839f.fill();
                      _0x5c839f.stroke();
                      _0x21f4e4();
                      _0x5c839f.lineWidth *= 0x2;
                      _0xff3851(0x6, 0x53, 0x0);
                      _0xff3851(0x5, 0x44, 0.05 * -Math.PI);
                      _0xff3851(-0x6, 0x53, Math.PI);
                      _0xff3851(-0x5, 0x44, 1.05 * Math.PI);
                      _0x5c839f.beginPath();
                    } else if (_0x3ec75c.endsWith("Musket")) {
                      _0x5c839f.beginPath();
                      _0x5c839f.rect(-0xa, -0x8, 0x1f, 0x10);
                      _0x5c839f.fillStyle = "#986c2b";
                      _0x5c839f.fill();
                      _0x5c839f.stroke();
                      _0x5c839f.beginPath();
                      _0x5c839f.rect(0x1d, -0x6, 0x50, 0xc);
                      _0x21f4e4();
                      _0x5c839f.fill();
                      _0x5c839f.stroke();
                      _0x5c839f.beginPath();
                      _0x5c839f.rect(0xc, -0x3, 0xa, 0x6);
                      _0x5c839f.fill();
                      _0x5c839f.stroke();
                      _0x5c839f.beginPath();
                      _0x5c839f.rect(0x15, -0x8, 0x19, 0x10);
                      _0x5c839f.fill();
                      _0x5c839f.stroke();
                    }
                  }
                }
              }
            }
          }
        }
        _0x5c839f.restore();
      } else {
        if (_0x3ec75c === _0xca1cdc.gv.wood) {
          _0x3f5b36(_0x5c839f, 1.4);
          _0x5c839f.fillStyle = _0x8c3061 ? "#b0d9d7" : "#9cbc4d";
          _0x5c839f.fill();
          _0x5c839f.stroke();
          _0x3f5b36(_0x5c839f, 0.7);
          _0x5c839f.fillStyle = "hsla(0,0%,100%,0.2)";
          _0x5c839f.fill();
        } else {
          if (_0x3ec75c === _0xca1cdc.gv.stone || _0x3ec75c === _0xca1cdc.gv.goldStone) {
            _0x230d7c(_0x5c839f, 0x1);
            _0x5c839f.fillStyle = _0x3ec75c === _0xca1cdc.gv.goldStone ? "#efc04b" : '#8989ad';
            _0x5c839f.fill();
            _0x5c839f.stroke();
            _0x230d7c(_0x5c839f, 0.5);
            _0x5c839f.fillStyle = "hsla(0,0%,100%,0.2)";
            _0x5c839f.fill();
          } else {
            if (_0x3ec75c === _0xca1cdc.gv.food) {
              if (_0x4eef07) {
                _0x5c839f.beginPath();
                for (let _0x919dfa = 0x0; _0x919dfa < 0x14; _0x919dfa++) {
                  const _0x2b7b3f = 0x2 * Math.PI * _0x919dfa / 0x14;
                  const _0x5061e = _0x919dfa % 0x2 == 0x0 ? 1.3 : 0.5;
                  _0x5c839f.lineTo(Math.cos(_0x2b7b3f) * _0x5061e, Math.sin(_0x2b7b3f) * _0x5061e);
                }
                _0x5c839f.fillStyle = _0x5c839f.strokeStyle;
                _0x5c839f.fill();
                _0x3c4d79(_0x5c839f, 0x1, 0.5, 0xa, 0.9);
                _0x5c839f.fillStyle = '#78ad4a';
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x3c4d79(_0x5c839f, 0.5, 0.5, 0xa, 0.8);
                _0x5c839f.fillStyle = "hsla(0,0%,100%,0.2)";
                _0x5c839f.fill();
              } else {
                _0x3c4d79(_0x5c839f);
                _0x5c839f.fillStyle = _0x8c3061 ? "#b0d9d7" : '#9cbc4d';
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x5c839f.beginPath();
                _0x4b3b38(_0x5c839f, -0.3, 0.4, 0.2);
                _0x4b3b38(_0x5c839f, 0.3, 0.3, 0.15);
                _0x4b3b38(_0x5c839f, 0.3, -0.34, 0.17);
                _0x4b3b38(_0x5c839f, -0.3, -0.3, 0.18);
                _0x5c839f.fillStyle = _0x8c3061 ? '#8b87cc' : "#b64168";
                _0x5c839f.fill();
                _0x5c839f.stroke();
              }
            } else {
              if (_0x3ec75c === _0xca1cdc.gv.cannon) {
                _0x5c839f.beginPath();
                _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                _0x5c839f.fillStyle = '#d0b692';
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x5c839f.fillStyle = '#8989ad';
                _0x5c839f.beginPath();
                _0x5c839f.rect(0x0, -0.45, 1.2, 0.9);
                _0x5c839f.fill();
                _0x5c839f.stroke();
                _0x5c839f.beginPath();
                _0x5c839f.arc(0x0, 0x0, 0.6, 0x0, 0x2 * Math.PI);
                _0x5c839f.fill();
                _0x5c839f.stroke();
              } else {
                if (_0x3ec75c === _0xca1cdc.gv.cannon2) {
                  _0x5c839f.beginPath();
                  _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                  _0x5c839f.fillStyle = "#d0b692";
                  _0x5c839f.fill();
                  _0x5c839f.stroke();
                  _0x5c839f.fillStyle = '#8989ad';
                  _0x5c839f.beginPath();
                  _0x5c839f.rect(0x0, -0.3, 1.5, 0.6);
                  _0x5c839f.fill();
                  _0x5c839f.stroke();
                  _0x5c839f.beginPath();
                  _0x5c839f.arc(0x0, 0x0, 0.5, 0x0, 0x2 * Math.PI);
                  _0x5c839f.fill();
                  _0x5c839f.stroke();
                } else {
                  if (_0x3ec75c === _0xca1cdc.gv.cannon1) {
                    _0x5c839f.beginPath();
                    _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                    _0x5c839f.fillStyle = '#d0b692';
                    _0x5c839f.fill();
                    _0x5c839f.stroke();
                    _0x5c839f.fillStyle = '#8989ad';
                    _0x5c839f.beginPath();
                    _0x5c839f.moveTo(0x0, -0.35);
                    _0x5c839f.lineTo(1.2, -0.6);
                    _0x5c839f.lineTo(1.2, 0.6);
                    _0x5c839f.lineTo(0x0, 0.35);
                    _0x5c839f.closePath();
                    _0x5c839f.fill();
                    _0x5c839f.stroke();
                    _0x5c839f.beginPath();
                    _0x5c839f.arc(0x0, 0x0, 0.6, 0x0, 0x2 * Math.PI);
                    _0x5c839f.fill();
                    _0x5c839f.stroke();
                  } else {
                    if (_0x3ec75c === _0xca1cdc.gv.boostPad) {
                      _0x3e107d(_0x5c839f);
                    } else {
                      if (_0x3ec75c === _0xca1cdc.gv.boostPad1) {
                        _0x3e107d(_0x5c839f, undefined, "#ff6bea");
                      } else {
                        if (_0x3ec75c === _0xca1cdc.gv.teleporter) {
                          _0x57bf9b(_0x5c839f);
                          _0x5c839f.beginPath();
                          _0x4b3b38(_0x5c839f, 0x0, 0x0, 0.5);
                          _0x5c839f.fillStyle = "#ff6b6b";
                          _0x5c839f.fill();
                        } else {
                          if (_0x3ec75c === _0xca1cdc.gv.trap) {
                            _0x230d7c(_0x5c839f, 0x1, 0x6, 0x0);
                            _0x5c839f.fillStyle = "#986c2b";
                            _0x5c839f.fill();
                            _0x5c839f.stroke();
                            _0x230d7c(_0x5c839f, 0.6, 0x6, 0x0);
                            _0x5c839f.fillStyle = "rgba(0,0,0,0.3)";
                            _0x5c839f.fill();
                            _0x5c839f.globalAlpha = 0x1;
                          } else {
                            if (_0x3ec75c === _0xca1cdc.gv.platform) {
                              _0x5c839f.beginPath();
                              _0x5c839f.rect(-0x1, -0x1, 0x2, 0x2);
                              _0x5c839f.fillStyle = '#d4d1a7';
                              _0x5c839f.fill();
                              _0x5c839f.stroke();
                              _0x5c839f.beginPath();
                              for (let _0x45b25b = 0x1; _0x45b25b < 0x4; _0x45b25b++) {
                                const _0x31dccf = _0x45b25b / 0x4 * 0x2 - 0x1;
                                _0x5c839f.moveTo(-0x1, _0x31dccf);
                                _0x5c839f.lineTo(0x1, _0x31dccf);
                              }
                              _0x5c839f.stroke();
                            } else {
                              if (_0x3ec75c === _0xca1cdc.gv.spike) {
                                _0x4ec59e(_0x5c839f);
                              } else {
                                if (_0x3ec75c === _0xca1cdc.gv.spike1) {
                                  _0x4ec59e(_0x5c839f, "#ac5fc9", "#6a6a96");
                                } else {
                                  if (_0x3ec75c === _0xca1cdc.gv.spike2) {
                                    _0x4ec59e(_0x5c839f, '#8989ad', "#b64168", 0x10);
                                  } else {
                                    if (_0x3ec75c === _0xca1cdc.gv.windmill) {
                                      _0x22ac37(_0x5c839f);
                                    } else {
                                      if (_0x3ec75c === _0xca1cdc.gv.windmill1) {
                                        _0x22ac37(_0x5c839f, 0x6, undefined, 0.45, 0x2);
                                      } else {
                                        if (_0x3ec75c === _0xca1cdc.gv.windmill2) {
                                          _0x22ac37(_0x5c839f, 0x8, undefined, 0.35, 0x5);
                                        } else {
                                          if (_0x3ec75c === _0xca1cdc.gv.wall) {
                                            _0x54f83d(_0x5c839f);
                                          } else {
                                            if (_0x3ec75c === _0xca1cdc.gv.wall1) {
                                              _0x54f83d(_0x5c839f, 0xa, '#6a6a96');
                                            } else {
                                              if (_0x3ec75c === _0xca1cdc.gv.wall2) {
                                                _0x54f83d(_0x5c839f, 0xe, "#5c5c8a");
                                              } else {
                                                if (_0x3ec75c === _0xca1cdc.gv.blocker) {
                                                  _0x5c839f.beginPath();
                                                  _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                                                  _0x5c839f.fillStyle = "#5a5a5a";
                                                  _0x5c839f.fill();
                                                  _0x5c839f.stroke();
                                                  _0x5c839f.rotate(Math.PI / 0x4);
                                                  _0x1b08f5(_0x5c839f, 0.16, 0.5);
                                                  _0x5c839f.fillStyle = _0x5c839f.strokeStyle = "#ff6b6b";
                                                  _0x5c839f.fill();
                                                  _0x5c839f.stroke();
                                                } else {
                                                  if (_0x3ec75c === _0xca1cdc.gv.tnt) {
                                                    _0x5c839f.beginPath();
                                                    _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                                                    _0x5c839f.fillStyle = "#5a5a5a";
                                                    _0x5c839f.fill();
                                                    _0x5c839f.stroke();
                                                    _0x5c839f.translate(0x0, -0.06);
                                                    _0x5c839f.scale(0.9, 0.9);
                                                    _0x5c839f.fillStyle = "#fff";
                                                    _0x5c839f.beginPath();
                                                    _0x5c839f.arc(0x0, 0x0, 0.6, 0x0, 0x2 * Math.PI);
                                                    _0x5c839f.arc(-0.25, 0x0, 0.2, 0x0, 0x2 * Math.PI);
                                                    _0x5c839f.arc(0.25, 0x0, 0.2, 0x0, 0x2 * Math.PI);
                                                    _0x5c839f.fill("evenodd");
                                                    _0x5c839f.beginPath();
                                                    _0x5c839f.rect(-0.25, 0.5, 0.5, 0.2);
                                                    _0x5c839f.strokeStyle = _0x5c839f.fillStyle;
                                                    _0x5c839f.fill();
                                                    _0x5c839f.stroke();
                                                  } else {
                                                    if (_0x3ec75c === _0xca1cdc.gv.nuke) {
                                                      _0x5c839f.beginPath();
                                                      _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                                                      _0x5c839f.fillStyle = "#5a5a5a";
                                                      _0x5c839f.fill();
                                                      _0x5c839f.stroke();
                                                      _0x5c839f.fillStyle = "#ffde6b";
                                                      const _0x4a66b8 = Math.PI / 0x3;
                                                      for (let _0x375310 = 0x0; _0x375310 < 0x3; _0x375310++) {
                                                        _0x5c839f.save();
                                                        _0x5c839f.rotate(Math.PI + 0x2 * Math.PI * _0x375310 / 0x3);
                                                        _0x5c839f.beginPath();
                                                        _0x5c839f.moveTo(0x0, 0x0);
                                                        _0x5c839f.arc(0x0, 0x0, 0.85, 0x0, _0x4a66b8);
                                                        _0x5c839f.lineTo(0x0, 0x0);
                                                        _0x5c839f.closePath();
                                                        _0x5c839f.fill();
                                                        _0x5c839f.restore();
                                                      }
                                                      _0x5c839f.beginPath();
                                                      _0x5c839f.arc(0x0, 0x0, 0.28, 0x0, 0x2 * Math.PI);
                                                      _0x5c839f.fill();
                                                      _0x5c839f.lineWidth *= 1.5;
                                                      _0x5c839f.strokeStyle = "#5a5a5a";
                                                      _0x5c839f.stroke();
                                                    } else {
                                                      if (_0x3ec75c === _0xca1cdc.gv.landmine) {
                                                        _0x5c839f.beginPath();
                                                        _0x5c839f.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
                                                        _0x5c839f.fillStyle = "#5a5a5a";
                                                        _0x5c839f.fill();
                                                        _0x5c839f.stroke();
                                                        for (let _0x2e3edc = 0x0; _0x2e3edc < 0x6; _0x2e3edc++) {
                                                          _0x5c839f.save();
                                                          _0x5c839f.rotate(0x2 * Math.PI * _0x2e3edc / 0x6);
                                                          _0x5c839f.beginPath();
                                                          _0x5c839f.rect(0.8, -0.2, 0.4, 0.4);
                                                          _0x5c839f.fill();
                                                          _0x5c839f.stroke();
                                                          _0x5c839f.restore();
                                                        }
                                                        _0x5c839f.beginPath();
                                                        _0x5c839f.arc(0x0, 0x0, 0.45, 0x0, 0x2 * Math.PI);
                                                        _0x5c839f.fillStyle = "#ff6b6b";
                                                        _0x5c839f.fill();
                                                        _0x5c839f.stroke();
                                                      } else if (_0x3ec75c === _0xca1cdc.gv.display) {
                                                        _0x5c839f.beginPath();
                                                        _0x5c839f.rect(-0x1, -0x1, 0x2, 0x2);
                                                        _0x5c839f.fillStyle = "#5a5a5a";
                                                        _0x5c839f.fill();
                                                        _0x5c839f.stroke();
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _0x5c839f.restore();
    }
    function _0x5f0ec5(_0x5241dc, _0x5610e6) {
      var _0x571a04 = parseInt(_0x5241dc.substring(0x1, 0x3), 0x10);
      var _0x5756b9 = parseInt(_0x5241dc.substring(0x3, 0x5), 0x10);
      var _0xd98ff4 = parseInt(_0x5241dc.substring(0x5, 0x7), 0x10);
      _0x571a04 = (_0x571a04 = parseInt(_0x571a04 * (0x64 + _0x5610e6) / 0x64)) < 0xff ? _0x571a04 : 0xff;
      _0x5756b9 = (_0x5756b9 = parseInt(_0x5756b9 * (0x64 + _0x5610e6) / 0x64)) < 0xff ? _0x5756b9 : 0xff;
      _0xd98ff4 = (_0xd98ff4 = parseInt(_0xd98ff4 * (0x64 + _0x5610e6) / 0x64)) < 0xff ? _0xd98ff4 : 0xff;
      _0x571a04 = Math.round(_0x571a04);
      _0x5756b9 = Math.round(_0x5756b9);
      _0xd98ff4 = Math.round(_0xd98ff4);
      return '#' + (0x1 == _0x571a04.toString(0x10).length ? '0' + _0x571a04.toString(0x10) : _0x571a04.toString(0x10)) + (0x1 == _0x5756b9.toString(0x10).length ? '0' + _0x5756b9.toString(0x10) : _0x5756b9.toString(0x10)) + (0x1 == _0xd98ff4.toString(0x10).length ? '0' + _0xd98ff4.toString(0x10) : _0xd98ff4.toString(0x10));
    }
    function _0x22ac37(_0x35720c, _0x58e45d = 0x4, _0x551a88 = 1.35, _0x4c05c0 = 0.5, _0x2e1f5d = 0x0) {
      const _0x58d017 = _0x5f0ec5('#c5b467', _0x2e1f5d);
      const _0x14d4c7 = _0x5f0ec5('#d8c377', _0x2e1f5d);
      _0x35720c.beginPath();
      _0x35720c.arc(0x0, 0x0, 0x1, 0x0, 0x2 * Math.PI);
      _0x35720c.fillStyle = _0x58d017;
      _0x35720c.fill();
      _0x35720c.stroke();
      _0x35720c.save();
      _0x35720c.beginPath();
      for (let _0x8777a5 = 0x0; _0x8777a5 < _0x58e45d; _0x8777a5++) {
        _0x35720c.rotate(0x2 * Math.PI / _0x58e45d);
        _0x35720c.rect(0x0, -_0x4c05c0 / 0x2, _0x551a88, _0x4c05c0);
      }
      _0x35720c.restore();
      _0x35720c.fillStyle = _0x14d4c7;
      _0x35720c.fill();
      _0x35720c.stroke();
      _0x35720c.beginPath();
      _0x35720c.arc(0x0, 0x0, 0.45, 0x0, 0x2 * Math.PI);
      _0x35720c.fillStyle = _0x58d017;
      _0x35720c.fill();
      _0x35720c.stroke();
    }
    function _0x57bf9b(_0x19df3b, _0x546638 = "#5a5a5a") {
      _0x19df3b.beginPath();
      _0x19df3b.rect(-0x1, -0x1, 0x2, 0x2);
      _0x19df3b.fillStyle = _0x546638;
      _0x19df3b.fill();
      _0x19df3b.stroke();
    }
    function _0x3e107d(_0x3cdf51, _0x5535f8, _0x54b91d = "#ffde6b") {
      _0x57bf9b(_0x3cdf51);
      _0x3cdf51.beginPath();
      _0x3cdf51.moveTo(0.5, 0x0);
      _0x3cdf51.lineTo(-0.5, 0.5);
      _0x3cdf51.lineTo(-0.5, -0.5);
      _0x3cdf51.closePath();
      _0x3cdf51.strokeStyle = _0x3cdf51.fillStyle = _0x54b91d;
      _0x3cdf51.fill();
      _0x3cdf51.stroke();
    }
    function _0x4ec59e(_0x315703, _0x59e042 = '#8989ad', _0x5320da = "#b38239", _0x2150f5 = 0xc) {
      _0x315703.lineWidth *= 0x2;
      _0x315703.beginPath();
      for (let _0x53b77a = 0x0; _0x53b77a < _0x2150f5; _0x53b77a++) {
        const _0x5fb841 = _0x53b77a / _0x2150f5 * Math.PI * 0x2 + Math.PI / 0x6;
        const _0x432193 = _0x53b77a % 0x2 == 0x0 ? 0x1 : 0.6;
        _0x315703.lineTo(Math.cos(_0x5fb841) * _0x432193, Math.sin(_0x5fb841) * _0x432193);
      }
      function _0x22cdfd(_0x4e2652 = 0x1) {
        const _0x502bb4 = 0.72 * _0x4e2652;
        const _0x8243fb = _0x2150f5 / 0x2;
        _0x315703.beginPath();
        for (let _0x5e87ec = 0x0; _0x5e87ec < _0x8243fb; _0x5e87ec++) {
          const _0x187795 = _0x5e87ec / _0x8243fb * Math.PI * 0x2 + Math.PI / _0x8243fb * 0x2;
          _0x315703.lineTo(Math.cos(_0x187795) * _0x502bb4, Math.sin(_0x187795) * _0x502bb4);
        }
        _0x315703.closePath();
      }
      _0x315703.closePath();
      _0x315703.fillStyle = _0x59e042;
      _0x315703.stroke();
      _0x315703.fill();
      _0x22cdfd();
      _0x315703.fillStyle = _0x5320da;
      _0x315703.stroke();
      _0x315703.fill();
      _0x22cdfd(0.5);
      _0x315703.fillStyle = "hsla(0,0%,100%,0.2)";
      _0x315703.fill();
    }
    function _0x54f83d(_0x543c88, _0x5e0c50 = 0x8, _0x36eac2 = '#8989ad') {
      _0x543c88.beginPath();
      _0x543c88.beginPath();
      for (let _0x57abcd = 0x0; _0x57abcd < _0x5e0c50; _0x57abcd++) {
        const _0x54b4c7 = _0x57abcd / _0x5e0c50 * Math.PI * 0x2;
        _0x543c88.lineTo(0x1 * Math.cos(_0x54b4c7), 0x1 * Math.sin(_0x54b4c7));
      }
      _0x543c88.closePath();
      _0x543c88.fillStyle = _0x36eac2;
      _0x543c88.fill();
      _0x543c88.stroke();
      _0x543c88.beginPath();
      for (let _0x118ab4 = 0x0; _0x118ab4 < _0x5e0c50; _0x118ab4++) {
        const _0x50c039 = _0x118ab4 / _0x5e0c50 * Math.PI * 0x2;
        _0x543c88.lineTo(0.6 * Math.cos(_0x50c039), 0.6 * Math.sin(_0x50c039));
      }
      _0x543c88.closePath();
      _0x543c88.fillStyle = "hsla(0,0%,100%,0.2)";
      _0x543c88.fill();
    }
    let _0x272cb0 = document.createElement("canvas");
    let _0x512d85 = _0x272cb0.getContext('2d');
    _0x8d9d8d.oncontextmenu = function () {
      return false;
    };
    function _0xd341b4(_0x4c13b0) {
      const _0x5f0463 = _0x588741 / 0x10;
      const _0x57b026 = Math.pow(0.8, _0x5f0463);
      _0x4c13b0.offsetX *= _0x57b026;
      _0x4c13b0.offsetY *= _0x57b026;
      const _0x6811a4 = Math.pow(0.4, _0x5f0463);
      _0x4c13b0.iOffsetX += (_0x4c13b0.offsetX - _0x4c13b0.iOffsetX) * _0x6811a4;
      _0x4c13b0.iOffsetY += (_0x4c13b0.offsetY - _0x4c13b0.iOffsetY) * _0x6811a4;
    }
    function _0x1ff507(_0x48eeb0) {
      _0x48eeb0.fillStyle = "#ededed";
      _0x48eeb0.beginPath();
      _0x48eeb0.arc(0x1, 0x0, 0.7, 0x0, 0x2 * Math.PI);
      _0x48eeb0.fill();
      _0x48eeb0.stroke();
      _0x48eeb0.beginPath();
      _0x48eeb0.ellipse(1.5, 0x0, 0.25, 0.4, 0x0, 0x0, 0x2 * Math.PI);
      _0x48eeb0.fillStyle = "#e7c7ce";
      _0x48eeb0.fill();
      _0x48eeb0.stroke();
      _0x48eeb0.fillStyle = _0x48eeb0.strokeStyle;
      _0x48eeb0.beginPath();
      _0x4b3b38(_0x48eeb0, 1.5, -0.17, 0.08);
      _0x4b3b38(_0x48eeb0, 1.5, 0.17, 0.08);
      _0x4b3b38(_0x48eeb0, 0x1, -0.2, 0.1);
      _0x4b3b38(_0x48eeb0, 0x1, 0.2, 0.1);
      _0x48eeb0.fill();
      _0x48eeb0.fillStyle = "#ededed";
      _0x48eeb0.beginPath();
      _0x4b3b38(_0x48eeb0, 1.05, -0.2, 0.05);
      _0x4b3b38(_0x48eeb0, 1.05, 0.2, 0.05);
      _0x48eeb0.fill();
      _0x48eeb0.fillStyle = _0x48eeb0.strokeStyle;
      _0x48eeb0.beginPath();
      _0x48eeb0.moveTo(0.3, 0x0);
      _0x48eeb0.bezierCurveTo(0.1, -1.5, 0x2, -0.8, 0.3, 0x0);
      _0x48eeb0.moveTo(0.3, 0x0);
      _0x48eeb0.bezierCurveTo(0.1, 1.5, 0x2, 0.8, 0.3, 0x0);
      _0x48eeb0.fill();
    }
    function _0x5f493d(_0x27f57f) {
      _0x27f57f.fillStyle = '#bfa583';
      _0x27f57f.beginPath();
      _0x27f57f.arc(0x1, 0x0, 0.7, 0x0, 0x2 * Math.PI);
      _0x27f57f.fill();
      _0x27f57f.stroke();
      _0x27f57f.fillStyle = "#ededed";
      _0x27f57f.beginPath();
      _0x27f57f.ellipse(1.4, 0x0, 0.24, 0.21, 0x0, 0x2 * Math.PI, 0x0);
      _0x27f57f.fill();
      _0x27f57f.fillStyle = _0x27f57f.strokeStyle;
      _0x27f57f.beginPath();
      _0x4b3b38(_0x27f57f, 0x1, -0.2, 0.12);
      _0x4b3b38(_0x27f57f, 0x1, 0.2, 0.12);
      _0x4b3b38(_0x27f57f, 1.36, 0x0, 0.1);
      _0x27f57f.fill();
      _0x27f57f.fillStyle = "#ededed";
      _0x27f57f.beginPath();
      _0x4b3b38(_0x27f57f, 1.04, -0.2, 0.06);
      _0x4b3b38(_0x27f57f, 1.04, 0.2, 0.06);
      _0x27f57f.fill();
      _0x27f57f.fillStyle = _0x27f57f.strokeStyle;
      _0x27f57f.beginPath();
      _0x4b3b38(_0x27f57f, 0.42, -0.43, 0.25);
      _0x4b3b38(_0x27f57f, 0.42, 0.43, 0.25);
      _0x27f57f.fillStyle = '#bfa583';
      _0x27f57f.fill();
      _0x27f57f.stroke();
      _0x27f57f.beginPath();
      _0x4b3b38(_0x27f57f, 0.49, -0.43, 0.13);
      _0x4b3b38(_0x27f57f, 0.49, 0.43, 0.13);
      _0x27f57f.fillStyle = "#ededed";
      _0x27f57f.fill();
    }
    function _0x380447(_0x2df246) {
      _0x2df246.fillStyle = "#fadadd";
      _0x2df246.beginPath();
      _0x2df246.arc(0x1, 0x0, 0.7, 0x0, 0x2 * Math.PI);
      _0x2df246.fill();
      _0x2df246.stroke();
      _0x2df246.beginPath();
      _0x2df246.ellipse(1.5, 0x0, 0.25, 0.35, 0x0, 0x0, 0x2 * Math.PI);
      _0x2df246.fillStyle = '#e9afae';
      _0x2df246.fill();
      _0x2df246.stroke();
      _0x2df246.fillStyle = _0x2df246.strokeStyle;
      _0x2df246.beginPath();
      _0x2df246.ellipse(1.5, -0.12, 0.1, 0.08, 0x0, 0x0, 0x2 * Math.PI);
      _0x2df246.moveTo(1.5, 0.12);
      _0x2df246.ellipse(1.5, 0.12, 0.1, 0.08, 0x0, 0x0, 0x2 * Math.PI);
      _0x4b3b38(_0x2df246, 0x1, -0.2, 0.1);
      _0x4b3b38(_0x2df246, 0x1, 0.2, 0.1);
      _0x2df246.fill();
      _0x2df246.fillStyle = "#ededed";
      _0x2df246.beginPath();
      _0x4b3b38(_0x2df246, 1.05, -0.2, 0.05);
      _0x4b3b38(_0x2df246, 1.05, 0.2, 0.05);
      _0x2df246.fill();
      _0x2df246.fillStyle = '#e9afae';
      _0x2df246.beginPath();
      _0x2df246.moveTo(0.34, -0.2);
      _0x2df246.bezierCurveTo(0.3, -1.4, 0x2, -0.6, 0.34, -0.2);
      _0x2df246.moveTo(0.34, 0.2);
      _0x2df246.bezierCurveTo(0.3, 1.4, 0x2, 0.6, 0.34, 0.2);
      _0x2df246.fill();
      _0x2df246.stroke();
    }
    function _0x355c58(_0x370ce8) {
      _0x370ce8.fillStyle = "#adcf79";
      _0x370ce8.beginPath();
      _0x370ce8.arc(0.7, 0x0, 0.5, 0x0, 0x2 * Math.PI);
      _0x370ce8.fill();
      _0x370ce8.stroke();
      _0x370ce8.beginPath();
      _0x370ce8.moveTo(0x1, -0.22);
      _0x370ce8.quadraticCurveTo(1.9, 0x0, 0x1, 0.22);
      _0x370ce8.closePath();
      _0x370ce8.fillStyle = "#ffc782";
      _0x370ce8.fill();
      _0x370ce8.stroke();
      _0x370ce8.fillStyle = _0x370ce8.strokeStyle;
      _0x370ce8.beginPath();
      _0x4b3b38(_0x370ce8, 0.73, -0.2, 0.11);
      _0x4b3b38(_0x370ce8, 0.73, 0.2, 0.11);
      _0x370ce8.fill();
      _0x370ce8.fillStyle = "#ededed";
      _0x370ce8.beginPath();
      _0x4b3b38(_0x370ce8, 0.785, -0.2, 0.06);
      _0x4b3b38(_0x370ce8, 0.785, 0.2, 0.06);
      _0x370ce8.fill();
    }
    function _0x4f3e7b(_0x279a4c, _0x1aa07c, _0x2689d2 = false, _0x1c3616 = 0x8) {
      _0x279a4c.save();
      _0x279a4c.beginPath();
      let _0x1230c0 = -Math.sin(Date.now() / 0x258);
      if (_0x2689d2) {
        _0x1230c0 = 0.3 * Math.abs(_0x1230c0) + 0.7;
      }
      _0x1230c0 *= 0.075;
      let _0x292f5e = -0x18;
      let _0x1a2ea8 = 0x0;
      _0x279a4c.lineTo(_0x292f5e, _0x1a2ea8);
      for (let _0x157a08 = 0x0; _0x157a08 < 0x14; _0x157a08++) {
        const _0x4cbd25 = _0x1230c0 * _0x157a08 * _0x157a08 / 0x5;
        _0x292f5e -= 3.5 * Math.cos(_0x4cbd25);
        _0x1a2ea8 -= 3.5 * Math.sin(_0x4cbd25);
        _0x279a4c.lineTo(_0x292f5e, _0x1a2ea8);
      }
      _0x279a4c.lineWidth = _0x1c3616 + 0x8;
      _0x279a4c.strokeStyle = "#35354d";
      _0x279a4c.stroke();
      _0x279a4c.lineWidth = _0x1c3616;
      _0x279a4c.strokeStyle = _0x1aa07c;
      _0x279a4c.stroke();
      _0x279a4c.restore();
    }
    function _0x1b08f5(_0x49aca2, _0x66bf2d = 0x6, _0x14cc97 = 0xc) {
      _0x49aca2.beginPath();
      _0x49aca2.moveTo(-_0x66bf2d, -_0x14cc97);
      _0x49aca2.lineTo(_0x66bf2d, -_0x14cc97);
      _0x49aca2.lineTo(_0x66bf2d, -_0x66bf2d);
      _0x49aca2.lineTo(_0x14cc97, -_0x66bf2d);
      _0x49aca2.lineTo(_0x14cc97, _0x66bf2d);
      _0x49aca2.lineTo(_0x66bf2d, _0x66bf2d);
      _0x49aca2.lineTo(_0x66bf2d, _0x14cc97);
      _0x49aca2.lineTo(-_0x66bf2d, _0x14cc97);
      _0x49aca2.lineTo(-_0x66bf2d, _0x66bf2d);
      _0x49aca2.lineTo(-_0x14cc97, _0x66bf2d);
      _0x49aca2.lineTo(-_0x14cc97, -_0x66bf2d);
      _0x49aca2.lineTo(-_0x66bf2d, -_0x66bf2d);
      _0x49aca2.closePath();
    }
    class _0x29780a extends _0x4f973a {
      constructor(_0x4f960d, _0x54c55c = 0x0, _0x11f26b = 0x0, _0x87faaa = 0x0, _0x163c51 = 0x1, _0x169db4, _0x3c4c2b, _0x406371, _0x23b0a0) {
        super(_0x4f960d, _0xca1cdc.gv.player, _0x54c55c, _0x11f26b, _0x169db4 || 0x1e, _0x87faaa);
        this.health = _0x163c51;
        this.oHealth = this.nHealth = _0x163c51;
        this.item = _0x3c4c2b || {};
        this.color = _0x406371;
        this.nick = _0x23b0a0;
        this.hitT = 0x1;
        this.isPlayer = true;
        this.chat = null;
        this.chat = null;
        this.chatT = 0x0;
        this.chatTDir = 0x1;
        this.isClanLeader = false;
        this.isSnow = this.isDesert = false;
        this.offsetX = 0x0;
        this.offsetY = 0x0;
        this.iOffsetX = 0x0;
        this.iOffsetY = 0x0;
        this.lightMap = {};
        this.interactionAlpha = 0x1;
        this.lastInteractionT = 0x1;
        this.isActualPlayer = true;
        this.level = 0x0;
      }
      ["getSkinName"]() {
        return this.skin && this.skin.name;
      }
      ["setClan"](_0x2a89e6) {
        this.clanName = _0x2a89e6 > 0x0 ? _0x594644[_0x2a89e6 - 0x1].clanName : null;
      }
      ["update"]() {
        super.update();
        _0xd341b4(this);
        this.isSnow = this.y < _0x10006c.snow;
        this.isDesert = this.y > _0x10006c.desert;
        this.health = this.oHealth + (this.nHealth - this.oHealth) * this.T;
        if (this.item.isWeapon) {
          this.hitT += _0x588741 / this.item.reload * (this.item.animFactor || 1.25);
          this.hitT = Math.min(0x1, this.hitT);
        } else {
          this.hitT = 0x1;
        }
        if (this.chat) {
          this.chatT += this.chatTDir * _0x588741 / 0xc8;
          this.chatT = Math.min(0x1, Math.max(0x0, this.chatT));
          if (0x0 === this.chatT) {
            this.chat = null;
          }
        }
        if (this.skin && this.skin.inv) {
          this.lastInteractionT -= _0x588741 / 0xbb8;
          this.lastInteractionT = Math.max(0x0, this.lastInteractionT);
          this.interactionAlpha = this.lastInteractionT <= 0x0 ? 0x0 : 0x1;
        } else {
          this.interactionAlpha = 0x1;
        }
      }
      ["getScale"]() {
        return this.size / 0x1e;
      }
      ["drawNickAndHp"](_0x2e96ad) {
        _0x2e96ad.save();
        _0x2e96ad.translate(this.x, this.y);
        _0x5ea9f7(this, _0x2e96ad);
        const _0x5b4ff1 = this.interactionAlpha > 0x0;
        _0x2e96ad.strokeStyle = "#35354d";
        _0x2e96ad.fillStyle = '#fff';
        _0x2e96ad.save();
        _0x2e96ad.textAlign = "center";
        _0x2e96ad.textBaseline = "bottom";
        _0x2e96ad.lineWidth = 0x5;
        _0x2e96ad.font = "bolder 18px " + _0x25cda0;
        _0x2e96ad.translate(0x0, -this.size - 0x14);
        const _0x449f9e = this;
        if (this.username && _0x5b4ff1) {
          _0x2e96ad.fillStyle = this === _0x466240 || _0x19c005[this.id] ? "#8ecc51" : "#cc5151";
          _0x100ad8(_0x2e96ad, '@' + this.cleanedUsername, "bolder 11px " + _0x25cda0, 0xb, _0x2e96ad.fillStyle, undefined, undefined, function () {
            _0x1bb451(_0x449f9e.username);
          });
          _0x2e96ad.translate(0x0, -0xd);
        }
        if (this.nick && _0x5b4ff1) {
          _0x100ad8(_0x2e96ad, this.nick, "bolder 18px " + _0x25cda0, 0x12, "#fff");
          _0x2e96ad.translate(0x0, -0x16);
        }
        if (this.clanName && _0x5b4ff1) {
          _0x2e96ad.fillStyle = this === _0x466240 || _0x19c005[this.id] ? "#8ecc51" : "#cc5151";
          _0x2e96ad.font = "bolder 14px " + _0x25cda0;
          _0x2e96ad.lineWidth = 0x3;
          const _0x191831 = (this.isClanLeader ? "👑 " : '') + '[' + this.clanName + ']';
          const _0x5991a2 = this.clanName;
          _0x100ad8(_0x2e96ad, _0x191831, _0x2e96ad.font, 0xe, _0x2e96ad.fillStyle, undefined, undefined, _0x466240 && !_0x466240.clanName && function () {
            const _0x1c0bdb = _0x594644.findIndex(_0x33e737 => _0x33e737.clanName === _0x5991a2);
            if (_0x1c0bdb > -0x1) {
              _0x2f013c(_0x1c0bdb);
            }
          });
          _0x2e96ad.translate(0x0, -0x10);
        }
        if (this.chat) {
          _0x2e96ad.translate(0x0, -0x8);
          _0x2e96ad.font = "normal 14px " + _0x25cda0;
          const _0x77e0a8 = _0x2e96ad.measureText(this.chat).width + 24;
          _0x2e96ad.save();
          _0x2e96ad.scale(this.chatT, this.chatT);
          _0x2e96ad.fillStyle = "rgba(0, 0, 0, 0.2)";
          _0x2e96ad.fillRect(-_0x77e0a8 / 0x2, -26, _0x77e0a8, 26);
          _0x2e96ad.translate(0x0, -3);
          _0x100ad8(_0x2e96ad, this.chat, "normal 14px " + _0x25cda0, 0xe, "#fff");
          _0x2e96ad.restore();
        }
        _0x2e96ad.restore();
        if (_0x5b4ff1) {
          _0x2e96ad.beginPath();
          _0x2e96ad.translate(-30, this.size + 0x28);
          _0x2e96ad.beginPath();
          _0x2e96ad.moveTo(0x0, 0x0);
          _0x2e96ad.lineTo(0x3c, 0x0);
          _0x2e96ad.lineCap = "round";
          _0x2e96ad.lineWidth = 0xc;
          _0x2e96ad.stroke();
          if (this.health > 0x0) {
            _0x2e96ad.beginPath();
            _0x2e96ad.moveTo(0x0, 0x0);
            _0x2e96ad.lineTo(this.health * 0x3c, 0x0);
            _0x2e96ad.lineWidth = 0x6;
            _0x2e96ad.strokeStyle = this === _0x466240 || _0x19c005[this.id] ? "#8ecc51" : "#cc5151";
            _0x2e96ad.stroke();
          }
          if (this.isActualPlayer) {
            _0x2e96ad.translate(-0x4, 0x8);
            _0x100ad8(_0x2e96ad, "lvl " + this.level, "bolder 12px " + _0x25cda0, 0xc, this.level < 0xa ? '#fff' : this.level < 0x32 ? '#63baff' : this.level < 0x64 ? "#ef91ff" : this.level < 0x96 ? "#ffd66f" : this.level < 0xc8 ? "#ff7d7d" : "hsl(" + 0x168 * (0.5 * Math.sin(Date.now() / 0x190) + 0.5) + ",100%, 75%)", true);
          }
        }
        _0x2e96ad.restore();
      }
      ["drawOrig"](_0x2ef47d) {
        const _0x518f80 = this;
        _0x2ef47d.lineWidth = 0x4;
        _0x2ef47d.strokeStyle = "#35354d";
        _0x2ef47d.lineJoin = _0x2ef47d.lineCap = "round";
        if (!this.isActualPlayer) {
          _0x2ef47d.save();
          _0x2ef47d.rotate(this.angle);
          if (this.origType === _0xca1cdc.gv.npcPig) {
            _0x2ef47d.save();
            _0x2ef47d.translate(0.5 * -this.size, 0x0);
            _0x4f3e7b(_0x2ef47d, "#fadadd", true, 0x6);
            _0x2ef47d.restore();
          }
          _0x25bff0(_0x2ef47d, this.origType, this.size, function (_0xf60fd6) {
            _0xf60fd6.scale(_0x518f80.size, _0x518f80.size);
            _0xf60fd6.lineWidth /= _0x518f80.size;
            if (_0x518f80.origType === _0xca1cdc.gv.npcCow) {
              _0xf60fd6.fillStyle = "#ededed";
              _0xf60fd6.beginPath();
              _0xf60fd6.ellipse(-0.1, 0x0, 1.2, 0.8, 0x0, 0x0, 0x2 * Math.PI, false);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0xf60fd6.save();
              _0xf60fd6.clip();
              _0xf60fd6.beginPath();
              _0x4b3b38(_0xf60fd6, -0.4, -0.4, 0.5);
              _0x4b3b38(_0xf60fd6, 0.3, 0.6, 0.35);
              _0x4b3b38(_0xf60fd6, -0.9, 0.6, 0.3);
              _0xf60fd6.fillStyle = _0xf60fd6.strokeStyle;
              _0xf60fd6.fill();
              _0xf60fd6.restore();
              _0x1ff507(_0xf60fd6);
            } else if (_0x518f80.origType === _0xca1cdc.gv.npcDuck) {
              _0xf60fd6.fillStyle = '#d3bb98';
              _0xf60fd6.beginPath();
              _0xf60fd6.ellipse(-0.1, 0x0, 0x1, 0.8, 0x0, 0x0, 0x2 * Math.PI);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0xf60fd6.fillStyle = '#c29e89';
              _0xf60fd6.beginPath();
              _0xf60fd6.arc(-0x1, 0x0, 0.3, 0x0, 0x2 * Math.PI);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0xf60fd6.beginPath();
              _0xf60fd6.ellipse(-0.08, -0.56, 0.6, 0.28, 0x0, 0x0, 0x2 * Math.PI);
              _0xf60fd6.ellipse(-0.08, 0.56, 0.6, 0.28, 0x0, 0x0, 0x2 * Math.PI);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0x355c58(_0xf60fd6);
            } else if (_0x518f80.origType === _0xca1cdc.gv.npcPig) {
              _0xf60fd6.fillStyle = "#fadadd";
              _0xf60fd6.beginPath();
              _0xf60fd6.ellipse(-0x0, 0x0, 1.1, 0.8, 0x0, 0x0, 0x2 * Math.PI, false);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0x380447(_0xf60fd6);
            } else if (_0x518f80.origType === _0xca1cdc.gv.npcBear) {
              _0xf60fd6.fillStyle = "#917a5d";
              _0xf60fd6.beginPath();
              _0xf60fd6.arc(-1.25, 0x0, 0.3, 0x0, 0x2 * Math.PI);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0xf60fd6.fillStyle = '#bfa583';
              _0xf60fd6.beginPath();
              _0xf60fd6.ellipse(-0.1, 0x0, 1.2, 0.95, 0x0, 0x0, 0x2 * Math.PI, false);
              _0xf60fd6.fill();
              _0xf60fd6.stroke();
              _0x5f493d(_0xf60fd6);
            }
          }, 0x2);
          return void _0x2ef47d.restore();
        }
        _0x2ef47d.save();
        const _0x110dd3 = this.hitT;
        const _0x5d5c19 = (_0x110dd3 < 0.3 ? _0x110dd3 / 0.3 : 0x1 - (_0x110dd3 - 0.3) / 0.7) * -Math.PI * (this.hitObject ? 0.4 : 0.8);
        const _0x1d4429 = this.angle + _0x5d5c19;
        _0x2ef47d.rotate(_0x1d4429);
        const _0x1dbd4d = this.fucking && !_0x55f626 ? 0x4 * Math.sin(Date.now() / 0x28) : 0x0;
        _0x2ef47d.translate(_0x1dbd4d, 0x0);
        const _0x1bf6e0 = Math.PI / 0xb4 * 0x28;
        const _0x1d39c5 = 0x1a * Math.sin(_0x1bf6e0);
        const _0x9ac392 = 0x1a * Math.cos(_0x1bf6e0);
        const _0x37d11d = this.skin && this.skin.name;
        if ('Tube' === _0x37d11d) {
          _0x25bff0(_0x2ef47d, 'skin_Tube', 0x1e, function (_0x3bbe97) {
            _0x3bbe97.beginPath();
            _0x3bbe97.arc(0x0, 0x0, 0x32, 0x0, 0x2 * Math.PI);
            _0x3bbe97.fillStyle = '#d9a954';
            _0x3bbe97.fill('evenodd');
            _0x3bbe97.stroke();
            const _0x8843d6 = Math.PI / 0x6;
            for (let _0x522df5 = 0x0; _0x522df5 < 0x4; _0x522df5++) {
              _0x3bbe97.save();
              _0x3bbe97.rotate(0x2 * Math.PI * _0x522df5 / 0x4);
              _0x3bbe97.beginPath();
              _0x3bbe97.moveTo(0x0, 0x0);
              _0x3bbe97.arc(0x0, 0x0, 0x30, 0x0, _0x8843d6);
              _0x3bbe97.lineTo(0x0, 0x0);
              _0x3bbe97.closePath();
              _0x3bbe97.fillStyle = "#db695e";
              _0x3bbe97.fill();
              _0x3bbe97.restore();
            }
          }, 0x1);
        } else if ("Tail" === _0x37d11d) {
          _0x4f3e7b(_0x2ef47d, this.color);
        }
        const _0x488a9b = this.interactionAlpha > 0x0;
        this.wasVis = _0x488a9b;
        if (this.fucking && !_0x55f626) {
          _0x2ef47d.beginPath();
          _0x2ef47d.moveTo(0x33, -0x8);
          _0x2ef47d.arc(0x33, 0x0, 0x8, -Math.PI / 0x2, Math.PI / 0x2);
          _0x24408b('#ffa6cf');
          _0x2ef47d.beginPath();
          _0x2ef47d.moveTo(0x0, -0x8);
          _0x2ef47d.lineTo(0x33, -0x8);
          _0x2ef47d.lineTo(0x33, 0x8);
          _0x2ef47d.lineTo(0x0, 0x8);
          _0x24408b();
        }
        if (_0x488a9b) {
          if (!(!_0x55f626 && this.fucking || this.drinkingMilk)) {
            if (this.item.isProj) {
              _0x2ef47d.beginPath();
              _0x2ef47d.arc(0x28, 0xa, 0xa, 0x0, 0x2 * Math.PI);
              _0x24408b();
              _0x2ef47d.beginPath();
              _0x2ef47d.arc(0x19, -0xa, 0xa, 0x0, 0x2 * Math.PI);
              _0x24408b();
            }
            _0x2ef47d.save();
            if (undefined !== this.item.placeBlock) {
              _0x2ef47d.translate(this.size + this.item.size, 0x0);
              _0x21f18d(_0x2ef47d, this.item.placeBlock, this.item.size, false, false);
            } else {
              _0x2ef47d.translate(_0x9ac392, 0x0);
              _0x21f18d(_0x2ef47d, this.item.name, this.size, false, false, 0x1 + this.item.range);
            }
            _0x2ef47d.restore();
          }
          const _0x24d4a1 = this.drinkingMilk ? 0xf + -0x7 * Math.abs(Math.sin(Date.now() / 0xc8)) : 0x0;
          if (!this.item.isProj || this.fucking || this.drinkingMilk) {
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(_0x24d4a1 + _0x9ac392, _0x1d39c5, 0xa, 0x0, 0x2 * Math.PI);
            _0x24408b();
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(_0x24d4a1 + _0x9ac392, -_0x1d39c5, 0xa, 0x0, 0x2 * Math.PI);
            _0x24408b();
          }
          if ('Mole' === _0x37d11d) {
            _0x2ef47d.beginPath();
            _0x2ef47d.moveTo(0x1a, -0xa);
            _0x2ef47d.lineTo(0x2d, 0x0);
            _0x2ef47d.lineTo(0x1a, 0xa);
            _0x24408b();
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(0x2b, 0x0, 0x6, 0x0, 0x2 * Math.PI);
            _0x24408b("#f76fbc");
          }
          if (this.drinkingMilk) {
            _0x2ef47d.save();
            _0x2ef47d.translate(_0x24d4a1 + 0xa, 0x0);
            _0x2ef47d.beginPath();
            _0x2ef47d.moveTo(0x5, -0x6);
            _0x2ef47d.lineTo(0x19, -12);
            _0x2ef47d.lineTo(50, -12);
            _0x2ef47d.bezierCurveTo(60, -12, 60, 12, 50, 12);
            _0x2ef47d.lineTo(0x19, 12);
            _0x2ef47d.lineTo(0x5, 0x6);
            _0x2ef47d.bezierCurveTo(0x0, 10.2, 0x0, -10.2, 0x5, -0x6);
            _0x2ef47d.closePath();
            _0x2ef47d.fillStyle = "#fff";
            _0x2ef47d.fill();
            _0x2ef47d.stroke();
            _0x2ef47d.restore();
          }
          if (!_0x55f626 && this.gettingFucked || this.pooping) {
            let _0x111ae4 = Math.sin(Date.now() / 0x190 % Math.PI / 0x2);
            if (this.pooping) {
              const _0x2d8530 = 0x1 - Math.max(0x0, (_0x111ae4 - 0.5) / 0.5);
              const _0x3b50d3 = 0xa * _0x2d8530;
              const _0x5b938e = 0x6 * _0x2d8530;
              _0x2ef47d.save();
              _0x2ef47d.translate(-0xa - 0x11 * Math.sin(Math.min(0x1, _0x111ae4 / 0.5) * Math.PI / 0x2), 0x0);
              _0x2ef47d.globalAlpha = _0x2d8530;
              _0x2ef47d.beginPath();
              _0x2ef47d.moveTo(0x0, _0x5b938e);
              _0x2ef47d.bezierCurveTo(_0x3b50d3, _0x5b938e, _0x3b50d3, -_0x5b938e, 0x0, -_0x5b938e);
              _0x2ef47d.bezierCurveTo(-_0x3b50d3, -_0x5b938e, -_0x3b50d3, _0x5b938e, 0x0, _0x5b938e);
              _0x24408b("#a1522d");
              _0x2ef47d.restore();
            }
            const _0x7bcc32 = 0x1a * (0.5 + (this.pooping ? 0.05 * -Math.sin(_0x111ae4 * Math.PI) : 0x0));
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(0x0, 0x0, 0x1a, -Math.PI / 0x2, Math.PI / 0x2);
            _0x2ef47d.lineTo(-_0x7bcc32, 0x1a);
            _0x2ef47d.ellipse(-_0x7bcc32, 0x1a - _0x7bcc32, 13, _0x7bcc32, 0x0, Math.PI / 0x2, 0x3 * Math.PI / 0x2);
            _0x2ef47d.ellipse(-_0x7bcc32, -(0x1a - _0x7bcc32), 13, _0x7bcc32, 0x0, Math.PI / 0x2, 0x3 * Math.PI / 0x2);
            _0x2ef47d.closePath();
            _0x24408b();
          } else {
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(0x0, 0x0, 0x1a, 0x0, 0x2 * Math.PI);
            _0x24408b();
          }
          if ("Mole" === _0x37d11d) {
            _0x2ef47d.fillStyle = "#fff";
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(0xa, -9.5, 0x6, 0x0, 0x2 * Math.PI);
            _0x2ef47d.fill();
            _0x2ef47d.stroke();
            _0x2ef47d.beginPath();
            _0x2ef47d.arc(0xa, 9.5, 0x6, 0x0, 0x2 * Math.PI);
            _0x2ef47d.fill();
            _0x2ef47d.stroke();
          }
        }
        _0x2ef47d.restore();
        if ("Eye" === _0x37d11d) {
          _0x2ef47d.save();
          _0x2ef47d.translate(Math.cos(_0x1d4429) * _0x1dbd4d, Math.sin(_0x1d4429) * _0x1dbd4d);
          _0x2ef47d.beginPath();
          _0x2ef47d.moveTo(-0x14, 0x0);
          _0x2ef47d.quadraticCurveTo(0x0, 0x14, 0x14, 0x0);
          const _0x3baa09 = Date.now() / 0xbb8 % 0x1;
          _0x2ef47d.quadraticCurveTo(0x0, (_0x3baa09 > 0.9 ? 0x28 * Math.sin((_0x3baa09 - 0.9) / 0.1 * Math.PI) : 0x0) - 0x14, -0x14, 0x0);
          _0x24408b("#fff");
          _0x2ef47d.clip();
          _0x2ef47d.beginPath();
          _0x2ef47d.arc(0x3 * Math.cos(this.angle), Math.sin(this.angle), 0x8, 0x0, 0x2 * Math.PI);
          _0x24408b("#35354d");
          _0x2ef47d.restore();
        }
        function _0x24408b(_0x531959, _0x23256d) {
          _0x2ef47d.fillStyle = _0x531959 || _0x518f80.color;
          _0x2ef47d.fill();
          if (_0x23256d || _0x518f80.spawnImmunity) {
            const _0x1526c6 = 0.4 * (0.5 * Math.sin(Date.now() / 0x32) + 0.5);
            _0x2ef47d.fillStyle = "hsla(0, 0%, 100%, " + _0x1526c6 + ')';
            _0x2ef47d.fill();
          }
          _0x2ef47d.stroke();
        }
        _0x2ef47d.save();
        _0x2ef47d.translate(this.iOffsetX, this.iOffsetY);
        _0x2ef47d.rotate(_0x1d4429);
        _0x2ef47d.translate(_0x1dbd4d, 0x0);
        if ("Bush" === _0x37d11d) {
          _0x21f18d(_0x2ef47d, _0xca1cdc.gv.food, 0x23, this.isSnow, this.isDesert);
        } else if ("EMP" === _0x37d11d) {
          _0x2ef47d.beginPath();
          _0x2ef47d.arc(0x0, 0x0, 0xa, 0x0, 0x2 * Math.PI);
          _0x24408b("#b64168", this.empBlink);
        } else if ('Medic' === _0x37d11d) {
          _0x1b08f5(_0x2ef47d);
          _0x24408b("#b64168", 0x1 !== this.health);
        } else if ('Tree' === _0x37d11d) {
          _0x21f18d(_0x2ef47d, _0xca1cdc.gv.wood, 0x23, this.isSnow, this.isDesert);
        } else if ('Stone' === _0x37d11d) {
          _0x21f18d(_0x2ef47d, _0xca1cdc.gv.stone, 0x2d, this.isSnow, this.isDesert);
        } else if ("Cow" === _0x37d11d || "Piggy" === _0x37d11d || "Bear" === _0x37d11d) {
          _0x25bff0(_0x2ef47d, "skin_" + _0x37d11d, this.size, function (_0x216aea) {
            _0x216aea.save();
            const _0x8942ec = 1.25 * _0x518f80.size;
            _0x216aea.scale(_0x8942ec, _0x8942ec);
            _0x216aea.translate(-0x1, 0x0);
            _0x216aea.lineWidth /= _0x8942ec;
            if ("Piggy" === _0x37d11d) {
              _0x380447(_0x216aea);
            } else if ("Bear" === _0x37d11d) {
              _0x5f493d(_0x216aea);
            } else {
              _0x1ff507(_0x216aea);
            }
            _0x216aea.restore();
          }, 0x1);
        } else if ("Duck" === _0x37d11d) {
          _0x25bff0(_0x2ef47d, "skin_Duck", this.size, function (_0x562ae3) {
            _0x562ae3.save();
            const _0x25c813 = 1.75 * _0x518f80.size;
            _0x562ae3.scale(_0x25c813, _0x25c813);
            _0x562ae3.translate(-0.7, 0x0);
            _0x562ae3.lineWidth /= _0x25c813;
            _0x355c58(_0x562ae3);
            _0x562ae3.restore();
          }, 0x1);
        }
        _0x2ef47d.restore();
      }
      ["renderToTempCanvas"](_0x4078f5, _0xbbdff2 = false) {
        const _0x218234 = 0xd * this.size;
        const _0x268414 = Math.round(_0xbbdff2 || window.devicePixelRatio * _0x218234 * _0x407929);
        const _0x5016c7 = _0x268414 / 0x2;
        if (_0x272cb0.s !== _0x268414) {
          _0x272cb0.width = _0x272cb0.height = _0x268414;
          _0x272cb0.s = _0x268414;
        } else {
          _0x512d85.clearRect(0x0, 0x0, _0x268414, _0x268414);
        }
        _0x512d85.save();
        _0x512d85.translate(_0x5016c7, _0x5016c7);
        const _0x3f0572 = _0x268414 / _0x218234;
        _0x512d85.scale(_0x3f0572, _0x3f0572);
        this.drawOrig(_0x512d85);
        _0x512d85.restore();
        _0x4078f5.drawImage(_0x272cb0, -_0x218234 / 0x2, -_0x218234 / 0x2, _0x218234, _0x218234);
      }
      ["draw"](_0xc16dab) {
        const _0xa12567 = this.skin && "Pixel" === this.skin.name;
        _0xc16dab.save();
        _0xc16dab.translate(this.x, this.y);
        _0x5ea9f7(this, _0xc16dab);
        if (this.isDead) {
          this.interactionAlpha = 0x1;
          this.renderToTempCanvas(_0xc16dab);
        } else if (_0xa12567) {
          _0xc16dab.imageSmoothingEnabled = false;
          this.renderToTempCanvas(_0xc16dab, 0x24);
        } else if (this.isUnderground) {
          _0xc16dab.globalAlpha = 0.3;
          this.renderToTempCanvas(_0xc16dab);
        } else {
          this.drawOrig(_0xc16dab);
        }
        _0xc16dab.restore();
      }
    }
    const _0x556081 = new _0x29780a(-0x1, 0x0, 0x0, 0x0, 0x1, _0xca1cdc.ev[0x0], _0xca1cdc.uW[0x0]);
    _0x556081.size = 0x1e;
    const _0x5691f4 = [];
    for (let _0x1e5607 = 0x0; _0x1e5607 < _0xca1cdc.WM.length; _0x1e5607++) {
      const _0x191a2f = _0xca1cdc.WM[_0x1e5607];
      _0x319b7e.innerHTML = "\n\t<div class=\"skin\">\n\t\t<div class=\"skin-preview\"></div>\n\t\t<span stroke=\"" + _0x191a2f.name + "\"></span>\n\t\t<div class=\"btn shop-btn " + (0x0 === _0x191a2f.cost ? "claim-btn" : '') + "\">\n\t\t\t<div class=\"item-icon\"></div>\n\t\t\t<span stroke=\"" + (0x0 === _0x191a2f.cost ? "Claim" : _0x191a2f.cost.toLocaleString("en-US")) + "\"></span>\n\t\t</div>\n\t\t<div class=\"btn equip-btn\" style=\"display:none;\">\n\t\t\t<span stroke=\"Equip\"></span>\n\t\t</div>\n\t</div>\n\t";
      const _0x353555 = _0x319b7e.children[0x0];
      const _0x412125 = _0x353555.querySelector(".shop-btn");
      const _0x482cf6 = _0x353555.querySelector(".equip-btn");
      if (_0x191a2f.cost > 0x0) {
        _0x4a6994(_0x353555.querySelector(".item-icon"), _0xca1cdc.gv.goldStone);
      } else {
        _0x353555.querySelector('.item-icon').remove();
        _0x412125.style.backgroundColor = "#3ee354";
      }
      _0x1ff79d.appendChild(_0x353555);
      _0x5691f4.push(_0x353555);
      _0x353555.setOwned = function (_0x1323d3) {
        _0x412125.style.display = _0x1323d3 ? "none" : '';
        _0x482cf6.style.display = _0x1323d3 ? '' : "none";
        if (!_0x1323d3) {
          _0x353555.resetEquipBtn();
        }
      };
      _0x412125.onclick = function () {
        if (_0x4e3cab >= _0x191a2f.cost) {
          _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iBuySkin, _0x1e5607]));
        } else {
          _0x336d9a("Not enough gold");
        }
      };
      const _0x1cd0a6 = _0x482cf6.querySelector("span");
      _0x353555.resetEquipBtn = function () {
        _0x482cf6.classList.remove("active");
        _0x5a0152(_0x1cd0a6, "Equip");
      };
      _0x482cf6.onclick = function () {
        if (!_0x55bc78.classList.contains("show")) {
          return;
        }
        const _0x506a36 = _0x1ff79d.querySelector('.active');
        if (_0x506a36) {
          _0x506a36.parentNode.resetEquipBtn();
        }
        let _0x47c577 = 0x0;
        if (_0x506a36 !== this) {
          _0x5a0152(_0x1cd0a6, "Unequip");
          this.classList.add("active");
          _0x47c577 = _0x1e5607 + 0x1;
        }
        _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iChangeSkin, _0x47c577]));
      };
      const _0x508191 = _0x1fed73(_0x353555.querySelector('.skin-preview'), function (_0x43a375) {
        _0x556081.skin = _0xca1cdc.WM[_0x1e5607];
        if (_0x466240) {
          _0x556081.item = _0x466240.item;
          _0x556081.angle = _0x466240.angle;
          _0x556081.color = _0x466240.color;
          _0x556081.hitT = _0x466240.hitT;
          _0x556081.spawnImmunity = _0x466240.spawnImmunity;
          _0x556081.isSnow = _0x466240.isSnow;
          _0x556081.isDesert = _0x466240.isDesert;
          _0x556081.empBlink = _0x466240.empBlink;
          _0x556081.gettingFucked = _0x466240.gettingFucked;
          _0x556081.fucking = _0x466240.fucking;
        }
        _0x556081.draw(_0x43a375);
      });
      _0x508191.forceRender = true;
      _0x508191.scale = 0.4;
      let _0x546b42 = "Appearance";
      let _0x4b15cb = "#94fa50";
      if (_0x191a2f.special) {
        _0x546b42 = "Special";
        _0x4b15cb = "#40d1ff";
      }
      _0x319b7e.innerHTML = "\n\t<div class=\"tooltip\">\n\t\t<div class=\"tooltip-title\" stroke=\"" + _0x191a2f.name + "\"></div>\n\t\t<span stroke=\"" + _0x546b42 + "\" style=\"color: " + _0x4b15cb + "\"></span>\n\t\t<div class=\"tooltip-desc\" stroke=\"" + _0x191a2f.desc + "\"></div>\n\t</div>\n\t";
      _0x1ff79d.appendChild(_0x319b7e.children[0x0]);
    }
    const _0xadd137 = document.querySelector(".edit");
    const _0x332738 = _0xadd137.querySelector(".dialog-close");
    function _0x14bb9d() {
      _0x332738.click(_0x301307);
    }
    _0x332738.onclick = function () {
      _0xadd137.classList.remove("show");
      _0x58e927 = null;
    };
    const _0x2ac72a = document.querySelector('.display-text-input');
    _0x2ac72a.maxLength = _0xca1cdc.dJ;
    _0x2ac72a.oninput = function () {
      0x0;
      _0x6c932.displayText = _0xca1cdc.$p(this.value);
    };
    const _0x5d67e3 = document.querySelector('.edit-btn');
    _0x5d67e3.onclick = function () {
      if (_0x58e927) {
        if (!(_0x6c932 === _0x58e927.displayText && _0x3979c6 === _0x58e927.displayColorId)) {
          _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iDisplayEdit, _0x3979c6, ...new TextEncoder().encode(_0x6c932.displayText)]));
        }
        _0x14bb9d();
      }
    };
    const _0xecf35e = document.querySelector(".display-preview");
    const _0x6c932 = new _0x4a9c21(-0x1, _0xca1cdc.gv.display, 0x0, 0x0, 0x28, 0x0);
    !function () {
      const _0x3eea6d = _0x1fed73(_0xecf35e, function (_0x9abdbf) {
        if (_0x58e927) {
          _0x6c932.iOffsetX = _0x58e927.iOffsetX;
          _0x6c932.iOffsetY = _0x58e927.iOffsetY;
        }
        _0x6c932.draw(_0x9abdbf);
      });
      _0x3eea6d.forceRender = true;
      _0x3eea6d.scale = 0.4;
    }();
    let _0x3979c6 = 0x0;
    const _0x41c2c0 = document.querySelector('.display-colors');
    for (let _0x30c3d8 = 0x0; _0x30c3d8 < _0xca1cdc.zb.length; _0x30c3d8++) {
      const _0x28c4af = document.createElement("div");
      _0x28c4af.className = 'color';
      _0x28c4af.style.backgroundColor = _0xca1cdc.zb[_0x30c3d8];
      _0x28c4af.onclick = function () {
        const _0x24698a = _0x41c2c0.querySelector(".active");
        if (_0x24698a) {
          _0x24698a.classList.remove('active');
        }
        this.classList.add("active");
        _0x6c932.displayColor = _0xca1cdc.zb[_0x30c3d8];
        _0x3979c6 = _0x30c3d8;
      };
      _0x41c2c0.appendChild(_0x28c4af);
    }
    let _0x58e927 = null;
    window.onblur = function () {
      _0x4cfb62 = {};
      _0x5629b9();
    };
    let _0x334d8a = 0x0;
    function _0x965f53(_0x1d08b4) {
      if (_0x288a71) {
        return;
      }
      _0x334d8a = _0x1d08b4;
      const _0x3cc534 = new Uint8Array(0x2);
      _0x3cc534[0x0] = _0xca1cdc.wT.iAngle;
      0x0;
      _0x3cc534[0x1] = _0xca1cdc.eG(_0x334d8a);
      _0x2d5e24(_0x3cc534);
    }
    const _0x44a5f3 = [];
    0x0;
    const _0x31e8dc = _0xca1cdc.nH(0xbb8);
    for (let _0x56fb16 = 0x0; _0x56fb16 < 0xa; _0x56fb16++) {
      _0x2227b1(_0xca1cdc.gv.windmill, 0x2d, false, true);
      _0x2227b1(_0xca1cdc.gv.spike, 0x28, false, true);
      _0x2227b1(_0xca1cdc.gv.goldStone, 0x3c, true, true);
    }
    for (let _0x14ff14 = 0x0; _0x14ff14 < 0x14; _0x14ff14++) {
      _0x2227b1(_0xca1cdc.gv.food, 0x3c);
      _0x2227b1(_0xca1cdc.gv.stone, 0x3c);
      _0x2227b1(_0xca1cdc.gv.wood, 0x64);
    }
    function _0x597637(_0xda379, _0x5d4679, _0x30eca5 = false, _0x583f61 = _0xca1cdc.gv.spike) {
      for (let _0x1f023f = 0x0; _0x1f023f <= 0x6; _0x1f023f++) {
        const _0x27cbaa = (_0x31e8dc.river[0x1] - _0x31e8dc.river[0x0]) / 0xc;
        let _0x47d4b3;
        const _0x2bbad1 = [_0xda379, _0x31e8dc.river[0x0] + _0x1f023f * _0x27cbaa * 0x2];
        if (_0x30eca5) {
          const _0xffec92 = _0x2bbad1[0x0];
          _0x2bbad1[0x0] = _0x2bbad1[0x1];
          _0x2bbad1[0x1] = _0xffec92;
        }
        _0x47d4b3 = new _0x4a9c21(-0x1, _0xca1cdc.gv.platform, ..._0x2bbad1, _0x27cbaa, 0.1 * (0x2 * Math.random() - 0x1) + (_0x30eca5 ? 0x0 : Math.PI / 0x2));
        _0x44a5f3.push(_0x47d4b3);
        _0x47d4b3 = new _0x4a9c21(-0x1, _0x1f023f % 0x2 == 0x0 ? _0x583f61 : _0x5d4679, ..._0x2bbad1, 0.7 * _0x27cbaa, 0.1 * (0x2 * Math.random() - 0x1) + (_0x30eca5 ? 0x0 : Math.PI / 0x2));
        _0x44a5f3.push(_0x47d4b3);
      }
    }
    function _0x2227b1(_0x108693, _0x1f5b5a, _0x1c729a = true, _0x346971 = false) {
      let _0x1d03ef = Math.random() * 0xbb8;
      let _0x8ccf08 = Math.random() * 0xbb8;
      if (_0x346971) {
        for (; _0x1d03ef > _0x31e8dc.river[0x0] && _0x1d03ef < _0x31e8dc.river[0x1];) {
          _0x1d03ef = Math.random() * 0xbb8;
        }
        for (; _0x8ccf08 > _0x31e8dc.river[0x0] && _0x8ccf08 < _0x31e8dc.river[0x1];) {
          _0x8ccf08 = Math.random() * 0xbb8;
        }
      }
      const _0x522de4 = new _0x4a9c21(-0x1, _0x108693, _0x8ccf08, _0x1d03ef, _0x1c729a ? _0x1f5b5a * (0x1 + 0.1 * (0x2 * Math.random() - 0x1)) : _0x1f5b5a, Math.random() * Math.PI * 0x2);
      _0x44a5f3.push(_0x522de4);
    }
    _0x597637(1050, _0xca1cdc.gv.boostPad);
    _0x597637(1950, _0xca1cdc.gv.windmill, false);
    _0x597637(1050, _0xca1cdc.gv.boostPad, true, _0xca1cdc.gv.spike1);
    _0x597637(1950, _0xca1cdc.gv.wall, true, _0xca1cdc.gv.spike2);
    const _0x2e837c = document.querySelector(".spin");
    _0x2e837c.onclick = function () {
      _0x2e837c.classList.add('loading');
      _0x363ce2();
    };
    let _0x37ddaf = null;
    function _0x363ce2() {
      if (undefined !== aiptag.adplayer) {
        _0x37ddaf = 0x45;
        aiptag.cmd.player.push(function () {
          aiptag.adplayer.startPreRoll();
        });
      } else {
        window.aip_complete('adplayer-not-found');
      }
    }
    function _0x58ea49() {
      const _0x4a04b8 = ['wood', 'goldStone', 'food', "stone", "goldStone"];
      const _0x18cb45 = [];
      for (let _0x383124 = 0x0; _0x383124 < _0x4a04b8.length; _0x383124++) {
        for (let _0x6f81d5 = 0x0; _0x6f81d5 < 0x4; _0x6f81d5++) {
          const _0x1f08eb = new _0x4a9c21(-0x1, _0xca1cdc.gv[_0x4a04b8[_0x383124]], (0x2 * Math.random() - 0x1) * 0x64, (0x2 * Math.random() - 0x1) * 0x64, 0x23, 6.28 * Math.random());
          _0x1f08eb.rDir = Math.random() > 0.5 ? 0x1 : -0x1;
          _0x18cb45.push(_0x1f08eb);
        }
      }
      const _0x4f3f15 = _0x1fed73(_0x2e837c, function (_0x139390) {
        for (let _0x41a42a = 0x0; _0x41a42a < _0x18cb45.length; _0x41a42a++) {
          const _0x40b77f = _0x18cb45[_0x41a42a];
          if (_0x588741 < 0x64) {
            _0x40b77f.angle += _0x40b77f.rDir * _0x588741 / 0x5dc;
            const _0x33aeab = _0x40b77f.angle;
            _0x40b77f.x += Math.sin(_0x33aeab) * _0x588741 / 0x64;
            _0x40b77f.y += Math.cos(_0x33aeab) * _0x588741 / 0x64;
            _0x40b77f.x = Math.min(0x64, Math.max(-0x64, _0x40b77f.x));
            _0x40b77f.y = Math.min(0x64, Math.max(-0x64, _0x40b77f.y));
          }
          _0x40b77f.draw(_0x139390, false);
        }
        if (_0x2e837c.classList.contains("loading")) {
          _0x139390.fillStyle = 'rgba(0,0,0,0.35)';
          _0x139390.fillRect(-0xc8, -0xc8, 0x190, 0x190);
        }
      });
      _0x4f3f15.forceRender = true;
      _0x4f3f15.scale = 0.3;
      _0x2e837c.style.position = '';
    }
    window.aip_complete = function (_0x4d0131) {
      console.log("Preroll state: " + _0x4d0131);
      if ('video-ad-skipped' === _0x4d0131 || _0x4d0131.indexOf("complete") > -0x1) {
        if (null !== _0x37ddaf) {
          _0x336d9a("Requesting reward...");
          _0x2d5e24(new Uint8Array([_0xca1cdc.wT.iReqMats]));
        }
      } else {
        alert("Ad failed to load. Try again later. Disable your ad blocker if you have any.\nMessage: " + _0x4d0131);
      }
      _0x2e837c.classList.remove("loading");
      _0x37ddaf = null;
    };
    _0x58ea49();
    const _0x2f4f44 = _0x36f10d('rgba(0,0,0,0.08)');
    const _0xdb486d = _0x36f10d('hsla(0,0%,100%,0.015)');
    const _0x501146 = _0x36f10d("#b64168");
    function _0x36f10d(_0x2fbd0c) {
      const _0x5e524d = document.createElement("canvas");
      _0x5e524d.width = _0x5e524d.height = 0x24;
      const _0x324792 = _0x5e524d.getContext('2d');
      _0x324792.beginPath();
      _0x324792.lineWidth = 0x2;
      _0x324792.moveTo(0x12, 0x0);
      _0x324792.lineTo(0x12, 0x24);
      _0x324792.moveTo(0x0, 0x12);
      _0x324792.lineTo(0x24, 0x12);
      _0x324792.strokeStyle = _0x2fbd0c;
      _0x324792.stroke();
      return _0x324792.createPattern(_0x5e524d, "repeat");
    }
    let _0x4e1609 = Date.now();
    let _0x24cd3b = _0x4e1609;
    let _0x588741 = 0x0;
    let _0x41d115 = _0x4e1609;
    let _0x7cbbaf = 0x0;
    let _0x1747b3 = 0x0;
    function _0x3a0767(_0x5f4dca, _0x5c23a9, _0x3d0653) {
      _0x5f4dca.style.left = _0x5c23a9 / _0xca1cdc.Cn * 0x64 + '%';
      _0x5f4dca.style.top = _0x3d0653 / _0xca1cdc.Cn * 0x64 + '%';
    }
    let _0xbf2965 = 0x1;
    let _0x5990d9;
    const _0x326599 = document.querySelector(".hover-info");
    function _0x33fe26() {
      if (!_0x140818.classList.contains("show")) {
        return;
      }
      let _0x32f54b = _0x2ffc7c - _0x4e1609;
      if (_0x32f54b < 0x0) {
        _0x32f54b = '00';
      } else {
        _0x32f54b /= 0x3e8;
        _0x32f54b = Math.ceil(_0x32f54b);
        if (_0x32f54b < 0xa) {
          _0x32f54b = '0' + _0x32f54b;
        }
      }
      _0x5a0152(_0x4a9468, '0:' + _0x32f54b);
    }
    function _0x3c0ef4() {
      _0x3e9dde.updateColor();
      _0x491858.updateColor();
      if (_0x1a94b3.classList.contains("show")) {
        if (!_0x16260c.classList.contains('ads-shrink')) {
          _0x16260c.classList.add("ads-shrink");
        }
      } else if (_0x16260c.classList.contains('ads-shrink')) {
        _0x16260c.classList.remove('ads-shrink');
      }
      _0x8d9d8d.style.cursor = '';
      _0x326599.style.display = "none";
      let _0x5e64d3 = true;
      if (_0x466240) {
        const _0x2c09da = _0x466240.item;
        if (_0x2c09da && (_0x2c09da.woodCost && _0x475a45 < _0x2c09da.woodCost || _0x2c09da.stoneCost && _0x505bb2 < _0x2c09da.stoneCost || _0x2c09da.foodCost && _0x5cb651 < _0x2c09da.foodCost || _0x2c09da.goldCost && _0x4e3cab < _0x2c09da.goldCost)) {
          _0x5e64d3 = false;
          if (!_0x5990d9) {
            _0x5990d9 = _0x336d9a("Not enough resources to use this weapon.", false);
          }
        }
      }
      if (_0x5990d9 && _0x5e64d3) {
        _0x5990d9.dispose();
        _0x5990d9 = null;
      }
      const _0xc2a45 = _0x466240 && _0x466240.skin && _0x466240.skin.viewScale || 0x1;
      _0x425825 += 0.1 * (0x1 / _0xc2a45 - _0x425825);
      _0xbf2965 = _0xc2a45;
      if (_0x27bb89) {
        const _0x8e9379 = Date.now() / 0x50;
        const _0x431c63 = 0x4 * Math.sin(_0x8e9379);
        const _0x2a27db = 0.1 * Math.abs(Math.sin(_0x8e9379 / 0x4)) + 0.9;
        _0x387afe.style.transform = "rotate(" + _0x431c63 + "deg) scale(" + _0x2a27db + ')';
      } else {
        _0x387afe.style.transform = "none";
      }
      for (let _0x12af53 in _0x526951) if (_0x526951[_0x12af53].used) {
        _0x526951[_0x12af53].used = false;
      } else {
        delete _0x526951[_0x12af53];
      }
      _0x4e1609 = Date.now();
      _0x588741 = _0x4e1609 - _0x24cd3b;
      _0x24cd3b = _0x4e1609;
      _0x33fe26();
      if ('' === _0x2fc9ad.style.display && _0x4e1609 - _0x41d115 > 0x2710) {
        _0x438014();
        _0x41d115 = _0x4e1609;
      }
      for (let _0x268450 = 0x0; _0x268450 < _0x478b1f.length; _0x268450++) {
        _0x478b1f[_0x268450].update();
      }
      const _0x1435a4 = _0x466240 || _0xe200d0;
      _0x3627a2.style.display = _0x1435a4 ? '' : "none";
      if (_0x1435a4) {
        _0x1435a4.update();
        _0x7cbbaf = _0x1435a4.x;
        _0x1747b3 = _0x1435a4.y;
        _0x3a0767(_0x3627a2, _0x7cbbaf, _0x1747b3);
      }
      if (_0x466240) {
        _0x466240.angle = _0x334d8a;
      }
      for (let _0x13cd53 = 0x0; _0x13cd53 < _0x5a712e.length; _0x13cd53++) {
        const _0x4a30c1 = _0x5a712e[_0x13cd53];
        if (_0x4a30c1 !== _0x1435a4 && _0x4a30c1.update) {
          _0x4a30c1.update();
        }
      }
      for (let _0x1ecf3f in _0x19c005) {
        const _0x4440eb = _0x19c005[_0x1ecf3f];
        if (_0x4440eb.player) {
          _0x3a0767(_0x4440eb.dotEl, _0x4440eb.player.x, _0x4440eb.player.y);
        }
        _0x4440eb.dotEl.style.display = _0x4440eb.player && _0x4440eb.player !== _0x466240 ? '' : "none";
      }
      _0x17b196();
      window.requestAnimationFrame(_0x3c0ef4);
    }
    let _0x22435a = 6.28 * Math.random();
    let _0x10006c = _0xca1cdc.UA;
    let _0x2c4f4f = "true" === _0x3cbef9.nightMode;
    let _0x4ecdc6 = true;
    const _0x2640a8 = document.createElement("canvas");
    const _0x16588c = _0x2640a8.getContext('2d');
    const _0xc2d9c8 = document.createElement("canvas");
    const _0x18c6ff = _0xc2d9c8.getContext('2d');
    let _0x92313 = false;
    const _0x516fef = Math.acos(0.5);
    function _0x17b196() {
      for (let _0x4d2257 = 0x0; _0x4d2257 < _0x271eca.length; _0x4d2257++) {
        _0x271eca[_0x4d2257].resize();
      }
      _0x199cff = Date.now() / 0x190 % Math.PI;
      const _0x31a6aa = '' === _0x2fc9ad.style.display;
      _0x10006c = _0xca1cdc.UA;
      let _0x20f126 = _0xca1cdc.KN;
      let _0x181fe7 = _0x5a712e;
      if (_0x31a6aa) {
        _0x20f126 = 0xbb8;
        _0x181fe7 = _0x44a5f3;
        _0x22435a += 0.002;
        _0x7cbbaf = 0x1f4 * Math.cos(_0x22435a) + _0x20f126 / 0x2;
        _0x1747b3 = 0x320 * Math.sin(_0x22435a) + _0x20f126 / 0x2;
        _0x10006c = _0x31e8dc;
      }
      _0xec6bff.beginPath();
      _0xec6bff.fillStyle = "#b8dd68";
      _0xec6bff.fillRect(0x0, 0x0, _0x8d9d8d.width, _0x8d9d8d.height);
      _0xec6bff.save();
      _0x59c7bf();
      _0xec6bff.fillStyle = '#c6eeec';
      _0xec6bff.fillRect(-0x3e8 + _0x7cbbaf, -0x3e8, _0x20f126 + 2000, _0x10006c.snow + 0x3e8);
      _0xec6bff.fillStyle = '#ddda80';
      _0xec6bff.fillRect(-0x3e8 + _0x7cbbaf, _0x10006c.desert, _0x20f126 + 2000, _0x20f126 - _0x10006c.desert + 10000);
      const _0x126f9b = (0.5 * Math.sin(Date.now() / 0x3e8) + 0.5) * 0x28 * 0.5;
      _0xec6bff.beginPath();
      _0xec6bff.moveTo(-0x3e8 + _0x7cbbaf, _0x10006c.river[0x0] - 0x28);
      _0xec6bff.lineTo(_0x20f126 + 0x3e8 + _0x7cbbaf, _0x10006c.river[0x0] - 0x28);
      _0xec6bff.lineTo(_0x20f126 + 0x3e8 + _0x7cbbaf, _0x10006c.river[0x1] + 0x28);
      _0xec6bff.lineTo(-0x3e8 + _0x7cbbaf, _0x10006c.river[0x1] + 0x28);
      _0xec6bff.closePath();
      _0xec6bff.fillStyle = '#ddda80';
      _0xec6bff.fill();
      _0xec6bff.beginPath();
      _0xec6bff.moveTo(_0x10006c.river[0x0] - 0x28, -0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x0] - 0x28, _0x20f126 + 0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x1] + 0x28, _0x20f126 + 0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x1] + 0x28, -0x3e8 + _0x1747b3);
      _0xec6bff.closePath();
      _0xec6bff.fillStyle = '#ddda80';
      _0xec6bff.fill();
      _0xec6bff.beginPath();
      _0xec6bff.moveTo(-0x3e8 + _0x7cbbaf, _0x10006c.river[0x0] - _0x126f9b);
      _0xec6bff.lineTo(_0x20f126 + 0x3e8 + _0x7cbbaf, _0x10006c.river[0x0] - _0x126f9b);
      _0xec6bff.lineTo(_0x20f126 + 0x3e8 + _0x7cbbaf, _0x10006c.river[0x1] + _0x126f9b);
      _0xec6bff.lineTo(-0x3e8 + _0x7cbbaf, _0x10006c.river[0x1] + _0x126f9b);
      _0xec6bff.closePath();
      _0xec6bff.fillStyle = '#4cd3d1';
      _0xec6bff.fill();
      _0xec6bff.beginPath();
      _0xec6bff.moveTo(_0x10006c.river[0x0] - _0x126f9b, -0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x0] - _0x126f9b, _0x20f126 + 0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x1] + _0x126f9b, _0x20f126 + 0x3e8 + _0x1747b3);
      _0xec6bff.lineTo(_0x10006c.river[0x1] + _0x126f9b, -0x3e8 + _0x1747b3);
      _0xec6bff.closePath();
      _0xec6bff.fillStyle = '#4cd3d1';
      _0xec6bff.fill();
      const _0x1241df = !_0x31a6aa && _0x3a5abd.length > 0x0;
      if (_0x1241df) {
        _0xec6bff.restore();
      } else {
        _0xec6bff.beginPath();
        _0xec6bff.rect(0x0, 0x0, _0x20f126, _0x20f126);
        _0xec6bff.restore();
        _0xec6bff.rect(0x0, 0x0, _0x8d9d8d.width, _0x8d9d8d.height);
        _0xec6bff.fillStyle = "rgba(0,0,0,0.1)";
        _0xec6bff.fill('evenodd');
      }
      if (_0x1241df) {
        if (_0xc2d9c8.width !== _0x8d9d8d.width || _0xc2d9c8.height !== _0x8d9d8d.height) {
          _0xc2d9c8.width = _0x8d9d8d.width;
          _0xc2d9c8.height = _0x8d9d8d.height;
        } else {
          _0x18c6ff.clearRect(0x0, 0x0, _0xc2d9c8.width, _0xc2d9c8.height);
        }
        _0x18c6ff.fillStyle = "rgba(0,0,0,0.1)";
        _0x18c6ff.fillRect(0x0, 0x0, _0xc2d9c8.width, _0xc2d9c8.height);
        _0x18c6ff.save();
        _0x18c6ff.globalCompositeOperation = "destination-out";
        _0x59c7bf(_0x18c6ff);
        _0x18c6ff.beginPath();
        _0x18c6ff.rect(0x0, 0x0, _0xca1cdc.Cn, _0xca1cdc.Cn);
        _0x18c6ff.clip();
        _0x18c6ff.beginPath();
        _0x18c6ff.rect(0x0, 0x0, _0x20f126, _0x20f126);
        for (let _0x33f8c0 = 0x0; _0x33f8c0 < _0x3a5abd.length; _0x33f8c0++) {
          const _0x3e97a9 = _0x3a5abd[_0x33f8c0];
          _0x4b3b38(_0x18c6ff, _0x3e97a9.x, _0x3e97a9.y, _0x3e97a9.size);
        }
        _0x18c6ff.fillStyle = '#000';
        _0x18c6ff.fill();
        _0x18c6ff.restore();
        _0xec6bff.drawImage(_0xc2d9c8, 0x0, 0x0);
      }
      _0xec6bff.save();
      if (_0x2c4f4f) {
        _0xec6bff.fillStyle = "rgba(0,0,0,0.82)";
        _0xec6bff.fillRect(0x0, 0x0, _0x8d9d8d.width, _0x8d9d8d.height);
      }
      _0xec6bff.fillStyle = _0x2c4f4f ? _0xdb486d : _0x2f4f44;
      _0xec6bff.beginPath();
      _0xec6bff.rect(0x0, 0x0, _0x8d9d8d.width, _0x8d9d8d.height);
      _0x59c7bf();
      _0xec6bff.fill();
      _0xec6bff.restore();
      const _0x385e70 = [];
      for (let _0x5553bd = _0x181fe7.length - 0x1; _0x5553bd >= 0x0; _0x5553bd--) {
        const _0x501e77 = _0x181fe7[_0x5553bd];
        if (!(_0x501e77.type !== _0xca1cdc.gv.blocker || _0x501e77.isDead)) {
          _0x385e70.push(_0x501e77);
        }
      }
      if (_0x385e70.length > 0x0) {
        if (_0x2640a8.width !== _0x8d9d8d.width || _0x2640a8.height !== _0x8d9d8d.height) {
          _0x2640a8.width = _0x8d9d8d.width;
          _0x2640a8.height = _0x8d9d8d.height;
        } else {
          _0x16588c.clearRect(0x0, 0x0, _0x8d9d8d.width, _0x8d9d8d.height);
        }
        _0x16588c.save();
        _0x59c7bf(_0x16588c);
        _0x16588c.beginPath();
        for (let _0x33749b = 0x0; _0x33749b < _0x385e70.length; _0x33749b++) {
          const _0x5a082b = _0x385e70[_0x33749b];
          _0x4b3b38(_0x16588c, _0x5a082b.x, _0x5a082b.y, _0xca1cdc.y1);
        }
        _0x16588c.strokeStyle = "#b64168";
        _0x16588c.lineWidth = 0x6;
        _0x16588c.stroke();
        _0x16588c.globalCompositeOperation = 'destination-out';
        _0x16588c.fillStyle = "#000";
        _0x16588c.fill();
        _0x16588c.globalCompositeOperation = "source-over";
        _0x16588c.fillStyle = _0x501146;
        _0x16588c.fill();
        _0x16588c.restore();
        _0xec6bff.drawImage(_0x2640a8, 0x0, 0x0);
      }
      _0xec6bff.save();
      _0x59c7bf();
      for (let _0x34df7a = _0x181fe7.length - 0x1; _0x34df7a >= 0x0; _0x34df7a--) {
        const _0x4af077 = _0x181fe7[_0x34df7a];
        _0x4af077.inView = true;
        const _0x38183f = _0x4af077.x - _0x7cbbaf;
        const _0x46aff5 = _0x4af077.y - _0x1747b3;
        const _0x1950af = 0x2 * _0x4af077.size;
        const _0x2df28c = _0xbf2965;
        if (_0x38183f + _0x1950af < -_0xca1cdc.e1 * _0x2df28c || _0x38183f - _0x1950af > _0xca1cdc.e1 * _0x2df28c || _0x46aff5 + _0x1950af < -_0xca1cdc.BR * _0x2df28c || _0x46aff5 - _0x1950af > _0xca1cdc.BR * _0x2df28c) {
          _0x4af077.inView = false;
        }
        if (_0x466240) {
          const _0x1706bd = _0x4af077.nx - _0x466240.nx;
          const _0x2055c1 = _0x4af077.ny - _0x466240.ny;
          const _0x15276d = _0x4af077.size;
          const _0x3bd667 = _0xbf2965;
          if ((_0x1706bd + _0x15276d < -_0xca1cdc.e1 * _0x3bd667 || _0x1706bd - _0x15276d > _0xca1cdc.e1 * _0x3bd667 || _0x2055c1 + _0x15276d < -_0xca1cdc.BR * _0x3bd667 || _0x2055c1 - _0x15276d > _0xca1cdc.BR * _0x3bd667) && _0x4af077.isDead) {
            _0x4af077.dieT = 0x2710;
          }
        }
        if (_0x4af077.dieT >= 0x1) {
          _0x181fe7.splice(_0x34df7a, 0x1);
        } else if (_0x4af077.isUnderground && _0x4af077.inView) {
          _0x4af077.draw(_0xec6bff);
        }
      }
      for (let _0x490814 of _0xca1cdc.SD) for (let _0x5adbb7 = 0x0; _0x5adbb7 < _0x181fe7.length; _0x5adbb7++) {
        const _0x44473d = _0x181fe7[_0x5adbb7];
        if (_0x44473d.type === _0x490814 && !_0x44473d.isUnderground && _0x44473d.inView) {
          _0x44473d.draw(_0xec6bff);
        }
      }
      for (let _0xbe8d73 = _0xff52b.length - 0x1; _0xbe8d73 >= 0x0; _0xbe8d73--) {
        const _0x5078f1 = _0xff52b[_0xbe8d73];
        _0x5078f1.t += _0x588741 / 0x1f4;
        if (_0x5078f1.t < 0x0) {
          continue;
        }
        if (_0x5078f1.t >= 0x1) {
          _0xff52b.splice(_0xbe8d73, 0x1);
          continue;
        }
        const _0x2b04d8 = _0x5078f1.t;
        const _0x9e24ee = Math.min(0x1, _0x2b04d8 / 0.5) * _0x5078f1.r;
        const _0xb6c2d3 = Math.max(0x0, (_0x2b04d8 - 0.5) / 0.5) * _0x5078f1.r * 0x2;
        _0xec6bff.save();
        _0xec6bff.beginPath();
        _0xec6bff.arc(_0x5078f1.x, _0x5078f1.y, 0.95 * _0x9e24ee, 0x0, 0x2 * Math.PI);
        _0xec6bff.clip();
        _0xec6bff.beginPath();
        _0xec6bff.arc(_0x5078f1.xx, _0x5078f1.yy, _0xb6c2d3, 0x0, 0x2 * Math.PI);
        _0xec6bff.arc(_0x5078f1.x, _0x5078f1.y, _0x9e24ee, 0x0, 0x2 * Math.PI);
        _0xec6bff.fillStyle = _0x5078f1.col;
        _0xec6bff.fill("evenodd");
        _0xec6bff.restore();
      }
      if (_0x92313) {
        _0xec6bff.beginPath();
        for (let _0x9e8bd6 = 0x0; _0x9e8bd6 < _0x181fe7.length; _0x9e8bd6++) {
          const _0x184f4b = _0x181fe7[_0x9e8bd6];
          if (!_0x184f4b.isDead) {
            _0x4b3b38(_0xec6bff, _0x184f4b.x, _0x184f4b.y, _0x184f4b.size);
          }
        }
        _0xec6bff.lineWidth = 0x2;
        _0xec6bff.strokeStyle = 'blue';
        _0xec6bff.stroke();
        _0xec6bff.beginPath();
        for (let _0x12bb14 = 0x0; _0x12bb14 < _0x181fe7.length; _0x12bb14++) {
          const _0x1a35e2 = _0x181fe7[_0x12bb14];
          if (!_0x1a35e2.isDead && _0x1a35e2.isActualPlayer && _0x1a35e2.wasVis && _0x1a35e2.item && _0x1a35e2.item.isWeapon) {
            const _0x8a606f = _0x1a35e2.angle - _0x516fef;
            const _0x3b6180 = _0x8a606f + 0x2 * _0x516fef;
            _0xec6bff.moveTo(_0x1a35e2.x, _0x1a35e2.y);
            _0xec6bff.arc(_0x1a35e2.x, _0x1a35e2.y, 0x3 * _0x1a35e2.size * _0x1a35e2.item.range, _0x8a606f, _0x3b6180);
            _0xec6bff.lineTo(_0x1a35e2.x, _0x1a35e2.y);
          }
        }
        _0xec6bff.strokeStyle = 'red';
        _0xec6bff.stroke();
      }
      for (let _0x4ae903 = 0x0; _0x4ae903 < _0x181fe7.length; _0x4ae903++) {
        const _0x39da31 = _0x181fe7[_0x4ae903];
        if (_0x39da31.isPlayer && _0x39da31.inView) {
          _0x39da31.drawNickAndHp(_0xec6bff);
        }
      }
      _0xec6bff.textAlign = "center";
      _0xec6bff.textBaseline = "bottom";
      _0xec6bff.font = "bolder 22px " + _0x25cda0;
      _0xec6bff.lineWidth = 0x4;
      _0xec6bff.strokeStyle = "#333";
      for (let _0x264421 = _0x3f3f7d.length - 0x1; _0x264421 >= 0x0; _0x264421--) {
        const _0x14b42a = _0x3f3f7d[_0x264421];
        _0x14b42a.t += _0x588741 / 0x3e8;
        if (_0x14b42a.t >= 0x1) {
          _0x3f3f7d.splice(_0x264421, 0x1);
          continue;
        }
        _0xec6bff.save();
        _0xec6bff.fillStyle = _0x14b42a.color;
        const _0x493195 = _0x14b42a.t;
        const _0x197628 = _0x493195 < 0.2 ? _0x493195 / 0.2 : 0x1;
        const _0x5de942 = _0x493195 > 0.1 ? (_0x493195 - 0.1) / 0.9 : 0x0;
        _0xec6bff.translate(_0x14b42a.x, _0x14b42a.y - 0x96 * _0x5de942);
        const _0xe104 = 0x1 * (0x1 - _0x197628) + (0x1 - (_0x493195 > 0.9 ? (_0x493195 - 0.9) / 0.1 : 0x0));
        _0xec6bff.scale(_0xe104, _0xe104);
        _0x100ad8(_0xec6bff, _0x14b42a.text, _0xec6bff.font, 0x16, "#fff");
        _0xec6bff.restore();
      }
      _0xec6bff.restore();
    }
    function _0x59c7bf(_0x4d7fdc = _0xec6bff) {
      _0x4d7fdc.translate(_0x8d9d8d.width / 0x2, _0x8d9d8d.height / 0x2);
      _0x4d7fdc.scale(_0x2bf030 * _0x425825, _0x2bf030 * _0x425825);
      _0x4d7fdc.translate(-_0x7cbbaf, -_0x1747b3);
    }
    document.querySelector(".loader").style.display = "none";
    _0x16e599.classList.add('show');
    _0x1ace53(false);
    const _0x202015 = {
      'eu_ffa': {
        'name': "EU #1",
        'url': "wss://eu.poopoo.pro",
        'color': "rgb(208, 135, 255)"
      },
      'eu_ffa2': {
        'name': "EU #2",
        'url': "wss://eu2.poopoo.pro",
        'color': "rgb(135, 163, 255)"
      },
      'us_ffa': {
        'name': "US #1",
        'url': 'wss://us.poopoo.pro',
        'color': "rgb(112 255 120)"
      },
      'us_ffa2': {
        'name': "US #2",
        'url': "wss://us2.poopoo.pro",
        'color': "rgb(253 252 111)"
      }
    };
    const _0xeeb3f3 = document.querySelector(".server-area");
    let _0x36f0c2 = 0x0;
    for (let _0x21c2da in _0x202015) {
      const _0x2362a8 = _0x202015[_0x21c2da];
      const _0x311469 = document.createElement("div");
      _0x311469.className = "btn";
      const _0x251f89 = document.createElement("span");
      _0x251f89.setAttribute("stroke", _0x2362a8.name);
      _0x311469.appendChild(_0x251f89);
      const _0x9a36fd = document.createElement("span");
      _0x9a36fd.className = "small";
      _0x2362a8.userCount = 0x0;
      _0x2362a8.setUserCount = function (_0x14b4af) {
        _0x36f0c2 -= _0x2362a8.userCount;
        _0x2362a8.userCount = _0x14b4af;
        _0x36f0c2 += _0x14b4af;
        _0x5a0152(_0x9a36fd, _0x14b4af + " " + 'user' + (0x1 === _0x14b4af ? '' : 's'));
        _0x311469.appendChild(_0x9a36fd);
        _0x5a0152(_0x351279, "(total " + (_0x36f0c2 + " " + "user" + (0x1 === _0x36f0c2 ? '' : 's')) + " online)");
      };
      _0x2362a8.hideUserCount = function () {
        _0x2362a8.setUserCount(0x0);
        _0x9a36fd.remove();
      };
      _0x311469.style.backgroundColor = _0x2362a8.color;
      _0xeeb3f3.appendChild(_0x311469);
      _0x311469.onclick = function () {
        const _0x3ad154 = _0xeeb3f3.querySelector(".active");
        if (_0x3ad154 !== _0x311469) {
          if (_0x3ad154) {
            _0x3ad154.classList.remove("active");
          }
          this.classList.add('active');
          _0x101619(_0x2362a8.url);
          _0x3cbef9.server = _0x21c2da;
        }
      };
      _0x2362a8.el = _0x311469;
    }
    const _0x351279 = document.createElement("span");
    function _0x438014() {
      for (let _0x581feb in _0x202015) {
        const _0xb05561 = _0x202015[_0x581feb];
        fetch(_0xb05561.url.replace("wss", "https") + "/userCount").then(_0x3545b7 => _0x3545b7.text()).then(_0x5cfb13 => {
          const _0x4ce98a = parseInt(_0x5cfb13);
          if (isNaN(_0x5cfb13)) {
            throw new Error("bad response");
          }
          _0xb05561.setUserCount(_0x4ce98a);
        })['catch'](_0x286864 => {
          _0xb05561.setUserCount(0x0);
        });
      }
    }
    _0x351279.className = "small full";
    _0xeeb3f3.appendChild(_0x351279);
    _0x438014();
    if (window.isDevelopmentMode) {
      _0x46310f(window.location.origin.replace('http', 'ws'));
    } else {
      const _0x2c9145 = _0x202015[_0x3cbef9.server];
      if (_0x2c9145) {
        _0x2c9145.el.click(_0x301307);
      } else {
        let _0xd4925d = 'EU';
        fetch('https://ipapi.co/json/').then(_0x5b7e53 => _0x5b7e53.json()).then(_0x48f43f => {
          if (['NA', 'SA'].includes(_0x48f43f.continent_code)) {
            _0xd4925d = 'US';
          }
        })["catch"](_0x46f6f1 => {
          console.log("Failed to find region.");
        })["finally"](function () {
          const _0x234d32 = [];
          for (let _0x145bad in _0x202015) {
            const _0x553504 = _0x202015[_0x145bad];
            if (_0x553504.name.startsWith(_0xd4925d)) {
              _0x234d32.push(_0x553504);
            }
          }
          const _0x52c407 = _0x234d32[Math.floor(Math.random() * _0x234d32.length)] || _0x202015.eu_ffa;
          console.log("Region: " + _0xd4925d + "\nServer: " + _0x52c407.name);
          _0x52c407.el.click(_0x301307);
        });
      }
    }
    function _0x101619(_0x19ace7) {
      clearTimeout(_0x17c629);
      _0x39b6a5();
      _0x419dc9 = {
        'url': _0x19ace7
      };
      _0x226ba6(true);
    }
    window.connect = _0x101619;
    _0x17eee1.style.display = _0x1e6d5b.style.display = 'none';
    _0x2fc9ad.appendChild(_0x3ea805);
// === AUTOPLAY BOT ===
    const autoplayBot = {
        active: false,
        targetX: 0,
        targetY: 0,
        path: [],
        lastPathTime: 0,
        gridSize: 100, // Coarse grid for fast A* processing
        mapSize: _0xca1cdc.KN || 10000, 
        gridOffset: 1000, // Expanded bounds to allow pathfinding outside the map
        
        // Stream variables
        streamTargetId: null,
        lastStreamTime: 0,
        streamInterval: 5000, // 5 seconds (standard server gift throttle)

        // AutoEMP variables
        autoEmpActive: false,
        isEmpForced: false,
        prevHatId: -1,

        // Resolves the ID of the Bat (best for digging)
        getBatId: function() {
            for (let i = 0; i < _0xca1cdc.ev.length; i++) {
                if (_0xca1cdc.ev[i] && _0xca1cdc.ev[i].name === "Bat") return _0xca1cdc.ev[i].id;
            }
            return 2; // Fallback ID
        },

        // Coordinate to Grid conversions
        worldToGrid: function(val) {
            return Math.floor((val + this.gridOffset) / this.gridSize);
        },
        gridToWorld: function(val) {
            return (val * this.gridSize) - this.gridOffset + (this.gridSize / 2);
        },

        handleCommand: function(msg) {
            let parts = msg.trim().split(" ");
            let cmd = parts[0].toLowerCase();

            if (cmd === "/goto" && parts.length >= 3) {
                this.targetX = parseFloat(parts[1]);
                this.targetY = parseFloat(parts[2]);
                this.active = true;
                _0x336d9a("Autoplay: Navigating to " + this.targetX + ", " + this.targetY);
            } 
            else if (cmd === "/stop") {
                this.active = false;
                this.streamTargetId = null; // Stop streaming too
                this.autoEmpActive = false; // Stop AutoEMP
                this.resetKeys();
                _0x336d9a("Autoplay: Stopped");
            } 
            else if (cmd === "/leave" && parts.length >= 2) {
                let targetId = parseInt(parts[1]);
                if (!isNaN(targetId)) {
                    if (this.sendGift(targetId, 1.0)) { // 100% gift
                        _0x336d9a("Gifted mats. Reconnecting...");
                        setTimeout(() => {
                            if (_0x419dc9 && _0x419dc9.url) {
                                window.connect(_0x419dc9.url);
                            }
                        }, 100);
                    }
                }
            }
            else if (cmd === "/stream" && parts.length >= 2) {
                let targetId = parseInt(parts[1]);
                if (!isNaN(targetId)) {
                    let members = _0x311e82.children;
                    if (members.length <= 1 || targetId < 0 || targetId >= members.length || members[targetId].isMe) {
                        _0x336d9a("Stream Refused: Invalid clan member.");
                    } else {
                        this.streamTargetId = targetId;
                        this.lastStreamTime = 0; // Force immediate first gift
                        _0x336d9a("Autoplay: Streaming mats to member " + targetId);
                    }
                }
            }
            else if (cmd === "/gift" && parts.length >= 2) {
                let targetId = parseInt(parts[1]);
                let pct = parts.length >= 3 ? parseFloat(parts[2]) : 50; // default 50%
                if (isNaN(pct) || pct <= 0 || pct > 100) pct = 50;
                
                if (!isNaN(targetId)) {
                    if (this.sendGift(targetId, pct / 100)) {
                        _0x336d9a(`Gifted ${pct}% of mats to member ${targetId}`);
                    }
                }
            }
            else if (cmd === "/account" && parts.length >= 2) {
                let accountName = parts.slice(1).join(" ");
                if (accountName) {
                    __originalSend(new Uint8Array([_0xca1cdc.wT.iAccountDataReq, ...new TextEncoder().encode(accountName)]));
                    _0x336d9a("Requested account profile: " + accountName);
                }
            }
            else if (cmd === "/autoemp" && parts.length >= 2) {
                let state = parts[1].toLowerCase() === "true";
                this.autoEmpActive = state;
                this.isEmpForced = false;
                if (state && _0x466240) {
                    this.prevHatId = _0x466240.skin ? _0x466240.skin.id : -1;
                }
                _0x336d9a("AutoEMP: " + (state ? "ON" : "OFF"));
            }
        },

        // Core gifting logic (accepts multiplier 0.0 - 1.0)
        sendGift: function(targetId, mult = 1.0) {
            let members = _0x311e82.children; // Accesses the DOM Clan List
            
            if (members.length <= 1) {
                _0x336d9a("Action Refused: No one else in the clan.");
                return false;
            }
            if (targetId < 0 || targetId >= members.length) {
                _0x336d9a("Action Refused: Invalid clan member ID.");
                return false;
            }
            if (members[targetId].isMe) {
                _0x336d9a("Action Refused: You cannot gift to yourself.");
                return false;
            }

            // Build Gift Packet using game's bitmask layout
            let mask = 0;
            let vals = [];
            
            let f = Math.floor(_0x5cb651 * mult);
            let w = Math.floor(_0x475a45 * mult);
            let s = Math.floor(_0x505bb2 * mult);
            let g = Math.floor(_0x4e3cab * mult);

            if (f > 0) { mask |= 1; vals.push(f); } // Food
            if (w > 0) { mask |= 2; vals.push(w); } // Wood
            if (s > 0) { mask |= 4; vals.push(s); } // Stone
            if (g > 0) { mask |= 8; vals.push(g); } // Gold

            if (mask > 0) {
                let buffer = new ArrayBuffer(3 + vals.length * 4);
                let view = new DataView(buffer);
                view.setUint8(0, _0xca1cdc.wT.iGift); // 14
                view.setUint8(1, targetId);
                view.setUint8(2, mask);
                let offset = 3;
                for (let v of vals) {
                    view.setUint32(offset, v);
                    offset += 4;
                }
                __originalSend(new Uint8Array(buffer));
                return true;
            }
            return false;
        },

        resetKeys: function() {
            _0x4cfb62.KeyW = false;
            _0x4cfb62.KeyS = false;
            _0x4cfb62.KeyA = false;
            _0x4cfb62.KeyD = false;
            _0x4cfb62.mouse0 = false;
            _0x5629b9(); // Send stop packet
        },

        // Creates a highly-optimized collision map array
        buildGrid: function() {
            let cells = Math.ceil((this.mapSize + (this.gridOffset * 2)) / this.gridSize);
            let grid = new Uint8Array(cells * cells);
            
            for (let i = 0; i < _0x5a712e.length; i++) {
                let ent = _0x5a712e[i];
                if (ent === _0x466240 || ent.isDead) continue;
                
                // If it's a solid obstacle
                if (!ent.isPlayer && !ent.isProj && !ent.isDisplay && !ent.isHole && ent.type !== 6) {
                    let cx = this.worldToGrid(ent.x);
                    let cy = this.worldToGrid(ent.y);
                    let radius = Math.ceil(((ent.size || 40) + 40) / this.gridSize); 
                    
                    for (let dx = -radius; dx <= radius; dx++) {
                        for (let dy = -radius; dy <= radius; dy++) {
                            let nx = cx + dx, ny = cy + dy;
                            if (nx >= 0 && nx < cells && ny >= 0 && ny < cells) {
                                grid[nx + ny * cells] = 1; // Obstacle flag
                            }
                        }
                    }
                }
            }
            return { grid, cells };
        },

        // Fully optimized Greedy A* Pathfinder to eliminate lag
        aStar: function(startX, startY, goalX, goalY) {
            let { grid, cells } = this.buildGrid();
            
            // Constrain targets to bounds
            startX = Math.max(0, Math.min(cells - 1, startX));
            startY = Math.max(0, Math.min(cells - 1, startY));
            goalX = Math.max(0, Math.min(cells - 1, goalX));
            goalY = Math.max(0, Math.min(cells - 1, goalY));

            let openSet = [{x: startX, y: startY, g: 0, f: 0, parent: null}];
            let closedSet = new Uint8Array(cells * cells);
            
            while(openSet.length > 0) {
                // High performance linear scan (drastically faster than Array.sort)
                let minIndex = 0;
                for (let i = 1; i < openSet.length; i++) {
                    if (openSet[i].f < openSet[minIndex].f) minIndex = i;
                }
                let current = openSet.splice(minIndex, 1)[0];
                
                if (current.x === goalX && current.y === goalY) {
                    let path = [];
                    let curr = current;
                    while(curr) {
                        path.push({x: curr.x, y: curr.y});
                        curr = curr.parent;
                    }
                    return path.reverse();
                }
                
                let idx = current.x + current.y * cells;
                if(closedSet[idx]) continue;
                closedSet[idx] = 1;
                
                // Explore 8 directions
                let neighbors = [
                    {x: 0, y: -1}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 1, y: 0},
                    {x: -1, y: -1}, {x: 1, y: -1}, {x: -1, y: 1}, {x: 1, y: 1}
                ];
                
                for(let n of neighbors) {
                    let nx = current.x + n.x;
                    let ny = current.y + n.y;
                    
                    if(nx < 0 || ny < 0 || nx >= cells || ny >= cells) continue;
                    if(grid[nx + ny * cells] === 1) continue; 
                    
                    let gCost = current.g + (n.x !== 0 && n.y !== 0 ? 1.414 : 1);
                    let hCost = Math.hypot(goalX - nx, goalY - ny) * 1.2; // 1.2 heuristic multiplier for blazing-fast greedy solve
                    let fCost = gCost + hCost;
                    
                    openSet.push({x: nx, y: ny, g: gCost, f: fCost, parent: current});
                }
            }
            return null;
        },

        update: function() {
            // Logic 1: Handle AutoEMP tracking
            if (this.autoEmpActive && _0x466240) {
                let sniperCount = 0;
                let cannonCount = 0;
                
                for (let i = 0; i < _0x5a712e.length; i++) {
                    let ent = _0x5a712e[i];
                    if (ent.isCannon && !ent.isDead) {
                        // 0x258 (600) maps directly to the game's EMP blink range check
                        if (Math.hypot(_0x466240.x - ent.x, _0x466240.y - ent.y) < 600) {
                            if (ent.type === 24) sniperCount++; // 24 = Sniper placeBlock ID
                            else cannonCount++;
                        }
                    }
                }
                
                let shouldEmp = sniperCount > 0 || cannonCount > 4;
                
                if (shouldEmp && !this.isEmpForced) {
                    // Save the user's current hat before switching, unless they already had EMP
                    if (_0x466240.skin && _0x466240.skin.name !== "EMP") {
                        this.prevHatId = _0x466240.skin.id;
                    } else if (!_0x466240.skin) {
                        this.prevHatId = -1;
                    }
                    
                    // Equip EMP hat (Hat ID is 8, server expects HatID + 1 -> 9)
                    __originalSend(new Uint8Array([_0xca1cdc.wT.iChangeSkin, 9]));
                    this.isEmpForced = true;
                } else if (!shouldEmp && this.isEmpForced) {
                    // Revert back to the old hat (0 represents Unequip)
                    let equipId = this.prevHatId !== -1 ? this.prevHatId + 1 : 0;
                    __originalSend(new Uint8Array([_0xca1cdc.wT.iChangeSkin, equipId]));
                    this.isEmpForced = false;
                } else if (!this.isEmpForced) {
                    // Passively track the hat the player changes to normally
                    if (_0x466240.skin && _0x466240.skin.name !== "EMP") {
                        this.prevHatId = _0x466240.skin.id;
                    } else if (!_0x466240.skin) {
                        this.prevHatId = -1;
                    }
                }
            }

            // Logic 2: Handle Streaming 
            if (this.streamTargetId !== null) {
                let now = Date.now();
                if (now - this.lastStreamTime > this.streamInterval) {
                    // Try to send gift, if it returns false due to invalid target, cancel stream
                    let members = _0x311e82.children;
                    if (this.streamTargetId >= members.length || members.length <= 1) {
                        this.streamTargetId = null;
                        _0x336d9a("Autoplay: Stream ended (target missing)");
                    } else {
                        this.sendGift(this.streamTargetId, 1.0); // 100% on intervals
                        this.lastStreamTime = now;
                    }
                }
            }

            // End logic block here if pathfinding inactive
            if (!this.active || !_0x466240) return;
            
            let myX = _0x466240.x;
            let myY = _0x466240.y;
            
            // Has arrived check
            if (Math.hypot(this.targetX - myX, this.targetY - myY) <= 50) {
                this.active = false;
                this.resetKeys();
                _0x336d9a("Autoplay: Arrived successfully");
                return;
            }

            // Recalculate A* Environment every 500ms
            if (Date.now() - this.lastPathTime > 500) {
                let startGridX = this.worldToGrid(myX);
                let startGridY = this.worldToGrid(myY);
                let goalGridX = this.worldToGrid(this.targetX);
                let goalGridY = this.worldToGrid(this.targetY);
                
                this.path = this.aStar(startGridX, startGridY, goalGridX, goalGridY);
                this.lastPathTime = Date.now();
            }

            let wpX = this.targetX;
            let wpY = this.targetY;

            // Path Following Execution
            if (this.path && this.path.length > 0) {
                let wp = this.path[0];
                wpX = this.gridToWorld(wp.x);
                wpY = this.gridToWorld(wp.y);
                
                let dist = Math.hypot(wpX - myX, wpY - myY);
                if (dist < this.gridSize && this.path.length > 1) {
                    this.path.shift();
                    wp = this.path[0];
                    wpX = this.gridToWorld(wp.x);
                    wpY = this.gridToWorld(wp.y);
                }
                
                if (this.path.length === 1) {
                    wpX = this.targetX;
                    wpY = this.targetY;
                }
            }

            let dx = wpX - myX;
            let dy = wpY - myY;
            let angle = Math.atan2(dy, dx);
            
            // --- SMART DIGGING LOGIC ---
            let isDigging = false;
            let borderDist = 60;

            let crossingOutX = (myX < borderDist && dx < 0) || (myX > this.mapSize - borderDist && dx > 0);
            let crossingInX  = (myX < 0 && myX > -borderDist && dx > 0) || (myX > this.mapSize && myX < this.mapSize + borderDist && dx < 0);
            
            let crossingOutY = (myY < borderDist && dy < 0) || (myY > this.mapSize - borderDist && dy > 0);
            let crossingInY  = (myY < 0 && myY > -borderDist && dy > 0) || (myY > this.mapSize && myY < this.mapSize + borderDist && dy < 0);
            
            if (crossingOutX || crossingInX || crossingOutY || crossingInY) {
                isDigging = true;
            }

            if (isDigging) {
                let batId = this.getBatId();
                if (_0x466240.item && _0x466240.item.id !== batId) {
                    _0xb6b4d7(batId);
                }
                _0x4cfb62.mouse0 = true;
                _0x965f53(angle);
            } else {
                _0x4cfb62.mouse0 = false;
            }

            _0x4cfb62.KeyW = (dy < -20);
            _0x4cfb62.KeyS = (dy > 20);
            _0x4cfb62.KeyA = (dx < -20);
            _0x4cfb62.KeyD = (dx > 20);
            
            _0x5629b9();
        }
    };

    // Intercept outgoing Local Chat messages seamlessly
    const __originalSend = _0x2d5e24;
    _0x2d5e24 = function(packet) {
        if (packet[0] === _0xca1cdc.wT.iChat) {
            let msg = new TextDecoder().decode(packet.slice(1));
            if (msg.startsWith("/")) {
                autoplayBot.handleCommand(msg);
                return; // Stop the command from broadcasting to the server
            }
        }
        __originalSend.apply(this, arguments);
    };
    
    // Bind bot updates natively to 60 frames a second (matching tickrate)
    setInterval(() => autoplayBot.update(), 1000 / 60);
// === END AUTOPLAY BOT ===
    _0x3c0ef4();
  })();
})();
