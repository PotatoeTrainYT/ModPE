/*
 * LuckyBlocks v0.0.1 by Potatoe
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
                clientMessage("Enjoy nothing :)");
                return;
            }
            if(chance >= 400){
                clientMessage("§c§lNUKE!!!");
                Level.explode(playerX, playerY, playerZ, 25, true);
                return;
            }
            if(chance >= 350){
                clientMessage("§lYou activated my Trap Card! Ha, have fun escaping");
                // Floor
                Level.setTile(playerX, playerY - 2, playerZ, 49);
                Level.setTile(playerX, playerY - 2, playerZ + 1, 49);
                Level.setTile(playerX, playerY - 2, playerZ - 1, 49);
                Level.setTile(playerX + 1, playerY - 2, playerZ, 49);
                Level.setTile(playerX + 1, playerY - 2, playerZ + 1, 49);
                Level.setTile(playerX + 1, playerY - 2, playerZ - 1, 49)
                Level.setTile(playerX - 1, playerY - 2, playerZ, 49);
                Level.setTile(playerX - 1, playerY - 2, playerZ + 1, 49);
                Level.setTile(playerX - 1, playerY - 2, playerZ - 1, 49);
                // Walls
                Level.setTile(playerX - 1, playerY, playerZ, 102);
                Level.setTile(playerX - 1, playerY - 1, playerZ, 49);
                Level.setTile(playerX - 1, playerY, playerZ + 1, 49);
                Level.setTile(playerX - 1, playerY - 1, playerZ + 1, 49);
                Level.setTile(playerX - 1, playerY, playerZ - 1, 49);
                Level.setTile(playerX - 1, playerY - 1, playerZ - 1, 49);
                Level.setTile(playerX + 1, playerY, playerZ, 102);
                Level.setTile(playerX + 1, playerY - 1, playerZ, 49);
                Level.setTile(playerX + 1, playerY, playerZ + 1, 49);
                Level.setTile(playerX + 1, playerY - 1, playerZ + 1, 49);
                Level.setTile(playerX + 1, playerY, playerZ - 1, 49);
                Level.setTile(playerX + 1, playerY - 1, playerZ - 1, 49);
                Level.setTile(playerX, playerY, playerZ + 1, 102);
                Level.setTile(playerX, playerY - 1, playerZ + 1, 49);
                Level.setTile(playerX, playerY, playerZ - 1, 102);
                Level.setTile(playerX, playerY - 1, playerZ - 1, 49);
                // Inside
                Level.setTile(playerX, playerY, playerZ, 9);
                Level.setTile(playerX, playerY - 1, playerZ, 9);
                // Roof
                Level.setTile(playerX, playerY + 1, playerZ, 49);
                Level.setTile(playerX, playerY + 1, playerZ + 1, 49);
                Level.setTile(playerX, playerY + 1, playerZ - 1, 49);
                Level.setTile(playerX + 1, playerY + 1, playerZ, 49);
                Level.setTile(playerX + 1, playerY + 1, playerZ + 1, 49);
                Level.setTile(playerX + 1, playerY + 1, playerZ - 1, 49)
                Level.setTile(playerX - 1, playerY + 1, playerZ, 49);
                Level.setTile(playerX - 1, playerY + 1, playerZ + 1, 49);
                Level.setTile(playerX - 1, playerY + 1, playerZ - 1, 49);
                return;
            }
            if(chance >= 300){
                clientMessage("§l§1Sonic!!");
                ModPE.setGameSpeed(10);
                return;
            }
            if(chance >= 250){
                clientMessage("§lGo batlle, brave warrior");
                Player.addItemInventory(310, 1, 0);
                Player.addItemInventory(311, 1, 0);
                Player.addItemInventory(312, 1, 0);
                Player.addItemInventory(313, 1, 0);
                Player.addItemInventory(276, 1, 0);
                return;
            }
            if(chance >= 200){
                clientMessage("§4Ha, get debuffed noob");¡
                Entity.addEffect(Player.getEntity(), 2, 200, 2, false, true);
                Entity.addEffect(Player.getEntity(), 4, 200, 2, false, true);
                Entity.addEffect(Player.getEntity(), 9, 200, 2, false, true);
                Entity.addEffect(Player.getEntity(), 17, 200, 2, false, true);
                Entity.addEffect(Player.getEntity(), 18, 200, 2, false, true);
                Entity.addEffect(Player.getEntity(), 19, 200, 2, false, true);
                return;
            }
            if(chance >= 150){
                clientMessage("§aWut... ZOMBIE CHICKENS!!!!");
                Level.spawnChicken(playerX, playerY, playerZ, "mob/zombie.png");
                Level.spawnChicken(playerX, playerY, playerZ, "mob/zombie.png");
                Level.spawnChicken(playerX, playerY, playerZ, "mob/zombie.png");
                Level.spawnChicken(playerX, playerY, playerZ, "mob/zombie.png");
                Level.spawnChicken(playerX, playerY, playerZ, "mob/zombie.png");
                return;
            }
            if(chance >= 100){
                clientMessage("I have a gift for ya ;)");
                Level.setTile(playerX, playerY - 1, playerZ - 1, 54);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 0, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 3, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 4, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 5, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 6, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 9, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 12, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 14, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 15, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 18, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 19, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 20, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 21, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 22, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 23, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 24, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 25, 3, 0, 1);
                Level.setChestSlot(playerX, playerY - 1, playerZ - 1, 26, 3, 0, 1);
                return;
            }
            if(chance >= 50){
                clientMessage("§bWelcome to my good side");
                Level.setTile(playerX, playerY - 1, playerZ, 57);
                Level.setTile(playerX, playerY, playerZ, 57);
                Level.setTile(playerX, playerY + 1, playerZ, 57);
                Entity.setPosition(Player.getEntity(), playerX, playerY + 3, playerZ);
                return;
            }
            if(chance >= 0){
                clientMessage("§cMind your step");
                Level.seTile(playerX, 256, playerZ, 2);
                Entity.setPosition(Player.getEntity(), playerX, 258, playerZ);
                return;
            }
            break;
    }
}
