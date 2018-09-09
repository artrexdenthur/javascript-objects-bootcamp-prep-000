let playlist = {
  'Paul McCartney':'Let it Be'
};

function updatePlaylist(obj, name, title) {
  return Object.assign( {}, obj, { name:title })
}