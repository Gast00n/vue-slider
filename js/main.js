/**
 * 
 * Vue Slider
 * 
 */

const app = new Vue ({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
        ],
        intervalID: 0
    },
    created() { //Genero un loop al caricamento della pagina
        this.startLoop();
    },
    methods: {
        nextPhoto() {
            this.indexPhoto ++;
            if (this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },

        prevPhoto() {
           this.indexPhoto --;
           if (this.indexPhoto < 0) {
               this.indexPhoto = (this.photos.length - 1);
           }
       },

       setPhoto(index) {
           this.indexPhoto = index;
       },

       startLoop() {
           this.intervalId = setInterval(()=> {
               this.nextPhoto();
           }, 3000);
       },
       stopLoop() {
           clearInterval(this.intervalId);
       }
    }
});