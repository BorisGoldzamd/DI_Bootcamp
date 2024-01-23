class video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} parameter watched all ${this.time} parameter of ${this.title} parameter!`);
    }
}
const video1 = new video('Harry Potter', 'Youtube', 120)
video1.watch();

const video2 = new video('Harry Potter1', 'Youtube2', 110)
video2.watch();

const videoArray =[
    {title: 'a', uploader:'aa', time: 1},
    {title: 'b', uploader:'bbb', time: 2},
    {title: 'c', uploader:'cc', time: 3},
    {title: 'd', uploader:'dd', time: 4},
    {title: 'e', uploader:'ee', time: 5},
];

videoArray.forEach((item, i, arr) => {
    arr[i] = new video(item.title, item.uploader, item.time);
});
console.log(videoArray);
videoArray.forEach(item => {
    item.watch()
})