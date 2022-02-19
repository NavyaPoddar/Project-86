var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg' , function(Img){
        bday_img = Img;

        bday_img.scaleToWidth(700);
        bday_img.scaleToHeight(510);
        bday_set({
            top:0 , 
            left: 0 
        });

        canvas.add(bday_img);
    });

	
}

function playSound(){
	x.play();
}
