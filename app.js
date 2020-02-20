const blocks = {
    // Top, Bottom, Front, Right, Back, Left
    bed_feet: ["bed_feet_top inset7", "planks_oak inset3", "bed_feet_end", "bed_feet_side", " ", "bed_feet_side"],
    bed_head: ["bed_head_top inset7", "planks_oak inset3", " ", "bed_head_side", "bed_head_end", "bed_head_side"],
    bedrock: ["bedrock"],
    bone_block: ["bone_block_top", "bone_block_top", "bone_block_side"],
    bookshelf: ["planks_oak", "planks_oak", "bookshelf"],
    brick: ["brick"],
    cactus: ["cactus_top", "cactus_bottom", "cactus_side inset1"],
    clay: ["clay"],
    coal_block: ["coal_block"],
    coal_ore: ["coal_ore"],
    coarse_dirt: ["coarse_dirt"],
    cobblestone_mossy: ["cobblestone_mossy"],
    cobblestone: ["cobblestone"],
    crafting_table: ["crafting_table_top", "planks_oak", "crafting_table_front", "crafting_table_side"],
    diamond_block: ["diamond_block"],
    diamond_ore: ["diamond_ore"],
    dirt_podzol: ["dirt_podzol_top", "dirt", "dirt_podzol_side"],
    dirt: ["dirt"],
    door_wood_lower: [" ", " ", "door_wood_lower inset1", " ", " ", " "],
    door_wood_upper: [" ", " ", "door_wood_upper inset1", " ", " ", " "],
    emerald_block: ["emerald_block"],
    emerald_ore: ["emerald_ore"],
    furnace: ["furnace_top", "stone", "furnace_front_on", "furnace_side"],
    glass: ["glass"],
    glowstone: ["glowstone"],
    gold_block: ["gold_block"],
    gold_ore: ["gold_ore"],
    grass_path: ["grass_path_top inset1", "dirt", "grass_path_side"],
    grass: ["grass_top", "dirt", "grass_side"],
    gravel: ["gravel"],
    hardened_clay_stained_black: ["hardened_clay_stained_black"],
    hardened_clay_stained_blue: ["hardened_clay_stained_blue"],
    hardened_clay_stained_brown: ["hardened_clay_stained_brown"],
    hardened_clay_stained_cyan: ["hardened_clay_stained_cyan"],
    hardened_clay_stained_gray: ["hardened_clay_stained_gray"],
    hardened_clay_stained_green: ["hardened_clay_stained_green"],
    hardened_clay_stained_light_blue: ["hardened_clay_stained_light_blue"],
    hardened_clay_stained_lime: ["hardened_clay_stained_lime"],
    hardened_clay_stained_magenta: ["hardened_clay_stained_magenta"],
    hardened_clay_stained_orange: ["hardened_clay_stained_orange"],
    hardened_clay_stained_pink: ["hardened_clay_stained_pink"],
    hardened_clay_stained_purple: ["hardened_clay_stained_purple"],
    hardened_clay_stained_red: ["hardened_clay_stained_red"],
    hardened_clay_stained_silver: ["hardened_clay_stained_silver"],
    hardened_clay_stained_white: ["hardened_clay_stained_white"],
    hardened_clay_stained_yellow: ["hardened_clay_stained_yellow"],
    hardened_clay: ["hardened_clay"],
    iron_block: ["iron_block"],
    iron_ore: ["iron_ore"],
    jukebox: ["jukebox_top", "planks_oak", "jukebox_side"],
    lapis_block: ["lapis_block"],
    lapis_ore: ["lapis_ore"],
    lava: ["lava_still"],
    leaves_acacia: ["leaves_acacia"],
    leaves_big_oak: ["leaves_big_oak"],
    leaves_birch: ["leaves_birch"],
    leaves_jungle: ["leaves_jungle"],
    leaves_oak: ["leaves_oak"],
    leaves_spruce: ["leaves_spruce"],
    log_acacia: ["log_acacia_top", "log_acacia_top", "log_acacia"],
    log_big_oak: ["log_big_oak_top", "log_big_oak_top", "log_big_oak"],
    log_birch: ["log_birch_top", "log_birch_top", "log_birch"],
    log_jungle: ["log_jungle_top", "log_jungle_top", "log_jungle"],
    log_oak: ["log_oak_top", "log_oak_top", "log_oak"],
    log_spruce: ["log_spruce_top", "log_spruce_top", "log_spruce"],
    planks_acacia: ["planks_acacia"],
    planks_big_oak: ["planks_big_oak"],
    planks_birch: ["planks_birch"],
    planks_jungle: ["planks_jungle"],
    planks_oak: ["planks_oak"],
    planks_spruce: ["planks_spruce"],
    quartz_block_chiseled: ["quartz_block_chiseled_top", "quartz_block_bottom", "quartz_block_chiseled"],
    quartz_block_lines: ["quartz_block_lines_top", "quartz_block_bottom", "quartz_block_lines"],
    quartz_block: ["quartz_block_top", "quartz_block_bottom", "quartz_block_side"],
    quartz_ore: ["quartz_ore"],
    redstone_block: ["redstone_block"],
    redstone_ore: ["redstone_ore"],
    sand: ["sand"],
    sea_lantern: ["sea_lantern"],
    snow: ["snow", "dirt", "grass_side_snowed"],
    stone_diorite: ["stone_diorite"],
    stone_granite: ["stone_granite"],
    stone: ["stone"],
    water: ["water_still"],
    wool_colored_black: ["wool_colored_black"],
    wool_colored_blue: ["wool_colored_blue"],
    wool_colored_brown: ["wool_colored_brown"],
    wool_colored_cyan: ["wool_colored_cyan"],
    wool_colored_gray: ["wool_colored_gray"],
    wool_colored_green: ["wool_colored_green"],
    wool_colored_light_blue: ["wool_colored_light_blue"],
    wool_colored_lime: ["wool_colored_lime"],
    wool_colored_magenta: ["wool_colored_magenta"],
    wool_colored_orange: ["wool_colored_orange"],
    wool_colored_pink: ["wool_colored_pink"],
    wool_colored_purple: ["wool_colored_purple"],
    wool_colored_red: ["wool_colored_red"],
    wool_colored_silver: ["wool_colored_silver"],
    wool_colored_white: ["wool_colored_white"],
    wool_colored_yellow: ["wool_colored_yellow"],
};

function makeIcon(texture) {
    const icon = document.createElement('div');
    icon.setAttribute('class', `icon ${texture}`);
    return icon;
}

function makeBlock(name, mask = 0b111111) {
    const textures = blocks[name];
    const block = document.createElement('div');
    block.setAttribute('class', `block`);
    block.setAttribute('title', name.replace(/_/g, ' '));
    if (mask & 1) {
        const texture = textures[0].trim();
        if (texture) {
            const top = document.createElement('div');
            top.setAttribute('class', `top ${texture}`);
            block.appendChild(top);
        }
    }
    if (mask & 2) {
        const texture = (textures[1] || textures[textures.length - 1]).trim();
        if (texture) {
            const bottom = document.createElement('div');
            bottom.setAttribute('class', `bottom ${texture}`);
            block.appendChild(bottom);
        }
    }
    if (mask & 4) {
        const texture = (textures[2] || textures[textures.length - 1]).trim();
        if (texture) {
            const front = document.createElement('div');
            front.setAttribute('class', `front ${texture}`);
            block.appendChild(front);
        }
    }
    if (mask & 8) {
        const texture = (textures[3] || textures[textures.length - 1]).trim();
        if (texture) {
            const right = document.createElement('div');
            right.setAttribute('class', `right ${texture}`);
            block.appendChild(right);
        }
    }
    if (mask & 16) {
        const texture = (textures[4] || textures[textures.length - 1]).trim();
        if (texture) {
            const back = document.createElement('div');
            back.setAttribute('class', `back ${texture}`);
            block.appendChild(back);
        }
    }
    if (mask & 32) {
        const texture = (textures[5] || textures[textures.length - 1]).trim();
        if (texture) {
            const left = document.createElement('div');
            left.setAttribute('class', `left ${texture}`);
            block.appendChild(left);
        }
    }
    return block;
}

function gallery() {
    const gallery = document.createElement('div');
    gallery.setAttribute('class', 'gallery');
    for (const name in blocks) {
        gallery.appendChild(makeBlock(name));
    }
    const unique = {};
    for (const texture of Object.keys(blocks).map(name => blocks[name]).flat().map(texture => texture.split(' ')[0]).filter(Boolean)) {
        unique[texture] = true;
    }
    for (const texture in unique) {
        gallery.appendChild(makeIcon(texture));
    }
    return gallery;
}


const transparency = {
    leaves_oak: 1,
    water: 2,
    glass: 2,
    door_wood_lower: 3,
    door_wood_upper: 3
};
const insets = {};
for (const name in blocks) {
    const block = blocks[name];
    let mask = 0;
    for (let i = 0; i < 6; i++) {
        const texture = block[i] || block[block.length - 1];
        mask |= /inset/.test(texture) ? 2 << i : 0;
    }
    if (mask) insets[name] = mask;
};
console.log(insets);

function tlevel(name) {
    return name ? transparency[name] || 0 : Infinity;
}

function ivert(inset) {
    return (
        (inset & 1 ? (2 | 4 | 8 | 16 | 32) : 0) |
        (inset & 2 ? (1 | 4 | 8 | 16 | 32) : 0) |
        (inset & 4 ? (1 | 2 | 8 | 16 | 32) : 0) |
        (inset & 8 ? (1 | 2 | 4 | 16 | 32) : 0) |
        (inset & 16 ? (1 | 2 | 4 | 8 | 32) : 0) |
        (inset & 32 ? (1 | 2 | 4 | 8 | 16) : 0)
    );
}

function shouldRender(self, other, direction) {
    // If the direction is empty, render the face.
    if (!other) return direction;

    // If we're inset that direction, render the face.
    if ((insets[self] | 0) & direction) return direction;

    // If the direction is more transparent than us, render the face.
    if (tlevel(self) < tlevel(other)) return direction;

    // If the direction is inset, render the face.
    if (ivert(insets[other]) & direction) return direction;

    // If none of these apply, cull the face.
    return 0;
}


function chunk({ short, blocks }) {

    const grid = {};

    function set(x, y, z, block) {
        if (block) {
            grid[`${x}: ${y}: ${z} `] = block
        } else {
            delete grid[`${x}: ${y}: ${z} `];
        }
    }

    function get(x, y, z) {
        return grid[`${x}: ${y}: ${z} `] || null;
    }

    // Convert the string based map to the hashmap
    for (let y = 0; blocks[y]; y++) {
        const layer = blocks[y];
        for (let z = 0; z < 16; z++) {
            for (let x = 0; x < 16; x++) {
                const block = short[layer.substr(z * 16 + x, 1)];
                if (block) {
                    grid[`${x}: ${y}: ${z} `] = block;
                }
            }
        }
    }

    function hide(name, extra) {
        let x = Math.floor(Math.random() * 16);
        let y = Math.floor(Math.random() * blocks.length);
        let z = Math.floor(Math.random() * 16);
        if (get(x, y, z) === 'stone') {
            set(x, y, z, name);
        }
        for (let i = 0; i < extra; i++) {
            x += Math.floor(Math.random() * 3 - 1);
            y += Math.floor(Math.random() * 3 - 1);
            z += Math.floor(Math.random() * 3 - 1);
            if (get(x, y, z) === 'stone') {
                set(x, y, z, name);
            }
        }
    }

    for (let i = 0; i < 20; i++) { hide("diamond_ore", 1); }
    for (let i = 0; i < 30; i++) { hide("coal_ore", 4); }
    for (let i = 0; i < 20; i++) { hide("redstone_ore", 3); }
    for (let i = 0; i < 30; i++) { hide("iron_ore", 3); }

    // Now render blocks on screen.
    const mid = blocks.length * 128;
    const chunk = document.createElement('div');
    chunk.setAttribute('class', 'chunk');

    let rx = -30;
    let ry = 45;
    let orx = 0;
    let ory = 0;
    requestAnimationFrame(updateRotation);
    function updateRotation() {
        if (rx !== orx || ry !== ory) {
            chunk.style.transform = `perspective(2000px) translate3d(0, 0, -6000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            orx = rx;
            ory = ry;
        }
        requestAnimationFrame(updateRotation);
    }

    window.onpointermove = (evt) => {
        evt.preventDefault();
        rx -= evt.movementY / 2;
        if (rx < -90) rx = -90;
        if (rx > 90) rx = 90;
        ry += evt.movementX / 2;
    }

    for (let y = 0; blocks[y]; y++) {
        for (let z = 0; z < 16; z++) {
            for (let x = 0; x < 16; x++) {
                const name = get(x, y, z);
                if (!name) continue;
                const mask =
                    shouldRender(name, get(x, y - 1, z), 1) |  // top
                    shouldRender(name, get(x, y + 1, z), 2) |  // bottom
                    shouldRender(name, get(x, y, z + 1), 4) |  // front
                    shouldRender(name, get(x + 1, y, z), 8) |  // right
                    shouldRender(name, get(x, y, z - 1), 16) | // back
                    shouldRender(name, get(x - 1, y, z), 32);  // left
                if (!mask) continue;
                console.log(x, y, z, name, mask.toString(2));
                const block = makeBlock(name, mask);
                block.style.transform = `translate3d(${x * 256 - 2048 + 128}px, ${y * 256 - mid}px, ${z * 256 - 2048 + 128}px)`;
                chunk.appendChild(block);
            }
        }
    }


    return chunk;
}

const map = {
    short: {
        "@": "sea_lantern",
        "#": "gravel",
        "+": "diamond_ore",
        "1": "door_wood_upper",
        "2": "door_wood_lower",
        "B": "bed_feet",
        "b": "bed_head",
        "C": "cactus",
        "c": "coal_ore",
        "d": "dirt",
        "D": "stone_diorite",
        "G": "glass",
        "g": "grass",
        "I": "iron_ore",
        "j": "jukebox",
        "l": "lava",
        "O": "leaves_oak",
        "o": "log_oak",
        "p": "grass_path",
        "P": "planks_oak",
        "r": "redstone_ore",
        "S": "bookshelf",
        "s": "stone",
        "T": "crafting_table",
        "w": "water",
        "x": "sand",
    },
    blocks: [
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "             P  " +
        "             P  " +
        "      O      P  " +
        "             P  " +
        "                " +
        "                ",

        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "  O             " +
        " OoO            " +
        "  O         PPP " +
        "      O     P P " +
        "     OoO    P P " +
        "      O     PPP " +
        "                " +
        "                ",

        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "  O             " +
        " OOO            " +
        "OOoOO           " +
        " OOO  O    oPGPo" +
        "  O  OOO   P   P" +
        "    OOoOO  P   P" +
        "     OOO   oPGPo" +
        "      O         " +
        "                ",

        "                " +
        "                " +
        "                " +
        "                " +
        "            C   " +
        "                " +
        "                " +
        "                " +
        "                " +
        "  o             " +
        "           oP1Po" +
        "      O    G   G" +
        "     OoO   G   G" +
        "      O    oGGGo" +
        "                " +
        "                ",

        "                " +
        "                " +
        "      pgg       " +
        "     gppgg      " +
        "      gpg   C   " +
        "                " +
        "          C     " +
        "                " +
        "                " +
        "  o             " +
        "       SS  oP2Po" +
        "   bT      G   G" +
        "   B  o    G j G" +
        "           oGGGo" +
        "                " +
        "                ",

        "   ggpppggggg   " +
        "  ggggpggggggx  " +
        " gggggdddgggxxx " +
        "gggggdddddxxxxgg" +
        "ggggggdddgxxxxxg" +
        "gggggggpxxxxxggg" +
        "wwwwwggppxxxgggg" +
        "gxxxwwwwpxxwwwww" +
        "ggggxwwwwwwwwggg" +
        "ggggggwwwwgggggg" +
        " ggggggggggPPPPP" +
        "  gggggggggPPPPP" +
        "  gggggggggPPPPP" +
        "  gggggggggPPPPP" +
        "    gggggggggggg" +
        "      ggggg     ",

        "gggddddddddddggg" +
        "ggddddddddddddgg" +
        "gddddddddddddddg" +
        "dddddddddddddddd" +
        "dddddddddddddddd" +
        "dddddddddddddddd" +
        "wddddddddddddddd" +
        "dddddddddddddddd" +
        "ddddddd@dddddddd" +
        "dddddddddddddddd" +
        " ddddddddddddddd" +
        "  dddddddddddddd" +
        "    dddddddddddd" +
        "    dddddddddddd" +
        "      dddddddggg" +
        "        dddggggg",

        "sssscccsssssssss" +
        "ssssssssssssssss" +
        "ssssssssssssssss" +
        "ssssssssssssssss" +
        "sssssssssssssssc" +
        "sssssssssssssssc" +
        "wssssssccssssssc" +
        "@ssss      sssss" +
        "sssss      sssss" +
        "ssss       sssss" +
        "          ssssss" +
        "         sssssss" +
        "        sssssssd" +
        "       ssssssddd" +
        "       ssssddddd" +
        "     ssssddddddd",

        " sssscccsssssss " +
        "ssssssssssssssss" +
        "ssssssssssssssss" +
        "sssssssssssssssc" +
        "sssssssscssssssc" +
        "ssssss    ssssss" +
        "wssss      sssss" +
        "ssscc      sssss" +
        "sssss      sssss" +
        "cssss      sssss" +
        "ssssss    ssssss" +
        "ssssssssssssssss" +
        "#sssssssssssssss" +
        "###sssssssssssss" +
        "ll########ssssss" +
        " llllllll#sssss ",

        "  ssssssssssss  " +
        " ssssssssssssss " +
        "sssssccscsssssss" +
        "ssssssccssssssss" +
        "sssssssssssscsss" +
        "@sssss    ssscss" +
        "wssss      sscss" +
        "sssss      sssss" +
        "cssss      sssss" +
        "cssss      sssss" +
        "ssssss    cssssc" +
        "sssssssccssssssc" +
        "ssssssssssssssss" +
        "ssssssssssssssss" +
        " ssssssssssssss " +
        "  csssDDDDDsss  ",

        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "w               " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                " +
        "                ",
    ]
};

window.onload = () => {
    if (/\?chunk/.test(document.location)) {
        document.body.appendChild(chunk(map));
    } else {
        document.body.appendChild(gallery());
    }
}
