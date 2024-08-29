var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var statusElement = document.getElementById("status");
function upload(file) {
  if (file.size > 26214400) return statusElement.innerHTML = "That file is over 25MB!";
  var fd = new window.FormData();
  fd.append("video", file);
  statusElement.innerHTML = "Generating...";
  window.fetch("/this_vid2webeditionrevived/upload", {
    method: "post",
    body: fd
  }).then(res => res.json()).then(json => {
    if (json.error) return statusElement.innerHTML = `There was an error while generating the video: ${json.error}`;
    statusElement.innerHTML = "Downloading...";
    document.getElementById("frame").src = json.data;
  }).catch(error => {
    console.error(error);
  });
}

function uploadFile(event) {
  if (typeof window.FileReader !== "function")
    throw ("The file API isn't supported on this browser.");
  var input = event.target;
  if (!input)
    throw ("The browser does not properly implement the event object");
  if (!input.files)
    throw ("This browser does not support the `files` property of the file input.");
  if (!input.files[0])
    return undefined;
  statusElement.innerHTML = "Processing...";
  var file = input.files[0];
  upload(file);
}

function uploadExtVideo() {
  var url = document.getElementById("link").value;
  if (!url) return;
  if (!isValidURL(url)) return statusElement.innerHTML = "That isn't a valid URL!";
  statusElement.innerHTML = "Processing...";
  window.fetch(`/this_vid2webeditionrevived/uploadytdl?url=${url}`).then(res => {
    return res.json();
  }).then(json => {
    if (json.error) return statusElement.innerHTML = `There was an error while generating the video: ${json.error}`;
    statusElement.innerHTML = "Downloading...";
    document.getElementById("frame").src = json.data;
  }).catch(error => {
    console.error(error);
  });
}

function isValidURL(str) {
  var a = document.createElement("a");
  a.href = str;
  return (a.host && a.host != window.location.host);
}

}
/*
     FILE ARCHIVED ON 01:09:06 Dec 06, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:13:11 Aug 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.648
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 8.323
  LoadShardBlock: 87.138 (3)
  PetaboxLoader3.datanode: 133.067 (6)
  load_resource: 295.391 (2)
  PetaboxLoader3.resolve: 138.825 (2)
  loaddict: 88.213
*/
