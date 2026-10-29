declare global {
  interface Window {
    initMap: () => void;
  }

  namespace google {
    namespace maps {
      function importLibrary(name: string): Promise<any>;
      class Map {
        constructor(mapDiv: HTMLElement, opts?: any);
      }
      namespace marker {
        class AdvancedMarkerElement {
          constructor(opts?: any);
          addEventListener(eventName: string, handler: Function): void;
        }
      }
      class InfoWindow {
        constructor(opts?: any);
        setOptions(options: any): void;
        open(map: Map, anchor?: marker.AdvancedMarkerElement): void;
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
