var blurb = new Array();
blurb[0]= "drawing workshop 1.3"
blurb[1]="drawing workshop 2.3"
blurb[2]="drawing workshop 3.3"
blurb[3]="typographic disorders"


var aryImages = new Array();
aryImages[0] = "../images/work/occ1.png";
aryImages[1] = "../images/work/occ2.png";
aryImages[2] = "../images/work/occ3.png";
aryImages[3] = "../images/work/occ4.png";


for (i=0; i < aryImages.length; i++) {
var preload = new Image();
preload.src = aryImages[i];
}


function swap(imgIndex) {
document['imgMain'].src = aryImages[imgIndex];
TheText = blurb[imgIndex];
document.getElementById('caption').innerHTML=TheText;
}
// End -->
</script>

<SCRIPT LANGUAGE="JavaScript">
<!--
// Use the following variable to specify 
// the number of images
var NumberOfImages = 4

var img = new Array(NumberOfImages)

// Use the following variables to specify the image names:
img[0] = "../images/work/occ1.png"
img[1] = "../images/work/occ2.png"
img[2] = "../images/work/occ3.png"
img[3] = "../images/work/occ4.png"

var imgNumber = 0

function NextImage()
{
    imgNumber++
    if (imgNumber == NumberOfImages)
        imgNumber = 0
    document.images["imgMain"].src = img[imgNumber]
}

function PreviousImage()
{
    imgNumber--
    if (imgNumber < 0)
        imgNumber = NumberOfImages - 1
    document.images["imgMain"].src = img[imgNumber]
}