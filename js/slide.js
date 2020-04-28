var images=[]; // khai báo mảng lưu hình ảnh slide
images[0]="banner1.PNG";
images[1]="banner2.jpg";
images[2]="banner3.jpg";
var i=0;// lưu chỉ số ảnh hiện lên màn hình
function change_slide(){
	var slide = document.getElementById('slide');
	slide.src="images/"+images[i];
	if (i<images.length-1) {
		i++;
	}
	else{
		i=0;
	}
	setTimeout("change_slide()",2000);
}
window.onload= function(){
	change_slide();
}
function prev(){
	
	if (i>0) {
		i--;
	}
	else{
		i= images.length-1;
	}
	slide.src="images/"+images[i];
}
function next(){
	if (i<images.length-1) {
		i++;
	}
	else{
		i= 0;
	}
	slide.src="images/"+images[i];
}