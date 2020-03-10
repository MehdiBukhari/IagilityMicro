// storage and filter for Image
export class Filters{
  constructor(){

  }
  ImageFilter(minmieType:string) {
    let AllowedTypes=['image/jpeg','image/png']
    if(AllowedTypes.indexOf(minmieType)!== -1){
      return true;
    }else{
      return false
    }
 };
 ResumeFilter(minmieType:string) {
  let AllowedTypes=['application/pdf',
  'application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  if(AllowedTypes.indexOf(minmieType)!== -1){
    return true;
  }else{
    return false
  }
};
}
