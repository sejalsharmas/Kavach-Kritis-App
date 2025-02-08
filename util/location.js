
function getMapPreview(){
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyD0stZMoFCsX8vSkNpDlOCfCj2z7I5LuKc&signature=YOUR_SIGNATURE` ;
  return imagePreviewUrl;
}  