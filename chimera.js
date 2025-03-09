//[skin1, skin2, scale1, fur1, fur2, sclera, iris, color] for z order
// REMINDER FOR THE SAKE OF ORGANIZATION I GUESS -- Discriptive pieces> Species pieces> OC pieces

//palettes
import {BodyPart} from "./ChimeraParts.js";

let folderDir = "images/"; //arms/arachne/arms_arachne_line.svg"

$(document).ready(() => {
    $('button.randomize').click(() => {
        //console.log(parts)
        randomize();
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawChimera(false);
        //console.log("wazzup")
    });
});


//loads all the SVGs into the parts array off the bat to reduce the load time later. better off this way, i think.
//means that the initial load is slow... but faster overall.
for (let part of partsArray) {
    //console.log(parts[part])
    for (let uniquePart of parts[part]) {
        uniquePart['svgData'] = []
        //console.log(uniquePart)
        for (let mask of uniquePart.mask) {
            let filepath = uniquePart.url + part + '_' + uniquePart.type + '_' + mask + '.svg';
            let filepathAlt = uniquePart.url + "alt_" + part + '_' + uniquePart.type + '_' + mask + '.svg';
            //console.log(filepath)
            $.ajax({
                url: filepath,
                success: function (data) {
                    //console.log(uniquePart)
                    let file = data.substring(data.indexOf('<svg ')) //need to remove the stuff at the start of the file, or it breaks everything.
                    let maskObj = {
                        [mask]: file
                    }
                    uniquePart['svgData'].push(maskObj)
                },
                //async: false,
                dataType: "text"
            });
            if (part === "hair_front") {
                $.ajax({
                    url: filepathAlt,
                    success: function (data) {
                        let file = data.substring(data.indexOf('<svg ')) //need to remove the stuff at the start of the file, or it breaks everything.
                        let maskObj = {
                            ["alt_" + mask]: file
                        }
                        uniquePart['svgData'].push(maskObj)
                    },
                    //async: false,
                    dataType: "text"
                });
            }
        }
        let linePath = uniquePart.url + part + '_' + uniquePart.type + '_line' + '.svg';
        let linePathAlt = uniquePart.url + "alt_" + part + '_' + uniquePart.type + '_line' + '.svg';
        $.ajax({
            url: linePath,
            success: function (data) {
                let file = data.substring(data.indexOf('<svg ')) //need to remove the stuff at the start of the file, or it breaks everything.
                let lineObj = {
                    line: file
                }

                uniquePart['svgData'].push(lineObj)
            },
            //async: false,
            dataType: "text"
        });
        if (part === "hair_front") {
            $.ajax({
                url: linePathAlt,
                success: function (data) {
                    let file = data.substring(data.indexOf('<svg ')) //need to remove the stuff at the start of the file, or it breaks everything.
                    let maskObj = {
                        alt_line: file
                    }
                    uniquePart['svgData'].push(maskObj)
                },
                //async: false,
                dataType: "text"
            });
        }
        //console.log(uniquePart)
    }

}



//get canvas
let canvas = document.getElementById("chimera");
let ctx = canvas.getContext("2d");
//keep track of body parts in an object
//we dont have to worry about setting things to blank if we just keep track of
//whether or not they're enabled. Past Erik, you fucking dumbass.


let chimera = {
    palette: palettes[0],
    hornsFrontEnabled: false,
    hornsEnabled: false,
    legsFullEnabled: false,
    tailEnabled: false,
    wingsEnabled: false,
    hairFrontEnabled: true,
    hairBackEnabled: true,
    earsEnabled: true,
    wings: new BodyPart(parts["wings"][0]),
    tail: new BodyPart(parts["tail"][0]),
    hair_back: new BodyPart(parts["hair_back"][0]),
    legs_feet: new BodyPart(parts["legs_feet"][0]),
    legs_hips: new BodyPart(parts["legs_hips"][0]),
    legs_full: new BodyPart(parts["legs_full"][0]),
    torso: new BodyPart(parts["torso"][0]),
    neck: new BodyPart(parts["neck"][0]),
    arms: new BodyPart(parts["arms"][0]),
    shoulders: new BodyPart(parts["shoulders"][0]),
    ears: new BodyPart(parts["ears"][0]),
    head: new BodyPart(parts["head"][0]),
    nose: new BodyPart(parts["nose"][0]),
    mouth: new BodyPart(parts["mouth"][0]),
    eyes: new BodyPart(parts["eyes"][0]),
    horns: new BodyPart(parts["horns"][0]),
    hair_front: new BodyPart(parts["hair_front"][0]),
    horns_front: new BodyPart(parts["horns_front"][0]),
};

//console.log(chimera)


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomize() {
    //console.log(parts)

    chimera.palette = palettes[getRandomNumber(palettes.length)];
    for (let i = 0; i < enabledArray.length; i++) {
        chimera[enabledArray[i]] = getRandomNumber(2) > 0 ? true : false;
    }
    for (let i = 0; i < partsArray.length; i++) {
        chimera[partsArray[i]] = parts[partsArray[i]][getRandomNumber(parts[partsArray[i]].length)]
    } //just for consistency ig? looks weird with only back enabled and not front
    if (chimera['hairBackEnabled']) {
        chimera['hairFrontEnabled'] = true;
    }

}



drawChimera(true); //called upon button press
//console.log(parts)

function callback(obj) {

}

function waitForImageToLoad(image) {
    return new Promise(resolve=>{image.onload = resolve})
}

//draw in this order:
//skin1 -> scale1 -> skin2 -> fur1 -> fur2 -> sclera -> iris -> color -> line

function checkIfEnabled(part) {
    switch (part) {
        case "horns_front": return chimera["hornsFrontEnabled"]
        case "horns": return chimera["hornsEnabled"]
        case "legs_full": return chimera["legsFullEnabled"]
        case "tail": return chimera["tailEnabled"]
        case "wings": return chimera["wingsEnabled"]
        case "hair_front": return chimera["hairFrontEnabled"]
        case "hair_back": return chimera["hairBackEnabled"]
        case "ears": return chimera["earsEnabled"]
        default: return true;
    }

}


async function drawChimera(isInit) {
    //isInit refers to if it's the first call
    for (let i = 0; i < partsArray.length; i++) {
        //let partType = chimera[partsArray[i]].url.split("/")[1]
        //console.log(partsArray[i])
        //console.log(partType)
        //console.log(chimera[partsArray[i]].svgData)
        if (!isInit) {//button press
            let svgDataLength = chimera[partsArray[i]].svgData.length;
            //check if the part is enabled
            if (!checkIfEnabled(partsArray[i]))
                continue;
            if (partsArray[i] === "hair_front") {
                //console.log(chimera.hornsFrontEnabled)
                svgDataLength /= 2;
                for (let j = 0; j < svgDataLength; j++) {
                    if (j < svgDataLength - 1) { //colors
                        //console.log(chimera[partsArray[i]].mask)

                        if (chimera.hornsFrontEnabled) { //+1 for alt
                            //console.log(j*2+1)
                            //console.log(chimera[partsArray[i]].svgData[j*2+1]['alt_' + chimera[partsArray[i]].mask])
                            await drawSvg(chimera[partsArray[i]].svgData[j*2+1]['alt_' + chimera[partsArray[i]].mask], chimera[partsArray[i]].mask[j], partsArray[i])
                        } else {
                            //console.log(j*2)
                            //console.log(chimera[partsArray[i]].svgData[j*2][chimera[partsArray[i]].mask])
                            await drawSvg(chimera[partsArray[i]].svgData[j*2][chimera[partsArray[i]].mask], chimera[partsArray[i]].mask[j], partsArray[i])
                        }
                    }//line
                    else {
                        if (chimera.hornsFrontEnabled) { //+1 for alt
                            await drawSvg(chimera[partsArray[i]].svgData[j*2+1]['alt_line'], null, partsArray[i])
                        } else {
                            await drawSvg(chimera[partsArray[i]].svgData[j*2]['line'], null, partsArray[i])
                        }
                    }
                }
            }
            else {

                if (checkIfEnabled("legs_full") && (partsArray[i] === "tail" || partsArray[i] === "legs_hips" || partsArray[i] === "legs_feet")) continue;

                for (let j = 0; j < svgDataLength; j++) {
                    if (j < svgDataLength - 1) {
                        //console.log(chimera[partsArray[i]].svgData[j][chimera[partsArray[i]].mask[j]])
                        await drawSvg(chimera[partsArray[i]].svgData[j][chimera[partsArray[i]].mask[j]], chimera[partsArray[i]].mask[j],partsArray[i])
                    } else {
                        await drawSvg(chimera[partsArray[i]].svgData[j]['line'], null, partsArray[i])
                    }
                }
            }
        } else {
            if (!checkIfEnabled(partsArray[i])) continue;
            if (checkIfEnabled("legs_full") && (partsArray[i] === "tail" || partsArray[i] === "legs_hips" || partsArray[i] === "legs_feet")) continue;
            for (let j = 0; j < chimera[partsArray[i]].mask.length; j++) {
                let fileName = chimera[partsArray[i]].url + partsArray[i] + "_" + chimera[partsArray[i]].type + "_" + chimera[partsArray[i]].mask[j] + ".svg"
                await initSvg(fileName, chimera[partsArray[i]].mask[j]);
            }
            let fileName = chimera[partsArray[i]].url + partsArray[i] + "_" + chimera[partsArray[i]].type + "_line.svg"
            await initSvg(fileName, null)
        }

    }
}

function drawSvg(svgData, mask, part) {
    //console.log(mask)
    let img = new Image();
    let file = svgData
    const fillRegex = /fill="#[0-9a-fA-F]{6}"/
    if (mask != null) {
        file = file.replace(fillRegex, 'fill="' + chimera.palette[mask] + '"')
    }
    img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(file);
    waitForImageToLoad(img).then(()=>{
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });
}

//the reason I'm doing this here is because i dont want to have nothing on the canvas while all the shit loads in the background
//otherwise it'd be an awkward 250 milliseconds of..empty
//it's still a slow method, but it's better than nothing, y'know
function initSvg(filepath, mask) {
    //console.log(mask)
    $.ajax({
        url: filepath,
        success: function (data) {
            //kind of temporary solution. (but it works)
            let file = data.substring(data.indexOf('<svg ')) //need to remove the stuff at the start of the file, or it breaks everything.
            //now that we have the file we can manually edit the fill color.

            const fillRegex = /fill="#[0-9a-fA-F]{6}"/
            //console.log(chimera.palette['scale1'])
            if (mask != null) {
                file = file.replace(fillRegex, 'fill="' + chimera.palette[mask] + '"')
            }
            //console.log(file)
            var img = new Image();

            img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(file);
            waitForImageToLoad(img).then(()=>{
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            });

        },
        async: false,
        dataType: "text"

    });
}
