class Music {
    constructor() {
        this.song = document.querySelector(".music");
        this.Playbtn = document.querySelector(".play");
        this.isplaying = false;
        this.puseimg = "/img/iconmonstr-pause-thin 1.svg";
        this.playimg = "/img/Vector.svg";
        this.startTime = document.querySelector(".start-duration");
        this.endTime = document.querySelector(".end-duration");
        this.prgressSlide = document.querySelector(".level");
        this.bar = null;
        this.btnnext = document.querySelector(".next");
        this.btnrevers = document.querySelector(".revers");
        this.mutebtn = document.querySelector(".sound-audio");
        this.songon = false;
        this.notmuteimg = '/img/iconmonstr-audio-21 1.svg';
        this.muteimg = "/img/iconmonstr-audio-11 1.svg";
        this.muteclass = document.querySelector(".sound-on");
        this.soundloop = document.querySelector(".Loop-audio");

    }
    playorpause() {
        if (!this.isplaying) {
            this.song.play();
            this.isplaying = true;
            this.Playbtn.src = this.puseimg;
            this.progressbar();
            this.Timeofsoung();
        } else {
            this.song.pause();
            this.isplaying = false;
            this.Playbtn.src = this.playimg;
            this.Timeofsoung();
            clearInterval(this.bar);
        }
    }
    Timeofsoung() {
        let minute = parseInt(this.song.duration / 60);
        let secondes = parseInt(this.song.duration % 60);
        this.endTime.textContent = `${minute.toString()} : ${secondes.toString()}`;
    }
    progressbar() {
        this.bar = setInterval(() => {
            let minute = parseInt(this.song.currentTime / 60);
            let secondes = parseInt(this.song.currentTime % 60);
            this.prgressSlide.value = this.song.currentTime;
            this.prgressSlide.max = this.song.duration;
            this.startTime.innerHTML = `${minute.toString()} : ${secondes.toString()}`;
        }, 500);
    }
    next() {
        let currvalue = parseInt(this.prgressSlide.value);
        let time = currvalue + 30;
        this.song.currentTime = time;
    }
    back() {
        let currvalue = parseInt(this.prgressSlide.value);
        let time = currvalue - 30;
        this.song.currentTime = time;
    }
    mute() {
            if (!this.songon) {
                this.muteclass.src = this.muteimg;
                this.song.volume = 0;
                this.songon = true;
            } else {
                this.muteclass.src = this.notmuteimg;
                this.song.volume = 1;
                this.songon = false;
            }

        }
        // Loopmusic() {
        //     let fulltime = parseInt(this.song.currentTime);
        //     if (fulltime === 163) {
        //         this.song.currentTime = 0;
        //         this.song.play();
        //         console.log("again");
        //     }

    // }
    barslide(e) {
        let time = e.target.value;
        this.song.currentTime = time;
    }

}


const music = new Music();


music.Playbtn.addEventListener("click", function() {
    music.playorpause();
});
music.btnnext.addEventListener("click", function() {
    music.next();
});
music.btnrevers.addEventListener("click", function() {
    music.back();
});
music.mutebtn.addEventListener("click", function() {
    music.mute();
});
music.prgressSlide.addEventListener("change", function(e) {
    music.barslide(e);
});

// I spent 2day for this its my firts time for me to do the music app 
// 28-May-2020