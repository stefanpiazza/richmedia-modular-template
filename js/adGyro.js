(function () {
	var imageOne = document.getElementById('four');
	var imageTwo = document.getElementById('five');
	var imageThree = document.getElementById('six');

	var maxDistance = 80,
		maxRotation = 40,
		angleX,
		angleY,
		angleXNormalised,
		angleYNormalised;

    window.addEventListener('deviceorientation', function (event) {
		angleX = (window.innerWidth > window.innerHeight ? event.beta : event.gamma);
        angleY = (window.innerWidth > window.innerHeight ? event.gamma : event.beta);

        angleY -= 35;   

    	if (window.orientation === -90) { angleX = angleX * -1; }		
    	if (window.orientation === 90) { 
    		angleY += 70;
    		angleY = angleY * -1;     	
    	}		
    	
        if (angleX <= -maxRotation) {
            angleX = -maxRotation;
        }   

        else if (angleX >= maxRotation) {
            angleX = maxRotation;
        }
        
        if (angleY <= -maxRotation) {
            angleY = -maxRotation;
        }   

        else if (angleY >= maxRotation) {
            angleY = maxRotation;
        }

        angleXNormalised = angleX / (maxRotation/maxDistance);
        angleYNormalised = angleY / (maxRotation/maxDistance);

        imageOne.style.webkitTransform = 'translate3d(' + (angleXNormalised / 3) + 'px, ' + (angleYNormalised / 3) + 'px, 0)';   
        imageTwo.style.webkitTransform = 'translate3d(' + (angleXNormalised / 2) + 'px, ' + (angleYNormalised / 2) + 'px, 0)';   
        imageThree.style.webkitTransform = 'translate3d(' + (angleXNormalised) + 'px, ' + (angleYNormalised) + 'px, 0)';       
    }.bind(this));

    window.addEventListener('mousemove', function (event) {
        angleX = (window.innerWidth / 2) - event.clientX;
        angleY = (window.innerHeight / 2) - event.clientY;

        angleXNormalised = angleX / (window.innerWidth / maxDistance);
        angleYNormalised = angleY / (window.innerHeight / maxDistance);

        imageOne.style.webkitTransform = 'translate3d(' + (angleXNormalised / 3) + 'px, ' + (angleYNormalised / 3) + 'px, 0)';   
        imageTwo.style.webkitTransform = 'translate3d(' + (angleXNormalised / 2) + 'px, ' + (angleYNormalised / 2) + 'px, 0)';   
        imageThree.style.webkitTransform = 'translate3d(' + (angleXNormalised) + 'px, ' + (angleYNormalised) + 'px, 0)';       
    }.bind(this));
})();