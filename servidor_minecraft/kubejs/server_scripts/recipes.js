/* ServerEvents.tags(item, event => {

}) */

ServerEvents.recipes(event => {
    event.remove({output: ['twm:titanite_ingot', 'twm:aurumite_ingot', 'twm:aurumite_scrap', 'twm:obsidian_shard', 'twm:titanite_scrap', 'twm:bedrock_sample', 'twm:brightsteel_ingot', Item.of('twm:shattered_glass', '{Damage:0}')]})
    event.remove({output: [Item.of('simplyswords:runic_katana', '{Damage:0}'), Item.of('simplyswords:runic_sai', '{Damage:0}'), Item.of('simplyswords:runic_spear', '{Damage:0}'), Item.of('simplyswords:runic_glaive', '{Damage:0}'), Item.of('simplyswords:runic_cutlass', '{Damage:0}'), Item.of('simplyswords:runic_claymore', '{Damage:0}'), Item.of('simplyswords:runic_chakram', '{Damage:0}'), Item.of('simplyswords:runic_greataxe', '{Damage:0}'), Item.of('simplyswords:runic_greathammer', '{Damage:0}'), Item.of('simplyswords:runic_warglaive', '{Damage:0}'), Item.of('simplyswords:runic_scythe', '{Damage:0}'), Item.of('simplyswords:runic_halberd', '{Damage:0}'), Item.of('simplyswords:runic_longsword', '{Damage:0}'), Item.of('simplyswords:runic_twinblade', '{Damage:0}'), Item.of('simplyswords:runic_rapier', '{Damage:0}')]})
    event.remove({mod: 'realistictorches'})
    event.remove({output: 'minecraft:torch'})
    event.shaped('realistictorches:unlit_torch',[
        'C  ',
        'S  ',
        '   '
    ],{
        C: 'minecraft:coal',
        S: 'minecraft:stick'
    })
    
    event.shaped('realistictorches:matchbox',[
        '   ',
        'FFF',
        'SSS'
    ],{
        F: 'minecraft:flint',
        S: '#minecraft:wooden_slabs'
    })
})