import React from 'react';
import './styles.css'

const MapMarker = ({ place }) => {
  console.log(place);

  const handleMarkerClick = () => {
    console.log("Marker clicked ", place.name);
    // Add your logic to open the popup/dialog
  };

  return (
    <div className="marker-container gmap-marker">
      {/* API data */}
      {place && place.name && place.photo && place.photo.images && place.photo.images.thumbnail && (
        <div className="marker-info" onClick={handleMarkerClick}>
          <div className="info-wrapper wrapper">
            <div className="info-title" style={{}}>
              <span className="title-text">{place.name}</span>
            </div>
            <div className="info-image" style={{ backgroundImage: `url(${place.photo.images.thumbnail.url})` }}></div>
          </div>
        </div>
      )}

      {/* Default content if place or its properties are undefined */}
      {!place || !place.name || !place.photo || !place.photo.images || !place.photo.images.thumbnail && (
        <div className="marker-info" onClick={handleMarkerClick}>
          <div className="info-wrapper wrapper">
            <div className="info-title" style={{}}>
              <span className="title-text">Agra</span>
            </div>
            <div className="info-image" style={{ backgroundImage: 'url("https://bolt-gcdn.sc-cdn.net/3/Z2i0CKb1i5GtNvg8xNoP7.256.IRZXSOY?mo=GlgaFhoAGgAyAX06AQRCBgjm_5mrBlBJYAFaEERmTGFyZ2VUaHVtYm5haWyiARQIgAIiDwoCSAISACoHSVJaWFNPWaIBFAiaCiIPCgJIAxIAKgdJUlpYU09Z&uc=73")' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapMarker;
