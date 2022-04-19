export default  class Gifrandom {
  static ranGif() {
    return new Promise(function (resolve,reject){
      let request =new XMLHttpRequest();
      const url =`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=pg`;
      request.onload =function(){
        if(this.status ===200){
          resolve(request.response);
        }else{
          reject(request.response);
        }
      };
      request.open("GET",url,true);
      request.send();
    });
  }
}