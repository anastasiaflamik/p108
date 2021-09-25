var cat = 0;
var dog = 0;
var pig = 0;
var chicken = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZmboW65Qb/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Dog"){
            img.src = "https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Cat"){
            img.src = "https://cdn.pixabay.com/photo/2020/11/15/18/31/cat-5746771_1280.png";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Chicken"){
            img.src = "https://lh3.googleusercontent.com/proxy/5mez79fvP-MTCqWZhi86vwIKDZPH6SLjfkP2Y438z2Lge4tp16rrYjbnQ7j4zh9mYRO4maq0iP5E8X_ZxgnQRjl8W5Ew0_YRAUt94-vyMXzKT_OLdPMfPCumxW6fmaXYn0Dw4MFWnh7UdifjTY2C2Ib76SFbkJMiU0snlnBH5liKbPdc0TpZeIc";
            chicken = chicken+1;
            document.getElementById("detected").innerHTML = "Detected Chicken - "+ chicken;
        }
        else if(results[0].label == "Pig"){
            img.src = "https://freepngimg.com/thumb/pig/24693-6-pig-transparent.png";
            pig = pig+1;
            document.getElementById("detected").innerHTML = "Detected Pig - "+ pig;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}