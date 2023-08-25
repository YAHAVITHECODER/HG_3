prediction = ""

Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="cp" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/otDur0xA2/model.json', mL);

function mL()
{
    console.log('model has loaded mr./ms.user!');
}

function check()
{
    img = document.getElementById("cp");
    classifier.classify(img, gotResult);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data ="Your prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;

        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();

        if(results[0].label == "punch")
        {
            document.getElementById("update_emoji").innerHTML = "&#9994;"
        }
        
        if(results[0].label == "Up")
        {
            document.getElementById("update_emoji").innerHTML = "&#9757;"
        }

        if(results[0].label == "Nice")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }

        if(results[0].label == "Thumb Up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }

        if(results[0].label == "Thumb Down")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;"
        }

        //Next is [1]

        if(results[1].label == "punch")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9994;"
        }

        if(results[1].label == "Up")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9757"
        }
        
        if(results[1].label == "Nice")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }

        if(results[1].label == "Thumb Up")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;"
        }

        if(results[1].label == "Thumb Down")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128078;"
        }
    }
}

