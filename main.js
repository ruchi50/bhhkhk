var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var block_object = "";

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {

        block_object = Img ; 
        block_object.scaleToWidth(700);
        block_object.scaleToHeight(510);
        block_object.set({
         top :0,
        left : 0
         });
         canvas.add(block_object);
        });
         
}
   

function playSound(){
	 x.play();

}

