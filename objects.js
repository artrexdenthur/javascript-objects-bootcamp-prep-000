let playlist = {
  'Paul McCartney':'Let it Be'
};

function updatePlaylist(obj, name, title) {
  return Object.assign( {}, obj, { [name]:title });
}

function removeFromPlaylist(obj, name) {
  return delete Object.assign( {}, obj ).name;
}

