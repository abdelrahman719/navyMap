import { Component, AfterViewInit } from '@angular/core';


declare var naver: any;
@Component({
  selector: 'app-testmap',
  templateUrl: './testmap.component.html',
  styleUrls: ['./testmap.component.scss']
})
export class TestmapComponent implements AfterViewInit {
  title = 'navermap-angular-test';
  map: any;

  ngAfterViewInit() {
    var mapOptions = {
      useStyleMap: true,
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 15,

    };
    this.map = new naver.maps.Map('map', mapOptions);

    var position = new naver.maps.LatLng(37.3595704, 127.105399);
    var map = new naver.maps.Map('map', {
      center: position,
      zoom: 10
    });

    // Array of marker positions (example coordinates)
    var markerPositions = [
      { lat: 37.5666791, lng: 126.9782914 }, // Seoul
      { lat: 35.1795543, lng: 129.0756416 }, // Busan
      { lat: 35.8714354, lng: 128.601445 },  // Daegu
      { lat: 36.332371, lng: 127.394583 },  // Daejeon
      { lat: 35.5383773, lng: 129.3113596 }, // Ulsan
      { lat: 37.4944779, lng: 126.8861131 }, // Incheon
      { lat: 35.1595454, lng: 126.852601 },  // Gwangju
      { lat: 37.885401, lng: 127.729294 },  // Chuncheon
      { lat: 36.568371, lng: 128.729349 },  // Gangneung
      { lat: 37.240983, lng: 127.177952 },  // Suwon
      { lat: 37.1742859, lng: 128.2716866 }, // Wonju
      { lat: 37.392972, lng: 126.957686 },  // Bucheon
      { lat: 35.163106, lng: 126.849965 },  // Gwangju
      { lat: 35.815129, lng: 127.108877 },  // Jeonju
      { lat: 35.825021, lng: 127.148586 },  // Iksan
      { lat: 35.856171, lng: 129.224747 },  // Pohang
      { lat: 35.540613, lng: 129.338794 },  // Gimhae
      { lat: 36.333913, lng: 127.392252 },  // Daejeon
      { lat: 36.800011, lng: 127.075083 },  // Cheongju
      { lat: 35.1595454, lng: 129.120034 },  // Busan
      { lat: 36.632845, lng: 127.485634 },  // Sejong
      { lat: 37.479443, lng: 126.630298 },  // Goyang
      { lat: 35.198362, lng: 129.053922 },  // Yangsan
      { lat: 36.351240, lng: 127.387101 },  // Daejeon
      { lat: 36.321640, lng: 127.378953 },  // Daejeon
    ];

    // Loop through the marker positions array and add markers to the map
    var markers = [];
    for (var i = 0; i < markerPositions.length; i++) {
      var markerOptions = {
        position: new naver.maps.LatLng(markerPositions[i].lat, markerPositions[i].lng),
        map: map
      };

      var marker = new naver.maps.Marker(markerOptions);
      markers.push(marker);



         // Add click event to zoom for each marker
         naver.maps.Event.addListener(marker, 'click', () => {
          console.log("🤦‍♂️🤦‍♂️🤦‍♂️","zz")
          //this.map.setCenter(marker.getPosition());
          this.map.setZoom(17); 
        });


    }





    // Calculate the bounds to fit all markers
    var bounds = new naver.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }

    // Fit the map to the bounds of all markers
    map.fitBounds(bounds);

  }

  




}


/*
    ! testing code to add marker

      var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5665, 126.9780),
      map: this.map,
      icon: {
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58),
        },
      });


*/