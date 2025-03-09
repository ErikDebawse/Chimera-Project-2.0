
//draw in this order:
//skin1 -> scale1 -> skin2 -> fur1 -> fur2 -> sclera -> iris -> color -> line

//NOTE: NEW!!! FEATURE(?????)!!!!
//THE MASK NOW DEPENDS ON THE ORDER OF THE ARRAY
//so if you want a layer to appear above another layer
//make it later in the list!
//i.e. if you want to draw skin2 over fur1, per se
// you'd do [fur1, skin2]
//i'm not sure where this'd be useful but this is just
//how it is i don't make the rules

let parts = {
    wings: [ //wings have a chance of being replaced by blanks
        {
            name: 'Temp Wings',
            type: 'temp',
            url: 'images/wings/temp/',
            mask: ['scale1', 'skin2']
        },
        {
            name: 'Angel Wings',
            type: 'angel',
            url: 'images/wings/angel/',
            mask: ['fur1']
        },
        {
            name: 'Wasp Wings',
            type: 'wasp',
            url: 'images/wings/wasp/',
            mask: ['scale1','skin2']
        },
    ],
    tail: [
        {
            name: 'Cat Tail',
            type: 'cat',
            url: 'images/tail/cat/',
            mask: ['fur1']
        },
        {
            name: 'Bird Tail',
            type: 'bird',
            url: 'images/tail/bird/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Kobold Tail',
            type: 'kobold',
            url: 'images/tail/kobold/',
            mask: ['scale1','skin2']
        }
    ],
    hair_back: [
        {
            name: 'Bulb Hair',
            type: 'bulb',
            url: 'images/hair_back/bulb/',
            mask: ['color']
        },
        {
            name: 'Long Hair',
            type: 'long',
            url: 'images/hair_back/long/',
            mask: ['color']
        },
        {
            name: 'Longer Hair',
            type: 'long',
            url: 'images/hair_back/longer/',
            mask: ['color']
        },
        {
            name: 'Longest Hair',
            type: 'long',
            url: 'images/hair_back/longest/',
            mask: ['color']
        },
        {
            name: 'Wild Hair',
            type: 'wild',
            url: 'images/hair_back/wild/',
            mask: ['color']
        },
        {
            name: 'Santr Hair',
            type: 'santr',
            url: 'images/hair_back/santr/',
            mask: ['color']
        },
        {
            name: 'Iban Hair',
            type: 'iban',
            url: 'images/hair_back/iban/',
            mask: ['color']
        }
    ],
    legs_feet: [
        {
            name: 'Base Feet',
            type: 'base',
            url: 'images/legs_feet/base/',
            mask: ['skin1']
        },
        {
            name: 'Horse Feet',
            type: 'horse',
            url: 'images/legs_feet/horse/',
            mask: ['fur1']
        },
        {
            name: 'Kobold Feet',
            type: 'kobold',
            url: 'images/legs_feet/kobold/',
            mask: ['scale1']
        },
        {
            name: 'Tiger Feet',
            type: 'tiger',
            url: 'images/legs_feet/tiger/',
            mask: ['fur1']
        },
        {
            name: 'Santr Feet',
            type: 'santr',
            url: 'images/legs_feet/santr/',
            mask: ['skin2']
        },
        {
            name: 'Iban Feet',
            type: 'iban',
            url: 'images/legs_feet/iban/',
            mask: ['scale1']
        },
    ],
    legs_hips: [
        {
            name: 'Base Hips',
            type: 'base',
            url: 'images/legs_hips/base/',
            mask: ['skin1']
        },
        {
            name: 'Curvy Hips',
            type: 'base', //since curvy just seems to be a variant for base skin tone, set the type to base
            url: 'images/legs_hips/curvy/',
            mask: ['skin1']
        },
        {
            name: 'Fur Hips',
            type: 'fur',
            url: 'images/legs_hips/fur/',
            mask: ['fur1', 'fur2']
        },
        {
            name: 'Kobold Hips',
            type: 'kobold',
            url: 'images/legs_hips/kobold/',
            mask: ['scale1','skin2']
        },
        {
            name: 'Sheep Hips',
            type: 'sheep',
            url: 'images/legs_hips/sheep/',
            mask: ['skin1','fur1']
        },
        {
            name: 'Santr Hips',
            type: 'santr',
            url: 'images/legs_hips/santr/',
            mask: ['fur1', 'fur2']
        },
    ],
    legs_full: [
        {
            name: 'Naga Lower Body',
            type: 'naga',
            url: 'images/legs_full/naga/',
            mask: ['scale1', 'skin2']
        },
        {
            name: 'Arachne Lower Body',
            type: 'arachne',
            url: 'images/legs_full/arachne/',
            mask: ['scale1', 'fur1']
        },
    ],
    torso: [
        {
            name: 'Base Torso',
            type: 'base',
            url: 'images/torso/base/',
            mask: ['skin1']
        },
        {
            name: 'Kobold Torso',
            type: 'kobold',
            url: 'images/torso/kobold/',
            mask: ['scale1', 'skin2']
        },
        {
            name: 'Dog Torso',
            type: 'dog',
            url: 'images/torso/dog/',
            mask: ['fur1', 'fur2']
        },
        {
            name: 'Santr Torso',
            type: 'santr',
            url: 'images/torso/santr/',
            mask: ['fur1', 'fur2']
        },
        {
            name: 'Iban Torso',
            type: 'iban',
            url: 'images/torso/iban/',
            mask: ['skin1','scale1']
        }
    ],
    neck: [
        {
            name: 'Base Neck',
            type: 'base',
            url: 'images/neck/base/',
            mask: ['skin1']
        },
        {
            name: 'Fur Neck',
            type: 'fur',
            url: 'images/neck/fur/',
            mask: ['fur1']
        },
        {
            name: 'Fluffy Neck',
            type: 'fluffy',
            url: 'images/neck/fluffy/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Kobold Neck',
            type: 'kobold',
            url: 'images/neck/kobold/',
            mask: ['scale1', 'skin2']
        }
    ],
    arms: [ //(includes hands)
        {
            name: 'Base Arms',
            type: 'base',
            url: 'images/arms/base/',
            mask: ['skin1']
        },
        {
            name: 'Oni Arms',
            type: 'oni',
            url: 'images/arms/oni/',
            mask: ['skin1','scale1']
        },
        {
            name: 'Arachne Arms',
            type: 'arachne',
            url: 'images/arms/arachne/',
            mask: ['scale1']
        },
        {
            name: 'Cat Arms',
            type: 'cat',
            url: 'images/arms/cat/',
            mask: ['skin2','fur1']
        },
        {
            name: "Owl Arms",
            type: "owl",
            url: "images/arms/owl/",
            mask: ['skin2','fur1']
        },
        {
            name: 'Kobold Arms',
            type: 'kobold',
            url: 'images/arms/kobold/',
            mask: ['scale1', 'skin2']
        },
        {
            name: 'Claw Arms',
            type: 'claw',
            url: 'images/arms/claw/',
            mask: ['scale1', 'skin2']
        },
        {
            name: 'Santr Arms',
            type: 'santr',
            url: 'images/arms/santr/',
            mask: ['fur1', 'fur2']
        },

    ],
    shoulders: [
        {
            name: 'Base Shoulders',
            type: 'base',
            url: 'images/shoulders/base/',
            mask: ['skin1']
        },
        {
            name: 'Dog Shoulders',
            type: 'dog',
            url: 'images/shoulders/dog/',
            mask: ['fur1']
        },
        {
            name: 'Sheep Shoulders',
            type: 'sheep',
            url: 'images/shoulders/sheep/',
            mask: ['skin1','fur1']
        },
        {
            name: 'Iban Shoulders',
            type: 'iban',
            url: 'images/shoulders/iban/',
            mask: ['skin1','scale1']
        },
        {
            name: 'Kobold Shoulders',
            type: 'kobold',
            url: 'images/shoulders/kobold/',
            mask: ['scale1']
        }
    ],
    ears: [
        {
            name: 'Base Ears',
            type: 'base',
            url: 'images/ears/base/',
            mask: ['skin1']
        },
        {
            name: 'Bunny Ears',
            type: 'bunny',
            url: 'images/ears/bunny/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Kobold Ears',
            type: 'kobold',
            url: 'images/ears/kobold/',
            mask: ['scale1']
        },
        {
            name: 'Lynx Ears',
            type: 'lynx',
            url: 'images/ears/lynx/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Rat Ears',
            type: 'rat',
            url: 'images/ears/rat/',
            mask: ['skin2', 'fur1']
        }
    ],
    head: [
        {
            name: 'Base Head',
            type: 'base',
            url: 'images/head/base/',
            mask: ['skin1']
        },
        {
            name: 'Fur Head',
            type: 'fur',
            url: 'images/head/fur/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Kobold Head',
            type: 'kobold',
            url: 'images/head/kobold/',
            mask: ['scale1']
        },
        {
            name: 'Owl Head',
            type: 'owl',
            url: 'images/head/owl/',
            mask: ['fur1','fur2']
        },
        {
            name: 'Shark Head',
            type: 'shark',
            url: 'images/head/shark/',
            mask: ['skin2']
        }
    ],
    nose: [
        {
            name: 'Base Nose',
            type: 'base',
            url: 'images/nose/base/',
            mask: []
        },
        {
            name: 'Bunny Nose',
            type: 'bunny',
            url: 'images/nose/bunny/',
            mask: []
        },
        {
            name: 'Tiger Nose',
            type: 'tiger',
            url: 'images/nose/tiger/',
            mask: ['skin2']
        },
        {
            name: 'Rat Nose',
            type: 'rat',
            url: 'images/nose/rat/',
            mask: ['skin2']
        },
        {
            name: 'Dog Nose',
            type: 'dog',
            url: 'images/nose/dog/',
            mask: ['skin2']
        },
        {
            name: 'Iban Nose',
            type: 'iban',
            url: 'images/nose/iban/',
            mask: []
        },
        {
            name: 'Kobold Nose',
            type: 'kobold',
            url: 'images/nose/kobold/',
            mask: []
        }
    ],
    mouth: [
        {
            name: 'Base Mouth',
            type: 'base',
            url: 'images/mouth/base/',
            mask: []
        },
        {
            name: 'O Mouth',
            type: 'base', //variations of base mouth i guess
            url: 'images/mouth/o/',
            mask: []
        },
        {
            name: 'V Mouth',
            type: 'base',
            url: 'images/mouth/v/',
            mask: []
        },
        {
            name: 'Teethy Mouth',
            type: 'teethy',
            url: 'images/mouth/teethy/',
            mask: ['skin2']
        },
        {
            name: 'Smug Mouth',
            type: 'smug',
            url: 'images/mouth/smug/',
            mask: []
        },
        {
            name: 'Secretary Mouth',
            type: 'secretary',
            url: 'images/mouth/secretary/',
            mask: ['skin2']
        },
        {
            name: 'Dog Mouth',
            type: 'dog',
            url: 'images/mouth/dog/',
            mask: ['skin2']
        },
        {
            name: 'Cat Mouth',
            type: 'cat',
            url: 'images/mouth/cat/',
            mask: []
        },
        {
            name: 'Kobold Mouth',
            type: 'kobold',
            url: 'images/mouth/kobold/',
            mask: []
        },

        {
            name: 'Mousey Mouth',
            type: 'mousey',
            url: 'images/mouth/mousey/',
            mask: []
        },
        {
            name: 'Owl Mouth',
            type: 'owl',
            url: 'images/mouth/owl/',
            mask: ['skin2','fur1']
        },
        {
            name: 'Santr Mouth',
            type: 'santr',
            url: 'images/mouth/santr/',
            mask: ['skin2', 'fur1']
        },
        {
            name: 'Iban Mouth',
            type: 'iban',
            url: 'images/mouth/iban/',
            mask: []
        },
    ],
    eyes: [
        {
            name: 'Base Eyes',
            type: 'base',
            url: 'images/eyes/base/',
            mask: ['sclera','iris']
        },
        {
            name: 'Round Eyes',
            type: 'base', //variation
            url: 'images/eyes/round/',
            mask: ['sclera','iris']
        },
        {
            name: 'Closed Eyes',
            type: 'closed',
            url: 'images/eyes/closed/',
            mask: []
        },
        {
            name: 'Kawaii Eyes',
            type: 'kawaii',
            url: 'images/eyes/kawaii/',
            mask: ['sclera','iris']
        },

        {
            name: 'Moth Eyes',
            type: 'moth',
            url: 'images/eyes/moth/',
            mask: ['sclera','iris']
        },
        {
            name: 'Luscious Eyes',
            type: 'luscious',
            url: 'images/eyes/luscious/',
            mask: ['sclera','iris']
        },
        {
            name: 'Santr Eyes',
            type: 'santr',
            url: 'images/eyes/santr/',
            mask: ['fur2', 'sclera','iris']
        },
        {
            name: 'Iban Eyes',
            type: 'iban',
            url: 'images/eyes/iban/',
            mask: ['sclera',"iris"]
        },

    ],
    horns: [ //optional
        {
            name: 'Crown Horns',
            type: 'crown',
            url: 'images/horns/crown/',
            mask: ['scale1']
        },
        {
            name: 'Iban Horns',
            type: 'iban',
            url: 'images/horns/iban/',
            mask: ['scale1']
        },
        {
            name: 'Kobold Horns',
            type: 'kobold', //variation
            url: 'images/horns/kobold/',
            mask: ['scale1']
        }
    ],
    hair_front: [

        {
            name: 'Default Hair',
            type: 'default',
            url: 'images/hair_front/default/',
            mask: ['color']
        },
        {
            name: 'Bow Hair',
            type: 'bow',
            url: 'images/hair_front/bow/',
            mask: ['color']
        },
        {
            name: 'Guile Hair',
            type: 'guile',
            url: 'images/hair_front/guile/',
            mask: ['color']
        },
        {
            name: 'Short Hair',
            type: 'short', //variation
            url: 'images/hair_front/short/',
            mask: ['color']
        }
    ],
    horns_front: [ //optional
        {
            name: 'Bull Front Horns',
            type: 'bull',
            url: 'images/horns_front/bull/',
            mask: ['skin2']
        },
        {
            name: 'Kobold Front Horns',
            type: 'kobold',
            url: 'images/horns_front/kobold/',
            mask: ['scale1']
        },
        {
            name: 'Unicorn Front Horn',
            type: 'unicorn',
            url: 'images/horns_front/unicorn/',
            mask: ['skin2']
        }
    ]
}

const enabledArray = [
    "hornsFrontEnabled", "hornsEnabled", "legsFullEnabled", "tailEnabled",
    "wingsEnabled", "hairFrontEnabled", "hairBackEnabled", "earsEnabled"
]

const partsArray = [
    "wings", "tail", "hair_back", "legs_feet", "legs_hips", "legs_full",
    "torso", "neck", "arms", "shoulders", "ears", "head", "nose", "mouth",
    "eyes", "horns", "hair_front", "horns_front"
]

// const zOrderArray = [
//     "skin1", "scale1", "skin2", "fur1", "fur2", "sclera", "iris", "color"
// ]