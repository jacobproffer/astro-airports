// Shared airport selection state for the sidebar, detail panel, and map

const EVENT_NAME = "airport:select";

let selected: string | null = null;

export function getSelectedAirport(): string | null {
  return selected;
}

export function selectAirport(code: string | null): void {
  if (code === selected) return;
  selected = code;
  document.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: code }));
}

export function onAirportSelect(callback: (code: string | null) => void) {
  document.addEventListener(EVENT_NAME, (event) =>
    callback((event as CustomEvent<string | null>).detail),
  );
}

// Any element with data-airport-select picks that airport; an empty value
// clears the selection. Picking the selected airport again also clears it.
document.addEventListener("click", (event) => {
  const trigger =
    event.target instanceof Element &&
    event.target.closest<HTMLElement>("[data-airport-select]");
  if (!trigger) return;
  const code = trigger.dataset.airportSelect || null;
  selectAirport(code === selected ? null : code);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") selectAirport(null);
});
