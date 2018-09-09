let playlist = {
};

function updatePlaylist(obj, name, title) {
  return Object.assign( {}, obj, { [name]:title });
}

function removeFromPlaylist(obj, name) {
  return Object.delete(Object.assign( {}, obj ), name);
}

