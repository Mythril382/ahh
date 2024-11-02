function ahh(str){
    return str.split(" ").map(w => w + "ahh").join(" ");
}

Events.on(ClientLoadEvent, e => {
    let copy = Core.bundle.getProperties().copy();
    Core.bundle.getProperties().each((k, v) => {
        copy.put(k, ahh(v));
    });
    Core.bundle.setProperties(copy);
    Vars.content.each(c => {
        if(c instanceof UnlockableContent){
            c.localizedName = ahh(c.localizedName);
            if(c.description != null) c.description = ahh(c.description);
            if(c.details != null) c.details = ahh(c.details);
        }
    });
});
