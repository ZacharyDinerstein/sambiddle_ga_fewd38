var images = ["img/image-0.jpg" , "img/image-1.jpg" ,"img/image-2.jpg", "img/image-3.jpg", "img/image-4.jpg" ,"img/image-5.jpg" ,"img/image-7.jpg"  ]
var currentImage = 0


function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src',images[whichNum]);
	currentImage = whichNum;

}

function nextImage() {
	currentImage ++;
	if(currentImage===images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src',images[currentImage]);

}

function prevImage() {

	if(currentImage===-1){
		currentImage = 0;
	}
	currentImage = currentImage - 1;
	var img = document.getElementById('mainImage');
	img.setAttribute('src',images[currentImage]);

}