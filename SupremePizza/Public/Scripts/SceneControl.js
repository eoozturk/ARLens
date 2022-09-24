// -----JS CODE-----
// @input Component.AudioComponent sceneAudio;


var event = script.createEvent("OnStartEvent");

event.bind(function (eventData)
{
    self.sceneAudio.play(1);
});
