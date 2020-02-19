const blocks = {
    // Top, Bottom, Front, Right, Back, Left
    bedrock: ["bedrock"],
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
    emerald_block: ["emerald_block"],
    emerald_ore: ["emerald_ore"],
    gold_block: ["gold_block"],
    gold_ore: ["gold_ore"],
    grass_path: ["grass_path_top inset1", "dirt", "grass_path_side"],
    grass: ["grass_top", "dirt", "grass_side"],
    gravel: ["gravel"],
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
    quartz_block_chiseled: ["quartz_block_chiseled_top", "quartz_block_bottom", "quartz_block_chiseled"],
    quartz_block_lines: ["quartz_block_lines_top", "quartz_block_bottom", "quartz_block_lines"],
    quartz_block: ["quartz_block_top", "quartz_block_bottom", "quartz_block_side"],
    quartz_ore: ["quartz_ore"],
    redstone_block: ["redstone_block"],
    redstone_ore: ["redstone_ore"],
    stone_diorite: ["stone_diorite"],
    stone_granite: ["stone_granite"],
    stone: ["stone"],
    water: ["water_still"],
    hardened_clay: ["hardened_clay"],
    hardened_clay_stained_red: ["hardened_clay_stained_red"],
    hardened_clay_stained_blue: ["hardened_clay_stained_blue"],
    hardened_clay_stained_cyan: ["hardened_clay_stained_cyan"],
    hardened_clay_stained_gray: ["hardened_clay_stained_gray"],
    hardened_clay_stained_lime: ["hardened_clay_stained_lime"],
    hardened_clay_stained_pink: ["hardened_clay_stained_pink"],
    hardened_clay_stained_black: ["hardened_clay_stained_black"],
    hardened_clay_stained_brown: ["hardened_clay_stained_brown"],
    hardened_clay_stained_green: ["hardened_clay_stained_green"],
    hardened_clay_stained_white: ["hardened_clay_stained_white"],
    hardened_clay_stained_orange: ["hardened_clay_stained_orange"],
    hardened_clay_stained_purple: ["hardened_clay_stained_purple"],
    hardened_clay_stained_silver: ["hardened_clay_stained_silver"],
    hardened_clay_stained_yellow: ["hardened_clay_stained_yellow"],
    hardened_clay_stained_magenta: ["hardened_clay_stained_magenta"],
    hardened_clay_stained_light_blue: ["hardened_clay_stained_light_blue"],
    wool_colored_red: ["wool_colored_red"],
    wool_colored_blue: ["wool_colored_blue"],
    wool_colored_cyan: ["wool_colored_cyan"],
    wool_colored_gray: ["wool_colored_gray"],
    wool_colored_lime: ["wool_colored_lime"],
    wool_colored_pink: ["wool_colored_pink"],
    wool_colored_black: ["wool_colored_black"],
    wool_colored_brown: ["wool_colored_brown"],
    wool_colored_green: ["wool_colored_green"],
    wool_colored_white: ["wool_colored_white"],
    wool_colored_orange: ["wool_colored_orange"],
    wool_colored_purple: ["wool_colored_purple"],
    wool_colored_silver: ["wool_colored_silver"],
    wool_colored_yellow: ["wool_colored_yellow"],
    wool_colored_magenta: ["wool_colored_magenta"],
    wool_colored_light_blue: ["wool_colored_light_blue"],
    glass: ["glass"],
    furnace: ["furnace_top", "stone", "furnace_front_on", "furnace_side"],
    glowstone: ["glowstone"],
    snow: ["snow", "dirt", "grass_side_snowed"],
    bone_block: ["bone_block_top", "bone_block_top", "bone_block_side"],
    bed_head: ["bed_head_top inset7", "planks_oak inset3", " ", "bed_head_side", "bed_head_end", "bed_head_side"],
    bed_feet: ["bed_feet_top inset7", "planks_oak inset3", "bed_feet_end", "bed_feet_side", " ", "bed_feet_side"],
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
    if (mask & 16) {
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

window.onload = () => {
    document.body.appendChild(gallery());
}

