/*
 * LuckyBlocks v0.0.2 by Potatoe
 *
 * Twitter: @ImThePotatoe
 * YouTube: PotatoeTrainYT
 */

/*
 * Registering blocks/items
 */
Block.defineBlock(500, "§eLucky Block", ["sponge", 0], 1, false, 0);
Block.setExplosionResistance(500, 6000);
Item.setCategory(500, ItemCategory.DECORATION);

/*
 * Handle block breaking
 */
function destroyBlock(x, y, z, side){
    var blockId = Level.getTile(x, y, z);
    var playerX = Math.round(Player.getX());
    var playerY = Math.round(Player.getY());
    var playerZ = Math.round(Player.getZ());
    switch(blockId){
        case 500:
            var chance = Math.floor((Math.random() * 500) + 1);
            if(chance >= 450){
                nothing();
                return;
            }
            if(chance >= 400){
                nuke(playerX, playerY, playerZ);
                return;
            }
            if(chance >= 350){
                obbyTrap(playerX, playerY, playerZ);
                return;
            }
            if(chance >= 300){
                sonic();
                return;
            }
            if(chance >= 250){
                warrior();
                return;
            }
            if(chance >= 200){
                debuff();
                return;
            }
            if(chance >= 150){
                chickens(playerX, playerY, playerZ);
                return;
            }
            if(chance >= 100){
                gift(playerX + 1, playerY - 1, playerZ);
                return;
            }
            if(chance >= 50){
                good(playerX, playerY, playerZ);
                return;
            }
            if(chance >= 0){
                island(playerX, playerZ);
                return;
            }
            break;
    }
}

/*
 * Does nothing
 */
function nothing(){
    clientMessage("§7Enjoy nothing ;)");
}

/*  
 * Nukes the player
 *
 * @param x
 * @param y
 * @param z
 */
function nuke(x, y, z){
    clientMessage("§l§cNUKE!!!");
    Level.explode(x, y, z, 25, true); // BUG: Doesnt break blocks / set on fire
}

/*
 * Traps the player
 *
 * @param x
 * @param y
 * @param z
 */
function obbyTrap(x, y, z){
    clientMessage("§lYou activated my Trap Card! Ha, have fun escaping");
    // Floor
    Level.setTile(x, y - 2, z, 49);
    Level.setTile(x, y - 2, z + 1, 49);
    Level.setTile(x, y - 2, z - 1, 49);
    Level.setTile(x + 1, y - 2, z, 49);
    Level.setTile(x + 1, y - 2, z + 1, 49);
    Level.setTile(x + 1, y - 2, z - 1, 49)
    Level.setTile(x - 1, y - 2, z, 49);
    Level.setTile(x - 1, y - 2, z + 1, 49);
    Level.setTile(x - 1, y - 2, z - 1, 49);
    // Walls
    Level.setTile(x - 1, y, z, 102);
    Level.setTile(x - 1, y - 1, z, 49);
    Level.setTile(x - 1, y, z + 1, 49);
    Level.setTile(x - 1, y - 1, z + 1, 49);
    Level.setTile(x - 1, y, z - 1, 49);
    Level.setTile(x - 1, y - 1, z - 1, 49);
    Level.setTile(x + 1, y, z, 102);
    Level.setTile(x + 1, y - 1, z, 49);
    Level.setTile(x + 1, y, z + 1, 49);
    Level.setTile(x + 1, y - 1, z + 1, 49);
    Level.setTile(x + 1, y, z - 1, 49);
    Level.setTile(x + 1, y - 1, z - 1, 49);
    Level.setTile(x, y, z + 1, 102);
    Level.setTile(x, y - 1, z + 1, 49);
    Level.setTile(x, y, z - 1, 102);
    Level.setTile(x, y - 1, z - 1, 49);
    // Inside
    Level.setTile(x, y, z, 9);
    Level.setTile(x, y - 1, z, 9);
    // Roof
    Level.setTile(x, y + 1, z, 49);
    Level.setTile(x, y + 1, z + 1, 49);
    Level.setTile(x, y + 1, z - 1, 49);
    Level.setTile(x + 1, y + 1, z, 49);
    Level.setTile(x + 1, y + 1, z + 1, 49);
    Level.setTile(x + 1, y + 1, z - 1, 49)
    Level.setTile(x - 1, y + 1, z, 49);
    Level.setTile(x - 1, y + 1, z + 1, 49);
    Level.setTile(x - 1, y + 1, z - 1, 49);
}

/*
 * Make the player fast
 */
function sonic(){
    clientMessage("§l§1Sonic!!");
    ModPE.setGameSpeed(100);
}

/*
 * Gives player gear
 */
function warrior(){
    clientMessage("§lGo batlle, brave warrior");
    Player.addItemInventory(310, 1, 0);
    Player.addItemInventory(311, 1, 0);
    Player.addItemInventory(312, 1, 0);
    Player.addItemInventory(313, 1, 0);
    Player.addItemInventory(276, 1, 0);
}

/*
 * Debuffs player
 */
function debuff(){
    clientMessage("§4Ha, get debuffed noob");
    Entity.addEffect(Player.getEntity(), 2, 200, 2, false, true);
    Entity.addEffect(Player.getEntity(), 4, 200, 2, false, true);
    Entity.addEffect(Player.getEntity(), 9, 200, 2, false, true);
    Entity.addEffect(Player.getEntity(), 17, 200, 2, false, true);
    Entity.addEffect(Player.getEntity(), 18, 200, 2, false, true);
    Entity.addEffect(Player.getEntity(), 19, 200, 2, false, true);
}

/*
 * Spawns zombie chickens
 *
 * @param x
 * @param y
 * @param z
 */
function chickens(x, y, z){
    clientMessage("§aWut... ZOMBIE CHICKENS!!!!");
    Level.spawnChicken(x, y, z, "mob/zombie.png"); // BUG: Skin is glitched but funny af
    Level.spawnChicken(x, y, z, "mob/zombie.png"); // BUG: Skin is glitched but funny af
    Level.spawnChicken(x, y, z, "mob/zombie.png"); // BUG: Skin is glitched but funny af
    Level.spawnChicken(x, y, z, "mob/zombie.png"); // BUG: Skin is glitched but funny af
    Level.spawnChicken(x, y, z, "mob/zombie.png"); // BUG: Skin is glitched but funny af
}

/*
 * Chest with JK in dirt
 *
 * @param x
 * @param y
 * @param z
 */
function gift(x, y, z){
    clientMessage("§aOpen the chest ;)");
    Level.setTile(x, y, z, 54);
    // J
    Level.setChestSlot(x, y, z, 1, 3, 0, 1);
    Level.setChestSlot(x, y, z, 2, 3, 0, 1);
    Level.setChestSlot(x, y, z, 3, 3, 0, 1);
    Level.setChestSlot(x, y, z, 14, 3, 0, 1);
    Level.setChestSlot(x, y, z, 19, 3, 0, 1);
    Level.setChestSlot(x, y, z, 20, 3, 0, 1);
    // K
    Level.setChestSlot(x, y, z, 5, 3, 0, 1);
    Level.setChestSlot(x, y, z, 7, 3, 0, 1);
    Level.setChestSlot(x, y, z, 11, 3, 0, 1);
    Level.setChestSlot(x, y, z, 15, 3, 0, 1);
    Level.setChestSlot(x, y, z, 23, 3, 0, 1);
    Level.setChestSlot(x, y, z, 25, 3, 0, 1);
}

/*
 * Spawns diamond blocks
 *
 * @param x
 * @param y
 * @param z
 */
function good(x, y, z){
    clientMessage("§bWelcome to my good side");
    Level.setTile(x, y - 1, z, 57);
    Level.setTile(x, y, z, 57);
    Level.setTile(x, y + 1, z, 57);
    Entity.setPosition(Player.getEntity(), x + 0.5, y + 3, z + 0.5);
}

/*
 * Teleports player in air
 *
 * @param x
 * @param z
 */
function island(x, z){
    clientMessage("§cMind your step");
    Level.setTile(x, 150, z, 2);
    Entity.setPosition(Player.getEntity(), x + 0.5, 153, z + 0.5);
}