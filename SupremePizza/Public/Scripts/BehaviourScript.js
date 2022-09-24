// -----JS CODE-----
// @input SceneObject mouthText;
// @input SceneObject text1;
// @input SceneObject text2;


var mouthImage = script.mouthText.getComponent("Component.Image");
var text1 = script.text1.getComponent("Component.Image");
var text2 = script.text2.getComponent("Component.Image");

var event = script.createEvent("MouthOpenedEvent");
event.bind(function (eventData)
{
    mouthImage.enabled = true;
    text1.enabled = false;
    text2.enabled = false;
});

var event = script.createEvent("MouthClosedEvent");
event.bind(function (eventData)
{
    if(mouthImage.enabled == true) {
        
        mouthImage.enabled = false;
        text1.enabled = true;
    
    }
    
});