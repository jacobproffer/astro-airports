declare global {
  interface Window {
    initMap: () => void;
  }

  namespace google {
    namespace maps {
      class Map {
        constructor(mapDiv: HTMLElement, opts?: any);
      }
      class Marker {
        constructor(opts?: any);
        setOptions(options: any): void;
        getIcon(): any;
      }
      class InfoWindow {
        constructor(opts?: any);
        setOptions(options: any): void;
        open(map: Map, anchor?: Marker): void;
        close(): void;
      }
      class LatLng {
        constructor(lat: number, lng: number);
      }
      class LatLngBounds {
        constructor();
        extend(point: LatLng): void;
      }
      class Polyline {
        constructor(opts: any);
      }
      class Size {
        constructor(width: number, height: number);
      }
      class Point {
        constructor(x: number, y: number);
      }
      namespace event {
        function addListener(
          instance: any,
          eventName: string,
          handler: Function
        ): void;
        function trigger(instance: any, eventName: string): void;
      }
      interface LatLngLiteral {
        lat: number;
        lng: number;
      }
      interface MapTypeStyle {
        stylers?: any[];
        featureType?: string;
        elementType?: string;
      }
    }
  }
}

export {};
