let Avi={
    height:5.7,
    weight:73,
    knowledge:`medium`,
    compare:(other)=>{
        if(this.height>other.height)
            console.log(this);
        else
            console.log(other);
    }
}
let Ankita={
    height:5.4,
    weight:60,
    knowledge:`medium`
}
Avi.compare(Ankita)