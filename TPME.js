var prefix = "§l§7(§aTPME§7)§r§7 ";
    
function procCmd(command) {
    var cmd = command.split(" ");
    if(cmd[0] == "tpme") {
        if(cmd.length > 3) {
            if(isNaN(cmd[1]) || isNaN(cmd[2]) || isNaN(cmd[3])) {
                clientMessage(prefix + "Position entered isn't numeric");
                return;
            }
            if(Number(cmd[2]) < 1 || Number(cmd[2]) > 256) {
                clientMessage(prefix + "Invalid Y coordinate");
                return;
            }
            Entity.setPosition(Player.getEntity(), Number(cmd[1]), Number(cmd[2]), Number(cmd[3]));
            clientMessage(prefix + "Teleported you to :x :y :z".replace(":x", cmd[1]).replace(":y", cmd[2]).replace(":z", cmd[3]));
            return;
        }else{
            if(cmd[1] == "about") {
                clientMessage(prefix + "TPME, Teleportation mod for MCPE made by @ImThePotatoe");
                return;
            }
            clientMessage(prefix + "Use /tpme about or /tpme <x> <y> <z>");
            return;
        }
        clientMessage(prefix + "Use /tpme about or /tpme <x> <y> <z>");
    }
}