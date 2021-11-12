prediction_1 = ""

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quaity:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OHK89rWt6/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "Victory")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }

        if(results[0].label == "Clap")
        {
            document.getElementById("update_hand").innerHTML = "&#128075;";
        }
        if(results[0].label == "Super")
        {
            document.getElementById("update_hand").innerHTML = "&#128076;";
        }
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_hand").innerHTML = "&#128077;";
        }
        if(results[0].label == "Thumbs down")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;";
        }
        if(results[0].label == "Rad")
        {
            document.getElementById("update_hand").innerHTML = "&#129304;";
        }
        if(results[0].label == "Hi")
        {
            document.getElementById("update_hand").innerHTML = "&#128400;";
        }
        if(results[1].label == "Victory")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }

        if(results[1].label == "Clap")
        {
            document.getElementById("update_hand").innerHTML = "&#128075;";
        }
        if(results[1].label == "Super")
        {
            document.getElementById("update_hand").innerHTML = "&#128076;";
        }
        if(results[1].label == "Thumbs up")
        {
            document.getElementById("update_hand").innerHTML = "&#128077;";
        }
        if(results[1].label == "Thumbs down")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;";
        }
        if(results[1].label == "Rad")
        {
            document.getElementById("update_hand").innerHTML = "&#129304;";
        }
        if(results[1].label == "Hi")
        {
            document.getElementById("update_hand").innerHTML = "&#128400;";
        }
    }
}